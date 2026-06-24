"use client";

import { useEffect, useRef } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { site } from "@/data/site";

/**
 * Scroll-driven intro splash (logo + wordmark).
 *
 * A fixed, full-screen layer that fades out as you scroll down and fades back
 * in as you scroll up — driven entirely by scroll position. A tall in-flow
 * spacer (#intro-spacer) gives the scroll room for the fade before the real
 * content begins. The layer is `pointer-events: none`, so it can never block
 * scrolling or clicks. With JS off or reduced-motion, the splash and spacer
 * are hidden so the page behaves normally.
 */
export function IntroSplash() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const overlay = overlayRef.current;
      if (!overlay) return;

      const vh = window.innerHeight || 1;
      const hold = vh * 0.2; // stay fully opaque for the first ~20% of a screen
      const duration = vh * 1.4; // fully faded after ~1.4 screens of scroll
      const raw = (window.scrollY - hold) / (duration - hold);
      const t = Math.min(1, Math.max(0, raw));
      const eased = t * t * (3 - 2 * t); // smoothstep

      overlay.style.opacity = String(1 - eased);
      overlay.style.visibility = t >= 1 ? "hidden" : "visible";
      if (innerRef.current) {
        innerRef.current.style.transform = `translateY(${-eased * 56}px) scale(${
          1 - eased * 0.08
        })`;
      }
      if (cueRef.current) {
        cueRef.current.style.opacity = String(Math.max(0, 1 - t * 2.5));
      }
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* With JS off, skip the intro entirely (no splash, no empty spacer). */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<style>#intro-splash,#intro-spacer{display:none!important}</style>`,
        }}
      />

      {/* Scroll room for the fade. */}
      <div id="intro-spacer" aria-hidden="true" className="h-[140vh]" />

      <div
        id="intro-splash"
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[90] flex flex-col items-center justify-center overflow-hidden bg-sea-950"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 1200px 700px at 50% 50%, rgba(38,189,216,0.18), transparent 60%), radial-gradient(circle at 20% 80%, rgba(38,189,216,0.1), transparent 50%)",
          }}
        />

        <svg
          className="absolute inset-x-0 bottom-0 h-[38%] w-full opacity-55"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 180 Q240 120 480 170 T960 170 T1440 150"
            stroke="#26BDD8"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 240 Q300 180 600 220 T1200 220 T1440 200"
            stroke="#26BDD8"
            strokeWidth="1"
            fill="none"
            opacity="0.55"
          />
        </svg>

        <div
          ref={innerRef}
          className="relative z-10 flex flex-col items-center gap-8 will-change-transform"
        >
          <BrandLogo
            size={180}
            className="anim-splash-float h-[clamp(120px,16vw,200px)] w-[clamp(120px,16vw,200px)] rounded-2xl shadow-[0_30px_80px_rgba(38,189,216,0.35)]"
          />
          <h1 className="m-0 font-display text-[clamp(56px,9vw,140px)] font-extralight uppercase leading-none tracking-[0.16em] text-coastal">
            SAIL<span className="text-aqua">-</span>E
          </h1>
          <p className="text-xs uppercase tracking-[0.32em] text-coastal/55">
            {site.tagline.replace(/\.$/, "")}
          </p>
        </div>

        <div
          ref={cueRef}
          className="anim-cue absolute bottom-9 left-1/2 z-10 flex flex-col items-center gap-2.5 text-[10px] uppercase tracking-[0.32em] text-coastal/60"
        >
          <span>Scroll</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
            <rect
              x="0.5"
              y="0.5"
              width="13"
              height="21"
              rx="6.5"
              stroke="#26BDD8"
              strokeOpacity="0.6"
            />
            <line
              x1="7"
              y1="6"
              x2="7"
              y2="12"
              stroke="#26BDD8"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <animate
                attributeName="y2"
                values="6;14;6"
                dur="1.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1.6s"
                repeatCount="indefinite"
              />
            </line>
          </svg>
        </div>
      </div>
    </>
  );
}
