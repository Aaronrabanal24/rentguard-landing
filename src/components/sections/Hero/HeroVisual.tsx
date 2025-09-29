import { type ReactElement, useState } from "react";
import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StepCard {
  id: string;
  step: string;
  label: string;
  accent: string;
  component: () => ReactElement;
}

const STEP_CARDS: StepCard[] = [
  { id: "seo", step: "Step 1", label: "SEO marketing", accent: "from-sky-50 via-white to-sky-100", component: StepOneCard },
  { id: "lease", step: "Step 2", label: "Lease onboarding & deposit", accent: "from-emerald-50 via-white to-teal-100", component: StepTwoCard },
  { id: "communication", step: "Step 3", label: "Communication", accent: "from-indigo-50 via-white to-indigo-100", component: StepThreeCard },
  { id: "release", step: "Step 4", label: "Deposit release", accent: "from-amber-50 via-white to-emerald-100", component: StepFourCard },
];

export function HeroVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = STEP_CARDS[activeIndex];
  const ActiveComponent = activeCard.component;

  const goTo = (index: number) => {
    if (index < 0) {
      setActiveIndex(STEP_CARDS.length - 1);
      return;
    }
    if (index >= STEP_CARDS.length) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(index);
  };

  return (
    <motion.div
      className="mx-auto w-full max-w-3xl rounded-[32px] border border-white/60 bg-white/80 p-5 shadow-[0_40px_80px_-45px_rgba(15,23,42,0.4)] backdrop-blur-lg sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white">
            {activeCard.step}
          </span>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">{activeCard.label}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-[1px] hover:border-slate-300"
            aria-label="Previous step"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-[1px] hover:border-slate-300"
            aria-label="Next step"
          >
            ›
          </button>
        </div>
      </div>

      <article
        className={cn(
          "relative mt-6 overflow-hidden rounded-3xl border border-white/60 bg-white/95 p-5 shadow-[0_30px_45px_-40px_rgba(15,23,42,0.45)]",
          "min-h-[280px]"
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-90",
            activeCard.accent
          )}
          aria-hidden
        />
        <ActiveComponent />
      </article>

      <nav className="mt-6 flex snap-x snap-mandatory items-center gap-2 overflow-x-auto pb-1">
        {STEP_CARDS.map((card, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex min-w-[160px] snap-start flex-col rounded-2xl border px-4 py-3 text-left text-xs transition",
                isActive
                  ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              )}
              aria-current={isActive ? "step" : undefined}
            >
              <span className="font-semibold uppercase tracking-[0.25em]">{card.step}</span>
              <span className="mt-2 flex items-center gap-2 text-sm font-semibold tracking-tight">
                <span aria-hidden>{card.icon}</span>
                {card.label}
              </span>
            </button>
          );
        })}
      </nav>
    </motion.div>
  );
}

function StepOneCard() {
  return (
    <div className="flex flex-col gap-4 text-sm text-slate-600">
      <div className="overflow-hidden rounded-2xl border border-sky-200 bg-white/95 shadow-inner">
        <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-sky-300/30 via-sky-100 to-white text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
          Property photo
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-[10px] font-medium text-sky-600">
            <span aria-hidden>🏷️</span> Fairvia badge
          </span>
        </div>
        <div className="space-y-3 p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Fairvia profile</p>
              <p className="text-base font-semibold text-slate-900">Safe deposit return — Oakland 2BR</p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">Fairvia verified</span>
          </div>
          <ul className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-600">
            {[
              { label: "Escrow", color: "text-emerald-600" },
              { label: "Lease", color: "text-emerald-600" },
              { label: "Timeline", color: "text-emerald-600" },
            ].map((item) => (
              <li key={item.label} className={cn("flex items-center gap-1", item.color)}>
                <span>✔</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-slate-300 text-[10px] text-slate-500">QR</span>
              Verified by Fairvia
            </span>
            <span className="text-sky-600">fairvia.com/oakland-2br</span>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
        <p className="font-semibold text-slate-800">Fairvia profile · Verified landlord · Escrowed deposit</p>
        <p className="mt-1 truncate text-slate-500">https://fairvia.com/oakland-2br</p>
      </div>
    </div>
  );
}

function StepTwoCard() {
  return (
    <div className="grid gap-4 text-sm text-slate-600">
      <div className="grid gap-3 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-inner sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white px-3 py-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Lease pack</p>
          <p className="mt-1 text-base font-semibold text-slate-900">Signed by both parties</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white px-3 py-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Deposit in escrow</p>
          <p className="mt-1 text-base font-semibold text-slate-900">$2,450</p>
          <p className="text-xs text-slate-500">21 days remaining</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white px-3 py-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Move-in checklist</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {["Kitchen", "Bedroom", "Bath"].map((label) => (
              <div key={label} className="space-y-1 text-[11px]">
                <div className="h-12 rounded-lg bg-slate-200/60" aria-hidden />
                <p className="truncate text-slate-500">{label}</p>
                <p className="text-[10px] text-slate-400">May 4 · 2:14p</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="w-max rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600">Compliant</span>
    </div>
  );
}

function StepThreeCard() {
  return (
    <div className="flex flex-col gap-4 text-sm text-slate-600">
      <div className="rounded-2xl border border-white/60 bg-white/95 p-4 shadow-inner">
        <div className="space-y-3">
          <div className="rounded-2xl rounded-tl-md bg-slate-100 px-4 py-3 text-sm text-slate-800">
            <p>Move-out walkthrough scheduled June 1 at 2 PM.</p>
            <p className="mt-1 text-xs text-slate-500">May 15 · 9:12 AM</p>
          </div>
          <div className="ml-auto w-max rounded-2xl rounded-tr-md bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm text-white">
            <p>Confirm ✔</p>
            <p className="mt-1 text-xs text-sky-100">Tenant · May 15 · 9:32 AM</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-slate-100 px-3 py-1">Receipt.pdf</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Photos.zip</span>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-semibold uppercase tracking-[0.25em] text-slate-400">Timeline</p>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            <span>May 15 · Message sent</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>May 15 · Tenant confirmed</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function StepFourCard() {
  return (
    <div className="flex flex-col gap-4 text-sm text-slate-600">
      <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/95 shadow-inner">
        <div className="border-b border-slate-200 px-4 py-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Itemized deductions</p>
        </div>
        <div className="divide-y divide-slate-200 text-sm text-slate-700">
          {[{ name: "Cleaning", amount: "$150", note: "Receipt attached" }, { name: "Repairs", amount: "$200", note: "Estimate attached" }].map((row) => (
            <div key={row.name} className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="font-semibold text-slate-900">{row.name}</p>
                <p className="text-xs text-slate-500">{row.note}</p>
              </div>
              <p className="font-semibold text-slate-900">{row.amount}</p>
            </div>
          ))}
          <div className="flex items-center justify-between bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
            <span>Total deductions</span>
            <span>$350</span>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-500">Escrow status</p>
          <p className="mt-1 font-semibold text-emerald-800">Release confirmed ✔</p>
          <p className="text-xs text-emerald-600">Funds sent to renter</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Refund amount</p>
          <p className="mt-1 font-semibold text-slate-900">$2,100 released</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-500">
        <p className="font-semibold text-slate-800">Returned within 21 days</p>
        <p className="mt-1">Auto alerts sent on day 16, 19, and 20 to keep the clock on track.</p>
      </div>
    </div>
  );
}
