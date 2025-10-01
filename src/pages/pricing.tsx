import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";
import HomeCTA from "@/components/sections/HomeCTA";
import { featureTiers } from "@/data/business-plan";

export default function PricingPage() {
  const { starter, pro, enterprise } = featureTiers;

  return (
    <PageContainer title="Fairvia Pricing" animateMain={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-16 text-slate-900">
        <div className="container-tight text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 mb-4">
            Pricing
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Simple, transparent pricing</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Start with your first unit free. Upgrade as you grow. Enterprise solutions available for larger portfolios.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Starter Tier */}
            <motion.div
              className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                {starter.name}
              </h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-slate-900">{starter.price}</div>
                <p className="text-sm text-slate-600 mt-2">{starter.priceDetail}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {starter.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-sm leading-relaxed text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-lg bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-colors">
                Start Free
              </button>
            </motion.div>

            {/* Pro Tier */}
            <motion.div
              className="rounded-2xl border-2 border-sky-500 bg-white p-8 shadow-xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-sky-500 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              </div>

              <h3 className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-2">
                {pro.name}
              </h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-slate-900">
                  {pro.price}<span className="text-lg font-medium text-slate-500">/{pro.priceDetail}</span>
                </div>
                <p className="text-sm text-slate-600 mt-2">{pro.subtitle}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-700 mb-3">{pro.includes}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pro.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-sky-500 mt-1">✓</span>
                    <span className="text-sm leading-relaxed text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white hover:from-sky-600 hover:to-teal-600 transition-colors shadow-sm">
                Start Free (One Unit)
              </button>

              <div className="mt-6 rounded-lg bg-emerald-50 border border-emerald-200 p-4">
                <p className="text-xs font-semibold text-emerald-900 mb-1">Proven Results</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-emerald-800">
                  <span>• 147 deposits processed</span>
                  <span>• 100% on-time releases</span>
                  <span>• 6.2 hrs saved per unit</span>
                  <span>• Zero forfeitures</span>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                {enterprise.name}
              </h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-slate-900">{enterprise.price}</div>
                <p className="text-sm text-slate-600 mt-2">{enterprise.priceDetail}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-700 mb-3">{enterprise.includes}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {enterprise.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-sm leading-relaxed text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-lg border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-white py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">All plans include</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { icon: "🔗", title: "Smart Unit Links", description: "QR codes and shareable links for each property" },
              { icon: "📊", title: "Timeline View", description: "Complete activity history from inquiry to move-out" },
              { icon: "📈", title: "ROI Reporting", description: "Weekly owner updates with performance metrics" },
              { icon: "⚖️", title: "Compliance Engine", description: "State-specific templates and countdown timers" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What's included in the free tier?",
                a: "The Common Core features are free forever and include smart unit links, trust pages, timeline views, ROI boards, and exportable archives. Perfect for trying Fairvia with your first unit.",
              },
              {
                q: "Can I upgrade or downgrade anytime?",
                a: "Yes. You can upgrade from free to SMB Pro anytime, and downgrade with 30 days notice. Your data is always accessible and exportable.",
              },
              {
                q: "What makes Enterprise different?",
                a: "Enterprise adds role-based permissions, SSO, multi-state templates, immutable audit logs, legal hold features, and API access. It's designed for property management companies with 50+ units.",
              },
              {
                q: "Do you offer discounts for annual billing?",
                a: "Yes. SMB Pro customers get 2 months free when paying annually ($690/year vs $828). Enterprise pricing is customized based on your needs.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </PageContainer>
  );
}
