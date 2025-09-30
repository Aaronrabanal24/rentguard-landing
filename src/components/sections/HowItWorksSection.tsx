import { motion } from "@/lib/motion";

const FEATURES = [
  {
    number: 1,
    title: "Smart Unit Link",
    subtitle: "QR or link to post anywhere. Capture leads and precheck automatically.",
    description: [
      "Share on Zillow, Apartments.com, anywhere",
      "Renters click - no login needed",
      "Built-in qualification questions",
    ],
    visual: "📱",
  },
  {
    number: 2,
    title: "Auto-Precheck Leasing Timeline",
    subtitle: "Track inquiries, tours, and lease steps - timestamped and shareable.",
    description: [
      "See every inquiry and reply",
      "Book tours directly",
      "Share timeline with owners",
    ],
    visual: "📊",
  },
  {
    number: 3,
    title: "ROI Board for Owners",
    subtitle: "Weekly proof without spreadsheets - show your owners you've got this.",
    description: [
      "Automated weekly updates",
      "Proof of every inquiry and step",
      "Stop the late-night texts",
    ],
    visual: "📈",
  },
  {
    number: 4,
    title: "Deposit Closeout",
    subtitle: "Template letters, photo sets, and receipts - final release plus archive export.",
    description: [
      "State templates (starting CA)",
      "Photo documentation",
      "Audit-ready from day one",
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
                <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-12 shadow-lg">
                  <div className="text-8xl">{feature.visual}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
