import Link from "next/link";
import { motion } from "@/lib/motion";

const BENEFITS = [
  {
    title: "Deposit command center",
    description: "See escrow status, deadlines, and tenant invites in one workspace built for independent California landlords.",
    href: "/features",
  },
  {
    title: "Case-ready evidence",
    description: "Photo checklists, deduction helpers, and release notes stay attached to each deposit so audits feel effortless.",
    href: "/how-it-works",
  },
  {
    title: "Listing Assist trust signal",
    description: "Add Fairvia&apos;s badge to existing listings and link renters to a live compliance profile without moving marketplaces.",
    href: "/trust",
  },
  {
    title: "Shared updates without inbox ping-pong",
    description: "Guided messages, receipts, and renter confirmations live in one timeline that both sides can reference.",
    href: "/features",
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Pilot outcomes</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Why small California portfolios start with Fairvia</h2>
          <p className="mt-3 text-sm text-slate-600">
            Each benefit maps back to the five pilot layers: compliance workflow, escrow backbone, checklists, Listing Assist, and shared communication.
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
