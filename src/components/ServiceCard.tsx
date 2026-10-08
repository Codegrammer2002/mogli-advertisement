import type { Service } from "@/lib/site-config";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{service.summary}</p>
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
    </div>
  );
}
