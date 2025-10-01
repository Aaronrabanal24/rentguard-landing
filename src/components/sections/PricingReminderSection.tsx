"use client";

import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function PricingReminderSection() {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 to-purple-50 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-emerald-100 border border-emerald-300 px-4 py-2 text-sm font-bold text-emerald-800">
              ⚡ Free to Start
            </span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-4">
            First Unit Free, Forever
          </h2>

          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            No credit card required. Test the full platform on your first property. Scale pricing only kicks in when you add more units.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto mb-8">
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <div className="text-3xl font-bold text-slate-900 mb-1">$0</div>
              <div className="text-sm text-slate-600">First unit, no time limit</div>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <div className="text-3xl font-bold text-slate-900 mb-1">$12</div>
              <div className="text-sm text-slate-600">Per unit/month for 2-10 units</div>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <div className="text-3xl font-bold text-slate-900 mb-1">Custom</div>
              <div className="text-sm text-slate-600">Volume pricing for 10+ units</div>
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

          <p className="text-xs text-slate-500 mt-4">
            All features included. Cancel anytime. No hidden fees.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
