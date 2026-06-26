/** Single source of truth for brand-level constants and navigation. */

export const site = {
  name: "SAIL-E",
  tagline: "On demand sea transportation.",
  url: "https://www.sail-e.com",
  email: "info@sail-e.com",
  social: "@saile_app",
  // Where the recurring "Partner with us" CTA points — the dedicated
  // partner / contact page. (trailingSlash export → "/partner/".)
  partnerHref: "/partner/",
};

// Home-section anchors are home-absolute ("/#id") so they work from any route:
// on the home page they scroll smoothly; from /partner they return home first.
export const navLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "Partners", href: "/#partners" },
  { label: "Impact", href: "/#impact" },
  { label: "About", href: "/about/" },
  { label: "Press", href: "/press/" },
  //{ label: "Partner with us", href: "/partner/" },
];

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "What we do", href: "/#what" },
      { label: "For hospitality", href: "/#platform" },
      { label: "Partners", href: "/#partners" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Impact", href: "/#impact" },
      { label: "Press", href: "/press/" },
      { label: "Contact", href: "/partner/" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@sail-e.com", href: "mailto:info@sail-e.com" },
      { label: "www.sail-e.com", href: "https://www.sail-e.com" },
      { label: "@saile_app", href: "/partner/" },
    ],
  },
];
