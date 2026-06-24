import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { GlowCard } from "@/components/ui/GlowCard";
import { WaveTick } from "@/components/ui/Waves";
import { DividerWave } from "@/components/ui/DividerWave";
import { services } from "@/data/content";

export function WhatWeDo() {
  return (
    <section id="what" className="scroll-mt-24 bg-sea-950 py-32 text-coastal">
      <DividerWave className="mb-20" />
      <Container>
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-10">
            <div>
              <Eyebrow className="text-aqua">What SAIL-E does</Eyebrow>
              <AnimatedHeadline
                className="mt-4 max-w-3xl text-[clamp(2rem,4vw,3.6rem)] text-coastal"
                words={[
                  { text: "One" },
                  { text: "platform." },
                  {
                    text: "Every",
                    className: "italic font-extralight text-aqua",
                  },
                  { text: "sea" },
                  { text: "journey." },
                ]}
              />
            </div>
            <p className="max-w-md text-base leading-relaxed text-coastal/60">
              A modern, friendly layer between hospitality teams, coastal
              destinations, and trusted boat partners, built for clarity and
              care.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <GlowCard
              key={service.num}
              className="group rounded-[22px] border border-grey-200 bg-white p-9 text-sea-950 transition-all duration-[380ms] ease-[cubic-bezier(0.37,0,0.16,1)] hover:-translate-y-2 hover:border-aqua/40 hover:shadow-[0_24px_48px_rgba(1,24,30,0.12)]"
            >
              <WaveTick className="absolute right-8 top-11 opacity-80 transition-transform duration-[600ms] ease-[cubic-bezier(0.37,0,0.16,1)] group-hover:-translate-x-2 group-hover:scale-[1.4]" />
              <div className="relative z-10 mb-12 font-display text-[44px] font-extralight leading-none tracking-[-0.02em] text-aqua">
                {service.num}
              </div>
              <h3 className="relative z-10 mb-2.5 text-[22px] font-semibold tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="relative z-10 text-[15px] leading-relaxed text-grey-500">
                {service.body}
              </p>
            </GlowCard>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
