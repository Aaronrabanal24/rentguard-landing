import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
const realityPoints = [
  "Miss the 21-day deadline and California law says you forfeit the entire deposit—no matter how bad the damage was.",
  "AB 2801 requires timestamped photos for deductions starting 2025. Most landlords will find out the hard way if they can’t prove it.",
  "Tenants Google you before they apply. If they can’t see proof of neutral escrow and professional communication, they walk." ,
];

const softwareGaps = [
  "Property management suites cost $200+/month and were built for 500 doors, not 5.",
  "None of them provide neutral escrow—deposits still sit in your personal account.",
  "You still write every tenant email yourself and hope you remember to send the final packet.",
];

const differentiation = [
  "Fairvia automates the AB 2801 photo log, deduction math, and release letter in one workspace.",
  "Licensed DFPI escrow partners hold the deposit and share the timeline with landlords, renters, and advisors.",
  "Guided communication keeps tenants aligned: alerts at day 16, 19, 20; confirmations tracked automatically.",
  "Every case produces a court-ready archive with receipts, signatures, and release proof—no more digging at midnight.",
];

const whoFor = {
  yes: [
    "Independent California landlords with 1–20 doors who manage move-outs themselves.",
    "Owners who want professional credibility without hiring a property manager.",
    "Teams preparing for AB 2801 photo evidence and DFPI escrow requirements.",
  ],
  no: [
    "Property managers with full back office and compliance staff.",
    "Landlords outside California (for now).",
    "Operators already running 50+ doors on enterprise PM software.",
  ],
};

export default function WhyFairviaPage() {
  return (
    <PageContainer title="Why Fairvia — Compliance that protects every deposit">
      <section className="bg-white py-12 text-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center md:flex-row md:items-center md:text-left">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Why Fairvia
            </span>
            <h1 className="text-3xl font-semibold sm:text-4xl">The 21-day clock just got easier</h1>
            <p className="text-sm text-slate-600 sm:text-base">
              Fairvia gives independent California landlords the compliance co-pilot that keeps every deposit on schedule, in neutral escrow, and ready for inspection.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/visuals/hero-dashboard.svg"
              alt="Fairvia workflow overview"
              width={360}
              height={260}
              sizes="(max-width: 768px) 80vw, 360px"
              className="h-auto w-full max-w-xs"
              priority={false}
            />
          </div>
        </div>
      </section>

      <section className="bg-rose-50 py-16 text-rose-900">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-semibold sm:text-4xl">The breaking point</h2>
          <p className="mt-3 text-sm text-rose-800 sm:text-base">
            You&apos;re juggling turnovers, calls, and spreadsheets. One late deduction letter or missing receipt can cost you the entire deposit and a one-star review. It happens every week in California.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[{
              title: "You miss the day-21 deadline",
              detail: "Tenant keeps $2,400—plus you spend 40 hours arguing and sending apologies.",
            },
            {
              title: "Tenant asks for proof",
              detail: "All you have is a personal bank statement. They assume you pocketed the deposit.",
            },
            {
              title: "AB 2801 photo evidence",
              detail: "You meant to organize photos, but they&apos;re scattered in text threads. Deductions don&apos;t stick.",
            }].map((card) => (
              <div key={card.title} className="h-full rounded-2xl border border-rose-200 bg-white px-5 py-6 text-sm text-rose-800 shadow-sm">
                <h3 className="text-base font-semibold text-rose-900">{card.title}</h3>
                <p className="mt-2 leading-relaxed">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl space-y-10 px-4">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">The new California reality</h2>
            <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
              {realityPoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-sky-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-2xl font-semibold text-slate-900">Why property management software doesn’t help</h3>
            <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
              {softwareGaps.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-rose-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">What Fairvia does differently</h3>
            <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
              {differentiation.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Who Fairvia is for</h3>
              <ul className="mt-3 space-y-2">
                {whoFor.yes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-emerald-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Who it&apos;s not for</h3>
              <ul className="mt-3 space-y-2">
                {whoFor.no.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-rose-500">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
