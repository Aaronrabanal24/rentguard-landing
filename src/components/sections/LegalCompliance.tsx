const LAW_POINTS = [
  {
    title: "21-day return clock",
    detail: "California Civil Code §1950.5 requires landlords to return deposits or provide itemized deductions within 21 calendar days.",
  },
  {
    title: "Allowed deductions",
    detail: "Only unpaid rent, damage beyond normal wear, or cleaning to return the unit to move-in condition are permitted." ,
  },
  {
    title: "AB 2801 photo evidence",
    detail: "Starting 2024, landlords must document deductions with dated photos or videos and share them with tenants.",
  },
];

const SAFEGUARDS = [
  "RentGuard timestamps every inspection, deduction, and communication for your audit trail.",
  "Automated reminders notify managers before the 21-day deadline expires.",
  "Itemized statements and photo galleries are delivered to tenants automatically.",
];

export default function LegalCompliance() {
  return (
    <section className="bg-white py-16" id="legal">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-semibold text-slate-900">California compliance layer</h2>
        <p className="mt-3 text-sm text-slate-600">
          RentGuard is designed around the California security deposit rules so you stay transparent, timely, and well documented.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {LAW_POINTS.map((point) => (
            <div key={point.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{point.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">How RentGuard safeguards you</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {SAFEGUARDS.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            RentGuard is a technology platform, not a bank or law firm. Escrow is provided by licensed California partners. For legal advice, consult your attorney.
          </p>
        </div>
      </div>
    </section>
  );
}
