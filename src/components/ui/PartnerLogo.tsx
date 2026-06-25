"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/** First letters of up to two words (fallback when no logo image is present). */
function initials(name: string): string {
  const words = name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

type PartnerLogoProps = {
  name: string;
  /** Path under /public, e.g. "/brand/partners/amanzoe.svg". */
  logo?: string;
  /** Square chip size in px. */
  size?: number;
  className?: string;
};

/**
 * Partner logo shown inside a white chip so any logo (light or dark) stays
 * legible on both light cards and the dark hospitality list. If the image is
 * missing or fails to load, it falls back to the brand-styled initials.
 */
export function PartnerLogo({
  name,
  logo,
  size = 44,
  className,
}: PartnerLogoProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(logo) && !failed;

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-sea-950/10",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized images
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-[80%] w-[86%] object-contain"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="font-display text-sm font-medium tracking-wide text-sea-950">
          {initials(name)}
        </span>
      )}
    </span>
  );
}
