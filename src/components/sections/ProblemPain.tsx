const SNAPSHOT = {
  target: "Independent landlords • 1–50 units",
  valueProp: "Enterprise-level deposit management tailored for small portfolios",
  differentiators: [
    "California compliance built in from day one",
    "Tenant-friendly transparency that reduces conflict",
    "Automation that frees up hours each move-out",
  ],
  socialProof: "Join 100+ California landlords managing deposits professionally",
};

export default function ProblemPain() {
  return (
    <section className="bg-slate-50 py-16" id="positioning">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Positioning snapshot
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Built for the landlords who do it all</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Novatra gives independent owners enterprise polish: clear tenant communication, compliant documentation, and automated reminders—without hiring extra staff.
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Target</dt>
              <dd className="mt-2 text-base font-semibold text-slate-900">{SNAPSHOT.target}</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Value proposition</dt>
              <dd className="mt-2 text-base font-semibold text-slate-900">{SNAPSHOT.valueProp}</dd>
            </div>
          </dl>

          <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Differentiators</h3>
              <ul className="mt-3 space-y-3 text-sm text-slate-600">
                {SNAPSHOT.differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-sky-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-900/80 p-5 text-slate-100 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Social proof</h3>
              <p className="mt-3 text-base font-semibold">{SNAPSHOT.socialProof}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
