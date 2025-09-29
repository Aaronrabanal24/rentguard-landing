import type { ReactNode } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";
import PilotModules from "@/components/sections/PilotModules";
import PilotFeatureMatrix from "@/components/sections/PilotFeatureMatrix";
import HomeCTA from "@/components/sections/HomeCTA";
import { Hero3DScene } from "@/components/sections/Hero/mockup/Hero3DScene";

interface FeatureLayer {
  content: ReactNode;
  wrapperClassName?: string;
  tileClassName?: string;
}

interface FeatureCardDefinition {
  badge: string;
  title: string;
  description: string;
  highlight: string;
  accent: string;
  spotlightClassName: string;
  layers: ReadonlyArray<FeatureLayer>;
}

const CORE_FEATURES: FeatureCardDefinition[] = [
  {
    badge: "Neutral escrow",
    title: "Licensed custody with renter-friendly transparency",
    description:
      "Deposits land in DFPI-licensed escrow automatically. Renters, owners, and advisors share the same timeline so there are zero surprises.",
    highlight: "Works with any bank account you already use for rent collection.",
    accent: "bg-gradient-to-br from-sky-100 via-white to-emerald-50",
    spotlightClassName: "bg-sky-400/15",
    layers: [
      {
        wrapperClassName: "-translate-x-16 -translate-y-12 rotate-6",
        tileClassName:
          "bg-gradient-to-br from-sky-500 via-indigo-500 to-slate-600 text-white shadow-[0_44px_90px_-42px_rgba(59,130,246,0.75)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">Escrow</p>
            <p className="text-lg font-semibold">DFPI-licensed</p>
            <p className="text-xs text-white/75">Neutral status page renters can see.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-8 -rotate-4",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_32px_70px_-36px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Timeline</p>
            <p className="text-sm font-semibold text-slate-900">Deposit received</p>
            <p className="text-xs text-slate-500">Shared ledger updates both sides.</p>
          </div>
        ),
      },
    ],
  },
  {
    badge: "Compliance automation",
    title: "AB 2801 photo logs and 21-day countdown on autopilot",
    description:
      "Upload photos, receipts, and notes from your phone. Fairvia timestamps everything, builds the deduction packet, and alerts you before day 21.",
    highlight: "Alerts fire at day 16, 19, and 20—never forfeit another deposit.",
    accent: "bg-gradient-to-br from-amber-100 via-white to-rose-50",
    spotlightClassName: "bg-amber-400/15",
    layers: [
      {
        wrapperClassName: "-translate-x-16 -translate-y-12 -rotate-6",
        tileClassName:
          "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-[0_46px_92px_-42px_rgba(249,115,22,0.78)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Clock</p>
            <p className="text-lg font-semibold">Day 16 alert</p>
            <p className="text-xs text-white/75">Stay ahead of the 21-day cutoff.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-8 rotate-3",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_34px_72px_-38px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Packet</p>
            <p className="text-sm font-semibold text-slate-900">Receipts bundled</p>
            <p className="text-xs text-slate-500">Exports to PDF in one tap.</p>
          </div>
        ),
      },
    ],
  },
  {
    badge: "Tenant communication",
    title: "Professional updates in two clicks",
    description:
      "Guided messages cover walkthrough scheduling, deduction previews, and final releases. Tenants acknowledge with one tap so you have written proof.",
    highlight: "Keep conversations out of texts and inside a shared record you control.",
    accent: "bg-gradient-to-br from-sky-100 via-white to-violet-50",
    spotlightClassName: "bg-indigo-400/15",
    layers: [
      {
        wrapperClassName: "-translate-x-16 -translate-y-12 rotate-5",
        tileClassName:
          "bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-500 text-white shadow-[0_44px_90px_-40px_rgba(56,189,248,0.75)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Inbox</p>
            <p className="text-sm font-semibold">Read receipts</p>
            <p className="text-xs text-white/75">Tenant confirmed walkthrough 2m ago.</p>
          </div>
        ),
      },
      {
        wrapperClassName: "translate-x-12 translate-y-9 -rotate-3",
        tileClassName:
          "bg-white/95 text-slate-700 shadow-[0_32px_70px_-36px_rgba(15,23,42,0.45)]",
        content: (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Archive</p>
            <p className="text-sm font-semibold text-slate-900">3-year log</p>
            <p className="text-xs text-slate-500">Messages + receipts stay audit ready.</p>
          </div>
        ),
      },
    ],
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Import properties or paste a listing link",
    detail: "Fairvia creates a compliance workspace for each deposit and invites renters to the shared timeline.",
  },
  {
    title: "Verify leases, IDs, and escrow in minutes",
    detail: "Signed lease packs, bank-level escrow verification, and checklist reminders happen in one guided flow.",
  },
  {
    title: "Run move-outs with receipts, photos, and timers",
    detail: "You document damages in the field, Fairvia timestamps everything and generates the deduction letter.",
  },
  {
    title: "Release funds and archive the case",
    detail: "Escrow releases the balance automatically at day 21. You export a court-ready PDF for your records or accountant.",
  },
];

const FEATURE_HERO_LAYERS: FeatureLayer[] = [
  {
    wrapperClassName: "-translate-x-20 -translate-y-14 -rotate-6",
    tileClassName:
      "bg-gradient-to-br from-sky-500 via-teal-500 to-emerald-500 text-white shadow-[0_48px_96px_-46px_rgba(20,184,166,0.85)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Case status</p>
        <p className="text-xl font-semibold">Escrow live</p>
        <p className="text-xs text-white/80">Tenant + landlord synced in one view.</p>
      </div>
    ),
  },
  {
    wrapperClassName: "translate-x-10 -translate-y-4 rotate-3",
    tileClassName:
      "bg-white/95 text-slate-700 shadow-[0_36px_80px_-44px_rgba(15,23,42,0.55)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Reminders</p>
        <p className="text-sm font-semibold text-slate-900">Day 16 · Prep packet</p>
        <p className="text-xs text-slate-500">Auto texts + emails to both parties.</p>
      </div>
    ),
  },
  {
    wrapperClassName: "translate-x-4 translate-y-12 -rotate-2",
    tileClassName:
      "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-[0_42px_90px_-46px_rgba(15,23,42,0.75)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">Release math</p>
        <p className="text-xl font-semibold">$2,100</p>
        <p className="text-xs text-white/70">Refund queued for renter in escrow.</p>
      </div>
    ),
  },
];

const WORKFLOW_VISUAL_LAYERS: FeatureLayer[] = [
  {
    wrapperClassName: "-translate-x-16 -translate-y-12 rotate-5",
    tileClassName:
      "bg-gradient-to-br from-indigo-500 via-sky-500 to-blue-500 text-white shadow-[0_42px_88px_-44px_rgba(59,130,246,0.8)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">Timeline</p>
        <p className="text-sm font-semibold">Walkthrough confirmed</p>
        <p className="text-xs text-white/75">Tenant tapped confirm 2 minutes ago.</p>
      </div>
    ),
  },
  {
    wrapperClassName: "translate-x-12 translate-y-8 -rotate-4",
    tileClassName:
      "bg-white/95 text-slate-700 shadow-[0_36px_76px_-42px_rgba(15,23,42,0.5)]",
    content: (
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">Checklist</p>
        <p className="text-sm font-semibold text-slate-900">Photos logged</p>
        <p className="text-xs text-slate-500">Kitchen, bedrooms, and bath uploaded.</p>
      </div>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <PageContainer title="Fairvia — Features & Compliance">
      <FeatureHero />
      <CoreFeatureShowcase />
      <WorkflowStory />
      <PilotModules />
      <PilotFeatureMatrix />
      <HomeCTA />
    </PageContainer>
  );
}

function FeatureHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:gap-16">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            Platform features
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Compliance, escrow, and communication in one dashboard</h1>
          <p className="text-base text-slate-300 sm:text-lg">
            Fairvia automates the entire 21-day deposit journey so independent California landlords operate like professional management firms—without hiring staff.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#core-features"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:bg-sky-600"
            >
              Explore the feature set
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 transition hover:-translate-y-[1px] hover:border-white/60"
            >
              See the workflow
            </a>
          </div>
        </div>

        <FeatureHeroVisual />
      </div>
    </section>
  );
}

function FeatureHeroVisual() {
  return (
    <motion.div
      className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-[0_40px_80px_-30px_rgba(6,40,90,0.55)] backdrop-blur"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between text-xs text-slate-200">
        <span>Oakland 2BR · Escrow timeline</span>
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300">100% compliant</span>
      </div>
      <div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-4">
        <Hero3DScene className="h-48" spotlightClassName="bg-sky-500/20" layers={FEATURE_HERO_LAYERS} />
      </div>
      <div className="mt-5 grid gap-3 text-xs text-slate-200 sm:grid-cols-3">
        <FeatureHeroStat label="Deposits released on time" value="100%" />
        <FeatureHeroStat label="Average time saved per move-out" value="6.2 hrs" />
        <FeatureHeroStat label="Renter satisfaction" value="4.9/5" />
      </div>
    </motion.div>
  );
}

function FeatureHeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-lg font-semibold text-white">{value}</p>
      <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">{label}</p>
    </div>
  );
}

function CoreFeatureShowcase() {
  return (
    <section id="core-features" className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-12 px-4">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            Built for independent landlords
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">Three feature pillars that eliminate deposit anxiety</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Fairvia bundles the essentials—escrow custody, compliance automation, and guided communication—into one platform made for 1–20 door portfolios.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {CORE_FEATURES.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_25px_45px_-35px_rgba(15,23,42,0.18)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
            >
              <span className="inline-flex w-max items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-600">
                {feature.badge}
              </span>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-600">
                {feature.highlight}
              </div>
              <div className={`relative mt-4 rounded-3xl border border-slate-200/70 p-4 ${feature.accent}`}>
                <Hero3DScene className="h-40" spotlightClassName={feature.spotlightClassName} layers={feature.layers} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowStory() {
  return (
    <section id="workflow" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-4 text-slate-900">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              How it works
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">A guided journey from move-in to day-21 release</h2>
            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              Every landlord workflow begins the same way: onboard the property, verify funds, communicate clearly, and pay out on time. Fairvia turns that playbook into an interactive timeline your renters trust.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Real result</p>
            <p className="mt-1">47 minutes spent on a move-out instead of 8 hours. $2,450 deposit released on time. Zero disputes.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start lg:gap-8">
          <motion.ol
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto rounded-3xl border border-slate-200 bg-white px-4 py-5 text-sm text-slate-600 shadow-sm lg:flex-col lg:overflow-visible"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {WORKFLOW_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="flex min-w-[220px] snap-start flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-inner"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Step {index + 1}</span>
                <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                <p className="text-xs leading-relaxed text-slate-600">{step.detail}</p>
              </li>
            ))}
          </motion.ol>

          <WorkflowVisual />
        </div>
      </div>
    </section>
  );
}

function WorkflowVisual() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_35px_70px_-40px_rgba(15,23,42,0.3)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Live case</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">Move-out checklist</h3>
          <p className="mt-2 text-sm text-slate-600">
            Progress auto-updates as landlords log photos and receipts. Tenants see the same view so they know what happens next.
          </p>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600">On track</span>
      </div>
      <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
        <Hero3DScene className="h-44" spotlightClassName="bg-indigo-500/20" layers={WORKFLOW_VISUAL_LAYERS} />
      </div>
      <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Day 16</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">Send draft deductions</p>
          <p className="mt-1 text-xs text-slate-500">Tenant notified with preview + proof</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Day 21</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">Release remaining $2,100</p>
          <p className="mt-1 text-xs text-slate-500">Escrow partner pays renter automatically</p>
        </div>
      </div>
    </motion.div>
  );
}
