"use client";

import { Fragment, type ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/cn";

export type HeadlineWord = {
  text: string;
  /** Text styling (color, gradient, italics). Applied to the inner span that
   *  actually holds the glyphs, so `background-clip: text` renders correctly. */
  className?: string;
  /** Structural styling for the outer word box (e.g. the strike-through). */
  wrapClassName?: string;
};

type AnimatedHeadlineProps = {
  /** Per-word config. Optional — pass a plain string as `children` instead to
   *  animate each word with default styling. */
  words?: HeadlineWord[];
  children?: ReactNode;
  className?: string;
  as?: "h1" | "h2";
};

/** Word-by-word rising headline. Words are visible by default and the rise
 *  only replays once the heading scrolls into view. Accepts either a `words`
 *  array or a plain string child (which is split into words automatically). */
export function AnimatedHeadline({
  words,
  children,
  className,
  as: Tag = "h2",
}: AnimatedHeadlineProps) {
  const { ref, inView } = useReveal<HTMLHeadingElement>();

  // Prefer explicit `words`; otherwise split a string child into words.
  const items: HeadlineWord[] =
    words ??
    (typeof children === "string"
      ? children.split(/\s+/).filter(Boolean).map((text) => ({ text }))
      : []);

  return (
    <Tag
      ref={ref}
      className={cn(
        "headline font-display font-light leading-[1.05] tracking-[-0.025em] text-balance",
        inView && "in",
        className,
      )}
    >
      {items.length > 0
        ? items.map((word, i) => (
            <Fragment key={i}>
              <span className={cn("word", word.wrapClassName)}>
                <span className={word.className}>{word.text}</span>
              </span>
              {i < items.length - 1 ? " " : null}
            </Fragment>
          ))
        : children}
    </Tag>
  );
}
