import Link from "next/link";
import RegMark from "@/components/RegMark";
import {
  buildYear,
  siteConfig,
  whatsappLink,
  yearsOfExperience,
} from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-foreground bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display font-extrabold">{siteConfig.name}</p>
          <p className="tech-label mt-1 text-muted">
            {siteConfig.tagline} · since {siteConfig.foundedYear}
          </p>
          <p className="mt-3 max-w-xs text-sm font-light text-muted">
            {yearsOfExperience()}+ years of customized screen printing for MNCs
            and Indian companies.
          </p>
        </div>

        <div>
          <p className="tech-label font-bold">Service areas</p>
          <p className="mt-3 text-sm font-light leading-relaxed text-muted">
            {siteConfig.serviceAreas.join(" · ")}
          </p>
        </div>

        <div>
          <p className="tech-label font-bold">Contact</p>
          <ul className="mt-3 space-y-2 font-mono text-xs">
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
              <Link href="/contact" className="font-bold text-accent hover:underline">
                Get a quote →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="tech-label text-muted">
            © {buildYear} {siteConfig.name}
          </p>
          <p className="tech-label flex items-center gap-2 text-muted">
            <RegMark className="h-3.5 w-3.5 text-accent" />
            Printed in Haryana
          </p>
        </div>
      </div>
    </footer>
  );
}
