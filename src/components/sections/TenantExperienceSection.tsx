"use client";

import { motion } from "@/lib/motion";
import MobileRenterMockup from "@/components/mockups/MobileRenterMockup";

export default function TenantExperienceSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-sm font-medium text-emerald-700">
                ✓ Renter Experience
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
              Your Tenants See Transparency, Not Paperwork
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              No login, no friction. Renters get a secure, read-only timeline showing exactly where their deposit stands — from move-in to final release.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                  <span className="text-sky-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Receive their unique status link
                  </h3>
                  <p className="text-sm text-slate-600">
                    Sent via email or SMS — no account needed
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                  <span className="text-sky-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Track deposit status in real-time
                  </h3>
                  <p className="text-sm text-slate-600">
                    See move-in date, deposit amount, and timeline milestones
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                  <span className="text-sky-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Review itemized deductions with photo proof
                  </h3>
                  <p className="text-sm text-slate-600">
                    All documented with timestamped photos & receipts
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-emerald-50 border border-emerald-200 p-4">
              <p className="text-sm font-medium text-emerald-900">
                <span className="font-bold">Privacy & Security:</span> Secure, read-only link. Tenants can view their timeline but cannot edit or access other data.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-200/30 rounded-full blur-2xl" />

              <div className="relative rounded-2xl bg-white p-4 shadow-xl border border-slate-200">
                <MobileRenterMockup />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
