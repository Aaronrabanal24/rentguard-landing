const LAW_POINTS = [
  {
    title: "21-day return clock",
    detail: "Civil Code §1950.5 demands deposits or itemized deductions within 21 calendar days.",
  },
  {
    title: "Allowed deductions",
    detail: "Only unpaid rent, true damage, or cleaning back to move-in condition qualify.",
  },
  {
    title: "AB 2801 photo evidence",
    detail: "Starting 2024, deductions need dated photos or video delivered to tenants.",
  },
];

const SAFEGUARDS = [
  "Novatra timestamps inspections, deductions, and messages for audit-ready records.",
  "Smart nudges alert you before the 21-day window closes.",
  "Itemized statements and photo galleries send to tenants automatically.",
];

export default function LegalCompliance() {
  return (
    <section className="bg-white py-16" id="legal">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-semibold text-slate-900">California compliance, baked in</h2>
        <p className="mt-3 text-sm text-slate-600">
          Novatra keeps every requirement clear so your portfolio stays transparent, timely, and documented.
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
          <h3 className="text-base font-semibold text-slate-900">How Novatra has your back</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {SAFEGUARDS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-sky-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            Novatra is a technology platform, not a bank or law firm. Escrow is provided by licensed California partners. For legal advice, consult your attorney.
          </p>
        </div>
      </div>
    </section>
  );
}
