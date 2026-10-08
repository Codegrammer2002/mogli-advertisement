import type { Metadata } from "next";
import Link from "next/link";
import RegMark from "@/components/RegMark";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Customized screen printing on wooden boxes, corrugated boxes, utensils, PP, Nylon, SS, Aluminium, Glass, cooler bodies, SS bottles, signage, sunboards, vinyl and paper gummed stickers.",
};

const substrates = [
  { surface: "Wood", jobs: "Crates, boxes, export packaging" },
  { surface: "Corrugated board", jobs: "Cartons, shippers, branding" },
  { surface: "PP / Nylon", jobs: "Auto parts, housings, trays" },
  { surface: "Stainless steel", jobs: "Bottles, utensils, panels" },
  { surface: "Aluminium", jobs: "Nameplates, panels, parts" },
  { surface: "Glass", jobs: "Bottles, panes, giftware" },
  { surface: "Appliance bodies", jobs: "Cooler bodies, enclosures" },
  { surface: "Vinyl", jobs: "Stickers, signage, decals" },
  { surface: "Paper", jobs: "Gummed stickers, labels" },
  { surface: "Cloth screens", jobs: "Printing dies for other printers" },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <p className="tech-label flex items-center gap-2 text-accent">
        <RegMark className="h-4 w-4" />
        Catalogue — all work customized
      </p>
      <h1 className="mt-4 font-display text-4xl font-black sm:text-5xl">
        Our services
      </h1>
      <p className="mt-4 max-w-2xl text-lg font-light text-muted">
        We deal in all types of customized screen printing. If your product is
        not listed, ask — we have probably printed on it before.
      </p>

      {/* Substrate compatibility table */}
      <div className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse border-2 border-foreground text-sm">
          <thead>
            <tr className="border-b-2 border-foreground bg-surface text-left">
              <th className="tech-label px-4 py-3 font-bold">#</th>
              <th className="tech-label px-4 py-3 font-bold">Surface</th>
              <th className="tech-label px-4 py-3 font-bold">Typical jobs</th>
              <th className="tech-label px-4 py-3 text-right font-bold">We print it</th>
            </tr>
          </thead>
          <tbody>
            {substrates.map((row, index) => (
              <tr key={row.surface} className="border-b border-border last:border-b-0">
                <td className="px-4 py-2.5 font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="px-4 py-2.5 font-display font-extrabold">{row.surface}</td>
                <td className="px-4 py-2.5 font-light text-muted">{row.jobs}</td>
                <td className="px-4 py-2.5 text-right font-mono text-accent">✓</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed catalogue */}
      <div className="mt-14 space-y-6">
        {services.map((service, index) => (
          <section
            key={service.slug}
            id={service.slug}
            className="relative border-2 border-foreground bg-surface p-6 sm:p-8"
          >
            <span className="absolute -top-3.5 left-5 bg-accent px-2.5 py-0.5 font-mono text-xs font-bold text-accent-contrast">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="font-display text-2xl font-black">{service.title}</h2>
            <p className="mt-3 max-w-2xl font-light text-muted">{service.details}</p>
            <p className="tech-label mt-4 text-muted">
              {service.examples.join("  ·  ")}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-14 border-2 border-foreground bg-foreground p-8 text-background">
        <p className="tech-label text-accent">Custom request</p>
        <h2 className="mt-2 font-display text-2xl font-black">
          Need something not listed?
        </h2>
        <p className="mt-2 max-w-md font-light opacity-80">
          Send us a photo of your product on WhatsApp and we will tell you how
          we can print on it.
        </p>
        <Link
          href="/contact"
          className="tech-label mt-6 inline-block border-2 border-accent bg-accent px-6 py-3 text-accent-contrast transition-opacity hover:opacity-90"
        >
          Get a Quote →
        </Link>
      </div>
    </div>
  );
}
