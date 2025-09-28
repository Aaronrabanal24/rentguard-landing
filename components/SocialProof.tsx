const SIGNALS = [
  {
    title: "Pilot cohort",
    body: "First 100 California leases enrolling now with concierge onboarding.",
  },
  {
    title: "Manager waitlist",
    body: "Property managers representing 1,200+ units have requested demos to streamline deposit compliance.",
  },
  {
    title: "Tenant interest",
    body: "Renter waitlist sign-ups cite faster refunds and transparent deductions as top reasons to join.",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-slate-50 py-14" id="signals">
      <div className="mx-auto max-w-5xl px-4 text-slate-800">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">Pilot demand at a glance</h2>
          <p className="mt-2 text-sm text-slate-600">
            We are actively onboarding California property managers and renters. Metrics below are updated weekly so you can see momentum without the hype.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SIGNALS.map((signal) => (
              <div key={signal.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">{signal.title}</p>
                <p className="mt-2">{signal.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Want to be featured in the first case study? Join the pilot and share your results as we collect verified testimonials.
          </p>
        </div>
      </div>
    </section>
  );
}
