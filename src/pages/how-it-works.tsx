import { PageContainer } from "@/components/layout/PageContainer";
import HomeCTA from "@/components/sections/HomeCTA";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <PageContainer title="How Fairvia Works" animateMain={false}>
      {/* Hero Section */}
      <section className="bg-white py-16 text-slate-900">
        <div className="container-tight text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">How Fairvia Works</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Professional deposit management for California landlords and renters. Choose your journey below.
          </p>
        </div>
      </section>

      {/* Audience Selection */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">Choose Your Path</h2>
          <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">

            {/* Landlord Path */}
            <Link href="/how-it-works-landlords" className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-200 transition-colors">
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">For Landlords</h3>
                <p className="text-slate-600 mb-6">Stop losing deposits to missed deadlines. Professional escrow, automated compliance, and tenant communication.</p>
                <div className="space-y-2 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>21-day deadline tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Neutral escrow protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>AB 2801 photo compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Professional listing badge</span>
                  </div>
                </div>
                <div className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold group-hover:bg-sky-600 transition-colors">
                  See Landlord Workflow →
                </div>
              </div>
            </Link>

            {/* Renter Path */}
            <Link href="/how-it-works-renters" className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">For Renters</h3>
                <p className="text-slate-600 mb-6">Get deposit protection with neutral escrow, transparent timelines, and compliance documentation.</p>
                <div className="space-y-2 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Neutral escrow protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Real-time timeline updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Complete documentation trail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Transparent communication</span>
                  </div>
                </div>
                <div className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold group-hover:bg-emerald-600 transition-colors">
                  See Renter Protection →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="bg-white py-16">
        <div className="container-tight text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-8">The Fairvia Difference</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Neutral Escrow</h3>
              <p className="text-sm text-slate-600">DFPI-licensed partners hold deposits, never landlords</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Compliance Automation</h3>
              <p className="text-sm text-slate-600">Never miss California&apos;s 21-day deadlines or AB 2801 requirements</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Transparent Communication</h3>
              <p className="text-sm text-slate-600">Guided messaging keeps everyone informed and aligned</p>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </PageContainer>
  );
}
