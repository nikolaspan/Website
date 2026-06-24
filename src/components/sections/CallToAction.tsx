import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function CallToAction() {
  return (
    <section
      id="contact"
      className="cta-aurora relative scroll-mt-24 overflow-hidden bg-[linear-gradient(140deg,#01181E_0%,#052630_55%,#114B5A_100%)] py-28 text-coastal"
    >
      {/* Oversized watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-display text-[clamp(180px,24vw,400px)] font-extralight tracking-[-0.05em] text-aqua/5"
      >
        SAIL-E
      </span>

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3.5 flex justify-center">
              <Eyebrow pill>Start the journey</Eyebrow>
            </div>
            <h2 className="mb-[22px] mt-[18px] font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-coastal">
              Make waves{" "}
              <span className="font-extralight italic text-aqua">with us.</span>
            </h2>
            <p className="mx-auto mb-9 max-w-xl text-base leading-relaxed text-coastal/75">
              Partner with SAIL-E to bring structure, care, and reliability to
              sea mobility across Greece and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <Button href={site.partnerHref}>Partner with us →</Button>
              <Button href={site.url} variant="ghostDark">
                Visit sail-e.com
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
