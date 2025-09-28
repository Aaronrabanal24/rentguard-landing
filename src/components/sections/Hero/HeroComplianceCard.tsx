export function HeroComplianceCard() {
  const statusItems = [
    { label: "Identity verified", amount: "Tenant shared documents" },
    { label: "Funds in escrow", amount: "Held by licensed partner" },
    { label: "Lease prepared", amount: "Waiting for e-signature" },
  ] as const;

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white via-sky-100 to-teal-100 blur-2xl" aria-hidden="true" />
      <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-sky-200/50">
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 font-medium text-sky-700">
            <span className="text-sm">🛡️</span> Escrow protection
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-teal-700">
            <span className="text-sm">✔</span> In good standing
          </span>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4 flex items-center justify-between text-sm text-slate-600">
            <span className="font-semibold">Deposit secured in escrow</span>
            <span className="rounded-full bg-white px-3 py-1 text-xs text-sky-700">Pending move-in</span>
          </div>
          <div className="space-y-4">
            {statusItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.amount}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-sky-500/10 text-center text-lg font-semibold leading-10 text-sky-600">✓</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="mb-3 font-semibold text-slate-800">RentGuard keeps tabs on</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-sm">🔒</span> Deposit stays locked until you approve release
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sm">🪪</span> Identity and fraud checks running in the background
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sm">📝</span> CA-compliant lease templates ready to send
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
