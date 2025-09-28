import { motion } from "@/lib/motion";
import WaitlistForm from "@/components/forms/WaitlistForm";

export default function SignupSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 py-20"
      id="signup"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-4xl rounded-full bg-sky-100/60 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">
            California pilot
          </span>
          <h2 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">Join the California pilot</h2>
          <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
            Currently available in California • Pilot access is limited while we onboard landlords
          </p>
          <p className="mt-4 max-w-xl text-base text-slate-600">Share your info and we&apos;ll ping you as new metros turn on.</p>

          <dl className="mt-8 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="font-semibold text-slate-900">Trust badge ready</dt>
              <dd className="mt-1">Show tenants you bank with licensed escrow.</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="font-semibold text-slate-900">Paperwork in one click</dt>
              <dd className="mt-1">Spin up compliant leases and checklists instantly.</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="font-semibold text-slate-900">Reputation tracker</dt>
              <dd className="mt-1">Log disputes, ratings, and smooth handovers.</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="font-semibold text-slate-900">Mobile friendly</dt>
              <dd className="mt-1">Approve tenants or release funds in a few taps.</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-sky-100/80"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <h3 className="mb-4 text-xl font-semibold text-slate-900">Get on the list</h3>
          <p className="mb-6 text-sm text-slate-600">We&apos;ll send the invite when your market lights up. No spam&mdash;just escrow peace of mind.</p>
          <WaitlistForm />
        </motion.div>
      </div>
    </motion.section>
  );
}
