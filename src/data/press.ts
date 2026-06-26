/** Press coverage — "What the press say about SAIL-E".
 *
 * To add an article, drop its thumbnail in `public/press/` and add an entry
 * below. Missing images fall back to a branded placeholder automatically. */

export type PressSourceType = "Paper" | "Site";

export type PressItem = {
  /** Headline of the article. */
  title: string;
  /** Name of the publication (newspaper or website). */
  source: string;
  /** Whether the source is a print "Paper" or an online "Site". */
  sourceType: PressSourceType;
  /** Link to the full article. */
  url: string;
  /** Thumbnail under /public, e.g. "/press/newmoney-saile.jpg". */
  image: string;
  /** Optional publish date, e.g. "Mar 2026". */
  date?: string;
  /** Optional short pull-quote or excerpt. */
  excerpt?: string;
};

// ---- Headlines / "In the press" -----------------------------------------
export const pressItems: PressItem[] = [
  {
    title: "Two friends built a Greek platform for on-demand sea travel",
    source: "It's Possible",
    sourceType: "Site",
    url: "https://www.itspossible.gr/%CE%B4%CF%8D%CE%BF-%CF%86%CE%AF%CE%BB%CE%BF%CE%B9-%CE%AD%CF%86%CF%84%CE%B9%CE%B1%CE%BE%CE%B1%CE%BD-%CE%BC%CE%AF%CE%B1-%CE%B5%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CE%AE-%CF%80%CE%BB%CE%B1%CF%84%CF%86/",
    image: "/press/itspossible.png",
    excerpt:
      "The story behind SAIL-E and the idea of organising sea mobility in one trusted place.",
  },
  {
    title: "SAIL-E: an app for on-demand sea mobility",
    source: "NewMoney",
    sourceType: "Site",
    url: "https://www.newmoney.gr/roh/palmos-oikonomias/nautilia/minas-tsigkos-nikolas-panagiotidis-sail-e-mia-efarmogi-gia-on-demand-thalassies-metakinisis-pics/",
    image: "/press/newmoney.png",
    excerpt:
      "Minas Tsigkos and Nikolas Panagiotidis on building SAIL-E for the Mediterranean.",
  },
  {
    title:
      "Avant Mar & Grivalia Hospitality complete three days of environmental action on Paros",
    source: "NewMoney",
    sourceType: "Site",
    url: "https://www.newmoney.gr/roh/palmos-oikonomias/tourismos/to-avant-mar-ke-i-grivalia-hospitality-oloklirosan-me-epitichia-to-triimero-perivallontikon-draseon-stin-paro-pics/",
    image: "/press/newmoney%20blue%20life.png",
    excerpt:
      "Inside the Blue Life Paros initiative organised by HELMEPA on the island.",
  },
  {
    title:
      "Avant Mar Paros & Grivalia Hospitality: a multi-dimensional environmental action on Paros",
    source: "Fortune Greece",
    sourceType: "Site",
    url: "https://www.fortunegreece.com/article/avant-mar-paros-grivalia-hospitality-polidiastati-drasi-perivallontikis-evaisthitopoiisis-stin-paro/",
    image: "/press/fortune.png",
    excerpt:
      "Coverage of the Blue Life Paros environmental-awareness programme.",
  },
];

// ---- ESG feature: Blue Life Paros ---------------------------------------
export type EsgPhoto = { src: string; alt?: string };

export type EsgFeature = {
  eyebrow: string;
  title: string;
  /** Publication this feature links out to. */
  source: string;
  sourceType: PressSourceType;
  url: string;
  date?: string;
  /** Editable write-up — one string per paragraph. */
  body: string[];
  /** Creative photo collage. First photo is the large feature tile. */
  photos: EsgPhoto[];
};

export const blueLifeParos: EsgFeature = {
  eyebrow: "Blue Life Paros",
  title:
    "Avant Mar Grivalia Hospitality & SAIL-E complete three days of environmental action on Paros",
  source: "NewMoney",
  sourceType: "Site",
  url: "https://www.newmoney.gr/roh/palmos-oikonomias/tourismos/to-avant-mar-ke-i-grivalia-hospitality-oloklirosan-me-epitichia-to-triimero-perivallontikon-draseon-stin-paro-pics/",
  // ✏️ Write your own story here — each line is a paragraph.
  body: [
    "Over three days on Paros, Avant Mar and Grivalia Hospitality joined a programme of environmental actions dedicated to protecting the island's coastline and sea.",
    "The initiative was organised by HELMEPA — the Hellenic Marine Environment Protection Association — bringing together partners, staff, schools, and the local community around beach clean-ups and marine-awareness actions.",
    "For SAIL-E, Blue Life Paros reflects what responsible sea mobility looks like in practice: caring for the places we connect and the communities that make coastal travel worth it.",
  ],
  // 📷 Photos live in public/press/blue-life/ (spaces are URL-encoded as %20).
  // The first one is the large feature tile; missing photos show a placeholder.
  photos: [
    { src: "/press/blue-life/Blue%20Life%20Paros%201.jpg", alt: "Blue Life Paros — environmental action on Paros" },
    { src: "/press/blue-life/Blue%20Life%20Paros%202.jpg", alt: "Volunteers during the clean-up" },
    { src: "/press/blue-life/Blue%20Life%20Paros%203.jpg", alt: "Along the Paros coastline" },
    { src: "/press/blue-life/Blue%20Life%20Paros%204.jpg", alt: "Caring for the sea" },
  ],
};
