"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

/** Card whose aqua glow follows the cursor (sets --mx / --my). */
export function GlowCard({ children, className }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <div ref={ref} onMouseMove={handleMove} className={cn("glow-card", className)}>
      {children}
    </div>
  );
}
