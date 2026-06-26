import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { PressGrid } from "@/components/sections/PressGrid";
import Ferrofluid from "@/components/ui/Ferrofluid";
import { blueLifeParos } from "@/data/press";

export const metadata: Metadata = {
  title: "Press · SAIL-E in the media",
  description:
    "What the press say about SAIL-E — coverage of the B2B sea-mobility platform from papers and sites across Greece and beyond.",
};

// Brand palette for the ferrofluid hero (aqua → light aqua → coastal white).
const PRESS_COLORS = ["#1DA0B8", "#26BDD8", "#8FE1EC", "#FAFFF9"];

export default function PressPage() {
  return (
    <>
      {/* ---------- Hero with ferrofluid ---------- */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-sea-950 pb-16 pt-36 text-coastal">
        {/* WebGL ferrofluid background */}
        <div className="absolute inset-0 z-0">
          <Ferrofluid
            colors={PRESS_COLORS}
            flowDirection="down"
            speed={0.45}
            scale={1.6}
            glow={2.2}
            shimmer={1.6}
            opacity={0.95}
            mouseInteraction
          />
        </div>

        {/* Legibility gradient over the fluid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(1,24,30,0.35)_0%,rgba(1,24,30,0.15)_45%,rgba(1,24,30,0.78)_100%)]"
        />

        {/* Content (pointer-events-none lets the fluid track the cursor; links opt back in) */}
        <Container className="pointer-events-none relative z-10">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow pill>Press · SAIL-E in the media</Eyebrow>
              <h1 className="mb-5 mt-5 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-coastal">
                What the press say{" "}
                <span className="font-extralight italic text-aqua">
                  about SAIL-E.
                </span>
              </h1>
              <p className="max-w-xl text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-coastal/80">
                Coverage of how SAIL-E is bringing clarity, speed, and care to
                sea mobility — from papers and sites across Greece and beyond.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Press grid ---------- */}
      <section
        id="press"
        className="relative scroll-mt-24 overflow-hidden bg-sea-950 py-28 text-coastal"
      >
        {/* Faint grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#26BDD8 1px, transparent 1px), linear-gradient(90deg, #26BDD8 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <Container className="relative z-10">
          {/* Latest — teaser to the Blue Life Paros ESG feature below */}
          <Reveal>
            <a
              href="#blue-life-paros"
              className="group mb-12 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-aqua/20 bg-aqua/[0.06] px-5 py-4 transition-all duration-300 hover:border-aqua/45 hover:bg-aqua/[0.1] sm:px-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-aqua/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-aqua">
                <span className="anim-pulse h-1.5 w-1.5 rounded-full bg-aqua" />
                Latest
              </span>
              <span className="flex-1 text-sm leading-relaxed text-coastal/85">
                <strong className="font-medium text-coastal">
                  Blue Life Paros
                </strong>{" "}
                — three days of environmental action on Paros with Avant Mar
                &amp; Grivalia Hospitality.
              </span>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-aqua">
                Learn more
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
              <div>
                <Eyebrow className="text-aqua">In the press</Eyebrow>
                <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.08] tracking-[-0.02em] text-coastal">
                  Headlines &amp;{" "}
                  <span className="font-extralight italic text-aqua">
                    coverage.
                  </span>
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-coastal/60">
                Selected articles and features. Tap any card to read the full
                story at the source.
              </p>
            </div>
          </Reveal>

          <PressGrid />
        </Container>
      </section>

      {/* ---------- Blue Life Paros feature ---------- */}
      <section
        id="blue-life-paros"
        className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(160deg,#01181E_0%,#052630_60%,#0A3743_100%)] py-28 text-coastal"
      >
        <div
          className="anim-breathe pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px]"
          style={{
            background:
              "radial-gradient(circle, rgba(38,189,216,0.16) 0%, transparent 65%)",
          }}
        />

        <Container className="relative z-10">
          <Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              {/* Write-up */}
              <div>
                <Eyebrow className="text-aqua">{blueLifeParos.eyebrow}</Eyebrow>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.08] tracking-[-0.02em] text-coastal">
                  {blueLifeParos.title}
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-coastal/70">
                  {blueLifeParos.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className="mt-7">
                  <a
                    href={blueLifeParos.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-aqua underline-offset-4 transition-colors hover:underline"
                  >
                    Read on {blueLifeParos.source} →
                  </a>
                </div>
              </div>

              {/* Creative photo collage — big feature tile + a wide shot and
                  two squares that fill a 4×2 grid with no gaps. Photos use CSS
                  background-image, so a missing file reveals the gradient. */}
              <div className="grid grid-cols-2 gap-3 sm:h-[460px] sm:grid-cols-4 sm:grid-rows-2">
                {blueLifeParos.photos.slice(0, 4).map((photo, i) => {
                  const shape =
                    i === 0
                      ? "col-span-2 aspect-[4/3] sm:row-span-2 sm:aspect-auto"
                      : i === 1
                        ? "col-span-2 aspect-[16/10] sm:aspect-auto"
                        : "aspect-square sm:aspect-auto";
                  return (
                    <figure
                      key={i}
                      className={
                        "group relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#052630_0%,#0A3743_100%)] ring-1 ring-coastal/10 " +
                        shape
                      }
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.07]"
                        style={{ backgroundImage: `url('${photo.src}')` }}
                      />
                      {photo.alt && (
                        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-[linear-gradient(0deg,rgba(1,24,30,0.9)_0%,transparent_100%)] p-3.5 text-[12px] leading-snug text-coastal/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {photo.alt}
                        </figcaption>
                      )}
                    </figure>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
