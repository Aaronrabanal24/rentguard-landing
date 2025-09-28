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
            Property managers
          </span>
          <h3 className="mt-4 text-3xl font-semibold text-slate-900">Request a demo</h3>
          <p className="mt-3 text-sm text-slate-600">
            Grab the California Deposit Playbook and watch the dashboard flow. Pilot access stays limited to California portfolios for now.
          </p>
          <button
            onClick={() => {
              track("click_cta", { role: "manager", location: "manager_block", label: "download_playbook" });
              document.getElementById("manager-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-sky-600 transition-all hover:-translate-y-[1px] hover:bg-sky-100/60 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Download playbook (email required)
          </button>
          <div id="manager-form" className="mt-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Step 1 of 3</p>
            <WaitlistForm defaultRole="landlord" lockRole source="manager_demo" ctaLabel="Request demo" />
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
          <h3 className="mt-4 text-3xl font-semibold text-slate-900">Enroll in the pilot</h3>
          <p className="mt-3 text-sm text-slate-600">
            Download the Move-Out Rights checklist and get the alert when escrow coverage hits your city.
          </p>
          <button
            onClick={() => {
              track("click_cta", { role: "renter", location: "renter_block", label: "download_checklist" });
              document.getElementById("renter-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-orange-600 transition-all hover:-translate-y-[1px] hover:bg-orange-100/60 hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
          >
            Get the checklist (email required)
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
