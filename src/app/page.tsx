import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import ServiceAreas from "@/components/ServiceAreas";
import RegMark from "@/components/RegMark";
import {
  services,
  siteConfig,
  whatsappLink,
  yearsOfExperience,
} from "@/lib/site-config";

const heroSpecs = [
  { label: "Surfaces", value: "Wood / PP / Nylon / SS / Aluminium / Glass" },
  { label: "Methods", value: "Screen print · Dies on cloth · Vinyl" },
  { label: "Scale", value: "Single pieces to industrial batches" },
  { label: "Quotes", value: "Usually same day" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="halftone border-b-2 border-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[7fr_5fr] lg:items-center lg:pt-20">
          <div>
            <p className="tech-label flex items-center gap-2 text-accent">
              <RegMark className="h-4 w-4" />
              Est. {siteConfig.foundedYear} — Manesar · Bawal · Khushkhera
            </p>
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.02] sm:text-6xl">
              Ink on <span className="italic text-accent">any</span> surface.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-muted">
              Customized screen printing for industry — wooden crates, steel
              bottles, glass, cooler bodies and everything between.{" "}
              {yearsOfExperience()}+ years of precision work trusted by MNCs and
              Indian manufacturers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="tech-label border-2 border-foreground bg-foreground px-6 py-3.5 text-background transition-colors hover:border-accent hover:bg-accent hover:text-accent-contrast"
              >
                Get a Quote
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-label border-2 border-foreground bg-surface px-6 py-3.5 transition-colors hover:text-accent"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Job-ticket spec card */}
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-full w-full border-2 border-foreground bg-accent" aria-hidden="true" />
            <div className="relative border-2 border-foreground bg-surface p-6">
              <div className="flex items-center justify-between border-b-2 border-foreground pb-3">
                <p className="tech-label font-bold">Job Ticket / Spec Sheet</p>
                <RegMark className="h-4 w-4 text-accent" />
              </div>
              <dl className="divide-y divide-border">
                {heroSpecs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-[88px_1fr] gap-3 py-3">
                    <dt className="tech-label pt-0.5 text-muted">{spec.label}</dt>
                    <dd className="text-sm font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex items-center justify-between border-t-2 border-foreground pt-3">
                <p className="tech-label text-muted">No. 1996-{yearsOfExperience()}</p>
                <p className="tech-label text-accent">Approved ✓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x-2 divide-foreground px-4 py-7 sm:px-6">
          {[
            { value: `${yearsOfExperience()}+`, label: "Yrs experience" },
            { value: "10+", label: "Industrial clients" },
            { value: String(siteConfig.serviceAreas.length).padStart(2, "0"), label: "Areas served" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 text-center first:pl-0 last:pr-0">
              <p className="font-display text-3xl font-black text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="tech-label mt-1 text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services index */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="tech-label text-accent">Index of work</p>
            <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">
              What we print
            </h2>
          </div>
          <Link href="/services" className="tech-label hidden text-accent underline underline-offset-4 sm:block">
            Full catalogue →
          </Link>
        </div>

        <div className="mt-8 border-t-2 border-foreground">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group grid grid-cols-[48px_1fr] gap-4 border-b border-border py-5 transition-colors hover:bg-surface sm:grid-cols-[64px_1fr_2fr] sm:items-baseline"
            >
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg font-extrabold group-hover:text-accent">
                {service.title}
              </span>
              <span className="col-start-2 text-sm font-light text-muted sm:col-start-3">
                {service.examples.join(" · ")}
              </span>
            </Link>
          ))}
        </div>
        <Link href="/services" className="tech-label mt-6 block text-accent underline underline-offset-4 sm:hidden">
          Full catalogue →
        </Link>
      </section>

      <ClientsSection />
      <ServiceAreas />

      {/* Contact CTA — inverted block */}
      <section className="border-t-2 border-foreground bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="tech-label text-accent">Next job: yours</p>
            <h2 className="mt-2 max-w-md font-display text-3xl font-black">
              Have something to print?
            </h2>
            <p className="mt-2 max-w-md font-light opacity-80">
              Send a photo of the product — we will tell you how we would print
              it, with a quote.
            </p>
          </div>
          <Link
            href="/contact"
            className="tech-label shrink-0 border-2 border-accent bg-accent px-8 py-4 text-accent-contrast transition-opacity hover:opacity-90"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
