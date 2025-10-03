import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Shield, Clock, FileCheck, BarChart3, Check, ArrowRight } from "lucide-react";
import { organizationSchema, softwareSchema } from "@/lib/structuredData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fairvia - Transparent Leasing and Deposit Operations Layer</title>
        <meta
          name="description"
          content="Plain form, trust by design. Lightweight leasing & deposit operations layer. Smart unit links track inquiries, CA-compliant deposit workflows, ROI proof for owners."
        />
        <link rel="canonical" href="https://fairvia.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Fairvia - Transparent Leasing and Deposit Operations Layer" />
        <meta property="og:description" content="Plain form, trust by design. Fill units faster, handle deposits cleanly, prove your work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/" />
        <meta property="og:image" content="https://fairvia.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fairvia - Transparent Leasing and Deposit Operations Layer" />
        <meta name="twitter:description" content="Plain form, trust by design. Built for property teams." />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-fairvia-teal">Fairvia</span>
              </div>
              <div className="hidden space-x-8 md:flex">
                <a href="#features" className="text-gray-700 hover:text-fairvia-teal transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-fairvia-teal transition-colors">How It Works</a>
                <a href="#pricing" className="text-gray-700 hover:text-fairvia-teal transition-colors">Pricing</a>
              </div>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-purple-50 to-white" />
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 80% 20%, rgba(0, 187, 167, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(0, 187, 167, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(0, 187, 167, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 px-4 py-32 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center px-6 py-2 border-2 rounded-full bg-fairvia-teal-light border-fairvia-teal-border">
                <Shield className="w-4 h-4 mr-2 text-fairvia-teal" />
                <span className="text-sm font-medium text-fairvia-teal">Trust and Spare Agency</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Transparent Leasing and Deposit Operations Layer
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-12 text-xl text-gray-600 sm:text-2xl"
            >
              Transparent, between Renter and Owner
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button size="lg" className="group">
                Plain form, trust by design
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-sm text-gray-500"
            >
              Trusted by property managers across California and Florida
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Why Property Teams Choose Fairvia</h2>
              <p className="max-w-2xl mx-auto text-xl text-gray-600">
                Three core capabilities that transform your leasing operations
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-12 md:grid-cols-3">
            {/* Feature 1 */}
            <ScrollReveal delay={0.1}>
              <div className="relative p-8 transition-all duration-300 border-2 border-gray-200 rounded-2xl hover:border-fairvia-teal hover:shadow-lg group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-xl bg-fairvia-teal-light group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-fairvia-teal" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-center text-gray-900">Fill Units Faster</h3>
                <p className="text-center text-gray-600">
                  Smart unit links track every inquiry from first contact to signed lease. No more lost leads or missed follow-ups.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-fairvia-teal" />
                    QR codes for instant access
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-fairvia-teal" />
                    Real-time inquiry tracking
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-fairvia-teal" />
                    Automated follow-ups
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 2 */}
            <ScrollReveal delay={0.2}>
              <div className="relative p-8 transition-all duration-300 border-2 border-fairvia-teal rounded-2xl shadow-lg group">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-fairvia-teal text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-xl bg-fairvia-teal-light group-hover:scale-110 transition-transform">
                    <FileCheck className="w-8 h-8 text-fairvia-teal" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-center text-gray-900">Handle Deposits Cleanly</h3>
                <p className="text-center text-gray-600">
                  CA-compliant deposit workflows with automatic timers and itemization. Never miss a deadline again.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-fairvia-teal" />
                    State-specific templates
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-fairvia-teal" />
                    Automatic compliance timers
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-fairvia-teal" />
                    Photo & receipt uploads
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 3 */}
            <ScrollReveal delay={0.3}>
              <div className="relative p-8 transition-all duration-300 border-2 border-gray-200 rounded-2xl hover:border-fairvia-teal hover:shadow-lg group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-xl bg-fairvia-teal-light group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-fairvia-teal" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-center text-gray-900">Prove Your Work</h3>
                <p className="text-center text-gray-600">
                  Owner ROI board with weekly performance rollup and exportable archives. Show results, build trust.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-fairvia-teal" />
                    Weekly owner reports
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-fairvia-teal" />
                    Exportable timelines
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-fairvia-teal" />
                    Audit-ready records
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="px-4 py-24 bg-gray-50 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
                <p className="max-w-2xl mx-auto text-xl text-gray-600">
                  Four simple steps from inquiry to proof
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Smart Unit Link",
                  description: "Post anywhere with QR code. Track everything from first inquiry.",
                },
                {
                  step: 2,
                  title: "Timeline View",
                  description: "Shared proof from contact to lease. Renters see their progress.",
                },
                {
                  step: 3,
                  title: "Deposit Workflow",
                  description: "State templates, timers, itemization with photos and receipts.",
                },
                {
                  step: 4,
                  title: "Owner Dashboard",
                  description: "Weekly ROI board and archive export for full transparency.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.1}>
                  <div className="relative p-6 bg-white rounded-xl shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-fairvia-teal text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Simple Pricing</h2>
              <p className="mb-12 text-xl text-gray-600">Start free. Scale as you grow.</p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter */}
            <ScrollReveal delay={0.1}>
              <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-gray-300 transition-colors">
                <h3 className="mb-2 text-xl font-bold">Starter</h3>
                <p className="mb-4 text-3xl font-bold">Free</p>
                <p className="mb-6 text-gray-600">First unit always free</p>
                <ul className="mb-8 space-y-3">
                  {["Smart unit link & QR", "Public timeline view", "Basic deposit tracking"].map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-fairvia-teal flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full">
                  Start Free
                </Button>
              </div>
            </ScrollReveal>

            {/* SMB Pro */}
            <ScrollReveal delay={0.2}>
              <div className="relative p-8 border-2 rounded-2xl border-fairvia-teal shadow-xl">
                <div className="absolute top-0 right-0 px-3 py-1 text-xs font-medium text-white transform translate-x-2 -translate-y-2 rounded-full bg-fairvia-teal">
                  Popular
                </div>
                <h3 className="mb-2 text-xl font-bold">SMB Pro</h3>
                <p className="mb-4 text-3xl font-bold">
                  $49-149<span className="text-base font-normal text-gray-600">/mo</span>
                </p>
                <p className="mb-6 text-gray-600">For growing portfolios</p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Everything in Starter",
                    "CA/FL compliance workflows",
                    "Owner ROI dashboard",
                    "CSV export & email summaries",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-fairvia-teal flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </ScrollReveal>

            {/* Enterprise */}
            <ScrollReveal delay={0.3}>
              <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-gray-300 transition-colors">
                <h3 className="mb-2 text-xl font-bold">Enterprise</h3>
                <p className="mb-4 text-3xl font-bold">
                  $1<span className="text-base font-normal text-gray-600">/unit/mo</span>
                </p>
                <p className="mb-6 text-gray-600">Regional portfolios</p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Everything in Pro",
                    "SSO & role-based access",
                    "Multi-state templates",
                    "API access & webhooks",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-fairvia-teal flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full">
                  Contact Sales
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="waitlist"
          className="px-4 py-24 bg-gradient-to-br from-fairvia-teal to-primary-600 sm:px-6 lg:px-8"
        >
          <ScrollReveal>
            <div className="mx-auto text-center max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Ready to Get Started?</h2>
              <p className="mb-8 text-xl text-white/90">Join the waitlist for early access</p>

              <form className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <Button type="submit" className="px-8 py-3 font-medium bg-white text-fairvia-teal hover:bg-gray-100">
                    Join
                  </Button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer */}
        <footer className="px-4 py-12 bg-gray-900 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <h3 className="mb-4 text-lg font-bold text-white">Fairvia</h3>
                <p className="text-gray-400">Plain form, trust by design</p>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-white">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#features" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-white">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-white">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/privacy" className="hover:text-white transition-colors">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white transition-colors">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/security" className="hover:text-white transition-colors">
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-800">
              <p>&copy; {new Date().getFullYear()} Fairvia. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
