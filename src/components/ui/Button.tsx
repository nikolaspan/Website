import { cn } from "@/lib/cn";
import Link from "next/link";

type ButtonVariant = "primary" | "ghostDark" | "ghostLight";
type ButtonSize = "md" | "sm";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaCurrent?: React.AriaAttributes["aria-current"];
};

const base =
  "inline-flex items-center gap-2 rounded-full font-medium tracking-[0.03em] whitespace-nowrap " +
  "transition-all duration-300 ease-[cubic-bezier(0.2,0.6,0.2,1)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const sizes: Record<ButtonSize, string> = {
  md: "px-[22px] py-3 text-sm",
  sm: "px-4 py-[9px] text-[13px]",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-aqua text-white shadow-[0_12px_32px_rgba(38,189,216,0.28)] " +
    "hover:bg-aqua-500 hover:-translate-y-px hover:shadow-[0_20px_48px_rgba(38,189,216,0.42)] " +
    "active:scale-[0.98]",
  ghostDark:
    "border border-coastal/30 text-coastal hover:border-aqua hover:bg-coastal/5 hover:text-aqua",
  ghostLight:
    "border border-sea-950 text-sea-950 hover:bg-sea-950/5",
};

/** Pill link styled as a button. Links only (no JS handlers) for static export. */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ariaCurrent,
}: ButtonProps) {
  const external = href.startsWith("http");
  const classes = cn(base, sizes[size], variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        aria-current={ariaCurrent}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-current={ariaCurrent}>
      {children}
    </Link>
  );
}
