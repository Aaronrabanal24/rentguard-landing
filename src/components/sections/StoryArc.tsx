import { motion } from "@/lib/motion";

interface StoryStep {
  id: number;
  title: string;
  eyebrow: string;
  intro: string;
  bullets: readonly string[];
}

const STORY_STEPS: StoryStep[] = [
  {
    id: 1,
    eyebrow: "Step 1",
    title: "Sign up for SEO marketing",
    intro: "Publish a Fairvia profile that ranks, signals compliance, and links renters back to the listings you already manage.",
    bullets: [
      "SEO property profile with compliance highlights and FAQs",
      "Fairvia trust badge with unique token and QR code",
      "Overlay copy for Zillow, Craigslist, and Facebook",
    ],
  },
  {
    id: 2,
    eyebrow: "Step 2",
    title: "Onboard leases and deposit",
    intro: "Connect escrow, verify IDs, and send the California lease pack without juggling multiple tools.",
    bullets: [
      "Guided escrow setup with DFPI-licensed partners",
      "Identity checks and e-signature-ready lease templates",
      "Neutral status screen both landlord and renter can see",
    ],
  },
  {
    id: 3,
    eyebrow: "Step 3",
    title: "Stay aligned on communication",
    intro: "Keep every update, receipt, and acknowledgement in one shared timeline—no inbox ping-pong.",
    bullets: [
      "Guided message templates for walkthroughs and updates",
      "Attach receipts, estimates, and photos to each message",
      "One-click renter confirmations that appear in the case record",
    ],
  },
  {
    id: 4,
    eyebrow: "Step 4",
    title: "Ship the 21-day release",
    intro: "Assemble deduction letters, receipts, and release instructions with timers and math checks built in.",
    bullets: [
      "Auto timers that track the twenty one day return clock",
      "Deductions helper with categorized line items and proof",
      "Archive-ready packet with receipts, photos, and release notes",
    ],
  },
];

export default function StoryArc() {
  return (
    <motion.section
      className="bg-white py-20"
      id="story-arc"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Four-part workflow
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Show the exact path every Fairvia deposit follows</h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Nothing extra—just the four steps that move a renter from SEO discovery to a compliant release.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {STORY_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              className={`grid gap-10 rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-sm backdrop-blur md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
            >
              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{step.eyebrow}</span>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.intro}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 text-sky-500">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              >
                <div className="relative h-full w-full max-w-md rounded-3xl border border-white/60 bg-gradient-to-br from-slate-100 via-white to-slate-50 p-8 shadow-xl shadow-slate-200">
                  <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">{step.id}</span>
                    <span>{step.title}</span>
                  </div>
                  <div className="space-y-2">
                    {step.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-xs text-slate-500 shadow-sm"
                      >
                        <span className="mt-0.5 text-sky-500">✓</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute -right-6 -top-6 hidden h-20 w-20 rounded-full bg-gradient-to-br from-sky-400 to-teal-400 opacity-60 blur-2xl md:block" aria-hidden />
                  <div className="absolute -left-6 bottom-6 hidden h-16 w-16 rounded-full bg-gradient-to-br from-purple-400 to-sky-400 opacity-50 blur-xl md:block" aria-hidden />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
