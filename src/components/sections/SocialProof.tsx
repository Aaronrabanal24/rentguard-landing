const SIGNALS = [
  {
    title: "15 deposits secured today",
    body: "Neutral escrow accounts opened through Novatra in the last 24 hours.",
  },
  {
    title: "38 landlords on the pilot list",
    body: "Independent owners and boutique PMs representing 1,200+ units awaiting onboarding.",
  },
  {
    title: "Renter demand",
    body: "Waitlist tenants rank neutral escrow and clear deductions as top reasons to join.",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-slate-50 py-14" id="signals">
      <div className="mx-auto max-w-5xl px-4 text-slate-800">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">Pilot momentum at a glance</h2>
          <p className="mt-2 text-sm text-slate-600">Metrics refresh weekly so you can see traction without the fluff.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SIGNALS.map((signal) => (
              <div key={signal.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">{signal.title}</p>
                <p className="mt-2">{signal.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">Join the pilot to share results and feature in our first landlord case study.</p>
        </div>
      </div>
    </section>
  );
}
