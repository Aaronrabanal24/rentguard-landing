import { track } from "@/lib/tracking";

export default function Pricing() {
  return (
    <section className="bg-slate-900 py-20" id="pricing">
      <div className="mx-auto max-w-6xl px-4 text-slate-100">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            Simple pricing
          </span>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Transparent plans for renters and landlords</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300">
            Pay only when money moves. Choose the workflow that fits, then upgrade when you need automation for multiple properties.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Renters</h3>
            <p className="mt-2 text-sm text-slate-600">Join for free, keep the deposit safe, and share a small escrow fee only when you're ready to move in.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2"><span className="text-sky-600">✓</span>No monthly commitment</li>
              <li className="flex gap-2"><span className="text-sky-600">✓</span>Escrow releases funds after keys change hands</li>
              <li className="flex gap-2"><span className="text-sky-600">✓</span>Lease templates auto-fill with your details</li>
            </ul>
            <p className="mt-6 text-sm text-slate-500">Escrow fees are shared with the landlord when the move-in is confirmed.</p>
          </div>

          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Landlords</h3>
            <p className="mt-2 text-sm text-slate-600">Keep deposits out of personal accounts, stay compliant, and grow from one unit to many on the same plan.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2"><span className="text-sky-700">✓</span>Verified renter profiles before you book a tour</li>
              <li className="flex gap-2"><span className="text-sky-700">✓</span>Automatic reminders when money or signatures are due</li>
              <li className="flex gap-2"><span className="text-sky-700">✓</span>Audit trail and friendly dispute history for every lease</li>
            </ul>
            <p className="mt-6 text-sm text-slate-500">Flexible monthly plans that fit a single duplex and scale when you bring on more units.</p>
            <p className="mt-2 text-xs text-slate-400">Escrow fees are shared with the renter once the move-in is approved.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              track("click_cta", { role: "general", location: "pricing", label: "protect_next_lease" });
              document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Protect your next lease today
          </button>
        </div>
      </div>
    </section>
  );
}
