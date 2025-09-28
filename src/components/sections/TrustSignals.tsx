import { motion } from "@/lib/motion";

export default function TrustSignals() {
  return (
    <motion.section
      className="bg-white py-14"
      id="trust"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4 text-slate-800">
        <motion.div
          className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Trust the compliance layer</h2>
            <p className="text-sm text-slate-600">
              Fairvia works with licensed DFPI partners and FDIC-insured escrow banks, so every deposit stays neutral and audit-ready.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sky-500">•</span>
                <span>Escrow stays with licensed California partners—Fairvia never touches client funds.</span>
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
            <motion.div
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p className="font-semibold text-slate-900">Escrow partner badge</p>
              <p>Deposits protected by licensed California escrow agents (FDIC partner banks).</p>
            </motion.div>
            <motion.div
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
            >
              <p className="font-semibold text-slate-900">Compliance attestation</p>
              <p>Built around Civil Code §1950.5, AB 12, and AB 2801 from day one.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
