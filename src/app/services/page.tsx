import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Customized screen printing on wooden boxes, corrugated boxes, utensils, PP, Nylon, SS, Aluminium, Glass, cooler bodies, SS bottles, signage, sunboards, vinyl and paper gummed stickers.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Our Services</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        We deal in all types of customized screen printing. Below is what we do
        most — but if your product is not listed, ask us. We have probably
        printed on it before.
      </p>

      <div className="mt-12 space-y-10">
        {services.map((service) => (
          <section
            key={service.slug}
            id={service.slug}
            className="rounded-xl border border-border bg-surface p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-muted">{service.details}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.examples.map((example) => (
                <span
                  key={example}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong"
                >
                  {example}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-xl bg-accent-soft/50 p-8 text-center">
        <h2 className="text-xl font-bold">Need something custom?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Send us a photo of your product on WhatsApp and we will tell you how
          we can print on it.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-accent-contrast hover:bg-accent-strong"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
