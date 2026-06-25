import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { AmbientWaves } from "@/components/ui/Waves";
import { heroJourneys } from "@/data/content";
import { site } from "@/data/site";
import { StatusPill } from "@/components/ui/StatusPill";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-sea-950 pb-24 pt-32 text-coastal"
    >
      {/* Ambient glows */}
      <div
        className="anim-breathe pointer-events-none absolute -right-60 -top-32 h-[720px] w-[720px]"
        style={{
          background:
            "radial-gradient(circle, rgba(38,189,216,0.22) 0%, transparent 65%)",
        }}
      />
      <div
        className="anim-breathe pointer-events-none absolute -bottom-52 -left-56 h-[560px] w-[560px] [animation-delay:-4s]"
        style={{
          background:
            "radial-gradient(circle, rgba(38,189,216,0.14) 0%, transparent 65%)",
        }}
      />
      <AmbientWaves className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-50" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow pill>The Platform · B2B Sea Mobility</Eyebrow>
            </Reveal>

            <AnimatedHeadline
              as="h1"
              className="mb-7 mt-5 text-[clamp(3rem,7vw,6.5rem)] text-coastal"
              words={[
                { text: "Sea" },
                { text: "mobility,", className: "text-grad" },
                {
                  text: "complicated.",
                  wrapClassName: "word-strike",
                  className: "text-coastal/40",
                },
                {
                  text: "simplified.",
                  className: "italic font-extralight text-aqua",
                },
              ]}
            />

            <Reveal delay={120}>
              <p className="mb-9 max-w-xl text-[clamp(1rem,1.25vw,1.2rem)] leading-relaxed tracking-[0.015em] text-coastal/80">
                SAIL-E helps hotels, DMCs, boat partners, and destinations book
                and manage trusted sea mobility with clarity, speed, and care.
                One platform for every sea journey.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mb-8 flex flex-wrap gap-3.5">
                <Button href="#platform">Explore SAIL-E →</Button>
                <Button href={site.partnerHref} variant="ghostDark">
                  Partner with us
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <HeroMock />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function HeroMock() {
  return (
    <div className="anim-floaty relative rounded-[22px] border border-aqua/20 bg-coastal/5 p-[22px] shadow-[0_30px_80px_rgba(1,24,30,0.5)] backdrop-blur-md">
      <div className="mb-4 flex items-baseline justify-between">
        <span className="font-display text-[22px] font-light text-coastal">
          Today · 4 journeys
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-aqua">
          <span className="anim-pulse h-1.5 w-1.5 rounded-full bg-aqua" />
          Live
        </span>
      </div>
      <ul>
        {heroJourneys.map((j) => (
          <li
            key={j.route}
            className="flex items-center justify-between gap-4 border-t border-coastal/10 py-3.5 text-[13px] tracking-[0.03em] text-coastal/80 first:border-t-0"
          >
            <span>{j.route}</span>
            <StatusPill status={j.status} tone="dark" />
          </li>
        ))}
      </ul>
    </div>
  );
}
