import "@/content/homepage";
import {
  Footer,
  Hero,
  HomeCTA,
  TrustSignals,
  StickyCTA,
} from "@/components";
import { motion } from "@/lib/motion";

// Four Step Overview Section
function FourStepOverview() {
  return (
    <section className="bg-white py-16">
      <div className="container-tight text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 mb-4">
          Complete Suite
        </span>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
          Four Steps to Professional Rental Management
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
          From discovery to deposit return—everything California landlords need with neutral escrow protection and compliance automation.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              1
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Discover</h3>
            <p className="text-sm text-slate-600">SEO profiles with trust signals attract qualified renters</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              2
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Comply</h3>
            <p className="text-sm text-slate-600">Identity escrow and lease pack with guided setup</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              3
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Trust Badge</h3>
            <p className="text-sm text-slate-600">Portable verification for marketplace listings</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              4
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Offboard</h3>
            <p className="text-sm text-slate-600">21 day move out clock with guided deductions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="min-h-full bg-slate-50 text-slate-900">
        <header>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Hero />
          </motion.div>
        </header>

        <main className="safe-bot pb-32">
          <FourStepOverview />
          <TrustSignals />
          <HomeCTA />
        </main>

        <Footer />
      </div>
      <StickyCTA />
    </>
  );
}
