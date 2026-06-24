import { cn } from "@/lib/cn";

/** Layered drifting wave lines used as ambient hero decoration. */
export function AmbientWaves({ className }: { className?: string }) {
  return (
    <svg
      className={cn("anim-wavedrift", className)}
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
      <path
        d="M0 300 Q280 260 560 280 T1120 280 T1440 270"
        stroke="#26BDD8"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

/** A tiny inline wave accent (used on cards). */
export function WaveTick({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="14"
      viewBox="0 0 48 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7 Q7 1 13 7 T25 7 T37 7 T47 7"
        stroke="#26BDD8"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
