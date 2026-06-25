import { RevealGroup } from "@/components/ui/Reveal";
import type { Partner } from "@/data/content";
import { GREECE_PATHS, GREECE_VIEWBOX } from "@/data/greece";

/* -------------------------------------------------------------------------
   City pins are projected from the SVG's geoViewBox
   ("19.374078 41.749800 29.608925 34.800800") into its 918.79x792.43 space:
     x = (lon - 19.374078) / 10.234847 * 918.78973
     y = (41.749800 - lat) / 6.949000 * 792.42786
   ------------------------------------------------------------------------- */
type NodeKey = "thessaloniki" | "athens" | "peloponnese" | "paros";

const NODES: Record<
  NodeKey,
  { x: number; y: number; label: string; dx: number; anchor: "start" | "end" }
> = {
  thessaloniki: { x: 320, y: 126, label: "Thessaloniki", dx: 22, anchor: "start" },
  athens: { x: 391, y: 430, label: "Athens", dx: 22, anchor: "start" },
  peloponnese: { x: 250, y: 505, label: "Peloponnese", dx: -22, anchor: "end" },
  paros: { x: 519, y: 532, label: "Paros", dx: 22, anchor: "start" },
};

// Hotel -> node mapping (presentation only).
const PLACEMENT: Record<string, NodeKey> = {
  "ONE & ONLY": "athens",
  AMANZOE: "peloponnese",
  "AVANT MAR": "paros",
};

// The mainland is by far the most detailed outline -> longest path string.
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
          const node = PLACEMENT[partner.name];
          return (
            <article
              key={partner.name}
              className="group flex items-center gap-4 rounded-2xl border border-coastal/12 bg-coastal/[0.03] px-5 py-4 transition-all duration-300 hover:border-aqua/40 hover:bg-coastal/[0.06]"
            >
              <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-aqua/30 transition group-hover:animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-aqua shadow-[0_0_8px_#26BDD8]" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-display text-base font-extralight uppercase tracking-[0.16em] text-coastal">
                  {partner.name}
                </div>
                <div className="text-[11px] tracking-[0.04em] text-coastal/55">
                  {partner.role}
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-aqua/25 bg-aqua/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-aqua">
                {node ? NODES[node].label : "Nationwide"}
              </span>
            </article>
          );
        })}
      </RevealGroup>
    </div>
  );
}

function GreeceMap() {
  const nodes = Object.values(NODES);

  return (
    <div className="reveal relative">
      <svg
        viewBox={GREECE_VIEWBOX}
        className="h-auto w-full"
        role="img"
        aria-label="Map of Greece highlighting partner hotel locations in Thessaloniki, Athens, the Peloponnese and Paros"
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
            <stop offset="0" stopColor="#26BDD8" stopOpacity="0.5" />
            <stop offset="1" stopColor="#26BDD8" stopOpacity="0" />
          </radialGradient>
          <filter id="gr-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Brand-coloured landmass */}
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

        {/* Light travelling around the mainland coastline */}
        <path
          d={GREECE_PATHS[MAINLAND_INDEX]}
          fill="none"
          stroke="url(#gr-coast)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="150 9000"
          filter="url(#gr-glow)"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="9150"
            to="0"
            dur="9s"
            repeatCount="indefinite"
          />
        </path>

        {/* City pins */}
        {nodes.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="44" fill="url(#gr-halo)" />
            <circle
              cx={n.x}
              cy={n.y}
              r="11"
              fill="none"
              stroke="#26BDD8"
              strokeWidth="2.4"
              strokeOpacity="0.7"
            >
              <animate
                attributeName="r"
                values="11;26;11"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                values="0.7;0;0.7"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={n.x}
              cy={n.y}
              r="7"
              fill="#FAFFF9"
              stroke="#26BDD8"
              strokeWidth="2.6"
            />
            <text
              x={n.x + n.dx}
              y={n.y + 7}
              textAnchor={n.anchor}
              fill="#FAFFF9"
              fillOpacity="0.9"
              fontSize="22"
              fontWeight="500"
              letterSpacing="0.6"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
