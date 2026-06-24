import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { StatusPill } from "@/components/ui/StatusPill";
import { platformTiles, platformRequests } from "@/data/content";

export function Platform() {
  return (
    <section
      id="platform"
      className="scroll-mt-24 bg-grey-50 py-32 text-sea-950"
    >
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <Eyebrow className="text-aqua-600">The Platform</Eyebrow>
            <h2 className="mb-[18px] mt-[18px] max-w-md text-balance font-display text-[clamp(1.9rem,3.4vw,3rem)] font-light leading-[1.08] tracking-[-0.015em]">
              Built for{" "}
              <span className="font-extralight italic text-aqua">
                hospitality and travel.
              </span>
            </h2>
            <p className="mb-7 max-w-md text-base leading-relaxed text-grey-500">
              Hotels, resorts, DMCs, travel agents, concierges, boat partners,
              marinas, and destinations, SAIL-E keeps every sea journey simple,
              structured, and reliable, year round.
            </p>
            <Button href="#contact" variant="ghostLight">
              See the platform →
            </Button>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {platformTiles.map((tile) => (
              <div
                key={tile.title}
                className="group relative rounded-[22px] border border-grey-200 bg-white p-7 transition-all duration-[340ms] ease-[cubic-bezier(0.37,0,0.16,1)] hover:-translate-y-1 hover:border-aqua hover:shadow-[0_6px_18px_rgba(1,24,30,0.08)]"
              >
                <div className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-xl bg-aqua/10 text-aqua transition-all duration-[340ms] group-hover:-rotate-6 group-hover:bg-aqua group-hover:text-white">
                  <Icon name={tile.icon} />
                </div>
                <h3 className="mb-2 text-base font-semibold tracking-[-0.005em]">
                  {tile.title}
                </h3>
                <p className="text-sm leading-relaxed text-grey-500">
                  {tile.body}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>

        <Reveal>
          <div className="mx-auto mt-14 max-w-3xl rounded-[20px] border border-grey-200 bg-white p-[22px] shadow-[0_18px_40px_rgba(1,24,30,0.12)]">
            <div className="mb-3.5 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-2.5 w-2.5 rounded-full bg-grey-200" />
              ))}
            </div>
            <p className="mb-3.5 font-display text-[22px] font-light">
              Live requests · Aegean region
            </p>
            <ul>
              {platformRequests.map((req) => (
                <li
                  key={req.route}
                  className="flex items-center justify-between gap-4 border-t border-grey-100 py-3 text-[13px] tracking-[0.03em] first:border-t-0"
                >
                  <span className="text-sea-950">
                    {req.route}
                    {req.meta ? ` · ${req.meta}` : ""}
                  </span>
                  <StatusPill status={req.status} tone="light" />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
