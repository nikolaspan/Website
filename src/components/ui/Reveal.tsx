"use client";

import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Optional entrance-animation delay in ms. */
  delay?: number;
};

/** Fade + rise a single block into view (resting state is visible). */
export function Reveal({ children, className, delay }: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={cn("reveal", inView && "in", className)}
    >
      {children}
    </div>
  );
}

/** Stagger direct children into view (CSS handles per-child delays). */
export function RevealGroup({ children, className }: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("reveal-stagger", inView && "in", className)}>
      {children}
    </div>
  );
}
