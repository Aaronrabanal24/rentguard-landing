import { useState } from "react";
import WaitlistForm from "./WaitlistForm";
import { track } from "../lib/track";

const RENTER_BENEFITS = [
  { icon: "🏠", title: "Direct landlord contact", description: "Talk to verified owners instantly and confirm viewings without a broker in the middle." },
  { icon: "⚡", title: "Instant matches", description: "Receive curated matches based on budget, timing, and lifestyle preferences." },
  { icon: "🔒", title: "Verified listings", description: "Rigorous screening protects you from scams and illegitimate postings." },
  { icon: "💳", title: "Protected payments", description: "Move-in funds flow through escrow so your money is safe until keys are in hand." },
];

const LANDLORD_BENEFITS = [
  { icon: "👥", title: "Pre-qualified tenants", description: "Identity, income, and rental history captured before you ever schedule a tour." },
  { icon: "📊", title: "Live analytics", description: "Dashboards highlight interest, drop-off, and pricing trends across your portfolio." },
  { icon: "🚀", title: "Faster fills", description: "AI powered suggestions reach renters who match availability and requirements today." },
  { icon: "🛡️", title: "Built-in safeguards", description: "Deposit protection, secure messaging, and contract workflows all in one place." },
];

const HOW_IT_WORKS = [
  {
    title: "Tell us what you need",
    description: "Answer a few quick questions about your property or the place you want to rent. It takes under two minutes.",
  },
  {
    title: "Get curated matches",
    description: "Our matching engine surfaces real people, verified in real time, along with next-step recommendations.",
  },
  {
    title: "Seal the deal with confidence",
    description: "Use escrow, background checks, and guided workflows to close without guesswork or bad surprises.",
  },
];

export default function ValueAndForm() {
  const [activeTab, setActiveTab] = useState<"renter" | "landlord">("renter");

  const handleTabClick = (tab: "renter" | "landlord") => {
    setActiveTab(tab);
    track("value_tab_clicked", { tab });
  };

  const benefits = activeTab === "renter" ? RENTER_BENEFITS : LANDLORD_BENEFITS;

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
                  ? "bg-white text-slate-900 shadow-[0_10px_40px_-20px_rgba(99,102,241,0.9)]"
                  : "hover:text-white"
              }`}
            >
              For renters
            </button>
            <button
              onClick={() => handleTabClick("landlord")}
              className={`rounded-full px-7 py-2.5 transition ${
                activeTab === "landlord"
                  ? "bg-white text-slate-900 shadow-[0_10px_40px_-20px_rgba(99,102,241,0.9)]"
                  : "hover:text-white"
              }`}
            >
              For landlords
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" id="features">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition duration-200 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              <div className="absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-20"
                style={{
                  background: "radial-gradient(circle at top, rgba(99,102,241,0.6), transparent 55%)",
                }}
              />
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-blue-500 text-2xl shadow-lg shadow-indigo-500/30">
                {b.icon}
              </div>
              <h3 className="relative mb-3 text-lg font-semibold text-white">{b.title}</h3>
              <p className="relative text-sm leading-relaxed text-slate-300">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-slate-100">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">How it works</span>
            <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Three steps from search to signed lease</h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              RentGuard orchestrates the entire journey with built-in verification, escrow, and communication so you never wonder what happens next.
            </p>
            <ol className="mt-10 space-y-6">
              {HOW_IT_WORKS.map((item, index) => (
                <li key={item.title} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-base font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/30 via-indigo-500/20 to-blue-500/30 p-[1px] shadow-2xl shadow-indigo-500/30" id="waitlist-form">
            <div className="rounded-3xl bg-slate-950/70 p-8 backdrop-blur">
              <div className="mb-6 text-center text-slate-100">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-200">
                  Early access
                </span>
                <h3 className="text-3xl font-semibold text-white">Be first in line for launch</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Join other early operators unlocking safer, faster rentals. Invitations roll out weekly.
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
