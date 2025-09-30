const FACTS = [
  {
    title: "CA Civil Code §1950.5",
    detail: "21-day deadline tracking and itemized deductions generated automatically.",
    mobileDetail: "Auto 21-day tracking",
  },
  {
    title: "AB 2801 compliance",
    detail: "Inspection photos, videos, and notes stored and delivered to tenants.",
    mobileDetail: "Proof-ready inspections",
  },
  {
    title: "Built for <50 units",
    detail: "Neutral escrow and compliance tools tailored to independent owners and boutique PMs.",
    mobileDetail: "Independent owner focus",
  },
] as const;

export function HeroStats() {
  return (
    <div className="mb-6 grid gap-4 text-sm text-slate-600 md:grid-cols-3">
      {FACTS.map((fact) => (
        <div key={fact.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:rounded-3xl md:p-5">
          <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">{fact.title}</p>
          <p className="mt-1 text-sm text-slate-500 sm:hidden">{fact.mobileDetail}</p>
          <p className="mt-1 hidden text-sm text-slate-600 sm:block">{fact.detail}</p>
        </div>
      ))}
    </div>
  );
}
