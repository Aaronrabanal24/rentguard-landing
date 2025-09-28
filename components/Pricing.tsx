export default function Pricing() {
  return (
    <section className="bg-slate-900 py-20" id="pricing">
      <div className="mx-auto max-w-6xl px-4 text-slate-100">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-200">
            Simple pricing
          </span>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Transparent plans for renters and landlords</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300">
            Pay only when money moves. Choose the workflow that fits, then upgrade when you need automation for multiple properties.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Renters</h3>
            <p className="mt-2 text-sm text-slate-300">Secure every rental with zero upfront cost. Pay a shared escrow fee only when you're ready to move in.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="flex gap-2"><span className="text-orange-200">✓</span>No monthly fee to join</li>
              <li className="flex gap-2"><span className="text-orange-200">✓</span>Escrow holds deposits until keys are exchanged</li>
              <li className="flex gap-2"><span className="text-orange-200">✓</span>Attorney-vetted lease templates included</li>
            </ul>
            <p className="mt-6 text-sm text-orange-200">Escrow fee: 1% of the deposit (split with the landlord)</p>
          </div>

          <div className="rounded-3xl border border-orange-400/40 bg-orange-500/15 p-8">
            <h3 className="text-xl font-semibold text-white">Landlords</h3>
            <p className="mt-2 text-sm text-slate-200">Collect deposits securely, automate compliance for every unit, and keep operations in one place.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="flex gap-2"><span className="text-orange-200">✓</span>Verified renter profiles with identity + income checks</li>
              <li className="flex gap-2"><span className="text-orange-200">✓</span>Automated escrow workflows and reminders</li>
              <li className="flex gap-2"><span className="text-orange-200">✓</span>Digital leases and audit trail for every unit</li>
            </ul>
            <p className="mt-6 text-sm text-orange-100">Plans start at $25 per month for a single unit and scale to $100 per month for portfolios.</p>
            <p className="mt-2 text-xs text-slate-300">Escrow fee: 1% of the deposit (split with the renter)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
