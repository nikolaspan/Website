"use client";

import { useState } from "react";
import { RevealGroup } from "@/components/ui/Reveal";
import { pressItems, type PressItem } from "@/data/press";

/** Article thumbnail with a branded fallback when the image is missing. */
function PressImage({ item }: { item: PressItem }) {
  const [failed, setFailed] = useState(false);

  if (failed || !item.image) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#052630_0%,#0A3743_100%)]">
        <span className="px-4 text-center font-display text-lg font-light uppercase tracking-[0.18em] text-coastal/70">
          {item.source}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized images
    <img
      src={item.image}
      alt={`${item.source} — ${item.title}`}
      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.05]"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export function PressGrid() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
      {pressItems.map((item) => (
        <article
          key={item.title}
          className="group overflow-hidden rounded-[20px] border border-coastal/12 bg-coastal/[0.03] transition-all duration-500 ease-[cubic-bezier(0.37,0,0.16,1)] hover:-translate-y-1.5 hover:border-aqua/40 hover:bg-coastal/[0.06]"
        >
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-sea-900">
              <PressImage item={item} />
              <span className="absolute left-3.5 top-3.5 rounded-full border border-aqua/30 bg-sea-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-aqua backdrop-blur-sm">
                {item.sourceType}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua/85">
                <span>{item.source}</span>
                {item.date && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-aqua/50" />
                    <span className="text-coastal/45">{item.date}</span>
                  </>
                )}
              </div>

              <h3 className="mt-2.5 font-display text-[1.35rem] font-light leading-snug tracking-[-0.01em] text-coastal transition-colors group-hover:text-aqua">
                {item.title}
              </h3>

              {item.excerpt && (
                <p className="mt-2.5 text-sm leading-relaxed text-coastal/60">
                  {item.excerpt}
                </p>
              )}

              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-medium text-aqua">
                Read article
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </a>
        </article>
      ))}
    </RevealGroup>
  );
}
