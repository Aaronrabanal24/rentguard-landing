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
            Pilot Pricing: 1 Unit Free
          </h2>

          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            No credit card required. Start with 1 free unit forever. Scale at $99/month for unlimited units.
          </p>

          <div className="rounded-lg bg-slate-800/50 backdrop-blur-sm border-2 border-sky-500 p-6 shadow-lg shadow-sky-500/20 max-w-md mx-auto mb-8">
            <div className="text-4xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent mb-2">1 Unit Free</div>
            <div className="text-lg text-slate-300 mb-3">Then $99/month for unlimited units</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Pilot Pricing</div>
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
