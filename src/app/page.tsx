import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ClientsSection from "@/components/ClientsSection";
import ServiceAreas from "@/components/ServiceAreas";
import {
  services,
  siteConfig,
  whatsappLink,
  yearsOfExperience,
} from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-28">
        <p className="mx-auto w-fit rounded-full bg-accent-soft px-4 py-1 text-sm font-medium text-accent-strong">
          Serving industry since {siteConfig.foundedYear}
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Customized Screen Printing for{" "}
          <span className="text-accent">Every Surface</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          From wooden boxes to stainless steel bottles — {yearsOfExperience()}+
          years of precision printing trusted by MNCs and Indian companies
          across Manesar, Bawal and Khushkhera.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-contrast transition-colors hover:bg-accent-strong"
          >
            Get a Quote
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border bg-surface px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border px-4 py-8 text-center sm:px-6">
          <div>
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              {yearsOfExperience()}+
            </p>
            <p className="mt-1 text-xs text-muted sm:text-sm">Years of Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent sm:text-3xl">10+</p>
            <p className="mt-1 text-xs text-muted sm:text-sm">Industrial Clients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              {siteConfig.serviceAreas.length}
            </p>
            <p className="mt-1 text-xs text-muted sm:text-sm">Areas Served</p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">What We Print</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          All types of customized screen printing — if it has a surface, we can
          print on it.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="font-semibold text-accent hover:underline"
          >
            Explore all services →
          </Link>
        </div>
      </section>

      <ClientsSection />
      <ServiceAreas />

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Have something to print?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Tell us what you need and we will get back with a quote — usually the
          same day.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-accent px-8 py-3 font-semibold text-accent-contrast transition-colors hover:bg-accent-strong"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
