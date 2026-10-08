import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Quotes",
  description: `Get a screen printing quote from ${siteConfig.name}. Call, WhatsApp or send an enquiry — serving ${siteConfig.serviceAreas.join(", ")}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Get in Touch</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Tell us what you need printed and we will get back with a quote —
        usually the same day.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-semibold">Call or WhatsApp</h2>
            <p className="mt-2 text-sm text-muted">
              Fastest way to reach us during working hours.
            </p>
            <div className="mt-4 space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="block font-medium text-accent hover:underline"
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-semibold">Email</h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block text-sm font-medium text-accent hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-semibold">Service Areas</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {siteConfig.serviceAreas.join(" · ")}
            </p>
            <p className="mt-3 text-sm text-muted">{siteConfig.address}</p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-semibold">Send an Enquiry</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
