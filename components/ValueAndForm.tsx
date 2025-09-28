import { useState } from "react";
import WaitlistForm from "./WaitlistForm";
import { track } from "../lib/track";

const PERSONA_CONTENT = {
  renter: {
    badge: "Renter journey",
    heading: "Keep your deposit safe from listing to move-in",
    description:
      "RentGuard guides you through every milestone so you only transfer money once the landlord is verified and the lease is approved.",
    steps: [
      {
        title: "Create your secure profile",
        description: "Verify your identity once and tell us the basics about where you want to live and your timing.",
      },
      {
        title: "Invite the landlord to escrow",
        description: "Share your protected escrow link so funds stay in licensed escrow while both sides review documents.",
      },
      {
        title: "Sign and move in",
        description: "Use our attorney-vetted lease, release funds only after keys are exchanged, and keep the full audit trail.",
      },
    ],
    highlights: [
      { icon: "🛡️", text: "Escrow holds deposits until you approve the move-in." },
      { icon: "🧾", text: "Attorney-reviewed leases included at no extra cost." },
      { icon: "📲", text: "Status updates keep everyone aligned in real time." },
    ],
    stats: [
      { value: "$0", label: "upfront fees to get protected" },
      { value: "15 min", label: "from signup to escrow-ready" },
    ],
  },
  landlord: {
    badge: "Landlord journey",
    heading: "Fill units faster with every safeguard built in",
    description:
      "See qualified renters, collect deposits safely, and close with compliant paperwork—without chasing signatures or worrying about disputes.",
    steps: [
      {
        title: "Share your protected listing",
        description: "Invite applicants and review verified profiles that already passed identity and income checks.",
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
      { icon: "🔍", text: "Verified renters with proof of income and ID." },
      { icon: "⚖️", text: "Automatic compliance guardrails for your jurisdiction." },
      { icon: "📦", text: "Structured move-in checklist keeps everyone accountable." },
    ],
    stats: [
      { value: "3×", label: "faster time to deposit vs. manual process" },
      { value: "$25-$100", label: "monthly plans for pro tools" },
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
    <section className="relative bg-slate-950 pb-20 pt-16" id="how-it-works">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center text-slate-100">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300">
            Built for both sides
          </span>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Trusted infrastructure for modern renters and property owners
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Powerful workflows for verifying applicants, handling payments, and filling homes without the usual friction.
          </p>
        </div>

        <div className="mx-auto mb-12 flex justify-center">
          <div className="flex rounded-full border border-white/10 bg-white/10 p-1 text-sm font-medium text-slate-200">
            <button
              onClick={() => handleTabClick("renter")}
              className={`rounded-full px-7 py-2.5 transition ${
                activeTab === "renter"
                  ? "bg-white text-slate-900 shadow-[0_12px_42px_-22px_rgba(245,119,57,0.55)]"
                  : "hover:text-white"
              }`}
            >
              For renters
            </button>
            <button
              onClick={() => handleTabClick("landlord")}
              className={`rounded-full px-7 py-2.5 transition ${
                activeTab === "landlord"
                  ? "bg-white text-slate-900 shadow-[0_12px_42px_-22px_rgba(245,119,57,0.55)]"
                  : "hover:text-white"
              }`}
            >
              For landlords
            </button>
          </div>
        </div>
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]" id="features">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 text-slate-100">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-200">
              {content.badge}
            </span>
            <h3 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">{content.heading}</h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">{content.description}</p>

            <ol className="mt-10 space-y-6">
              {content.steps.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-base font-semibold text-orange-100">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                      <p className="mt-1 text-sm text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-100">
              <h4 className="text-lg font-semibold text-white">What this unlocks</h4>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
                {content.highlights.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-0.5 text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-orange-400/30 bg-orange-500/10 p-8 text-slate-100">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">Fast facts</h4>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {content.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-2xl font-semibold text-orange-100">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-orange-100/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/30 via-orange-500/15 to-slate-900/40 p-[1px] shadow-2xl shadow-orange-600/30" id="waitlist-form">
              <div className="rounded-3xl bg-slate-950/80 p-8 backdrop-blur">
                <div className="mb-6 text-center text-slate-100">
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-200">
                    Early access
                  </span>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">Join the protected rental waitlist</h3>
                  <p className="mt-3 text-sm text-slate-300">
                    Tell us if you're renting or leasing property—we'll unlock the right workflow and keep you updated on launch dates.
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
