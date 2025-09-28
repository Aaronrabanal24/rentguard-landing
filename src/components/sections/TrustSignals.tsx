export default function TrustSignals() {
  return (
    <section className="bg-white py-14" id="trust">
      <div className="mx-auto max-w-5xl px-4 text-slate-800">
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Trust the compliance layer</h2>
            <p className="text-sm text-slate-600">
              Novatra works with licensed DFPI partners and FDIC-insured escrow banks, so every deposit stays neutral and audit-ready.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sky-500">•</span>
                <span>Escrow stays with licensed California partners—Novatra never touches client funds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sky-500">•</span>
                <span>Reminders surface deadlines, deduction limits, and delivery requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sky-500">•</span>
                <span>Photo logs and itemized statements align with Civil Code §1950.5, AB 12, and AB 2801.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center">
              <p className="font-semibold text-slate-900">Escrow partner badge</p>
              <p>Deposits protected by licensed California escrow agents (FDIC partner banks).</p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center">
              <p className="font-semibold text-slate-900">Compliance attestation</p>
              <p>Built around Civil Code §1950.5, AB 12, and AB 2801 from day one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
