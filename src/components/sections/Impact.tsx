import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { Icon } from "@/components/ui/Icon";
import { impactCards } from "@/data/content";

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 bg-coastal py-32 text-sea-950">
      <Container>
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-10">
            <div>
              <Eyebrow className="text-aqua-600">The Impact</Eyebrow>
              <AnimatedHeadline
                className="mt-4 max-w-3xl text-[clamp(2rem,4vw,3.6rem)]"
                words={[
                  { text: "Beyond" },
                  { text: "bookings." },
                  {
                    text: "Toward",
                    className: "italic font-extralight text-aqua",
                  },
                  { text: "better" },
                  { text: "coasts." },
                ]}
              />
            </div>
            <p className="max-w-md text-base leading-relaxed text-grey-500">
              SAIL-E cares about the places we connect, the people, the sea, and
              the communities that make coastal travel worth it.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-5 md:grid-cols-3">
          {impactCards.map((card) => (
            <article
              key={card.letter}
              className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[22px] border border-grey-200 bg-white p-8 transition-all duration-[420ms] ease-[cubic-bezier(0.37,0,0.16,1)] hover:-translate-y-1.5 hover:border-aqua/40 hover:shadow-[0_24px_48px_rgba(1,24,30,0.1)]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-2.5 -top-10 select-none font-display text-[360px] font-extralight leading-none tracking-[-0.05em] text-aqua/15 transition-all duration-[600ms] ease-[cubic-bezier(0.37,0,0.16,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-aqua/25"
              >
                {card.letter}
              </span>

              <div className="relative z-10 mb-[18px] flex h-11 w-11 items-center justify-center text-aqua transition-transform duration-500 ease-[cubic-bezier(0.37,0,0.16,1)] group-hover:-rotate-6 group-hover:scale-110">
                <Icon name={card.icon} size={28} />
              </div>
              <p className="relative z-10 mb-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-aqua-600">
                {card.tag}
              </p>
              <h3 className="relative z-10 mb-3 font-display text-2xl font-light tracking-[-0.01em]">
                {card.title}
              </h3>
              <p className="relative z-10 text-sm leading-relaxed text-grey-500">
                {card.body}
              </p>
            </article>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
