import { clientGroups } from "@/lib/site-config";

export default function ClientsSection() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="tech-label text-accent">Client ledger</p>
        <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">
          Trusted by industry
        </h2>
        <p className="mt-3 max-w-2xl font-light text-muted">
          MNCs and Indian manufacturers who have kept coming back to us for
          decades.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse border-2 border-foreground text-sm">
            <thead>
              <tr className="border-b-2 border-foreground bg-background text-left">
                <th className="tech-label px-4 py-3 font-bold">Location</th>
                <th className="tech-label px-4 py-3 font-bold">Company</th>
                <th className="tech-label hidden px-4 py-3 font-bold sm:table-cell">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {clientGroups.flatMap((group) =>
                group.clients.map((client, index) => (
                  <tr key={client} className="border-b border-border last:border-b-0">
                    <td className="px-4 py-2.5 align-top font-mono text-xs text-muted">
                      {index === 0 ? group.location.toUpperCase() : ""}
                    </td>
                    <td className="px-4 py-2.5 font-medium">{client}</td>
                    <td className="hidden px-4 py-2.5 font-mono text-xs text-accent sm:table-cell">
                      ACTIVE ●
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
