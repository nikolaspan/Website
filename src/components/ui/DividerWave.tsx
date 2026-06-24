"use client";

import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/cn";

/** A single wave line that draws itself on when scrolled into view. */
export function DividerWave({ className }: { className?: string }) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("divider-wave", inView && "in", className)}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-[60px] w-full"
      >
        <path
          d="M0 30 Q240 5 480 30 T960 30 T1440 30"
          stroke="#26BDD8"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
