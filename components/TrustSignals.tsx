export default function TrustSignals() {
  return (
    <section className="bg-white py-14" id="trust">
      <div className="mx-auto max-w-5xl px-4 text-slate-800">
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl font-semibold text-slate-900">Built to satisfy California security deposit law</h2>
            <p className="text-sm text-slate-600">
              RentGuard aligns with California Civil Code §1950.5 and AB 2801, keeping deposits neutral, documented, and on schedule.
            </p>
            <ul className="text-sm text-slate-600">
              <li>• Escrow accounts are held by licensed California partners. RentGuard never touches client funds.</li>
              <li>• Compliance reminders surface 21-day deadlines, deduction limits, and delivery requirements.</li>
              <li>• Each lease generates photographic evidence and itemized statements in line with AB 2801.</li>
            </ul>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center">
              <p className="font-semibold text-slate-900">Escrow partner badge</p>
              <p>Deposits protected by licensed CA escrow agent</p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center">
              <p className="font-semibold text-slate-900">Compliance attestation</p>
              <p>Built around CA Civil Code §1950.5 & AB 2801</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
