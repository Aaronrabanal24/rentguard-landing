import { Footer } from "@/components";
import Header from "@/components/layout/Header";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { pricingContent } from "@/data/content";
import { useRouter } from "next/router";
import Head from "next/head";

export default function PricingPage() {
  const router = useRouter();

  const handleCTA = () => {
    router.push("/get-started").catch(() => {});
  };

  return (
    <>
      <Head>
        <title>Pricing - Fairvia</title>
        <meta
          name="description"
          content="Pilot Pricing: 1 Unit Free, then $99/month for unlimited units. No hidden fees. Cancel anytime."
        />
        <link rel="canonical" href="https://fairvia.com/pricing" />

        <meta property="og:title" content="Pricing - Fairvia" />
        <meta property="og:description" content="Pilot Pricing: 1 Unit Free, then $99/month for unlimited units." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/pricing" />
      </Head>

      <div className="min-h-full relative">
        <Header />

        <main id="main-content" className="safe-bot pb-24 sm:pb-32 space-y-20 sm:space-y-28" style={{ zIndex: 1 }}>
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-slate-900/95 to-transparent py-24 sm:py-32 lg:py-36 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="mx-auto max-w-4xl px-6 text-center relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 sm:mb-10 bg-gradient-to-r from-white via-sky-100 to-purple-200 bg-clip-text text-transparent leading-tight">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-6 sm:mt-8 text-xl sm:text-2xl leading-relaxed text-slate-200 max-w-3xl mx-auto font-medium">
                Your first unit is always free — no commitment. Scale when ready.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400/30 backdrop-blur-sm">
                <span className="text-sm font-semibold text-sky-300">⚡ Limited time:</span>
                <span className="text-sm text-slate-200">First 50 sign-ups get Pro features free for 30 days</span>
              </div>
            </div>
          </section>

          {/* Pricing Tiers */}
          <section className="bg-transparent py-4 sm:py-8">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
                {pricingContent.tiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    className={`rounded-2xl border-2 bg-slate-800/50 backdrop-blur-sm p-8 sm:p-10 shadow-xl flex flex-col ${
                      tier.name === "Pro" ? "border-sky-500 shadow-sky-500/30 scale-105" : "border-slate-700/50"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {tier.badge && (
                      <div className="mb-5 -mt-5 -mx-5 sm:-mt-6 sm:-mx-6 bg-gradient-to-r from-sky-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-t-xl text-center">
                        {tier.badge}
                      </div>
                    )}
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                      {tier.name}
                    </h2>
                    <div className="mb-6">
                      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
                        {tier.price}
                      </div>
                      {tier.priceDetail && (
                        <div className="text-sm sm:text-base font-medium text-slate-400 mt-2">{tier.priceDetail}</div>
                      )}
                      <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">{tier.description}</p>
                    </div>

                    <div className="flex-grow mb-8">
                      <ul className="space-y-4">
                        {tier.features?.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <svg
                              className="mt-0.5 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-sky-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className={`text-base sm:text-lg ${feature.includes('Everything') ? 'font-semibold text-sky-300' : 'text-slate-200'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={handleCTA}
                      className="w-full min-h-[48px] min-w-[44px] mt-auto"
                      variant={tier.name === "Pro" ? "primary" : "secondary"}
                    >
                      {tier.cta}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="bg-transparent py-12 sm:py-16">
            <div className="mx-auto max-w-5xl px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-sky-100 to-purple-200 bg-clip-text text-transparent mb-4">
                  Trusted by Property Teams
                </h2>
                <p className="text-lg text-slate-300">
                  Join landlords and property managers who&apos;ve simplified their deposit workflows
                </p>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    quote: "We cut our deposit dispute time by 70%. The timeline feature alone is worth it.",
                    author: "Sarah M.",
                    title: "Property Manager, 12 units"
                  },
                  {
                    quote: "Finally, proof I can show my owners. The ROI board saved me hours every week.",
                    author: "James K.",
                    title: "Independent Landlord"
                  },
                  {
                    quote: "AB 2801 compliance made simple. No more worrying about missing deadlines.",
                    author: "Lisa R.",
                    title: "Property Manager, Bay Area"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <p className="text-slate-200 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-slate-400">{testimonial.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-emerald-300">✓ CA AB 2801 Compliant</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm text-slate-300">Built for California landlords</span>
                </div>
              </motion.div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
