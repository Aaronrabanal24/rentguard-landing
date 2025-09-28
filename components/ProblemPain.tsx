const MANAGER_PAIN = [
  "Running fewer than 50 doors means you still handle deposits yourself—and one missed 21-day deadline can trigger double-damages claims.",
  "Manual deductions risk violating cleaning and damage caps, exposing you to bad faith penalties.",
  "Scattered emails and photos make it hard to compile a defensible audit trail when challenged."
];

const RENTER_PAIN = [
  "You rarely know where the deposit sits or when it will be returned.",
  "Itemized deductions arrive late or lack photo evidence, despite your rights under CA Civil Code §1950.5.",
  "Escalating disputes is confusing without a neutral record of inspections and messages."
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
