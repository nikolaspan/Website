import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { AmbientWaves } from "@/components/ui/Waves";
import { partnerStats } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Partner with SAIL-E · Contact",
  description:
    "Partner with SAIL-E to bring structure, care, and reliability to sea mobility across Greece and beyond. Tell us about your hotel, DMC, fleet, or destination.",
};

const reasons: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "building",
    title: "One booking flow",
    body: "Give your team and guests a single, reliable place to arrange every sea journey.",
  },
  {
    icon: "users",
    title: "Trusted local operators",
    body: "We connect you with vetted boat partners and marinas across the Mediterranean.",
  },
  {
    icon: "compass",
    title: "Structure & care",
    body: "Clear pricing, real-time updates, and standards your brand can stand behind.",
  },
];

const channels: { label: string; value: string; href: string }[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Website", value: "www.sail-e.com", href: site.url },
  { label: "Social", value: site.social, href: site.url },
  { label: "Based in", value: "Athens, Greece", href: site.url },
];

export default function PartnerPage() {
  return (
    <section className="cta-aurora relative overflow-hidden bg-[linear-gradient(150deg,#01181E_0%,#052630_55%,#0A3743_100%)] pb-28 pt-36 text-coastal">
      {/* Ambient glows + waves */}
      <div
        className="anim-breathe pointer-events-none absolute -right-52 -top-24 h-[620px] w-[620px]"
        style={{
          background:
            "radial-gradient(circle, rgba(38,189,216,0.20) 0%, transparent 65%)",
        }}
      />
      <AmbientWaves className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] opacity-40" />

      <Container className="relative z-10">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow pill>Partner with SAIL-E</Eyebrow>
            <h1 className="mb-5 mt-5 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-light leading-[1.04] tracking-[-0.02em] text-coastal">
              Let&apos;s make waves{" "}
              <span className="font-extralight italic text-aqua">together.</span>
            </h1>
            <p className="max-w-xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-coastal/75">
              Tell us about your hotel, DMC, fleet, or destination. We&apos;ll
              show you how SAIL-E brings clarity, speed, and care to every sea
              journey and get you set up on the platform.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Left — why partner */}
          <Reveal delay={80}>
            <ul className="flex flex-col gap-6">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-aqua/25 bg-aqua/10 text-aqua">
                    <Icon name={r.icon} size={20} />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-light text-coastal">
                      {r.title}
                    </h2>
                    <p className="mt-1 max-w-sm text-sm leading-relaxed text-coastal/60">
                      {r.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right — direct contact card */}
          <Reveal delay={140}>
            <div className="rounded-[28px] bg-coastal p-7 shadow-[0_30px_80px_rgba(1,24,30,0.45)] sm:p-9">
              <h2 className="font-display text-2xl font-light text-sea-950">
                Talk to us
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-sea-950/60">
                Reach the SAIL-E partnerships team directly — we usually reply
                within a day.
              </p>

              <ul className="mt-7 border-y border-sea-950/10">
                {channels.map((c) => {
                  const external = c.href.startsWith("http");
                  return (
                    <li
                      key={c.label}
                      className="border-b border-sea-950/10 last:border-b-0"
                    >
                      <a
                        href={c.href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-center justify-between gap-4 py-3.5"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sea-950/45">
                          {c.label}
                        </span>
                        <span className="text-[15px] text-sea-950 transition-colors group-hover:text-aqua">
                          {c.value}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href={`mailto:${site.email}`}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-medium tracking-[0.03em] text-white shadow-[0_12px_32px_rgba(38,189,216,0.28)] transition-all duration-300 ease-[cubic-bezier(0.2,0.6,0.2,1)] hover:-translate-y-px hover:bg-aqua-500 hover:shadow-[0_20px_48px_rgba(38,189,216,0.42)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2"
              >
                Email us →
              </a>
            </div>
          </Reveal>
        </div>

        {/* By the numbers */}
        <Reveal delay={80}>
          <div className="mt-20 border-t border-coastal/12 pt-12">
            <Eyebrow className="text-aqua">By the numbers</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-[1.1] tracking-[-0.02em] text-coastal">
              A growing platform{" "}
              <span className="font-extralight italic text-aqua">
                you can build on.
              </span>
            </h2>

            <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-aqua/15 bg-aqua/10 sm:grid-cols-3">
              {partnerStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-sea-950/40 px-7 py-9 transition-colors duration-300 hover:bg-sea-950/20"
                >
                  <div className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-extralight leading-none tracking-[-0.02em] text-aqua">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-coastal/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
