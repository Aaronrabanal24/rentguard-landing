import { ScrollReveal } from "./ScrollReveal";
import {
  TrendingDown,
  Clock,
  Shield,
  DollarSign,
  CheckCircle,
  Share2,
} from "lucide-react";

export function ROISection() {
  return (
    <section className="px-4 py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 mb-6">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-medium">Real Value</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See the ROI of every unit</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track savings from reduced vacancy, faster deposits, and avoided disputes with shareable ROI reports.
            </p>
          </div>
        </ScrollReveal>

        {/* Enhanced numeric cards with visual emphasis */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {/* Metric 1 - Days Vacant Reduced */}
          <ScrollReveal delay={0.1}>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 relative overflow-hidden group hover:border-green-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <TrendingDown className="w-10 h-10 text-green-400" />
                  <div className="bg-green-500/20 rounded-full px-3 py-1 text-sm font-bold text-green-300">
                    ↓40%
                  </div>
                </div>
                <div className="text-6xl sm:text-7xl font-black mb-2 bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                  12
                </div>
                <div className="text-lg text-gray-300 font-medium">Days vacant reduced</div>
                <div className="mt-3 text-sm text-gray-400">Save $1,800+ per unit monthly</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Metric 2 - On-Time Deposits */}
          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Clock className="w-10 h-10 text-blue-400" />
                  <div className="bg-blue-500/20 rounded-full px-3 py-1 text-sm font-bold text-blue-300">
                    +22%
                  </div>
                </div>
                <div className="text-6xl sm:text-7xl font-black mb-2 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  94%
                </div>
                <div className="text-lg text-gray-300 font-medium">Deposits released on time</div>
                <div className="mt-3 text-sm text-gray-400">Faster closings, happier renters</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Metric 3 - Disputes Avoided */}
          <ScrollReveal delay={0.3}>
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 border border-teal-500/30 rounded-2xl p-8 relative overflow-hidden group hover:border-teal-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Shield className="w-10 h-10 text-teal-400" />
                  <div className="bg-teal-500/20 rounded-full px-3 py-1 text-sm font-bold text-teal-300">
                    +31%
                  </div>
                </div>
                <div className="text-6xl sm:text-7xl font-black mb-2 bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
                  87%
                </div>
                <div className="text-lg text-gray-300 font-medium">Disputes avoided</div>
                <div className="mt-3 text-sm text-gray-400">Clear records prevent conflicts</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Metric 4 - Monthly Rent Recovered */}
          <ScrollReveal delay={0.4}>
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-2xl p-8 relative overflow-hidden group hover:border-amber-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <DollarSign className="w-10 h-10 text-amber-400" />
                  <div className="bg-amber-500/20 rounded-full px-3 py-1 text-sm font-bold text-amber-300">
                    per unit
                  </div>
                </div>
                <div className="text-5xl sm:text-6xl font-black mb-2 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  $1,800
                </div>
                <div className="text-lg text-gray-300 font-medium">Monthly rent recovered</div>
                <div className="mt-3 text-sm text-gray-400">From faster unit turnover</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Value Props */}
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          <ScrollReveal delay={0.5}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="font-bold mb-2 text-white">Reduce vacancy costs</h3>
              <p className="text-gray-400 text-sm">Faster unit turnover saves $1,800+ per month per unit.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="font-bold mb-2 text-white">Resolve deposits faster</h3>
              <p className="text-gray-400 text-sm">Fewer disputes, less admin time.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="font-bold mb-2 text-white">Owner share link</h3>
              <p className="text-gray-400 text-sm">Keep stakeholders in the loop with live updates.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
