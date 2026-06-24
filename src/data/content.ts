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
  { route: "On Residences → Mykonos · 18:20", status: "Confirmed" },
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
    title: "For DMCs & Travel Pros",
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

export type Partner = { name: string; role: string };
export type PartnerGroup = { category: string; partners: Partner[] };

export const partnerGroups: PartnerGroup[] = [
  {
    category: "Hospitality",
    partners: [
      { name: "AMANZOE", role: "Luxury resort · Peloponnese" },
      { name: "ONE & ONLY", role: "Luxury resort · Athens Riviera" },
      { name: "AVANT MAR", role: "Boutique resort · Paros" },
      { name: "ON RESIDENCES", role: "Hospitality group" },
    ],
  },
  {
    category: "Industry & Innovation",
    partners: [
      { name: "SETE", role: "Greek tourism confederation" },
      { name: "HCH", role: "Hellenic chamber of hotels" },
      { name: "ELEVATE GR", role: "National innovation initiative" },
      { name: "CAPSULET", role: "Travel & hospitality accelerator" },
    ],
  },
  {
    category: "Community & Sea",
    partners: [
      { name: "HELMEPA", role: "Marine environment protection" },
      { name: "AEGEAN CH.", role: "Boat operator network" },
      { name: "BLUE LINE", role: "Coastal logistics partner" },
      { name: "MARE CO.", role: "Sea experience operator" },
    ],
  },
];

export const partnerStats = [
  { value: "12+", label: "Trusted partners" },
  { value: "3", label: "Sectors" },
  { value: "1", label: "Mediterranean network" },
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
