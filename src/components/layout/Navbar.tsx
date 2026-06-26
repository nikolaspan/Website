"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

/** A link is "active" when it points to the current route (ignores #anchors,
 *  and never highlights the home-section links). */
function useIsActive() {
  const pathname = usePathname();
  const norm = (p: string) => p.replace(/\/+$/, "") || "/";
  return (href: string) => {
    const path = href.split("#")[0];
    if (!path || path === "/") return false;
    return norm(pathname) === norm(path);
  };
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = useIsActive();

  // Close the mobile menu when the route changes — a render-time reset, the
  // React-recommended alternative to calling setState inside an effect.
  const [menuPath, setMenuPath] = useState(pathname);
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape and when resizing up to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-[380ms] ease-[cubic-bezier(0.2,0.6,0.2,1)]",
        (scrolled || open) &&
          "border-b border-aqua/15 bg-sea-950/80 backdrop-blur-lg backdrop-saturate-150",
      )}
    >
      <Container>
        <nav className="flex h-[72px] items-center gap-8">
          <Link
            href="/#top"
            className="flex items-center gap-2.5 text-coastal transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label={`${site.name} home`}
          >
            <BrandLogo size={30} className="rounded-md" />
            <span className="inline-flex items-center font-display text-sm font-extralight uppercase tracking-[0.22em]">
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
          <ul className="hidden flex-1 items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-1 text-[13px] font-medium transition-colors duration-200",
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-aqua",
                      "after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.2,0.6,0.2,1)]",
                      "focus-visible:outline-none focus-visible:text-aqua",
                      active
                        ? "text-aqua after:scale-x-100"
                        : "text-coastal/70 after:scale-x-0 hover:text-aqua hover:after:scale-x-100",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <div className="hidden md:block">
              <Button href={site.partnerHref} size="sm">
                Partner with us
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-coastal transition-colors hover:bg-coastal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua md:hidden"
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
            </button>
          </div>
        </nav>

        {/* Mobile menu panel (height-animated) */}
        <div
          id="mobile-menu"
          className={cn(
            "grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.2,0.6,0.2,1)] md:hidden",
            open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="flex flex-col gap-1 pt-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition-colors",
                        active
                          ? "bg-aqua/10 text-aqua"
                          : "text-coastal/80 hover:bg-coastal/5 hover:text-aqua",
                      )}
                    >
                      {link.label}
                      <span aria-hidden="true" className="text-coastal/30">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pb-6 pt-4">
              <Button
                href={site.partnerHref}
                className="w-full justify-center"
              >
                Partner with us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
