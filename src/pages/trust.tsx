import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import TrustSignals from "@/components/sections/TrustSignals";
import ListingAssistSection from "@/components/sections/ListingAssistSection";
import PilotComplianceFocusSection from "@/components/sections/PilotComplianceFocus";
import { motion } from "@/lib/motion";

const SECURITY_POINTS = [
  {
    title: "Neutral escrow partner",
    detail: "Funds route straight to DFPI-licensed escrow so personal accounts never enter the conversation.",
  },
  {
    title: "Shared, immutable timeline",
    detail: "Photos, receipts, and approvals live with the deposit record for three years and export in seconds.",
  },
  {
    title: "Listing proof you can share",
    detail: "The Listing Assist badge links to live compliance status, giving renters and advisors confidence before they apply.",
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
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Escrow, leases, and badges that prove the deposit is handled right</h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Fairvia pilots with DFPI partners, verified leases, and public proof so landlords, renters, and advisors can point to neutral controls before questions even start.
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
      <ListingAssistSection />
      <PilotComplianceFocusSection />
      <motion.section
        className="bg-slate-900 py-16 text-slate-100"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold">Security talking points for owners, tenants, and attorneys</h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Use these proof points when someone asks, &ldquo;Why should I trust Fairvia with our deposits?&rdquo;
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
