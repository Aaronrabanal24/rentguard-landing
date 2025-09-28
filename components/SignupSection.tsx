import WaitlistForm from "./WaitlistForm";

export default function SignupSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 py-20" id="signup">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-4xl rounded-full bg-sky-100/60 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">
            Early access
          </span>
          <h2 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">Protect the next lease in minutes</h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            Drop your details below and we'll send you the dashboard that keeps deposits in escrow, paperwork tidy, and your reputation spotless. No heavy setup - just a guided flow on any device.
          </p>

          <dl className="mt-8 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="font-semibold text-slate-900">Trust badge ready</dt>
              <dd className="mt-1">Show tenants you use licensed escrow and verified workflows.</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="font-semibold text-slate-900">Paperwork in one click</dt>
              <dd className="mt-1">Generate compliant leases and handover checklists instantly.</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="font-semibold text-slate-900">Reputation tracker</dt>
              <dd className="mt-1">Keep a log of disputes, ratings, and happy handovers.</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="font-semibold text-slate-900">Mobile friendly</dt>
              <dd className="mt-1">Review tenants or release funds in just a couple of taps.</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-sky-100/80">
          <h3 className="mb-4 text-xl font-semibold text-slate-900">Get on the list</h3>
          <p className="mb-6 text-sm text-slate-600">We'll send a friendly invite when your market opens. No spam - just escrow peace of mind.</p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
