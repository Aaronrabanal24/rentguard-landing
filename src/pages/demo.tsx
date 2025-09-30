import { PageContainer } from "@/components/layout/PageContainer";
import Link from 'next/link';
import HomeCTA from "@/components/sections/HomeCTA";

export default function DemoPage() {
  return (
    <PageContainer title="Fairvia Trust Profile Demo" animateMain={false}>
      {/* Hero Section */}
      <section className="bg-white py-16 text-slate-900">
        <div className="container-tight text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 mb-4">
            Live Demo
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">See a Trust Profile in Action</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Experience how Fairvia trust profiles attract qualified renters with built-in verification, neutral escrow signals, and professional presentation.
          </p>
        </div>
      </section>

      {/* Demo Features */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What You&apos;ll See in the Demo
          </h2>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">SEO Optimization</h3>
              <p className="text-sm text-slate-600">
                Rich snippets, structured data, and local search optimization that helps renters find your property.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Trust Signals</h3>
              <p className="text-sm text-slate-600">
                Verification badges, escrow protection indicators, and DFPI partner certification displayed prominently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📤</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Easy Sharing</h3>
              <p className="text-sm text-slate-600">
                QR codes, short links, and social sharing tools that work across all your marketing channels.
              </p>
            </div>
          </div>

          {/* Demo Button */}
          <div className="text-center">
            <Link
              href="/property/modern-2br-downtown-oakland"
              className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-600 transition-colors text-lg"
            >
              View Live Demo Property
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-sm text-slate-500 mt-3">
              See exactly how your properties would look with Fairvia trust profiles
            </p>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="bg-white py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What Makes This Different
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Traditional Listings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 mt-1">✗</span>
                    <span className="text-slate-600">No verification visible to renters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 mt-1">✗</span>
                    <span className="text-slate-600">Deposit process unclear</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 mt-1">✗</span>
                    <span className="text-slate-600">Limited search optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 mt-1">✗</span>
                    <span className="text-slate-600">Generic presentation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Fairvia Trust Profiles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-slate-600">DFPI verification badges prominently displayed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-slate-600">Neutral escrow process explained upfront</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-slate-600">Rich snippets and structured data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-slate-600">Professional compliance-focused design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Early Results</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">147</div>
              <div className="text-slate-600">Trust profiles live</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">2.4x</div>
              <div className="text-slate-600">Higher click quality</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">100%</div>
              <div className="text-slate-600">On-time releases</div>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </PageContainer>
  );
}