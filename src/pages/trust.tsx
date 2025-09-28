import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import TrustSignals from "@/components/sections/TrustSignals";
import { motion } from "@/lib/motion";

const SECURITY_POINTS = [
  {
    title: "Licensed escrow partners",
    detail: "Funds stay in bank-grade escrow accounts managed by California DFPI-licensed partners.",
  },
  {
    title: "Audit-ready history",
    detail: "Every inspection, message, and deduction is timestamped, exportable, and easy to share during disputes.",
  },
  {
    title: "Data security",
    detail: "Application data is encrypted in transit and at rest with role-based access controls for your team.",
  },
];

export default function TrustPage() {
  return (
    <PageContainer title="Fairvia — Trust & Security">
      <section className="bg-white py-10 text-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center md:flex-row md:items-center md:text-left">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Trust & Security
            </span>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Escrow protection and documentation landlords can prove</h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Fairvia links licensed escrow partners with timestamped audit trails and guarded tenant data.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/visuals/trust-shield.svg"
              alt="Fairvia escrow shield"
              width={300}
              height={220}
              className="h-auto w-full max-w-xs"
            />
          </div>
        </div>
      </section>
      <TrustSignals />
      <motion.section
        className="bg-slate-900 py-16 text-slate-100"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold">Security safeguards you can hand to stakeholders</h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Share this list with owners, tenants, or partners when you need to demonstrate how Fairvia keeps deposits protected.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SECURITY_POINTS.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </PageContainer>
  );
}
