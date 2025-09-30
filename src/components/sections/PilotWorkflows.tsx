import type { ReactNode } from "react";
import { motion } from "@/lib/motion";
import { pilotOnboarding, pilotFlows } from "@/data/pilot-scope";
import { Hero3DScene } from "@/components/sections/Hero/mockup/Hero3DScene";

interface VisualLayer {
  content: ReactNode;
  wrapperClassName?: string;
  tileClassName?: string;
}

const WORKFLOW_CARDS = [
  {
    title: "Landlord onboarding",
    steps: pilotOnboarding.landlord,
    accent: "bg-gradient-to-br from-sky-500/10 via-slate-900/40 to-teal-500/10",
    spotlightClassName: "bg-sky-400/20",
    layers: [
      {
        wrapperClassName: "-translate-x-16 -translate-y-12 -rotate-6",
        tileClassName:
          "bg-gradient-to-br from-sky-500 via-sky-600 to-indigo-500 text-white shadow-[0_42px_86px_-36px_rgba(59,130,246,0.75)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">Identity</p>
            <p className="text-lg font-semibold">Verified landlord</p>
            <p className="text-xs text-white/75">KYC match clears in under two minutes.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_32px_68px_-36px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Badge</p>
            <p className="text-sm font-semibold text-slate-900">Listing Assist ready</p>
            <p className="text-xs text-slate-500">QR + embed packaged automatically.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Tenant onboarding",
    steps: pilotOnboarding.tenant,
    accent: "bg-gradient-to-br from-teal-400/10 via-slate-900/40 to-emerald-400/10",
    spotlightClassName: "bg-emerald-400/20",
    layers: [
      {
        wrapperClassName: "-translate-x-14 -translate-y-12 rotate-6",
        tileClassName:
          "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-[0_42px_82px_-36px_rgba(20,184,166,0.8)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Deposit</p>
            <p className="text-lg font-semibold">Funds secured</p>
            <p className="text-xs text-white/75">Partner escrow confirms receipt instantly.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-8 -rotate-4",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_30px_64px_-34px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Move-in set</p>
            <p className="text-sm font-semibold text-slate-900">Photo checklist shared</p>
            <p className="text-xs text-slate-500">Tenant upload link + reminders go out.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Compliance overlay",
    steps: pilotOnboarding.complianceOverlay,
    accent: "bg-gradient-to-br from-amber-400/10 via-slate-900/40 to-rose-400/10",
    spotlightClassName: "bg-amber-400/20",
    layers: [
      {
        wrapperClassName: "-translate-x-16 -translate-y-12 -rotate-5",
        tileClassName:
          "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-[0_44px_86px_-38px_rgba(245,158,11,0.78)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Clock</p>
            <p className="text-lg font-semibold">21-day timer</p>
            <p className="text-xs text-white/75">Alerts land before deadlines slip.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-9 rotate-3",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_32px_66px_-36px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Packet</p>
            <p className="text-sm font-semibold text-slate-900">Receipts bundled</p>
            <p className="text-xs text-slate-500">Disclosures + math check auto filled.</p>
          </div>
        ),
      },
    ],
  },
] as const;

const CORE_FLOW_CARDS = [
  {
    title: "Move in",
    steps: pilotFlows.moveIn,
    spotlightClassName: "bg-sky-400/20",
    layers: [
      {
        wrapperClassName: "-translate-x-14 -translate-y-11 rotate-6",
        tileClassName:
          "bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-500 text-white shadow-[0_40px_82px_-36px_rgba(59,130,246,0.75)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Checklist</p>
            <p className="text-sm font-semibold">Move-in tour sent</p>
            <p className="text-xs text-white/75">Condition photos synced to the case.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-8 -rotate-3",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_28px_60px_-34px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Status</p>
            <p className="text-sm font-semibold text-slate-900">Escrow live</p>
            <p className="text-xs text-slate-500">Tenant + landlord see the green badge.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Move out",
    steps: pilotFlows.moveOut,
    spotlightClassName: "bg-emerald-400/20",
    layers: [
      {
        wrapperClassName: "-translate-x-16 -translate-y-12 -rotate-5",
        tileClassName:
          "bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-[0_44px_88px_-36px_rgba(16,185,129,0.82)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Release</p>
            <p className="text-lg font-semibold">Refund math done</p>
            <p className="text-xs text-white/75">Automated totals feed escrow instructions.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_32px_62px_-34px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Receipts</p>
            <p className="text-sm font-semibold text-slate-900">Proof attached</p>
            <p className="text-xs text-slate-500">Photos + invoices zipped for record.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Dispute mode",
    steps: pilotFlows.disputeMode,
    spotlightClassName: "bg-amber-400/20",
    layers: [
      {
        wrapperClassName: "-translate-x-14 -translate-y-11 rotate-5",
        tileClassName:
          "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-[0_40px_80px_-36px_rgba(245,158,11,0.78)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Claims</p>
            <p className="text-sm font-semibold">Every note timestamped</p>
            <p className="text-xs text-white/75">Gallery + attachments live in one view.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-8 -rotate-4",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_30px_62px_-32px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Templates</p>
            <p className="text-sm font-semibold text-slate-900">Guided messaging</p>
            <p className="text-xs text-slate-500">Keeps tone compliant when tensions rise.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "SEO profile flow",
    steps: pilotFlows.seoProfile,
    spotlightClassName: "bg-indigo-400/20",
    layers: [
      {
        wrapperClassName: "-translate-x-15 -translate-y-11 -rotate-6",
        tileClassName:
          "bg-gradient-to-br from-indigo-500 via-sky-500 to-slate-500 text-white shadow-[0_42px_84px_-36px_rgba(99,102,241,0.76)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Search</p>
            <p className="text-sm font-semibold">Top result badge</p>
            <p className="text-xs text-white/75">Schema markup boosts local discovery.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_30px_60px_-32px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Link out</p>
            <p className="text-sm font-semibold text-slate-900">Renter CTA</p>
            <p className="text-xs text-slate-500">Redirects back to your live listing.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Communication flow",
    steps: pilotFlows.communication,
    spotlightClassName: "bg-sky-500/25",
    layers: [
      {
        wrapperClassName: "-translate-x-14 -translate-y-11 rotate-6",
        tileClassName:
          "bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-500 text-white shadow-[0_40px_84px_-36px_rgba(56,189,248,0.75)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Inbox</p>
            <p className="text-sm font-semibold">Read receipts</p>
            <p className="text-xs text-white/75">Tenant taps confirm + timeline updates.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-8 -rotate-3",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_32px_62px_-34px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Archive</p>
            <p className="text-sm font-semibold text-slate-900">Three-year log</p>
            <p className="text-xs text-slate-500">Every message + file stays audit ready.</p>
          </div>
        ),
      },
    ],
  },
] as const;

export default function PilotWorkflows() {
  return (
    <section className="bg-slate-900 py-12 sm:py-16 text-slate-100" id="pilot-workflows">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            Onboarding & flows
          </span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A guided path from onboarding to release</h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Fairvia keeps landlords and renters in sync from the first invite through final release, with compliance logic running in the background.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {WORKFLOW_CARDS.map((card, index) => (
            <WorkflowCard key={card.title} index={index} {...card} />
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-3xl border border-slate-800 bg-slate-800/60 p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h3 className="text-lg font-semibold text-white">Core user flows inside the pilot</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {CORE_FLOW_CARDS.map((flow, index) => (
              <CoreFlowCard key={flow.title} index={index} {...flow} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface WorkflowCardProps {
  title: string;
  steps: readonly string[];
  accent: string;
  index: number;
  layers: readonly VisualLayer[];
  spotlightClassName: string;
}

function WorkflowCard({ title, steps, accent, index, layers, spotlightClassName }: WorkflowCardProps) {
  return (
    <motion.div
      className={`rounded-3xl border border-white/10 bg-slate-800/60 p-6 ${accent}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ol className="mt-3 space-y-2 text-sm text-slate-200">
        {steps.map((step) => (
          <li key={step} className="flex items-start gap-2">
            <span className="mt-1 text-slate-400">•</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <Hero3DScene className="mt-6" spotlightClassName={spotlightClassName} layers={layers} />
    </motion.div>
  );
}

interface CoreFlowCardProps {
  title: string;
  steps: readonly string[];
  index: number;
  layers: readonly VisualLayer[];
  spotlightClassName: string;
}

function CoreFlowCard({ title, steps, index, layers, spotlightClassName }: CoreFlowCardProps) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-700 bg-slate-900/50 p-5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
    >
      <h4 className="text-base font-semibold text-white">{title}</h4>
      <ol className="mt-3 space-y-2 text-sm text-slate-300">
        {steps.map((step) => (
          <li key={step} className="flex items-start gap-2">
            <span className="mt-1 text-slate-500">•</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <Hero3DScene className="mt-6" spotlightClassName={spotlightClassName} layers={layers} />
    </motion.div>
  );
}
