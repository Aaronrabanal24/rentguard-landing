import { motion } from "@/lib/motion";

const FEATURES = [
  {
    number: 1,
    title: "Smart Unit Link + QR",
    subtitle: "Listing-specific link with lead capture. Share anywhere, no login needed.",
    description: [
      "Post on Zillow, Apartments.com, or show QR at unit",
      "Built-in precheck and trust page",
      "UTM tracking for every inquiry",
    ],
    visual: "🔗",
  },
  {
    number: 2,
    title: "Lead-to-Lease Timeline",
    subtitle: "Track every step from inquiry to lease signing — timestamped and shareable.",
    description: [
      "See inquiries, tours, and applications in one view",
      "Book tours with qualified prospects",
      "Shareable timeline link for owners",
    ],
    visual: "📊",
  },
  {
    number: 3,
    title: "Owner ROI Board",
    subtitle: "Auto-generated weekly proof of work — no spreadsheets, no late-night texts.",
    description: [
      "Automated weekly summary emails",
      "Show days listed, inquiries, tours, and lease status",
      "Build trust and prove operational excellence",
    ],
    visual: "📈",
  },
  {
    number: 4,
    title: "Deposit Closeout",
    subtitle: "State-compliant templates with photo documentation and immutable archives.",
    description: [
      "Legal-proof deposit letters (starting CA)",
      "Photo sets and receipts auto-attached",
      "Export audit-ready records anytime",
    ],
    visual: "✅",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            One Link Handles It All
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                  Step {feature.number}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-lg text-slate-600">{feature.subtitle}</p>
                <ul className="mt-6 space-y-3">
                  {feature.description.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-sky-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-sky-50/30 to-slate-50 p-8 shadow-lg transition-shadow hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-teal-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex items-center justify-center">
                    <div className="flex h-64 w-full items-center justify-center rounded-xl bg-white/50 backdrop-blur-sm">
                      <div className="text-8xl transition-transform group-hover:scale-110">{feature.visual}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
