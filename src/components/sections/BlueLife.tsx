import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { blueLifeParos } from "@/data/press";

/**
 * Compact Blue Life Paros teaser shown on the home page after Impact. The full
 * feature (write-up + large collage) lives on the Press page; this links there.
 */
export function BlueLife() {
  return (
    <section className="border-t border-grey-200 bg-coastal py-20 text-sea-950">
      <Container>
        <Reveal>
          <div className="grid items-center gap-10 rounded-[28px] border border-grey-200 bg-white p-7 shadow-[0_24px_48px_rgba(1,24,30,0.06)] sm:p-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
            {/* Text */}
            <div>
              <Eyebrow className="text-aqua-600">{blueLifeParos.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-light leading-[1.12] tracking-[-0.02em] text-sea-950">
                {blueLifeParos.title}
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-grey-500">
                {blueLifeParos.body[0]}
              </p>
              <div className="mt-6">
                <Link
                  href="/press/#blue-life-paros"
                  className="inline-flex items-center gap-2 rounded-full border border-sea-950/20 px-5 py-2.5 text-sm font-medium text-sea-950 transition-colors duration-300 hover:border-aqua hover:text-aqua"
                >
                  See the full story →
                </Link>
              </div>
            </div>

            {/* Small photo cluster */}
            <div className="grid grid-cols-2 gap-3">
              {blueLifeParos.photos.slice(0, 4).map((photo, i) => (
                <figure
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#052630_0%,#0A3743_100%)] ring-1 ring-sea-950/10"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.06]"
                    style={{ backgroundImage: `url('${photo.src}')` }}
                  />
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
