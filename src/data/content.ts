/** Section content extracted from the SAIL-E source. */

import type { IconName } from "@/components/ui/Icon";

export type JourneyRow = {
  route: string;
  meta?: string;
  status: "Confirmed" | "Pending";
};

export const heroJourneys: JourneyRow[] = [
  { route: "Amanzoe → Paros · 10:30", status: "Confirmed" },
  { route: "One & Only → Antiparos · 13:00", status: "Pending" },
  { route: "Avant Mar → Naxos · 16:45", status: "Confirmed" },
  { route: "Athens → Mykonos · 18:20", status: "Confirmed" },
];

export const services = [
  {
    num: "01",
    title: "Book",
    body: "On-demand sea mobility, organized in one place. Clear pricing, clear availability, no back-and-forth.",
  },
  {
    num: "02",
    title: "Coordinate",
    body: "Requests, changes, and real-time updates, all in one flow. Less friction, more structure.",
  },
  {
    num: "03",
    title: "Deliver",
    body: "Reliable guest experiences with trusted local partners, from last-minute transfers to curated journeys.",
  },
];

export const platformTiles: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "building",
    title: "For Hotels & Resorts",
    body: "Concierge-friendly booking, guest coordination, and post-trip follow-up.",
  },
  {
    icon: "users",
    title: "For DMCs",
    body: "Curated sea experiences with trusted operators, on a single request line.",
  },
  {
    icon: "layers",
    title: "For Boat Partners",
    body: "A clearer way to receive and manage demand, fewer calls, more structure.",
  },
  {
    icon: "pin",
    title: "For Destinations",
    body: "Better access, better standards, better experiences along the coast.",
  },
];

export const platformRequests: JourneyRow[] = [
  { route: "Amanzoe → Paros · 10:30", meta: "4 guests", status: "Confirmed" },
  { route: "One & Only → Antiparos · 13:00", meta: "6 guests", status: "Pending" },
  { route: "Avant Mar → Naxos · 16:45", meta: "2 guests", status: "Confirmed" },
];

export type Partner = {
  name: string;
  role: string;
  /** Logo image under /public, e.g. "/brand/partners/amanzoe.png".
   *  Missing/failed images fall back to brand-styled initials automatically. */
  logo?: string;
  /** Optional external website. When set, the partner card/row links to it. */
  url?: string;
};
export type PartnerGroup = { category: string; partners: Partner[] };

export const partnerGroups: PartnerGroup[] = [
  {
    category: "Hospitality",
    partners: [
      {
        name: "AMANZOE",
        role: "Luxury resort · Peloponnese",
        logo: "/brand/partners/images_500x500_enhanced.png",
        url: "https://www.aman.com/resorts/amanzoe",
      },
      {
        name: "ONE & ONLY",
        role: "Luxury resort · Athens Riviera",
        logo: "/brand/partners/one_and_only_500x500_enhanced.png",
        url: "https://www.oneandonlyresorts.com/aesthesis",
      },
      {
        name: "AVANT MAR",
        role: "Boutique resort · Paros",
        logo: "/brand/partners/avant_mar_500x500_enhanced.png",
        url: "https://www.avantmar.com/",
      },
      {
        name: "ON RESIDENCE",
        role: "Luxury Hotel",
        logo: "/brand/partners/on_residence_500x500_enhanced.png",
        url: "https://www.onresidence.gr/",
      },
      {
        name: "91 ATHENS RIVIERA",
        role: "Seafront residences · Athens Riviera",
        logo: "/brand/partners/91_1_500x500_enhanced.png",
        url: "https://domesresorts.com/91athensrivieratheresort/",
      },
      {
        name: "SILVERSANDS",
        role: "Hotels & resorts",
        logo: "/brand/partners/silversands_500x500_enhanced.png",
        url: "https://www.silversandscollection.com/resorts/grand-anse",
      },
      {
        name: "GRIVALIA HOSPITALITY",
        role: "Hospitality investment group",
        logo: "/brand/partners/grivalia_hospitality_logo_e1665468820635_500x500_enhanced.png",
        url: "https://grivaliahospitality.com/",
      },
    ],
  },
  {
    category: "Industry & Innovation",
    partners: [
      {
        name: "ELEVATE GR",
        role: "National innovation initiative",
        logo: "/brand/partners/elevate_500x500_enhanced.png",
        url: "https://registry.elevategreece.gov.gr/company/ezsail-boat-taxi-%CE%B9-%CE%BA-%CE%B5/",
      },
      {
        name: "CAPSULET",
        role: "Travel & hospitality accelerator",
        logo: "/brand/partners/capsulet_logo_500x500_enhanced.png",
        url: "https://www.capsuletaccelerator.gr/el/startups/sail-e",
      },
      {
        name: "STARTUS INSIGHTS",
        role: "Innovation intelligence platform",
        logo: "/brand/partners/start_us_500x500_enhanced.png",
        url: "https://www.startus-insights.com/",
      },
      {
        name: "GRIVALIA MANAGEMENT",
        role: "Real estate & asset management",
        logo: "/brand/partners/management_grivalia_500x500_enhanced.png",
        url: "https://www.grivalia.com/",
      },
      {
        name: "ENVOLVE",
        role: "Entrepreneurship & innovation",
        logo: "/brand/partners/envolve.png",
        url: "https://envolveglobal.org/envolvexl-portfolio/sail-e/",
      },
      {
        name: "UNIWA",
        role: "University of West Attica",
        logo: "/brand/partners/Uniwa.png",
        url: "https://www.uniwa.gr/",
      },
    ],
  },
  {
    category: "Community & Sea",
    partners: [
      {
        name: "HELMEPA",
        role: "Marine environment protection",
        logo: "/brand/partners/helmepa_500x500_enhanced.png",
        url: "https://www.helmepa.gr/",
      },
      {
        name: "BLUE STAR",
        role: "Aegean ferry network",
        logo: "/brand/partners/blue_star_500x500_enhanced.png",
        url: "https://www.bluestarferries.com/",
      },
      {
        name: "YNANP",
        role: "Ministry of Maritime Affairs",
        logo: "/brand/partners/ynanp_500x500_enhanced.png",
        url: "https://www.ynanp.gr/el/",
      },
    ],
  },
];

export const partnerStats = [
  { value: "€3M", label: "In charters managed" },
  { value: "1000+", label: "Bookings completed" },
  { value: "100%", label: "Vetted operators" },
];

export const impactCards: {
  letter: string;
  icon: IconName;
  tag: string;
  title: string;
  body: string;
}[] = [
  {
    letter: "E",
    icon: "leaf",
    tag: "Environmental",
    title: "Environmental Education",
    body: "Supporting awareness around the sea, climate, and marine protection through partnerships with HELMEPA and local coastal communities.",
  },
  {
    letter: "S",
    icon: "handshake",
    tag: "Social",
    title: "Local Communities",
    body: "Working with destinations, schools, hospitality partners, and local stakeholders, from marina operators to Greek boat owners.",
  },
  {
    letter: "G",
    icon: "compass",
    tag: "Governance",
    title: "Responsible Sea Mobility",
    body: "Encouraging better standards, structured operations, and more sustainable choices, fuel-efficient fleets, quiet routing, waste care.",
  },
];
