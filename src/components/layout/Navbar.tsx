"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";

/** Tracks both page routes and the home-page section nearest the reading line. */
function useIsActive() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (normalizePath(pathname) !== "/") return;

    const sectionIds = navLinks
      .map((link) => link.href.split("#")[1])
      .filter((id): id is string => Boolean(id));
    let frame = 0;

    const updateActiveSection = () => {
      const readingLine =
        window.scrollY + Math.min(window.innerHeight * 0.38, 360);
      let nextSection = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= readingLine) nextSection = id;
      }

      setActiveSection((current) =>
        current === nextSection ? current : nextSection,
      );
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [pathname]);

  return (href: string) => {
    const [path, hash] = href.split("#");
    if (normalizePath(pathname) !== normalizePath(path || "/")) return false;
    return hash ? activeSection === hash : true;
  };
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = useIsActive();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  // Close the mobile menu when the route changes — a render-time reset, the
  // React-recommended alternative to calling setState inside an effect.
  const [menuPath, setMenuPath] = useState(pathname);
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape and when resizing up to the full desktop navigation.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key === "Tab") {
        const menuItems = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        const focusable = [
          menuButtonRef.current,
          ...(menuItems ? Array.from(menuItems) : []),
        ].filter((item): item is HTMLElement => Boolean(item));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // Keep the page beneath the mobile navigation still while it is open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const elevated = scrolled || open;
  const partnerActive = isActive(site.partnerHref);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 py-3">
      {/* The page backdrop also provides a generous outside-click target. */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "pointer-events-none fixed inset-0 bg-sea-950/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          open && "pointer-events-auto opacity-100",
        )}
      />

      <Container className="relative z-10">
        <nav
          aria-label="Primary navigation"
          className={cn(
            "pointer-events-auto grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2 rounded-[20px] border px-3",
            "transition-[height,background-color,border-color,box-shadow,backdrop-filter] duration-[380ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] sm:px-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-5",
            elevated
              ? "h-[60px] border-aqua/15 bg-sea-950/[0.88] shadow-[0_18px_55px_rgba(1,24,30,0.38)] backdrop-blur-xl backdrop-saturate-150"
              : "border-coastal/[0.07] bg-sea-950/[0.24] backdrop-blur-sm",
          )}
        >
          <Link
            href="/#top"
            onClick={() => setOpen(false)}
            className="-ml-1 flex min-h-11 w-fit items-center gap-2.5 rounded-xl px-1 text-coastal transition-colors hover:text-aqua focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-sea-950"
            aria-label={`${site.name} home`}
          >
            <BrandLogo size={32} className="rounded-lg" />
            <span className="inline-flex items-center font-display text-[13px] font-light uppercase tracking-[0.22em] sm:text-sm">
              {site.name.split("-").map((part, i, arr) => (
                <span key={i} className="inline-flex items-center">
                  {part}
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-[0.1em] inline-block h-[1.5px] w-[0.4em] rounded-full bg-current align-middle"
                    />
                  )}
                </span>
              ))}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center rounded-full border border-coastal/[0.08] bg-coastal/[0.035] p-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const sectionLink = link.href.includes("#");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={
                      active ? (sectionLink ? "location" : "page") : undefined
                    }
                    className={cn(
                      "flex min-h-10 items-center rounded-full px-3 text-[12px] font-medium tracking-[0.02em] transition-all duration-300 xl:px-3.5 xl:text-[13px]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-1 focus-visible:ring-offset-sea-950",
                      active
                        ? "bg-aqua/[0.13] text-aqua shadow-[inset_0_0_0_1px_rgba(38,189,216,0.16)]"
                        : "text-coastal/68 hover:bg-coastal/[0.06] hover:text-coastal",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center justify-self-end">
            <div className="hidden lg:block">
              <Button
                href={site.partnerHref}
                size="sm"
                ariaCurrent={partnerActive ? "page" : undefined}
                className={cn(
                  "min-h-11 px-4 xl:px-5",
                  partnerActive &&
                    "ring-1 ring-coastal/50 ring-offset-2 ring-offset-sea-950",
                )}
              >
                <span className="hidden xl:inline">Partner with us</span>
                <span className="xl:hidden">Partner</span>
                <span aria-hidden="true">↗</span>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-xl px-3 text-coastal transition-colors hover:bg-coastal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua lg:hidden",
                open && "bg-aqua/10 text-aqua",
              )}
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span
                  className={cn(
                    "absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.2,0.6,0.2,1)]",
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-200",
                    open ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.2,0.6,0.2,1)]",
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
                  )}
                />
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] sm:inline">
                {open ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        <nav
          ref={mobileMenuRef}
          id="mobile-menu"
          aria-label="Mobile navigation"
          aria-hidden={!open}
          inert={!open}
          className={cn(
            "pointer-events-auto grid transition-[grid-template-rows,opacity,transform] duration-300 ease-[cubic-bezier(0.2,0.6,0.2,1)] lg:hidden",
            open
              ? "grid-rows-[1fr] translate-y-0 opacity-100"
              : "pointer-events-none grid-rows-[0fr] -translate-y-2 opacity-0",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="mt-2 max-h-[calc(100dvh-6.5rem)] overflow-y-auto rounded-[22px] border border-aqua/15 bg-[linear-gradient(145deg,rgba(5,38,48,0.98)_0%,rgba(1,24,30,0.98)_72%)] p-2 shadow-[0_26px_80px_rgba(1,24,30,0.62)] backdrop-blur-xl">
              <div className="flex items-center justify-between px-3 pb-2 pt-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-coastal/40">
                  Navigate
                </span>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-aqua/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-aqua shadow-[0_0_10px_#26BDD8]" />
                  SAIL-E
                </span>
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);
                  const sectionLink = link.href.includes("#");
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={
                          active
                            ? sectionLink
                              ? "location"
                              : "page"
                            : undefined
                        }
                        className={cn(
                          "group flex min-h-[54px] items-center gap-3 rounded-2xl border border-transparent px-3.5 text-[15px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua",
                          active
                            ? "border-aqua/20 bg-aqua/10 text-aqua"
                            : "text-coastal/80 hover:border-coastal/[0.07] hover:bg-coastal/[0.05] hover:text-coastal",
                        )}
                      >
                        <span className="w-6 text-[10px] font-semibold tracking-[0.16em] text-coastal/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1">{link.label}</span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-full border text-xs transition-all duration-300",
                            active
                              ? "border-aqua/25 bg-aqua/10 text-aqua"
                              : "border-coastal/10 text-coastal/35 group-hover:border-aqua/25 group-hover:text-aqua",
                          )}
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-2 border-t border-coastal/[0.08] p-2 pt-4">
                <Button
                  href={site.partnerHref}
                  ariaCurrent={partnerActive ? "page" : undefined}
                  className="min-h-12 w-full justify-center"
                >
                  Partner with us <span aria-hidden="true">↗</span>
                </Button>
                <p className="px-3 pb-1 pt-3 text-center text-[10px] uppercase tracking-[0.14em] text-coastal/35">
                  On-demand sea transportation
                </p>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
