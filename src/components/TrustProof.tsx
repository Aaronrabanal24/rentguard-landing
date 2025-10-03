import { ScrollReveal } from "./ScrollReveal";
import { Shield, CheckCircle, Clock, AlertCircle } from "lucide-react";

export function TrustProof() {
  return (
    <section className="px-4 py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column - Copy */}
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Compliance Built In</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Compliance you can show
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Every unit link displays a live Trust Badge proving deposits are compliant and audit-ready.
                No more wondering if you&apos;re following the rules—show owners, renters, and auditors the proof.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">State-specific compliance</h3>
                    <p className="text-gray-400 text-sm">
                      Automatic 21-day CA rules, 30-day FL notices, and local interest requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Timestamped audit trail</h3>
                    <p className="text-gray-400 text-sm">
                      Every action logged with timestamps, actors, and document versions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Export-ready archives</h3>
                    <p className="text-gray-400 text-sm">
                      Download complete deposit records as ZIP with receipts, photos, and manifest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Trust Badge Visualization */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Main Trust Badge */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">Fairvia Verified</div>
                      <div className="text-sm text-teal-100">Unit #4B • 123 Oak St</div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                    <div className="text-sm text-teal-100 mb-2">Deposit Status</div>
                    <div className="text-xl font-bold text-white">Compliant Tracking Active</div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white">
                    <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></div>
                    <span>Live on unit page</span>
                  </div>
                </div>
              </div>

              {/* Status State Cards */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {/* Pending */}
                <div className="bg-slate-800 border border-amber-500/30 rounded-lg p-3 text-center">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 mx-auto mb-2 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-xs font-medium text-amber-400">Pending</div>
                  <div className="text-xs text-gray-400 mt-1">Action needed</div>
                </div>

                {/* Held */}
                <div className="bg-slate-800 border border-blue-500/30 rounded-lg p-3 text-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 mx-auto mb-2 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-xs font-medium text-blue-400">Held</div>
                  <div className="text-xs text-gray-400 mt-1">Secure</div>
                </div>

                {/* Released */}
                <div className="bg-slate-800 border border-green-500/30 rounded-lg p-3 text-center">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 mx-auto mb-2 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-xs font-medium text-green-400">Released</div>
                  <div className="text-xs text-gray-400 mt-1">Complete</div>
                </div>
              </div>

              {/* Compliance Timer */}
              <div className="mt-4 bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-teal-400" />
                  <div>
                    <div className="text-sm font-medium text-white">CA 21-Day Timer</div>
                    <div className="text-xs text-gray-400">Move-out: Oct 1, 2025</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-400">14</div>
                  <div className="text-xs text-gray-400">days left</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
