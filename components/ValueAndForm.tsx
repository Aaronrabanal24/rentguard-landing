import { useState } from "react";
import { track } from "../lib/track";

const PERSONA_CONTENT = {
  renter: {
    badge: "For renters",
    heading: "Renter benefits",
    description: "Keep your savings in escrow and only release when the keys are in hand.",
    ctaLabel: "I'm a renter",
    ctaId: "btn_renter_protect_deposit",
    role: "renter",
    steps: [
      {
        title: "Create your secure profile",
        description: "Answer a few questions and verify your info so landlords know you are real before a single tour.",
      },
      {
        title: "Share your escrow link",
        description: "Invite the landlord with one tap so funds stay in licensed escrow while paperwork is checked.",
      },
      {
        title: "Sign and release",
        description: "Approve the keys, sign the digital lease, and release the deposit when everything feels right.",
      },
    ],
    highlights: [
      { icon: "📜", text: "Deposits are secure and refundable, subject to California law." },
      { icon: "🛡️", text: "Escrow every deposit without extra apps." },
      { icon: "🧾", text: "Leases fill themselves with your details." },
      { icon: "📱", text: "Mobile-friendly for that mid-work break." },
    ],
  },
  landlord: {
    badge: "For landlords",
    heading: "Landlord benefits",
    description: "Collect deposits in neutral escrow, share compliant leases, and show renters you run a fair operation.",
    ctaLabel: "I'm a landlord",
    ctaId: "btn_landlord_trust_badge",
    role: "landlord",
    steps: [
      {
        title: "Invite applicants with a link",
        description: "Share listings and review ID + income before you leave your desk.",
      },
      {
        title: "Lock the deposit in escrow",
        description: "RentGuard watches the payment, reminds tenants, and keeps you and the renter in sync.",
      },
      {
        title: "Hand over keys with proof",
        description: "Use the guided checklist and digital lease so everyone leaves with a receipt and a smile.",
      },
    ],
    highlights: [
      { icon: "⚖️", text: "Standardized leases reduce disputes and compliance risk." },
      { icon: "🔍", text: "No more blind meetups - see verifications first." },
      { icon: "📑", text: "Lease templates stay compliant by city." },
      { icon: "👍", text: "Show dispute-free history to future tenants." },
    ],
  },
} satisfies Record<"renter" | "landlord", {
  badge: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaId: string;
  role: "renter" | "landlord";
  steps: Array<{ title: string; description: string }>;
  highlights: Array<{ icon: string; text: string }>;
}>;

const HOW_IT_WORKS = [
  { icon: "🪪", title: "Verify ID", description: "RentGuard confirms renter and landlord identities plus property ownership." },
  { icon: "🏦", title: "Secure deposit in escrow", description: "Funds move into a neutral account managed by licensed California partners." },
  { icon: "📑", title: "Sign CA-compliant lease", description: "Generate and e-sign the right California lease template for your city." },
  { icon: "🔓", title: "Move in with confidence", description: "Checklists track keys, condition, and approvals before releasing funds." },
];

const LANDLORD_VALUE_STACK = [
  {
    title: "Escrow foundation",
    description: "Neutral third-party deposit holding prevents disputes and instantly builds tenant trust.",
  },
  {
    title: "Compliance-in-a-box",
    description: "California-standard lease templates, automatic reminders about deposit caps and deduction rules, plus a digital audit trail of every message.",
  },
  {
    title: "Trust badge",
    description: "Display the RentGuard badge so your listings read: 'Deposits protected by licensed escrow' and stand out to high-quality renters.",
  },
  {
    title: "Time saved",
    description: "Run the entire workflow from one dashboard—verify tenants, collect deposits, sign leases, store documents, and export clean records for tax season.",
  },
  {
    title: "Revenue boosters",
    description: "Turn on optional upgrades like screening, renters insurance offers, and maintenance tracking when you're ready to grow.",
  },
];

export default function ValueAndForm() {
  const [activeTab, setActiveTab] = useState<"renter" | "landlord">("renter");

  const handleTabClick = (tab: "renter" | "landlord") => {
    setActiveTab(tab);
    track("value_tab_clicked", { tab });
  };

  const content = PERSONA_CONTENT[activeTab];

  return (
    <section className="bg-white py-20" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Choose your journey
          </span>
          <h2 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">See how RentGuard keeps things tidy</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600">
            Switch between renter and landlord views to learn how deposits, paperwork, and trust signals stay under control without extra work.
          </p>
        </div>

        <div className="mx-auto mt-12 flex justify-center">
          <div className="flex rounded-full border border-slate-200 bg-white p-1 text-sm font-medium text-slate-600 shadow-sm">
            <button
              onClick={() => handleTabClick("renter")}
              className={`rounded-full px-7 py-2.5 transition ${
                activeTab === "renter" ? "bg-sky-500 text-white shadow-[0_10px_30px_-18px_rgba(14,165,233,0.6)]" : "hover:text-slate-900"
              }`}
            >
              Renter view
            </button>
            <button
              onClick={() => handleTabClick("landlord")}
              className={`rounded-full px-7 py-2.5 transition ${
                activeTab === "landlord" ? "bg-sky-500 text-white shadow-[0_10px_30px_-18px_rgba(14,165,233,0.6)]" : "hover:text-slate-900"
              }`}
            >
              Landlord view
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
              {content.badge}
            </span>
            <h3 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">{content.heading}</h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{content.description}</p>

            <ol className="mt-10 space-y-6">
              {content.steps.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-base font-semibold text-sky-600">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">{step.title}</h4>
                      <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <button
              id={content.ctaId}
              onClick={() => {
                track("click_cta", { role: content.role, location: "split_paths", label: content.ctaId });
                document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              {content.ctaLabel}
            </button>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">Why it feels easier</h4>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
                {content.highlights.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-0.5 text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Need a hand?</h4>
              <p className="mt-3 text-sm text-slate-600">
                Share your signup link with tenants or owners and RentGuard will guide them through account creation, identity checks, and escrow in under ten minutes.
              </p>
              <button
                onClick={() => {
                  track("click_cta", { role: activeTab, location: "journey_helper", label: "make_leasing_hassle_free" });
                  document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
              >
                Make leasing hassle-free
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">How RentGuard keeps the money neutral</h3>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {HOW_IT_WORKS.map((step, index) => (
              <li key={step.title} className="flex flex-col items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-base text-sky-600">
                  {step.icon}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-slate-900">{step.title}</h4>
                  <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
              For serious landlords
            </span>
            <h3 className="text-3xl font-semibold text-slate-900">Landlord value stack</h3>
          <p className="text-base text-slate-600">Start with neutral escrow, add compliance guardrails, and bring in extras only when you need them.</p>
          </div>
          <ul className="space-y-4 text-sm text-slate-600">
            {LANDLORD_VALUE_STACK.map((layer) => (
              <li key={layer.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="text-base font-semibold text-slate-900">{layer.title}</h4>
                <p className="mt-2 leading-relaxed">{layer.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
