/** Single source of truth for brand-level constants and navigation. */

export const site = {
  name: "SAIL-E",
  tagline: "Sea mobility, simplified.",
  url: "https://www.sail-e.com",
  email: "info@sail-e.com",
  social: "@saile_app",
  // Where the recurring "Partner with us" CTA points. The standalone build
  // linked to a separate partner.html; we anchor to the on-page CTA instead.
  partnerHref: "#contact",
};

export const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Partners", href: "#partners" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "What we do", href: "#what" },
      { label: "For hospitality", href: "#platform" },
      { label: "Partners", href: "#partners" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Impact", href: "#impact" },
      { label: "Contact", href: "#contact" },
      { label: "Press", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@sail-e.com", href: "mailto:info@sail-e.com" },
      { label: "www.sail-e.com", href: "https://www.sail-e.com" },
      { label: "@saile_app", href: "#contact" },
    ],
  },
];
