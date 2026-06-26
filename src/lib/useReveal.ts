"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds an `in` state the first time an element scrolls into view.
 * Falls back to visible when IntersectionObserver is unavailable so content
 * is never trapped behind a hidden reveal state.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      // Defer to keep the state update out of the synchronous effect body.
      const id = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      // Content is visible by default, so the `.in` animation must start BEFORE
      // the element scrolls into view — otherwise it shows at full opacity, then
      // snaps to 0 and re-animates (a flicker). A positive bottom margin fires
      // the observer while the element is still just below the fold.
      { threshold: 0, rootMargin: "0px 0px 10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
