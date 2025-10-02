import Head from "next/head";
import { Footer } from "@/components";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { motion } from "@/lib/motion";
import { useRouter } from "next/router";

const CORE_FEATURES = [
  {
    icon: "🔗",
    title: "Smart Unit Link with QR",
    description: "One shareable link per unit. Post on Zillow, Craigslist, or show QR at the property. Every inquiry tracked automatically.",
  },
  {
    icon: "✅",
    title: "Trust & Precheck Page",
    description: "Built-in spam filter and renter expectations. Reduces low-quality leads before they hit your inbox.",
  },
  {
    icon: "📅",
    title: "Inquiry-to-Lease Timeline",
    description: "Shareable, read-only timeline from first contact to lease signing to deposit return. No login required for renters.",
  },
  {
    icon: "⏱️",
    title: "AB 2801 Compliant Deposit Workflow",
    description: "21-day California timers, itemized deductions, timestamped photos, receipt uploads. Compliant by design.",
  },
  {
    icon: "📊",
    title: "Owner ROI Board",
    description: "Weekly rollup of inquiries, tours, days vacant, and lease status. Exportable proof for owners and investors.",
  },
  {
    icon: "📁",
    title: "Exportable Archive (ZIP)",
    description: "Complete unit history: timeline, deposit letters, receipts, photos, manifest. Court-ready if disputes arise.",
  },
];

const ADVANCED_FEATURES = [
  {
    icon: "📝",
    title: "Multi-State Template Library",
    description: "Pre-built deposit letters for CA, FL, TX, NY. Versioned templates with reviewer metadata and last-reviewed dates.",
  },
  {
    icon: "📤",
    title: "CSV Import & Export",
    description: "Bulk import units, export timeline events and KPIs. Integrate with your existing spreadsheets and reports.",
  },
  {
    icon: "🔐",
    title: "Role-Based Permissions",
    description: "Owner, Admin, Leasing Agent, Compliance Lead, View-Only roles. Control access by org, region, or unit.",
  },
  {
    icon: "🔌",
    title: "Event API & Webhooks",
    description: "Subscribe to unit events (inquiry, lease, deposit release). Trigger workflows in your PMS or CRM.",
  },
  {
    icon: "⚖️",
    title: "Legal Hold & Audit Trail",
    description: "Pause deposit release during disputes. Immutable audit log with actor, timestamp, and state context for every action.",
  },
  {
    icon: "📧",
    title: "Weekly Owner Update Emails",
    description: "Automated summary emails with unit activity, KPIs, and next steps. Keep owners informed without manual reporting.",
  },
];

export default function FeaturesPage() {
  const router = useRouter();

  const handleCTA = () => {
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  return (
    <>
      <Head>
        <title>Features - Fairvia</title>
        <meta
          name="description"
          content="Smart unit links, AB 2801 compliant deposit workflows, owner ROI boards, exportable archives, multi-state templates, and API integrations."
        />
        <link rel="canonical" href="https://fairvia.com/features" />

        <meta property="og:title" content="Features - Fairvia" />
        <meta property="og:description" content="Complete leasing and deposit operations layer. Smart links, compliance workflows, and proof for owners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fairvia.com/features" />
      </Head>

      <div className="min-h-full relative">
        <Header />

        <main id="main-content" className="safe-bot pb-32" style={{ zIndex: 1 }}>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-slate-900/95 to-transparent px-6 py-16 sm:py-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="mx-auto max-w-6xl relative">
              <div className="text-left max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-sky-100 to-purple-200 bg-clip-text text-transparent sm:text-5xl">
                  Features
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-200">
                  A lightweight operations layer that connects listings, leasing, and deposits. No heavy PMS. Just proof, speed, and compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section className="relative bg-transparent py-16 px-6" style={{ zIndex: 1 }}>
            <div className="mx-auto max-w-6xl">
              <div className="mb-12">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent sm:text-3xl">
                  Core Features
                </h2>
                <p className="mt-3 text-base text-slate-300">
                  Available on the free tier and all paid plans
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {CORE_FEATURES.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 shadow-lg hover:border-sky-500/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-base text-slate-200 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="relative bg-transparent py-16 px-6" style={{ zIndex: 1 }}>
            <div className="mx-auto max-w-6xl">
              <div className="mb-12">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-sky-200 bg-clip-text text-transparent sm:text-3xl">
                  Advanced Features
                </h2>
                <p className="mt-3 text-base text-slate-300">
                  Available on Pilot plan ($99/month)
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {ADVANCED_FEATURES.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="rounded-xl bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 p-6 shadow-lg hover:border-purple-500/60 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-base text-slate-200 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative bg-transparent py-16 px-6" style={{ zIndex: 1 }}>
            <div className="mx-auto max-w-4xl text-center">
              <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-slate-800/50 to-purple-500/10 backdrop-blur-sm p-8 shadow-xl">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent mb-4">
                  Start with your first unit free
                </h2>
                <p className="text-base text-slate-300 mb-6 max-w-2xl mx-auto">
                  No credit card required. Test every feature on your first property. Upgrade to Pilot ($99/month) when you&apos;re ready to scale.
                </p>
                <Button
                  size="lg"
                  onClick={handleCTA}
                  className="min-h-[48px] min-w-[48px] px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg"
                  aria-label="Start your free unit today"
                >
                  Start free unit
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
