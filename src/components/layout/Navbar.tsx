"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-[380ms] ease-[cubic-bezier(0.2,0.6,0.2,1)]",
        scrolled &&
          "border-b border-aqua/15 bg-sea-950/70 backdrop-blur-lg backdrop-saturate-150",
      )}
    >
      <Container>
        <nav className="flex h-[72px] items-center gap-8">
          <a
            href="/#top"
            className="flex items-center gap-2.5 text-coastal"
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
                      className="mx-[0.12em] inline-block h-[1.5px] w-[0.7em] rounded-full bg-current align-middle"
                    />
                  )}
                </span>
              ))}
            </span>
          </a>

          <ul className="hidden flex-1 items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] font-medium text-coastal/70 transition-colors hover:text-aqua"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto md:ml-0">
            <Button href={site.partnerHref} size="sm">
              Partner with us
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
