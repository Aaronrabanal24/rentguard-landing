const STATS = [
  { number: "147", label: "deposits processed" },
  { number: "100%", label: "released on time" },
  { number: "6.2 hrs", label: "saved per move-out" },
];

export function HeroSocialProof() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
          <div className="grid gap-4 text-center sm:grid-cols-3 sm:text-left">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-2xl font-semibold text-slate-900">{stat.number}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-left text-sm text-slate-600">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
              <span className="text-lg">“</span>
            </div>
            <div>
              <p className="text-base leading-relaxed text-slate-700">
                “I used to wake up at 3am wondering if I missed day 21. Fairvia pings me at day 16, 19, and 20—haven’t forfeited a deposit since June.”
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Maria Torres • 14 units in Fresno
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
