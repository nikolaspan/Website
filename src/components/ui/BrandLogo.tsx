import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  /** Size in px (applied to width & height). */
  size?: number;
};

/**
 * The genuine SAIL-E logo mark, extracted from the brand bundle.
 * Served from /brand/logo.webp (images are unoptimized for static export,
 * so a plain <img> keeps the build server-free and dependency-light).
 */
export function BrandLogo({ className, size = 30 }: BrandLogoProps) {
  return (
    // Intentional plain <img>: images are unoptimized for static export, so
    // next/image would add no benefit here and only complicates a simple logo.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo.webp"
      alt="SAIL-E"
      width={size}
      height={size}
      loading="eager"
      decoding="async"
      className={cn("block object-contain", className)}
    />
  );
}
