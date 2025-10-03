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
    <section className="px-4 py-20 bg-gray-100 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See the ROI of every unit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fairvia tracks savings from reduced vacancy days and resolved deposits. Owners can share a live ROI
              link with stakeholders.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Metric 1 */}
          <ScrollReveal delay={0.1}>
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
                ↓40%
              </div>
              <TrendingDown className="w-8 h-8 mb-4 opacity-80" />
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-lg opacity-90">Days vacant reduced</div>
            </div>
          </ScrollReveal>

          {/* Metric 2 */}
          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
                +22%
              </div>
              <Clock className="w-8 h-8 mb-4 opacity-80" />
              <div className="text-5xl font-bold mb-2">94%</div>
              <div className="text-lg opacity-90">Deposits released on time</div>
            </div>
          </ScrollReveal>

          {/* Metric 3 */}
          <ScrollReveal delay={0.3}>
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
                +31%
              </div>
              <Shield className="w-8 h-8 mb-4 opacity-80" />
              <div className="text-5xl font-bold mb-2">87%</div>
              <div className="text-lg opacity-90">Disputes avoided</div>
            </div>
          </ScrollReveal>

          {/* Metric 4 */}
          <ScrollReveal delay={0.4}>
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-6 text-gray-900 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-sm text-gray-600">per unit</div>
              <DollarSign className="w-8 h-8 mb-4 text-teal-700" />
              <div className="text-5xl font-bold mb-2 text-teal-700">$1,800</div>
              <div className="text-lg text-gray-700">Monthly rent recovered</div>
            </div>
          </ScrollReveal>
        </div>

        {/* Value Props */}
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          <ScrollReveal delay={0.5}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Reduce vacancy costs</h3>
              <p className="text-gray-600 text-sm">Faster unit turnover saves $1,800+ per month per unit.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Resolve deposits faster</h3>
              <p className="text-gray-600 text-sm">Fewer disputes, less admin time.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Owner share link</h3>
              <p className="text-gray-600 text-sm">Keep stakeholders in the loop with live updates.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
