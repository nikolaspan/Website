import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AmbientWaves } from "@/components/ui/Waves";
import { privacyPolicySections } from "@/data/privacyPolicy";

export const metadata: Metadata = {
  title: "Data & Cookie Policy · SAIL-E",
  description:
    "Data protection and cookie policy for EzSail Boat Taxi P.C. and the SAIL-E platform.",
};

export default function DataCookiePolicyPage() {
  return (
    <main className="relative overflow-hidden bg-sea-950 pb-28 pt-36 text-coastal">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 -top-48 h-[700px] w-[700px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(38,189,216,0.16) 0%, transparent 66%)",
        }}
      />
      <AmbientWaves className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-20" />

      <Container className="relative z-10">
        <header className="max-w-4xl border-b border-coastal/10 pb-12">
          <Eyebrow pill>Privacy &amp; data</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.75rem)] font-light leading-[1.04] tracking-[-0.025em] text-coastal">
            Πολιτική Προστασίας Προσωπικών Δεδομένων
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-coastal/65 sm:text-lg">
            Data protection and cookie policy for EzSail Boat Taxi P.C. and the
            SAIL-E platform.
          </p>
        </header>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[260px_minmax(0,760px)] lg:gap-16 xl:gap-24">
          <aside className="rounded-2xl border border-coastal/10 bg-coastal/[0.035] p-5 lg:sticky lg:top-28">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua">
              Περιεχόμενα
            </h2>
            <nav aria-label="Policy sections" className="mt-4">
              <ol className="space-y-1">
                {privacyPolicySections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex gap-2.5 rounded-lg px-2 py-1.5 text-xs leading-snug text-coastal/55 transition-colors hover:bg-coastal/[0.05] hover:text-coastal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua/70"
                    >
                      <span className="w-4 shrink-0 text-right text-aqua/60">
                        {section.number}.
                      </span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article lang="el" className="min-w-0">
            {privacyPolicySections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={`scroll-mt-28 ${index > 0 ? "mt-14 border-t border-coastal/10 pt-14" : ""}`}
              >
                <div className="mb-6 flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-aqua/25 bg-aqua/10 text-xs font-semibold text-aqua"
                  >
                    {section.number}
                  </span>
                  <h2 className="font-display text-2xl font-light leading-tight tracking-[-0.015em] text-coastal sm:text-3xl">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-5 pl-0 text-[15px] leading-[1.85] text-coastal/70 sm:pl-12 sm:text-base">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </Container>
    </main>
  );
}
