import Link from "next/link";
import {
  buildYear,
  siteConfig,
  whatsappLink,
  yearsOfExperience,
} from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-bold">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted">
            {siteConfig.tagline} · Since {siteConfig.foundedYear}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {yearsOfExperience()}+ years of customized screen printing for MNCs
            and Indian companies.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Service Areas
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {siteConfig.serviceAreas.join(" · ")}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-accent">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                WhatsApp us
              </a>
            </li>
            <li className="pt-1">
              <Link href="/contact" className="font-medium text-accent hover:underline">
                Get a quote →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © {buildYear} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
