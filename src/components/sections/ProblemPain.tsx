const MANAGER_PAIN = [
  "Running fewer than 50 doors means you still handle deposits yourself—automated timelines keep every refund on schedule.",
  "Deposit caps from AB 12 and deduction limits become simple when best practices are built into the workflow.",
  "Scattered emails and photos disappear once documentation lives in one organized record."
];

const RENTER_PAIN = [
  "Tenants want confidence about where deposits sit and when funds will be released.",
  "Sharing photo evidence and itemized statements upfront builds trust from move-in to move-out.",
  "A neutral activity log makes it easy to resolve questions without conflict."
];

export default function ProblemPain() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100" id="problems">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold">The California security deposit headache</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-300">
          RentGuard tackles the same pain points for both sides: legal timelines, compliant documentation, and transparent communication.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-white">Property managers & owners</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {MANAGER_PAIN.map((pain) => (
                <li key={pain}>• {pain}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-white">Renters & tenants</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {RENTER_PAIN.map((pain) => (
                <li key={pain}>• {pain}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
