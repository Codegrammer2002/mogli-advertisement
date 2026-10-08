import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import RegMark from "@/components/RegMark";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Quotes",
  description: `Get a screen printing quote from ${siteConfig.name}. Call, WhatsApp or send an enquiry — serving ${siteConfig.serviceAreas.join(", ")}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <p className="tech-label flex items-center gap-2 text-accent">
        <RegMark className="h-4 w-4" />
        Enquiries — quotes usually same day
      </p>
      <h1 className="mt-4 font-display text-4xl font-black sm:text-5xl">
        Get in touch
      </h1>
      <p className="mt-4 max-w-2xl text-lg font-light text-muted">
        Tell us what you need printed — a photo of the product helps.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="border-2 border-foreground bg-surface p-6">
            <p className="tech-label text-muted">Direct line</p>
            <h2 className="mt-1 font-display text-xl font-black">
              Call or WhatsApp
            </h2>
            <div className="mt-4 space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="block font-mono text-lg font-bold text-accent hover:underline"
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-label inline-block border-2 border-foreground bg-[#25D366] px-5 py-3 text-[#0b2b17] hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="border-2 border-foreground bg-surface p-6">
            <p className="tech-label text-muted">Written enquiries</p>
            <h2 className="mt-1 font-display text-xl font-black">Email</h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 block font-mono text-sm font-bold text-accent hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="border-2 border-foreground bg-surface p-6">
            <p className="tech-label text-muted">Coverage</p>
            <h2 className="mt-1 font-display text-xl font-black">
              Service areas
            </h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted">
              {siteConfig.serviceAreas.join(" · ")}
            </p>
            <p className="tech-label mt-4 text-muted">{siteConfig.address}</p>
          </div>
        </div>

        <div className="border-2 border-foreground bg-surface p-6">
          <p className="tech-label text-muted">Job ticket</p>
          <h2 className="mt-1 font-display text-xl font-black">
            Send an enquiry
          </h2>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
