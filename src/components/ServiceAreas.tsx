import { siteConfig } from "@/lib/site-config";

export default function ServiceAreas() {
  return (
    <section className="bg-accent-soft/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Where We Work
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Our services are available across the industrial belt of Haryana and
          Rajasthan.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {siteConfig.serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
