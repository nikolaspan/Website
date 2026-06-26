/** The people behind SAIL-E — shown on the About page ("Meet our founders").
 *
 * Add a portrait by dropping an image in `public/team/` and setting `photo`
 * (e.g. "/team/anastasia.jpg"). Without a photo, a branded initials avatar
 * is shown instead, so the page always looks finished. */

export type Founder = {
  name: string;
  role: string;
  bio: string;
  /** Optional portrait under /public, e.g. "/team/nikolas.jpg". */
  photo?: string;
};

export const founders: Founder[] = [
  {
    name: "Nikolas Panagiotidis",
    role: "Head of IT",
    bio: "Nikolas is an Informatics expert skilled in C/C++, Python, JavaScript, React, and SQL. He contributed to SAIL-E's MVP, app and website, applying his technical knowledge to develop SAIL-E's innovative, scalable platform.",
  },
  {
    name: "Minas Tsigkos",
    role: "Chief Operating Officer",
    bio: "Minas combines lifelong sailing expertise with a strong background in luxury hospitality at One&Only Aesthesis. Currently studying Biomedicine, he's driving the introduction of SAIL-E's innovative platform.",
  },
  {
    name: "Anastasia Kalogridou",
    role: "Chief Executive Officer",
    bio: "Anastasia leads SAIL-E with 20+ years of experience in project management and sustainability, championing our technology-driven, eco-conscious booking app that will reimagine sea transportation and create lasting industry impact.",
  },
];
