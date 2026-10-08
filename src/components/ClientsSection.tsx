import { clientGroups } from "@/lib/site-config";

export default function ClientsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        Trusted by Industry Leaders
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
        We have been the printing partner of MNCs and Indian companies across
        the region for decades.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {clientGroups.map((group) => (
          <div
            key={group.location}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {group.location}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {group.clients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
