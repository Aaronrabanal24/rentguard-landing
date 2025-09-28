const POINTS = [
  {
    title: "$360B-$720B in deposits",
    detail: "California residential deposits represent an estimated $360–720 million sitting in landlord-controlled accounts each year.",
  },
  {
    title: "AB 12 & AB 2801 deadlines",
    detail: "Deposit caps begin July 2024 and photo documentation becomes mandatory July 2025—landlords need tooling now.",
  },
  {
    title: "21-day compliance confidence",
    detail: "Civil Code §1950.5 timelines stay on track with automated reminders and neutral deposit holding.",
  },
  {
    title: "60% of disputes",
    detail: "Deposits drive most landlord-tenant complaints—transparent processes unlock smoother move-outs.",
  },
];

export default function MarketOpportunity() {
  return (
    <section className="bg-white py-14" id="market">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">Why California landlords need RentGuard now</h2>
          <p className="mt-3 text-sm text-slate-600">
            Security deposits are a regulatory clock. RentGuard captures the opportunity by automating compliance before AB 12 and AB 2801 go live.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {POINTS.map((point) => (
              <div key={point.title} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm">
                <p className="font-semibold text-slate-900">{point.title}</p>
                <p className="mt-1 leading-relaxed">{point.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
