/**
 * Single source of truth for all business information shown on the site.
 * Update values here and every page/component picks them up.
 */

export const siteConfig = {
  name: "Mogli Advertisement Company",
  tagline: "Printing Experts",
  foundedYear: 1996,

  // TODO: replace placeholders with real contact details before going live.
  // Phone/WhatsApp must be in international format without spaces for links.
  phone: "+91XXXXXXXXXX",
  phoneDisplay: "+91 XXXXX XXXXX",
  whatsapp: "91XXXXXXXXXX", // country code + number, no "+", used in wa.me links
  email: "contact@example.com",

  address: "Manesar, Gurugram, Haryana, India",

  // Set after deploying; used for sitemap, robots and Open Graph URLs.
  url: "https://mogli-advertisement.vercel.app",

  description:
    "Leading customized screen printing experts since 1996. Serving MNCs and Indian companies across Manesar, Bawal, Khushkhera and nearby industrial areas with screen printing on wood, metal, plastic, glass and more.",

  serviceAreas: [
    "Manesar",
    "Panchgaon",
    "Bilaspur",
    "Dharuhera",
    "Bawal",
    "Bhiwadi",
    "Khushkhera",
    "Chaupanki",
  ],
} as const;

export interface Service {
  slug: string;
  title: string;
  summary: string;
  details: string;
  examples: string[];
}

export const services: Service[] = [
  {
    slug: "industrial-packaging",
    title: "Packaging & Box Printing",
    summary: "Branding and markings on wooden and corrugated boxes.",
    details:
      "Durable screen printing for industrial packaging — logos, handling marks, part numbers and branding that stay legible through storage and transport.",
    examples: ["Wooden boxes", "Corrugated boxes", "Export packaging"],
  },
  {
    slug: "metal-plastic-surfaces",
    title: "Metal, Plastic & Glass Surfaces",
    summary: "Printing on PP, Nylon, SS, Aluminium, Glass and more.",
    details:
      "Specialized inks and processes for hard-to-print surfaces. We print directly on polypropylene, nylon, stainless steel, aluminium and glass products.",
    examples: ["PP & Nylon parts", "Stainless steel", "Aluminium", "Glass"],
  },
  {
    slug: "utensils-appliances",
    title: "Utensils & Appliances",
    summary: "Branding on utensils, cooler bodies and SS bottles.",
    details:
      "Precise, food-safe printing on all types of utensils and appliance bodies — from spindles, trays and cups to air-cooler bodies and stainless steel bottles.",
    examples: ["Trays & cups", "Spindles", "Cooler bodies", "SS bottles"],
  },
  {
    slug: "signage",
    title: "Signage & Sunboards",
    summary: "Eye-catching signage for shops, offices and factories.",
    details:
      "Custom signage and sunboard printing for storefronts, factories and events — built to be weather-resistant and vivid.",
    examples: ["Shop signage", "Sunboards", "Factory boards"],
  },
  {
    slug: "stickers-labels",
    title: "Stickers & Labels",
    summary: "Vinyl stickers and paper gummed stickers in any shape.",
    details:
      "High-quality vinyl stickers and paper gummed stickers for product labelling, branding and packaging — any size, shape or quantity.",
    examples: ["Vinyl stickers", "Paper gummed stickers", "Product labels"],
  },
  {
    slug: "screen-making",
    title: "Screen Making (Printing Dies)",
    summary: "Expert preparation of printing dies on cloth screens.",
    details:
      "We are experts in preparing screens — printing dies on cloth — the foundation of sharp, consistent screen printing. We also supply screens to other printers.",
    examples: ["Cloth screens", "Printing dies", "Custom stencils"],
  },
];

export interface ClientGroup {
  location: string;
  clients: string[];
}

export const clientGroups: ClientGroup[] = [
  {
    location: "Manesar",
    clients: [
      "Nefab (The Packaging Solution)",
      "Showa Arch Metal",
      "Vbros Auto Pvt Ltd",
    ],
  },
  {
    location: "Bawal",
    clients: ["Xpertpack", "Pluss Advance Technologies"],
  },
  {
    location: "Khushkhera",
    clients: [
      "JP Group",
      "DLJM Housewares Pvt Ltd",
      "Bhagwati Products Limited",
      "Parasnath Innovative Industries",
    ],
  },
  {
    location: "Noida",
    clients: ["Panash Technologies"],
  },
];

/**
 * Year of the current build, inlined by next.config.ts. Next.js forbids
 * `new Date()` during prerendering, and a build-time value is fine here:
 * the site is rebuilt on every deploy.
 */
export const buildYear: number = Number(
  process.env.BUILD_YEAR ?? new Date().getFullYear(),
);

/** Years in business as of the current build. */
export function yearsOfExperience(): number {
  return buildYear - siteConfig.foundedYear;
}

/** wa.me click-to-chat link with a pre-filled greeting. */
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ??
      `Hello ${siteConfig.name}, I would like to enquire about screen printing services.`,
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
