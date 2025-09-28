import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";

const HIGHLIGHTS = [
  {
    title: "Why we built Fairvia",
    detail: "Independent landlords deserve escrow workflows that match California's evolving requirements without adding headcount.",
  },
  {
    title: "Compliance-first approach",
    detail: "We partner with DFPI-licensed escrow firms and review every feature against state regulations before launch.",
  },
  {
    title: "Pilot program",
    detail: "Fairvia is onboarding California portfolios while we expand templates, integrations, and tenant tooling.",
  },
];

export default function AboutPage() {
  return (
    <PageContainer title="About Fairvia" includeFooter>
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
              About
            </span>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Meet the team simplifying California deposits</h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Fairvia helps small portfolios deliver enterprise-grade compliance, documentation, and tenant transparency.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              >
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
