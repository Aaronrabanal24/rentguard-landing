import { ScrollReveal } from "./ScrollReveal";
import {
  Link as LinkIcon,
  Shield,
  DollarSign,
  FileText,
  CheckCircle,
} from "lucide-react";

export function HowItWorks() {
  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-slate-800 text-white">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-bold mb-3 sm:mb-4 px-4">How It Works</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
              Four simple steps to transparent, compliant deposit management—no training required.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 - Create Unit Link */}
          <ScrollReveal delay={0.1}>
            <div className="bg-slate-700/50 border border-slate-600/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-teal-500/30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <span className="text-xl sm:text-2xl font-bold text-teal-600">1</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <LinkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-center mb-2 sm:mb-3 text-white">Create Unit Link</h3>
              <p className="text-gray-400 text-center text-sm mb-3 sm:mb-4 leading-relaxed">
                Generate a shareable link for each property
              </p>
              <div className="bg-slate-600/30 rounded-lg p-3 sm:p-4 space-y-2.5 sm:space-y-3 text-sm">
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Property Address</label>
                  <div className="text-white font-medium text-sm">123 Oak Street, Austin, TX</div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Unit Number</label>
                  <div className="text-white font-medium text-sm">Unit 4B</div>
                </div>
                <button className="w-full bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm touch-manipulation">
                  Generate Link
                </button>
                <div className="flex items-center justify-between bg-teal-500/20 border border-teal-500/30 p-2 rounded">
                  <span className="text-xs text-teal-300 truncate">fairvia.app/unit/abc1</span>
                  <LinkIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 2 - Trust Badge */}
          <ScrollReveal delay={0.2}>
            <div className="bg-slate-700/50 border border-slate-600/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-teal-500/30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <span className="text-xl sm:text-2xl font-bold text-teal-600">2</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-center mb-2 sm:mb-3 text-white">Show the Trust Badge</h3>
              <p className="text-gray-400 text-center text-sm mb-3 sm:mb-4 leading-relaxed">
                A live badge signals deposits are secure and timelines are tracked
              </p>
              <div className="bg-teal-500 rounded-lg p-3 sm:p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Fairvia Verified</span>
                </div>
                <div className="text-xs sm:text-sm opacity-90">Compliant Deposit Tracking</div>
                <div className="mt-3 flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></div>
                  <span>Live on unit page</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 3 - Manage Deposits */}
          <ScrollReveal delay={0.3}>
            <div className="bg-slate-700/50 border border-slate-600/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-teal-500/30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <span className="text-xl sm:text-2xl font-bold text-teal-600">3</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-center mb-2 sm:mb-3 text-white">Manage Deposits Together</h3>
              <p className="text-gray-400 text-center text-sm mb-3 sm:mb-4 leading-relaxed">
                Pending, held, and released deposits appear in one shared ledger
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 sm:p-3 bg-amber-500/20 border border-amber-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-amber-200">Pending</span>
                  </div>
                  <span className="font-bold text-sm sm:text-base text-amber-100">$2,800</span>
                </div>
                <div className="flex items-center justify-between p-2.5 sm:p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-blue-200">Held</span>
                  </div>
                  <span className="font-bold text-sm sm:text-base text-blue-100">$5,200</span>
                </div>
                <div className="flex items-center justify-between p-2.5 sm:p-3 bg-slate-600/30 border border-slate-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-300">Released</span>
                  </div>
                  <span className="font-medium text-gray-300 text-sm sm:text-base">$1,400</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 4 - Compliance */}
          <ScrollReveal delay={0.4}>
            <div className="bg-slate-700/50 border border-slate-600/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-teal-500/30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <span className="text-xl sm:text-2xl font-bold text-teal-600">4</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-center mb-2 sm:mb-3 text-white">Comply with 21-Day Returns</h3>
              <p className="text-gray-400 text-center text-sm mb-3 sm:mb-4 leading-relaxed">
                Itemized deductions, timestamped photos, and receipts build confidence
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 p-2 bg-green-500/20 border border-green-500/30 rounded">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm text-green-100">Itemized deductions</div>
                    <div className="text-xs text-gray-400">Carpet cleaning $350</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-2 bg-green-500/20 border border-green-500/30 rounded">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm text-green-100">Timestamped photos</div>
                    <div className="text-xs text-gray-400">Move-out Oct 1, 2025</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-2 bg-green-500/20 border border-green-500/30 rounded">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm text-green-100">Sent within 21 days</div>
                    <div className="text-xs text-gray-400">✓ Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
