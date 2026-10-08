import RegMark from "@/components/RegMark";
import { siteConfig } from "@/lib/site-config";

export default function ServiceAreas() {
  return (
    <section className="halftone">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-center gap-3">
          <RegMark className="h-4 w-4 text-accent" />
          <p className="tech-label text-muted">
            Coverage map — Haryana / Rajasthan industrial belt
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-4">
          {siteConfig.serviceAreas.map((area, index) => (
            <span key={area} className="flex items-center gap-2">
              <span className="border-2 border-foreground bg-surface px-4 py-2 font-display text-sm font-extrabold">
                {area}
              </span>
              {index < siteConfig.serviceAreas.length - 1 && (
                <span className="font-mono text-xs text-accent" aria-hidden="true">
                  +
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
