import { motion } from "@/lib/motion";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { track } from "@/lib/tracking";

export default function ConversionBlocks() {
  return (
    <motion.section
      className="bg-white py-16"
      id="get-started"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
        <motion.div
          id="manager-conversion"
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
            Landlords & PMs
          </span>
          <h3 className="mt-4 text-3xl font-semibold text-slate-900">See 21-day compliance run itself</h3>
          <p className="mt-3 text-sm text-slate-600">
            We&apos;ll audit one of your recent move-outs, show where Fairvia saves time, and hand you the California Deposit Playbook so you stop gambling with penalties.
          </p>
          <button
            onClick={() => {
              track("click_cta", { role: "manager", location: "manager_block", label: "download_playbook" });
              document.getElementById("manager-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-sky-600 transition-all hover:-translate-y-[1px] hover:bg-sky-100/60 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Download the playbook & schedule a demo
          </button>
          <div id="manager-form" className="mt-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Step 1 of 3</p>
            <WaitlistForm defaultRole="landlord" lockRole source="manager_demo" ctaLabel="Request a demo" />
          </div>
        </motion.div>

        <motion.div
          id="renter-conversion"
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
            Renters & tenants
          </span>
          <h3 className="mt-4 text-3xl font-semibold text-slate-900">Join escrow that actually protects you</h3>
          <p className="mt-3 text-sm text-slate-600">
            Grab our Move-Out Rights checklist and be first in line when Fairvia opens neutral escrow in your city—no more chasing landlords for updates.
          </p>
          <button
            onClick={() => {
              track("click_cta", { role: "renter", location: "renter_block", label: "download_checklist" });
              document.getElementById("renter-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-orange-600 transition-all hover:-translate-y-[1px] hover:bg-orange-100/60 hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
          >
            Get the checklist & join the pilot waitlist
          </button>
          <div id="renter-form" className="mt-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Step 1 of 3</p>
            <WaitlistForm defaultRole="renter" lockRole source="renter_enroll" ctaLabel="Join pilot" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
