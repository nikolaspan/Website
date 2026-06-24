import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { footerColumns, site } from "@/data/site";

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
              Your on-demand gateway to the sea. Built for hotels, DMCs, travel
              pros, boat partners, marinas, and coastal destinations.
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

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-coastal/10 pt-7 text-xs text-coastal/40">
          <p>© {new Date().getFullYear()} SAIL-E. Sea mobility, simplified.</p>
          <p>Made in Greece · For the Mediterranean and beyond</p>
        </div>
      </Container>
    </footer>
  );
}
