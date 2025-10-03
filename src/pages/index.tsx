import Head from "next/head";
import Link from "next/link";
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
        {/* Hero Section with Gradient Background */}
        <section className="relative min-h-[600px] overflow-hidden">
          {/* Background Gradients - matching Figma design */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-purple-50 to-white" />
          <div className="absolute inset-0 bg-gradient-radial from-purple-100/40 via-transparent to-transparent"
               style={{ backgroundPosition: 'center top' }} />
          <div className="absolute inset-0 bg-gradient-radial from-blue-100/30 via-transparent to-transparent"
               style={{ backgroundPosition: 'center center' }} />

          <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-6 py-2 border-2 rounded-full bg-fairvia-teal-light border-fairvia-teal-border">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="none">
                  <path d="M9.66667 5.58333C9.66667 6.5 8.625 7.04167 7.19833 7.45833C7.07133 7.5 6.93317 7.49833 6.8075 7.45C5.375 7.04167 4.33333 6.5 4.33333 5.58333V3.5C4.33333 3.345 4.39483 3.197 4.50417 3.08733C4.6135 2.97767 4.762 2.91667 4.91667 2.91667C6.08333 2.91667 7.54167 2.21667 8.55667 1.33C8.68017 1.224 8.8375 1.16667 9 1.16667C9.1625 1.16667 9.31983 1.224 9.44333 1.33C10.4642 2.222 11.9167 2.91667 13.0833 2.91667C13.238 2.91667 13.3864 2.97767 13.4958 3.08733C13.6052 3.197 13.6667 3.345 13.6667 3.5V5.58333Z" stroke="#00BBA7" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium text-fairvia-teal">Trust and Spare Agency</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl mx-auto mb-6 text-4xl font-bold text-center text-gray-900 sm:text-5xl lg:text-6xl">
              Transparent Leasing and Deposit Operations Layer
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto mb-12 text-xl text-center text-gray-600 sm:text-2xl">
              Transparent, between Renter and Owner
            </p>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href="#waitlist"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white transition-all duration-200 rounded-full bg-fairvia-teal hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fairvia-teal"
              >
                Plain form, trust by design
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-fairvia-teal-light">
                  <svg className="w-6 h-6 text-fairvia-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Fill Units Faster</h3>
              <p className="text-gray-600">Smart unit links track every inquiry from first contact to signed lease</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-fairvia-teal-light">
                  <svg className="w-6 h-6 text-fairvia-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Handle Deposits Cleanly</h3>
              <p className="text-gray-600">CA-compliant deposit workflows with automatic timers and itemization</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-fairvia-teal-light">
                  <svg className="w-6 h-6 text-fairvia-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Prove Your Work</h3>
              <p className="text-gray-600">Owner ROI board with weekly performance rollup and exportable archives</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">How It Works</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-fairvia-teal text-white font-bold">1</div>
                <h3 className="mb-2 text-lg font-semibold">Smart Unit Link</h3>
                <p className="text-gray-600">Post anywhere with QR code. Track everything from first inquiry.</p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-fairvia-teal text-white font-bold">2</div>
                <h3 className="mb-2 text-lg font-semibold">Timeline View</h3>
                <p className="text-gray-600">Shared proof from contact to lease. Renters see their progress.</p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-fairvia-teal text-white font-bold">3</div>
                <h3 className="mb-2 text-lg font-semibold">Deposit Workflow</h3>
                <p className="text-gray-600">State templates, timers, itemization with photos and receipts.</p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-fairvia-teal text-white font-bold">4</div>
                <h3 className="mb-2 text-lg font-semibold">Owner Dashboard</h3>
                <p className="text-gray-600">Weekly ROI board and archive export for full transparency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-900">Simple Pricing</h2>
          <p className="mb-12 text-xl text-center text-gray-600">Start free. Scale as you grow.</p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter */}
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <h3 className="mb-2 text-xl font-bold">Starter</h3>
              <p className="mb-4 text-3xl font-bold">Free</p>
              <p className="mb-6 text-gray-600">First unit always free</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Smart unit link & QR</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Public timeline view</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Basic deposit tracking</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                Start Free
              </button>
            </div>

            {/* SMB Pro */}
            <div className="relative p-8 border-2 rounded-lg border-fairvia-teal">
              <div className="absolute top-0 right-0 px-3 py-1 text-xs font-medium text-white transform translate-x-2 -translate-y-2 rounded-full bg-fairvia-teal">
                Popular
              </div>
              <h3 className="mb-2 text-xl font-bold">SMB Pro</h3>
              <p className="mb-4 text-3xl font-bold">$49-149<span className="text-base font-normal text-gray-600">/mo</span></p>
              <p className="mb-6 text-gray-600">For growing portfolios</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Everything in Starter</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">CA/FL compliance workflows</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Owner ROI dashboard</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">CSV export & email summaries</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 font-medium text-white transition-colors rounded-lg bg-fairvia-teal hover:bg-primary-600">
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <h3 className="mb-2 text-xl font-bold">Enterprise</h3>
              <p className="mb-4 text-3xl font-bold">$1<span className="text-base font-normal text-gray-600">/unit/mo</span></p>
              <p className="mb-6 text-gray-600">Regional portfolios</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">SSO & role-based access</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Multi-state templates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fairvia-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">API access & webhooks</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="waitlist" className="px-4 py-20 bg-gradient-to-br from-fairvia-teal to-primary-600 sm:px-6 lg:px-8">
          <div className="mx-auto text-center max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mb-8 text-xl text-white/90">Join the waitlist for early access</p>

            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-8 py-3 font-medium text-fairvia-teal bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
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
                  <li><a href="#" className="hover:text-white">Features</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-white">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-white">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                  <li><Link href="/security" className="hover:text-white">Security</Link></li>
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
