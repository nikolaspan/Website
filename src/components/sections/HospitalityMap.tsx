import { RevealGroup } from "@/components/ui/Reveal";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import type { Partner } from "@/data/content";
import { GREECE_PATHS, GREECE_VIEWBOX } from "@/data/greece";

/* -------------------------------------------------------------------------
   Coordinates projected from the SVG's geoViewBox
     ("19.374078 41.749800 29.608925 34.800800") into the 918.79×792.43 space:
       x = (lon - 19.374078) / 10.234847 * 918.78973
       y = (41.749800 - lat)  / 6.949000  * 792.42786
   ------------------------------------------------------------------------- */

type PortKey =
  | "thessaloniki"
  | "skiathos"
  | "corfu"
  | "patras"
  | "athens"
  | "aegina"
  | "portoHeli"
  | "hydra"
  | "spetses"
  | "kalamata"
  | "paros"
  | "mykonos"
  | "naxos"
  | "santorini"
  | "rhodes"
  | "heraklion";

type Port = {
  x: number;
  y: number;
  label: string;
  dx?: number;
  dy?: number;
  anchor?: "start" | "end" | "middle";
  size?: "lg" | "md" | "sm";
  // Optional sea-side anchor used for route endpoints. The pin stays at (x,y)
  // sitting on the city/island; routes start/end at (seaX, seaY) so the curve
  // never originates inside a landmass. Verified clear of land via SVG hit-test.
  seaX?: number;
  seaY?: number;
};

const PORTS: Record<PortKey, Port> = {
  thessaloniki: { x: 321, y: 127, label: "Thessaloniki", dx: 22, anchor: "start", size: "md" },
  corfu:        { x: 49,  y: 244, label: "Corfu",        dx: 22, anchor: "start", size: "sm" },
  skiathos:     { x: 370, y: 296, label: "Skiathos",     dx: 22, anchor: "start", size: "sm" },
  patras:       { x: 212, y: 400, label: "Patras",       dx: -22, anchor: "end",  size: "sm" },
  athens:       { x: 384, y: 434, label: "Athens",       dx: 22, anchor: "start", size: "lg", seaX: 405, seaY: 491 },
  aegina:       { x: 364, y: 457, label: "Aegina",       dx: -18, dy: 18, anchor: "end", size: "sm" },
  portoHeli:    { x: 339, y: 505, label: "Porto Heli",   dx: -22, anchor: "end",  size: "sm" },
  hydra:        { x: 368, y: 502, label: "Hydra",        dx: 0,   dy: 26, anchor: "middle", size: "sm", seaX: 372, seaY: 494 },
  spetses:      { x: 340, y: 511, label: "Spetses",      dx: -22, dy: 22, anchor: "end",  size: "sm" },
  kalamata:     { x: 245, y: 536, label: "Kalamata",     dx: -22, anchor: "end",  size: "sm" },
  paros:        { x: 519, y: 532, label: "Paros",        dx: 22, anchor: "start", size: "md" },
  mykonos:      { x: 535, y: 490, label: "Mykonos",      dx: 22, anchor: "start", size: "md", seaX: 540, seaY: 492 },
  naxos:        { x: 541, y: 530, label: "Naxos",        dx: 22, dy: 18, anchor: "start", size: "sm" },
  santorini:    { x: 544, y: 609, label: "Santorini",    dx: 22, anchor: "start", size: "md", seaX: 538, seaY: 600 },
  rhodes:       { x: 794, y: 606, label: "Rhodes",       dx: -22, anchor: "end", size: "md", seaX: 782, seaY: 600 },
  heraklion:    { x: 517, y: 730, label: "Heraklion",    dx: 22, anchor: "start", size: "sm" },
};

// Partner -> nearest port (presentation only)
const PLACEMENT: Record<string, PortKey> = {
  "ONE & ONLY": "athens",
  "91 ATHENS RIVIERA": "athens",
  AMANZOE: "portoHeli",
  "AVANT MAR": "paros",
};

/* -------------------------------------------------------------------------
   Animated sea routes. Each route is a quadratic curve so it arcs over the
   water rather than slicing through islands. `curve` is the control-point
   offset perpendicular to the segment (positive = bend "outward").
   `dur` controls the speed of the travelling dash + boat dot.
   ------------------------------------------------------------------------- */

type Route = {
  from: PortKey;
  to: PortKey;
  curve: number;
  dur: number;
  delay?: number;
};

// Four open-water routes through the Aegean. Curves verified clear of land
// via headless SVG hit-testing against the actual Greece coastline paths.
// Endpoints use each port's seaX/seaY anchor (see PORTS above).
const ROUTES: Route[] = [
  // Saronic gulf — Piraeus to Hydra: straight line through open water.
  { from: "athens",    to: "hydra",     curve: 0,   dur: 6.5, delay: 0.0 },
  // Aegean crossing — Piraeus past Cape Sounion straight to Mykonos.
  { from: "athens",    to: "mykonos",   curve: 0,   dur: 9,   delay: 1.2 },
  // Cyclades hop — Mykonos south to Santorini, bending east past Paros/Naxos.
  { from: "mykonos",   to: "santorini", curve: -87, dur: 8,   delay: 0.6 },
  // Long haul — Santorini east to Rhodes, slight south arc through open sea.
  { from: "santorini", to: "rhodes",    curve: 14,  dur: 11,  delay: 2.0 },
];

const MAINLAND_INDEX = GREECE_PATHS.reduce(
  (best, d, i) => (d.length > GREECE_PATHS[best].length ? i : best),
  0,
);

export function HospitalityMap({ partners }: { partners: Partner[] }) {
  const located = partners.filter((p) => PLACEMENT[p.name]);
  const nationwide = partners.filter((p) => !PLACEMENT[p.name]);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
      <GreeceMap />

      <RevealGroup className="flex flex-col gap-3">
        {[...located, ...nationwide].map((partner) => {
          const portKey = PLACEMENT[partner.name];
          return (
            <article
              key={partner.name}
              className="group flex items-center gap-4 rounded-2xl border border-coastal/12 bg-coastal/[0.03] px-5 py-4 transition-all duration-300 hover:border-aqua/40 hover:bg-coastal/[0.06]"
            >
              <PartnerLogo name={partner.name} logo={partner.logo} size={48} />
              <div className="min-w-0 flex-1">
                <div className="font-display text-base font-extralight uppercase tracking-[0.16em] text-coastal">
                  {partner.name}
                </div>
                <div className="text-[11px] tracking-[0.04em] text-coastal/55">
                  {partner.role}
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-aqua/25 bg-aqua/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-aqua">
                {portKey ? PORTS[portKey].label : "Nationwide"}
              </span>
            </article>
          );
        })}
      </RevealGroup>
    </div>
  );
}

/* ----------------------- SVG map ----------------------- */

function curvePath(from: Port, to: Port, curve: number) {
  // Use sea-side anchors for route endpoints so the curve never starts inside
  // a landmass. Falls back to the pin coordinate when no sea anchor is set.
  const ax = from.seaX ?? from.x;
  const ay = from.seaY ?? from.y;
  const bx = to.seaX ?? to.x;
  const by = to.seaY ?? to.y;
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const dx = bx - ax;
  const dy = by - ay;
  const len = Math.hypot(dx, dy) || 1;
  // perpendicular unit vector
  const nx = -dy / len;
  const ny = dx / len;
  const cx = mx + nx * curve;
  const cy = my + ny * curve;
  return `M ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`;
}

const PIN_SIZE = { lg: 8, md: 7, sm: 5.5 } as const;
const HALO_SIZE = { lg: 50, md: 42, sm: 32 } as const;
const LABEL_SIZE = { lg: 22, md: 18, sm: 15 } as const;

function GreeceMap() {
  return (
    <div className="reveal relative">
      <svg
        viewBox={GREECE_VIEWBOX}
        className="h-auto w-full"
        role="img"
        aria-label="Map of Greece highlighting partner ports and the live sea-route network served by SAIL-E."
      >
        <defs>
          <linearGradient id="gr-land" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0A3743" stopOpacity="0.9" />
            <stop offset="1" stopColor="#01181E" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="gr-coast" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#26BDD8" />
            <stop offset="1" stopColor="#8FE1EC" />
          </linearGradient>
          <radialGradient id="gr-halo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#26BDD8" stopOpacity="0.55" />
            <stop offset="1" stopColor="#26BDD8" stopOpacity="0" />
          </radialGradient>
          <filter id="gr-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="gr-glow-strong" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Landmass */}
        <g
          fill="url(#gr-land)"
          fillRule="evenodd"
          stroke="#26BDD8"
          strokeWidth="1.6"
          strokeOpacity="0.55"
          strokeLinejoin="round"
        >
          {GREECE_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* Light travelling the mainland coastline */}
        <path
          d={GREECE_PATHS[MAINLAND_INDEX]}
          fill="none"
          stroke="url(#gr-coast)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="150 9000"
          filter="url(#gr-glow-strong)"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="9150"
            to="0"
            dur="9s"
            repeatCount="indefinite"
          />
        </path>

        {/* ---------- Sea routes ---------- */}
        <g>
          {ROUTES.map((r, i) => {
            const from = PORTS[r.from];
            const to = PORTS[r.to];
            const d = curvePath(from, to, r.curve);
            const delay = `${-(r.delay ?? 0)}s`;
            return (
              <g key={`${r.from}-${r.to}-${i}`}>
                {/* faint base line */}
                <path
                  d={d}
                  fill="none"
                  stroke="#26BDD8"
                  strokeOpacity="0.18"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
                {/* dashed flowing line */}
                <path
                  d={d}
                  fill="none"
                  stroke="#26BDD8"
                  strokeOpacity="0.7"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeDasharray="3 9"
                  filter="url(#gr-glow)"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-120"
                    dur={`${r.dur * 1.6}s`}
                    repeatCount="indefinite"
                    begin={delay}
                  />
                </path>
                {/* travelling boat dot */}
                <circle r="3.2" fill="#FAFFF9" filter="url(#gr-glow-strong)">
                  <animateMotion
                    dur={`${r.dur}s`}
                    repeatCount="indefinite"
                    begin={delay}
                    path={d}
                    rotate="auto"
                  />
                </circle>
              </g>
            );
          })}
        </g>

        {/* ---------- Port pins ---------- */}
        {(Object.keys(PORTS) as PortKey[]).map((key) => {
          const p = PORTS[key];
          const size = p.size ?? "md";
          const r = PIN_SIZE[size];
          const halo = HALO_SIZE[size];
          const fontSize = LABEL_SIZE[size];
          const isHub = size === "lg" || size === "md";

          return (
            <g key={key}>
              <circle cx={p.x} cy={p.y} r={halo} fill="url(#gr-halo)" />
              {isHub && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={r + 4}
                  fill="none"
                  stroke="#26BDD8"
                  strokeWidth="2"
                  strokeOpacity="0.7"
                >
                  <animate
                    attributeName="r"
                    values={`${r + 4};${r + 18};${r + 4}`}
                    dur="3.4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values="0.7;0;0.7"
                    dur="3.4s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              <circle
                cx={p.x}
                cy={p.y}
                r={r}
                fill="#FAFFF9"
                stroke="#26BDD8"
                strokeWidth="2.4"
              />
              <text
                x={p.x + (p.dx ?? 0)}
                y={p.y + (p.dy ?? 0) + fontSize * 0.32}
                textAnchor={p.anchor ?? "start"}
                fill="#FAFFF9"
                fillOpacity={isHub ? 0.95 : 0.7}
                fontSize={fontSize}
                fontWeight={isHub ? 500 : 400}
                letterSpacing="0.5"
              >
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
