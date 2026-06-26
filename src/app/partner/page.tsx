import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { AmbientWaves } from "@/components/ui/Waves";
import { PartnerForm } from "@/components/sections/PartnerForm";
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
              journey — and get you set up on the platform.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Left — reasons + direct channels */}
          <Reveal delay={80}>
            <div>
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

              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-coastal/12 bg-coastal/10">
                {channels.map((c) => {
                  const external = c.href.startsWith("http");
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group bg-sea-950/40 px-5 py-4 transition-colors hover:bg-sea-950/20"
                    >
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-aqua/80">
                        {c.label}
                      </div>
                      <div className="mt-1 text-sm text-coastal/85 transition-colors group-hover:text-aqua">
                        {c.value}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Right — the form */}
          <Reveal delay={140}>
            <PartnerForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
