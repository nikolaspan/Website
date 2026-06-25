import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { HospitalityMap } from "@/components/sections/HospitalityMap";
import { partnerGroups, partnerStats } from "@/data/content";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Partners() {
  return (
    <section
      id="partners"
      className="relative scroll-mt-24 overflow-hidden bg-sea-950 py-32 text-coastal"
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
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-10">
            <div>
              <Eyebrow className="text-aqua">The Partners</Eyebrow>
              <h2 className="mt-4 max-w-3xl text-balance font-display text-[clamp(2rem,4vw,3.6rem)] font-light leading-[1.05] tracking-[-0.02em] text-coastal">
                Backed by{" "}
                <span className="font-extralight italic text-aqua">
                  leading hotel groups, DMCs, and marinas.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-coastal/60">
              Luxury resort groups, DMCs, and marinas, the partners shaping how
              SAIL-E moves guests across the Mediterranean.
            </p>
          </div>
        </Reveal>

        {partnerGroups.map((group, groupIndex) => (
          <div key={group.category} className="mt-12 first:mt-10">
            <Reveal>
              <div className="mb-5 flex items-baseline gap-4 border-b border-aqua/20 pb-4">
                <span className="font-display text-[22px] font-light text-coastal">
                  {group.category}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua">
                  {String(group.partners.length).padStart(2, "0")} partners
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-aqua/40 to-transparent" />
              </div>
            </Reveal>

            {group.category === "Hospitality" ? (
              <HospitalityMap partners={group.partners} />
            ) : (
              <RevealGroup className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                {group.partners.map((partner, cardIndex) => {
                  const alt = (groupIndex + cardIndex) % 2 === 1;
                  return (
                    <div
                      key={partner.name}
                      className={cn(
                        "partner-card flex min-h-[150px] flex-col justify-between rounded-[18px] border bg-white px-6 py-7",
                        "transition-[transform,border-color,box-shadow] duration-[520ms] ease-[cubic-bezier(0.37,0,0.16,1)]",
                        "hover:-translate-y-1.5 hover:border-transparent",
                        alt
                          ? "alt border-coastal/60 hover:shadow-[0_22px_48px_rgba(1,24,30,0.55)]"
                          : "border-coastal/60 hover:shadow-[0_22px_48px_rgba(38,189,216,0.32)]",
                      )}
                    >
                      <span className="p-corner absolute right-3.5 top-3.5 h-1.5 w-1.5 rounded-full bg-aqua opacity-50 shadow-[0_0_8px_#26BDD8]" />
                      <div>
                        <PartnerLogo
                          name={partner.name}
                          logo={partner.logo}
                          size={46}
                        />
                        <div className="p-name mt-4 font-display text-lg font-extralight uppercase tracking-[0.18em] text-sea-950">
                          {partner.name}
                        </div>
                      </div>
                      <div className="p-role mt-3 text-[11px] font-medium tracking-[0.06em] text-sea-950/60">
                        {partner.role}
                      </div>
                    </div>
                  );
                })}
              </RevealGroup>
            )}
          </div>
        ))}

        <Reveal>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-aqua/20 pt-7">
            <div className="flex flex-wrap gap-x-14 gap-y-6">
              {partnerStats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3">
                  <span className="font-display text-[44px] font-extralight leading-none tracking-[-0.02em] text-aqua">
                    {stat.value}
                  </span>
                  <span className="max-w-[160px] text-[11px] font-semibold uppercase tracking-[0.18em] text-coastal/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <Button href={site.partnerHref} variant="ghostDark">
              Become a partner →
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
