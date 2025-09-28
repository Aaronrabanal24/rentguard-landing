const FACTS = [
  {
    title: "CA Civil Code §1950.5",
    detail: "21-day deadline tracking and itemized deductions generated automatically.",
  },
  {
    title: "AB 2801 compliance",
    detail: "Inspection photos, videos, and notes stored and delivered to tenants.",
  },
  {
    title: "Built for <50 units",
    detail: "Neutral escrow and compliance tools tailored to independent owners and boutique PMs.",
  },
] as const;

export function HeroStats() {
  return (
    <div className="mb-6 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
      {FACTS.map((fact) => (
        <div key={fact.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="font-semibold text-slate-900">{fact.title}</p>
          <p className="mt-1">{fact.detail}</p>
        </div>
      ))}
    </div>
  );
}
