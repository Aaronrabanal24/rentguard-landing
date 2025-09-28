import Link from "next/link";
import { motion } from "@/lib/motion";

const BENEFITS = [
  {
    title: "21-day deadline automation",
    description: "Automated timers, tasking, and email kits keep every refund and notice on schedule.",
    href: "/features",
  },
  {
    title: "AB 2801 photo compliance",
    description: "Guided checklists capture timestamped photos and receipts ready to share with tenants.",
    href: "/features",
  },
  {
    title: "Neutral escrow process",
    description: "Licensed partners hold deposits in third-party escrow so disputes never point back to you.",
    href: "/trust",
  },
  {
    title: "Tenant communication templates",
    description: "Send pre-built updates, deductions, and reminders that meet Civil Code requirements.",
    href: "/how-it-works",
  },
];

export default function CoreBenefits() {
  return (
    <motion.section
      className="bg-slate-50 py-16"
      id="benefits"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Core benefits</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Show the fast path to deeper detail</h2>
          <p className="mt-3 text-sm text-slate-600">
            Landlords land here, understand the value in seconds, then click through to the play-by-play on each workflow.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm transition hover:-translate-y-[2px] hover:border-sky-200 hover:shadow-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
            >
              <p className="text-lg font-semibold text-slate-900">{benefit.title}</p>
              <p className="mt-2 text-sm leading-relaxed">{benefit.description}</p>
              <Link
                href={benefit.href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-sky-600 transition hover:text-sky-700"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
