import { useState } from "react";
import WaitlistForm from "./WaitlistForm";
import { track } from "../lib/track";

const PERSONA_CONTENT = {
  renter: {
    badge: "Renter journey",
    heading: "Keep your deposit safe from listing to move-in",
    description:
      "RentGuard keeps the money in escrow, nudges you through the paperwork, and hands you a clean record when it's time to move in.",
    steps: [
      {
        title: "Create your secure profile",
        description: "Verify your identity once and tell us the basics about where you want to live and your timing.",
      },
      {
        title: "Invite the landlord to escrow",
        description: "Share a protected escrow link so the money stays put while you both review documents.",
      },
      {
        title: "Sign and move in",
        description: "Use our attorney-vetted lease, release funds only after keys are exchanged, and keep a full audit trail.",
      },
    ],
    highlights: [
      { icon: "🛡️", text: "Escrow holds deposits until you approve the move-in." },
      { icon: "🧾", text: "Attorney-reviewed leases included at no extra cost." },
      { icon: "📲", text: "Status alerts let you know when it's safe to pay." },
    ],
    stats: [
      { value: "No upfront fees", label: "get protected first, settle later" },
      { value: "Set up in minutes", label: "simple flow on any device" },
    ],
  },
  landlord: {
    badge: "Landlord journey",
    heading: "Fill units faster with every safeguard built in",
    description:
      "See verified renters, collect deposits without touching Zelle, and close with compliant paperwork—no chasing, no second guessing.",
    steps: [
      {
        title: "Share your protected listing",
        description: "Invite applicants and review verified profiles that have already passed identity and income checks.",
      },
      {
        title: "Request escrow in seconds",
        description: "Send an escrow request with your terms. RentGuard holds the deposit until both sides sign off.",
      },
      {
        title: "Sign and release funds",
        description: "Execute compliant digital leases, hand over keys, and release the deposit in one click.",
      },
    ],
    highlights: [
      { icon: "🔍", text: "See proof of income and ID before you schedule a tour." },
      { icon: "⚖️", text: "RentGuard keeps local rules in check so your leases stay tidy." },
      { icon: "📦", text: "Move-in checklist shows who has the keys and when." },
    ],
    stats: [
      { value: "Deposits arrive sooner", label: "escrow nudges tenants to pay on time" },
      { value: "Plans for any size", label: "start with one unit and grow from there" },
    ],
  },
} satisfies Record<"renter" | "landlord", {
  badge: string;
  heading: string;
  description: string;
  steps: Array<{ title: string; description: string }>;
  highlights: Array<{ icon: string; text: string }>;
  stats: Array<{ value: string; label: string }>;
}>;

export default function ValueAndForm() {
  const [activeTab, setActiveTab] = useState<"renter" | "landlord">("renter");

  const handleTabClick = (tab: "renter" | "landlord") => {
    setActiveTab(tab);
    track("value_tab_clicked", { tab });
  };

  const content = PERSONA_CONTENT[activeTab];

  return (
    <section className="relative bg-slate-50 pb-20 pt-16" id="how-it-works">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-slate-50 via-white to-slate-100" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center text-slate-800">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Built for both sides
          </span>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            One calm place for leases, deposits, and check-ins
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Swap the inbox chaos for a friendly dashboard. Tap through the renter or landlord view to see exactly what happens next.
          </p>
        </div>

        <div className="mx-auto mb-12 flex justify-center">
          <div className="flex rounded-full border border-slate-200 bg-white p-1 text-sm font-medium text-slate-600 shadow-sm">
            <button
              onClick={() => handleTabClick("renter")}
              className={`rounded-full px-7 py-2.5 transition ${
                activeTab === "renter"
                  ? "bg-sky-500 text-white shadow-[0_10px_30px_-18px_rgba(14,165,233,0.6)]"
                  : "hover:text-slate-900"
              }`}
            >
              For renters
            </button>
            <button
              onClick={() => handleTabClick("landlord")}
              className={`rounded-full px-7 py-2.5 transition ${
                activeTab === "landlord"
                  ? "bg-sky-500 text-white shadow-[0_10px_30px_-18px_rgba(14,165,233,0.6)]"
                  : "hover:text-slate-900"
              }`}
            >
              For landlords
            </button>
          </div>
        </div>
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]" id="features">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 text-slate-900 shadow-sm">
            <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
              {content.badge}
            </span>
            <h3 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">{content.heading}</h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{content.description}</p>

            <ol className="mt-10 space-y-6">
              {content.steps.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-4">
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
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-900 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">What this unlocks</h4>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
                {content.highlights.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-0.5 text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8 text-slate-900">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Fast facts</h4>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {content.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/60 bg-white p-5 shadow-sm">
                    <p className="text-base font-semibold text-slate-800">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-sky-50 to-slate-100 p-[1px] shadow-xl shadow-sky-100/70" id="waitlist-form">
              <div className="rounded-3xl bg-white p-8">
                <div className="mb-6 text-center text-slate-800">
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700">
                    Early access
                  </span>
                  <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Join the protected rental waitlist</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Tell us whether you're renting or leasing property—we'll unlock the right workflow and ping you when it's ready.
                  </p>
                </div>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
