const DIFFERENTIATORS = [
  {
    title: "True escrow, not insurance",
    detail: "Deposit alternatives like Rhino or Obligo shift risk with insurance. RentGuard keeps deposits in licensed escrow so funds remain neutral and compliant.",
  },
  {
    title: "Compliance automation",
    detail: "21-day deadline reminders, CA deduction caps, AB 2801 photo rules, and audit-ready exports happen automatically.",
  },
  {
    title: "Built for small portfolios",
    detail: "Under 50 units? You still need defensible escrow workflows without adding staff or extra software.",
  },
];

export default function CompetitiveEdge() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100" id="edge">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-semibold">Why RentGuard is different from deposit alternatives</h2>
        <p className="mt-3 text-sm text-slate-300">
          Insurance-style products shift liability to tenants. RentGuard keeps deposits neutral, compliant, and transparent for both parties.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
