import Link from "next/link";
import { motion } from "@/lib/motion";

const BENEFITS = [
  {
    step: "Step 3 • Communication",
    title: "Shared updates without inbox ping-pong",
    description:
      "Guided messages, receipts, and renter confirmations live in one timeline. Everyone knows the next action—no more midnight texts.",
    href: "/how-it-works",
  },
  {
    step: "Step 4 • Deposit release",
    title: "Case-ready evidence",
    description:
      "Photo logs, deduction helpers, and release letters compile automatically. Fairvia emails the final packet and proves you hit the 21-day deadline.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Steps 3 &amp; 4</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Keep renters aligned and ship the release on time</h2>
          <p className="mt-3 text-sm text-slate-600">
            After escrow is live, Fairvia manages every update and assembles the release packet so you keep the portion you&apos;re owed—and keep tenants satisfied.
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
              {benefit.step ? <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{benefit.step}</p> : null}
              <p className="mt-2 text-lg font-semibold text-slate-900">{benefit.title}</p>
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
