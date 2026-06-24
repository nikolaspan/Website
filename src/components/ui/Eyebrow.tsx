import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  /** Pill style with a pulsing dot (used on dark hero / CTA). */
  pill?: boolean;
};

/** Small uppercase label that introduces a section. */
export function Eyebrow({ children, className, pill }: EyebrowProps) {
  if (pill) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2.5 rounded-full bg-aqua/15 px-3.5 py-1.5",
          "text-[10px] font-semibold uppercase tracking-[0.18em] text-aqua",
          className,
        )}
      >
        <span className="anim-pulse h-1.5 w-1.5 rounded-full bg-aqua" />
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua",
        "before:h-px before:w-[18px] before:bg-aqua before:content-['']",
        className,
      )}
    >
      {children}
    </span>
  );
}
