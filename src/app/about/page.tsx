import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { AmbientWaves } from "@/components/ui/Waves";
import { founders } from "@/data/team";

export const metadata: Metadata = {
  title: "About SAIL-E · Meet our founders",
  description:
    "Meet the founders of SAIL-E the team brings together technology, luxury hospitality, and a lifelong love of the sea to reimagine sea mobility.",
};

/** Initials from the first and last word of a name, e.g. "Minas Tsigkos" → "MT". */
function initials(name: string): string {
  const w = name.trim().split(/\s+/).filter(Boolean);
  if (w.length === 0) return "?";
  if (w.length === 1) return w[0].slice(0, 2).toUpperCase();
  return (w[0][0] + w[w.length - 1][0]).toUpperCase();
}

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-sea-950 pb-28 pt-36 text-coastal">
      {/* Ambient glow + waves */}
      <div
        className="anim-breathe pointer-events-none absolute -right-52 -top-24 h-[620px] w-[620px]"
        style={{
          background:
            "radial-gradient(circle, rgba(38,189,216,0.18) 0%, transparent 65%)",
        }}
      />
      <AmbientWaves className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] opacity-40" />

      <Container className="relative z-10">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow pill>About SAIL-E</Eyebrow>
            <h1 className="mb-5 mt-5 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-light leading-[1.04] tracking-[-0.02em] text-coastal">
              Meet our{" "}
              <span className="font-extralight italic text-aqua">founders.</span>
            </h1>
            <p className="max-w-xl text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-coastal/80">
              The team behind SAIL-E — bringing together technology, luxury
              hospitality, and a lifelong love of the sea to reimagine how the
              Mediterranean moves.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((person) => (
            <article
              key={person.name}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-coastal/12 bg-coastal/[0.03] transition-all duration-500 ease-[cubic-bezier(0.37,0,0.16,1)] hover:-translate-y-1.5 hover:border-aqua/40 hover:bg-coastal/[0.06]"
            >
              {/* Portrait — photo when set, otherwise a branded initials avatar */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(150deg,#052630_0%,#0A3743_60%,#114B5A_100%)]">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-display text-[clamp(3rem,8vw,5rem)] font-extralight tracking-[0.05em] text-coastal/25"
                >
                  {initials(person.name)}
                </span>
                {person.photo && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.05]"
                    style={{ backgroundImage: `url('${person.photo}')` }}
                  />
                )}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgba(1,24,30,0.55)_0%,transparent_100%)]" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-light tracking-[-0.01em] text-coastal">
                  {person.name}
                </h2>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua">
                  {person.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-coastal/65">
                  {person.bio}
                </p>
              </div>
            </article>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
