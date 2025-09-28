import { opportunities } from "@/data/opportunities";

const SUBPOINTS = [
  "Auto-track every 21-day clock.",
  "Capture AB 2801 photos without extra apps.",
  "Send clear tenant updates in seconds.",
];

export default function MarketOpportunity() {
  return (
    <section className="bg-white py-16" id="market">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
            The California challenge
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Deposit management doesn&apos;t have to be a headache</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Independent landlords juggle timelines, receipts, and tenant updates. Novatra keeps every moving part tidy without extra staff.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {opportunities.map((item) => (
              <div key={item.challenge} className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.challenge}</p>
                <p className="text-base font-semibold text-slate-900">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Why it matters now</h3>
          <ul className="mt-3 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            {SUBPOINTS.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-[2px] text-orange-500">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
