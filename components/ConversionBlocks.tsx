import WaitlistForm from "./WaitlistForm";
import { track } from "../lib/track";

export default function ConversionBlocks() {
  return (
    <section className="bg-white py-16" id="conversion">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-2">
        <div id="manager-conversion" className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
            Property managers
          </span>
          <h3 className="mt-4 text-3xl font-semibold text-slate-900">Request a demo</h3>
          <p className="mt-3 text-sm text-slate-600">
            Get the California Deposit Compliance Playbook and a walkthrough of the dashboard. First 100 leases are free during the pilot.
          </p>
          <button
            onClick={() => {
              track("click_cta", { role: "manager", location: "manager_block", label: "download_playbook" });
              document.getElementById("manager-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-sky-600"
          >
            Download playbook (email required)
          </button>
          <div id="manager-form" className="mt-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Step 1 of 3</p>
            <WaitlistForm defaultRole="landlord" lockRole source="manager_demo" ctaLabel="Request demo" />
          </div>
        </div>

        <div id="renter-conversion" className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
            Renters & tenants
          </span>
          <h3 className="mt-4 text-3xl font-semibold text-slate-900">Enroll in the pilot</h3>
          <p className="mt-3 text-sm text-slate-600">
            We will send you the Move-Out Rights & Deposit Checklist for California renters and invite you as soon as escrow coverage is available in your city.
          </p>
          <button
            onClick={() => {
              track("click_cta", { role: "renter", location: "renter_block", label: "download_checklist" });
              document.getElementById("renter-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-orange-600"
          >
            Get the checklist (email required)
          </button>
          <div id="renter-form" className="mt-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Step 1 of 3</p>
            <WaitlistForm defaultRole="renter" lockRole source="renter_enroll" ctaLabel="Join pilot" />
          </div>
        </div>
      </div>
    </section>
  );
}
