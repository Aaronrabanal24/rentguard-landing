import Link from "next/link";
import { motion } from "@/lib/motion";

const BENEFITS = [
  {
    title: "Landlord workspace",
    description: "Track properties, tenants, and escrow status in one Fairvia pilot dashboard built for 1-20 unit owners.",
    href: "/features",
  },
  {
    title: "Move-in and move-out guides",
    description: "Photo checklists, deduction helpers, and 21-day timers shape each case from walkthrough to release.",
    href: "/features",
  },
  {
    title: "Listing Assist badge",
    description: "Overlay a Fairvia trust badge on Zillow, Craigslist, or Facebook listings with QR codes and short links.",
    href: "/trust",
  },
  {
    title: "Compliance-ready communication",
    description: "Guided message templates, receipts, and FAQs keep renters informed without extra back-and-forth.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Landlord benefits</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Show the pilot scope without adding clutter</h2>
          <p className="mt-3 text-sm text-slate-600">
            Independent landlords understand what the Fairvia pilot covers and where it fits alongside their existing listings.
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
