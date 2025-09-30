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
            The complete four step suite for professional rental management—from discovery to deposit return. Choose your journey below.
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
                <p className="text-slate-600 mb-6">Complete four step suite from discovery to deposit return. SEO profiles, neutral escrow, trust badges, and 21 day compliance.</p>
                <div className="space-y-2 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Discover: SEO profiles with trust signals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Comply: Identity escrow and lease pack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Trust Badge: Portable verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Offboard: 21 day move out clock</span>
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
          <h2 className="text-3xl font-semibold text-slate-900 mb-8">The Complete Four Step Suite</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="p-6">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sky-600 font-bold text-sm">1</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Discover</h3>
              <p className="text-sm text-slate-600">SEO profiles with trust signals attract qualified renters</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold text-sm">2</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Comply</h3>
              <p className="text-sm text-slate-600">Identity escrow and lease pack with guided setup</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-sm">3</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Trust Badge</h3>
              <p className="text-sm text-slate-600">Portable verification for marketplace listings</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-600 font-bold text-sm">4</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Offboard</h3>
              <p className="text-sm text-slate-600">21 day move out clock with guided deductions</p>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </PageContainer>
  );
}
