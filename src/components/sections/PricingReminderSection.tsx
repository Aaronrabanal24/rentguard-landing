"use client";

import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function PricingReminderSection() {
  return (
    <section className="relative bg-transparent py-12 sm:py-16" style={{ zIndex: 1 }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm px-4 py-2 text-sm font-bold text-emerald-300">
              ⚡ Free to Start
            </span>
          </div>

          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-sky-100 to-purple-200 bg-clip-text text-transparent sm:text-3xl mb-4">
            First Unit Free, Forever
          </h2>

          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            No credit card required. Test the full platform on your first property. Join our pilot at $99/month to scale.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto mb-8">
            <div className="rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent mb-1">Free</div>
              <div className="text-sm text-slate-300">First unit, forever</div>
            </div>
            <div className="rounded-lg bg-slate-800/50 backdrop-blur-sm border-2 border-sky-500 p-6 shadow-lg shadow-sky-500/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent mb-1">$99</div>
              <div className="text-sm text-slate-300">Pilot pricing per month</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-started">
              <Button size="lg" className="min-w-[200px]">
                Start Free Unit
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                See Full Pricing
              </Button>
            </Link>
          </div>

          <p className="text-xs text-slate-400 mt-4">
            All features included. Cancel anytime. No hidden fees.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
