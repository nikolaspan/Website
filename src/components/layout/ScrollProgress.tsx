"use client";

import { useEffect, useState } from "react";

/** Thin top progress bar reflecting page scroll. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[100] h-0.5 origin-left bg-gradient-to-r from-aqua to-coastal shadow-[0_0_12px_#26BDD8]"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
