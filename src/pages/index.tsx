import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/Button";
import {
  Shield,
  Link as LinkIcon,
  DollarSign,
  FileText,
  TrendingDown,
  Clock,
  CheckCircle,
  Share2,
  AlertCircle,
} from "lucide-react";
import { organizationSchema, softwareSchema } from "@/lib/structuredData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fairvia - Transparent Leasing Platform</title>
        <meta
          name="description"
          content="Transparency and trust between owners and property managers. Fairvia makes deposits clear, compliant, and dispute-ready."
        />
        <link rel="canonical" href="https://fairvia.com/" />
        <meta property="og:title" content="Fairvia - Transparent Leasing Platform" />
        <meta property="og:description" content="One smart unit link shows the same record to everyone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold text-white">Fairvia</span>
              </div>
              <div className="flex items-center gap-4">
                <Button size="sm" variant="secondary">Watch Demo</Button>
                <Button size="sm" variant="primary">Join the Pilot</Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-24 pb-12">
          <div className="relative z-10 px-4 mx-auto max-w-5xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Transparent Leasing Platform</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            >
              Transparency and trust between owners and property managers
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Fairvia makes deposits clear, compliant, and dispute-ready. One smart unit link shows the same record to
              everyone.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button size="lg" variant="primary" className="min-w-[200px]">
                Join the Pilot →
              </Button>
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Deposit tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Audit-ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>No heavy PMS</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 py-20 bg-gray-100 text-gray-900">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-xl text-gray-600">
                  Four simple steps to transparent, compliant deposit management—no training required.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 - Create Unit Link */}
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-teal-600">1</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 mx-auto">
                    <LinkIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-center mb-3">Create Unit Link</h3>
                  <p className="text-gray-600 text-center text-sm mb-4">
                    Generate a shareable link for each property
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3 text-sm">
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">Property Address</label>
                      <div className="text-gray-900 font-medium">123 Oak Street, Austin, TX</div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">Unit Number</label>
                      <div className="text-gray-900 font-medium">Unit 4B</div>
                    </div>
                    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      Generate Link
                    </button>
                    <div className="flex items-center justify-between bg-teal-50 p-2 rounded">
                      <span className="text-xs text-teal-700 truncate">fairvia.app/unit/abc1</span>
                      <LinkIcon className="w-4 h-4 text-teal-600" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 2 - Trust Badge */}
              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-teal-600">2</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-center mb-3">Show the Trust Badge</h3>
                  <p className="text-gray-600 text-center text-sm mb-4">
                    A live badge signals deposits are secure and timelines are tracked
                  </p>
                  <div className="bg-teal-500 rounded-lg p-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">Fairvia Verified</span>
                    </div>
                    <div className="text-sm opacity-90">Compliant Deposit Tracking</div>
                    <div className="mt-3 flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></div>
                      <span>Live on unit page</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 3 - Manage Deposits */}
              <ScrollReveal delay={0.3}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-teal-600">3</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4 mx-auto">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-center mb-3">Manage Deposits Together</h3>
                  <p className="text-gray-600 text-center text-sm mb-4">
                    Pending, held, and released deposits appear in one shared ledger
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <span className="text-sm font-medium">Pending</span>
                      </div>
                      <span className="font-bold">$2,800</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium">Held</span>
                      </div>
                      <span className="font-bold">$5,200</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-600">Released</span>
                      </div>
                      <span className="font-medium text-gray-600">$1,400</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 4 - Compliance */}
              <ScrollReveal delay={0.4}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-teal-600">4</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 mx-auto">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-center mb-3">Comply with 21-Day Returns</h3>
                  <p className="text-gray-600 text-center text-sm mb-4">
                    Itemized deductions, timestamped photos, and receipts build confidence
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 p-2 bg-green-50 rounded">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Itemized deductions</div>
                        <div className="text-xs text-gray-500">Carpet cleaning $350</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-2 bg-green-50 rounded">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Timestamped photos</div>
                        <div className="text-xs text-gray-500">Move-out Oct 1, 2025</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-2 bg-green-50 rounded">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Sent within 21 days</div>
                        <div className="text-xs text-gray-500">✓ Compliant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Your Properties Dashboard Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold mb-2">Your Properties</h2>
                <p className="text-gray-400 mb-8">Manage your units, track timelines, and monitor performance</p>

                <div className="grid gap-4 md:grid-cols-3 mb-8">
                  <div className="bg-white rounded-xl p-6 text-gray-900">
                    <div className="text-sm text-gray-500 mb-1">Units</div>
                    <div className="text-4xl font-bold mb-1">4</div>
                    <div className="text-sm text-gray-600">3 active</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-gray-900">
                    <div className="text-sm text-gray-500 mb-1">Avg days</div>
                    <div className="text-4xl font-bold mb-1">6</div>
                    <div className="text-sm text-gray-600">Vacant</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-gray-900">
                    <div className="text-sm text-gray-500 mb-1">Monthly rent</div>
                    <div className="text-4xl font-bold mb-1">$12k</div>
                    <div className="text-sm text-gray-600">Total value</div>
                  </div>
                </div>

                {/* Deposit Overview */}
                <div className="bg-white rounded-xl p-6 text-gray-900">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Deposit Overview</h3>
                      <p className="text-sm text-gray-500">Security deposits across all units</p>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <span className="font-semibold text-red-900">1 deposit requires attention</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold mb-1">$6,700 <span className="text-lg text-gray-500">held</span></div>
                    <div className="text-sm text-gray-500">Across 3 units</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600 mb-1">Pending</div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-amber-600">1</span>
                        <span className="text-xs text-gray-500">Awaiting action</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600 mb-1">Held</div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">3</span>
                        <span className="text-xs text-gray-500">In account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ROI Section */}
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

        {/* Final CTA */}
        <section className="px-4 py-20">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to bring transparency to your properties?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join property managers who are building trust through clear, compliant deposit management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="primary" className="min-w-[200px]">
                  Join the Pilot →
                </Button>
                <Button size="lg" variant="secondary" className="min-w-[200px]">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer */}
        <footer className="px-4 py-12 border-t border-slate-700">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                  </div>
                  <span className="text-lg font-bold">Fairvia</span>
                </div>
                <p className="text-gray-400 text-sm">Plain form, trust by design</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                  <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-700 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Fairvia. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
