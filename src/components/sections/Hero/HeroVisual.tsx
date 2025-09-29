import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StepCard {
  id: string;
  step: string;
  label: string;
  component: () => JSX.Element;
}

const STEP_CARDS: StepCard[] = [
  { id: "seo", step: "Step 1", label: "SEO marketing", component: StepOneCard },
  { id: "lease", step: "Step 2", label: "Lease onboarding & deposit", component: StepTwoCard },
  { id: "communication", step: "Step 3", label: "Communication", component: StepThreeCard },
  { id: "release", step: "Step 4", label: "Deposit release", component: StepFourCard },
];

export function HeroVisual() {
  return (
    <motion.div
      className="mx-auto grid w-full max-w-xl gap-4 rounded-[32px] border border-slate-200 bg-white/95 p-5 shadow-[0_35px_70px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:max-w-none sm:p-6 lg:grid-cols-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {STEP_CARDS.map(({ id, step, label, component: Component }) => (
        <article key={id} className="flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-white/95 p-5 shadow-sm">
          <header className="flex flex-col gap-2">
            <span className="inline-flex w-max items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white">
              {step}
            </span>
            <h3 className="text-base font-semibold text-slate-900">{label}</h3>
          </header>
          <Component />
        </article>
      ))}
    </motion.div>
  );
}

function StepOneCard() {
  return (
    <div className="flex flex-col gap-4 text-sm text-slate-600">
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <div className="flex h-32 items-center justify-center bg-slate-200/60 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Property photo
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
      <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-3">
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
      <span className="w-max rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">Compliant</span>
    </div>
  );
}

function StepThreeCard() {
  return (
    <div className="flex flex-col gap-4 text-sm text-slate-600">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
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
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
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
