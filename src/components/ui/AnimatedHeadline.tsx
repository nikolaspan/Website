"use client";

import { Fragment } from "react";
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
  words: HeadlineWord[];
  className?: string;
  as?: "h1" | "h2";
};

/** Word-by-word rising headline. Words are visible by default and the rise
 *  only replays once the heading scrolls into view. */
export function AnimatedHeadline({
  words,
  className,
  as: Tag = "h2",
}: AnimatedHeadlineProps) {
  const { ref, inView } = useReveal<HTMLHeadingElement>();

  return (
    <Tag
      ref={ref}
      className={cn(
        "headline font-display font-light leading-[1.05] tracking-[-0.025em] text-balance",
        inView && "in",
        className,
      )}
    >
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className={cn("word", word.wrapClassName)}>
            <span className={word.className}>{word.text}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
