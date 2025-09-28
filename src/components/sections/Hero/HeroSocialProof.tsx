export function HeroSocialProof() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm md:flex-row">
        <div className="flex items-center gap-3 text-slate-700">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-9 w-9 rounded-full border border-white/80 bg-gradient-to-br from-sky-400 to-teal-500" />
            ))}
          </div>
          <p className="font-medium">Pilot landlords rely on neutral escrow, verified tenants, and saved dispute history.</p>
        </div>
        <div className="flex items-center gap-6 text-xs uppercase tracking-wide text-slate-400">
          <span>Real escrow</span>
          <span>Verified tenants</span>
          <span>Dispute history saved</span>
        </div>
      </div>
    </div>
  );
}
