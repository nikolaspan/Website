import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { footerColumns, site } from "@/data/site";

const credentials = [
  {
    name: "ISO 27701",
    detail: "Privacy information management",
    image: "/footer/Badge_ISO27701_.png",
    href: "/footer/CERT_%2027701_2026_EN.pdf",
    imageClassName: "h-20 w-[91px]",
  },
  {
    name: "ISO 27001",
    detail: "Information security management",
    image: "/footer/Logo_ISO27001.png",
    href: "/footer/CER_27001_2026_EN.pdf",
    imageClassName: "h-20 w-[91px]",
  },
  {
    name: "HELMEPA Silver Badge",
    detail: "Marine litter clean-up commitment",
    image: "/footer/Silver%20Badge%20SAIL%20-%20E.png",
    href: "https://www.helmepa.gr/",
    imageClassName: "h-20 w-20",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-aqua/15 bg-sea-950 pb-9 pt-20 text-coastal/70">
      <Container>
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-3.5 flex items-center gap-2.5 text-coastal">
              <BrandLogo size={30} className="rounded-md" />
              <span className="font-display text-sm font-extralight uppercase tracking-[0.22em]">
                {site.name}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-coastal/60">
              Your on-demand gateway to the sea. Built for hotels, DMCs, boat partners, marinas, and coastal destinations.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-coastal/45">
                {col.title}
              </h2>
              <ul className="space-y-2.5">
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-coastal/75 transition-colors hover:text-aqua"
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-coastal/10 pt-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-coastal/45">
                Certifications &amp; impact
              </h2>
              <p className="mt-1.5 text-sm text-coastal/60">
                Independently certified. Committed to cleaner seas.
              </p>
            </div>
            <p className="hidden text-xs text-coastal/35 sm:block">
              Select a badge to view details
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {credentials.map((credential) => (
              <a
                key={credential.name}
                href={credential.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${credential.name} details (opens in a new tab)`}
                className="group flex min-h-28 items-center gap-4 rounded-xl border border-coastal/10 bg-coastal/[0.04] px-4 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-aqua/35 hover:bg-coastal/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua/70 focus-visible:ring-offset-2 focus-visible:ring-offset-sea-950"
              >
                <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
                  <Image
                    src={credential.image}
                    alt={`${credential.name} badge`}
                    width={96}
                    height={96}
                    className={`${credential.imageClassName} object-contain`}
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-coastal transition-colors group-hover:text-aqua">
                    {credential.name}
                    <span aria-hidden="true" className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-coastal/50">
                    {credential.detail}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-coastal/10 pt-7 text-xs text-coastal/40">
          <p>© {new Date().getFullYear()} SAIL-E. Sea mobility, simplified.</p>
          <p>Made in Greece · For the Mediterranean and beyond</p>
        </div>
      </Container>
    </footer>
  );
}
