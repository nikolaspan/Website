import { cn } from "@/lib/cn";

type StatusPillProps = {
  status: "Confirmed" | "Pending";
  /** "dark" for use on the deep-sea hero card, "light" for white surfaces. */
  tone?: "dark" | "light";
};

const styles = {
  dark: {
    Confirmed: "bg-aqua/15 text-aqua",
    Pending: "bg-[#E3A33B]/15 text-[#E3A33B]",
  },
  light: {
    Confirmed: "bg-aqua-50 text-aqua-700",
    Pending: "bg-[#FCEFD9] text-[#9A6B1F]",
  },
} as const;

/** Booking status chip. */
export function StatusPill({ status, tone = "dark" }: StatusPillProps) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
        styles[tone][status],
      )}
    >
      {status}
    </span>
  );
}
