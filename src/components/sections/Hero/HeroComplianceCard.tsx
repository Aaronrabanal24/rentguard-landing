export function HeroComplianceCard() {
  const statusItems = [
    { label: "Identity & lease verified", amount: "Driver license + CA lease pack signed" },
    { label: "Deposit in partner escrow", amount: "Release instructions controlled in Fairvia" },
    { label: "Listing Assist badge live", amount: "Token linked to Zillow + Craigslist posts" },
  ] as const;

  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white via-sky-100 to-teal-100 blur-2xl" aria-hidden="true" />
      <div className="relative rounded-[28px] border border-slate-200 bg-white/95 p-6 shadow-xl shadow-sky-200/40 backdrop-blur">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 font-medium text-sky-700">
            <span className="text-sm">🛡️</span> Escrow protection
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-teal-700">
            <span className="text-sm">✔</span> In good standing
          </span>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-600">
            <span className="font-semibold">Fairvia pilot • Maple Street 2B</span>
            <span className="rounded-full bg-white px-3 py-1 text-xs text-sky-700">Move-in scheduled</span>
          </div>
          <div className="space-y-3">
            {statusItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.amount}</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-base font-semibold text-sky-600">✓</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-sm text-slate-600">
          <p className="mb-3 font-semibold text-slate-800">Pilot controls running</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-sm">⏱️</span> 21-day timer visible to both landlord and renter
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sm">📷</span> Photo log organized by room
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sm">🔗</span> SEO badge linked to live listings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
