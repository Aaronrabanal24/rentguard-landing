import Image from "next/image";
import { useEffect } from "react";
import { track } from "../lib/track";

const HEADLINE = "Stay compliant with California's new deposit laws";
const SUB_HEADLINE_MANAGER = "Avoid 3× penalties with automated escrow, photo documentation, and 21-day deadline tracking.";
const SUB_HEADLINE_RENTER = "Renters see neutral escrow status, deduction evidence, and faster refunds with full transparency.";

export default function Hero() {
  useEffect(() => {
    track("view_hero", { focus: "landlord" });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-10rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-[-8rem] top-1/3 h-[22rem] w-[22rem] rounded-full bg-teal-200/35 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-[22rem] w-[22rem] rounded-full bg-orange-200/30 blur-3xl" />
      </div>

      <div className="relative">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
          <div className="flex items-center gap-3">
            <Image
              src="/rentguard-mark.svg"
              alt="RentGuard logo"
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-xl shadow-lg shadow-sky-200/60"
            />
            <span className="text-lg font-semibold tracking-tight text-slate-900">RentGuard</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#market" className="transition-colors hover:text-slate-900">
              Why now
            </a>
            <a href="#trust" className="transition-colors hover:text-slate-900">
              Compliance
            </a>
            <a href="#problems" className="transition-colors hover:text-slate-900">
              Pain points
            </a>
            <a href="#platform" className="transition-colors hover:text-slate-900">
              Platform
            </a>
            <a href="#value-stacks" className="transition-colors hover:text-slate-900">
              Value stacks
            </a>
            <a href="#conversion" className="transition-colors hover:text-slate-900">
              Get started
            </a>
            <a href="#faq" className="transition-colors hover:text-slate-900">
              FAQ
            </a>
            <button
              onClick={() => {
                track("click_cta", { role: "general", location: "hero", label: "nav" });
                document.getElementById("conversion")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-500/20"
            >
              Get protected
            </button>
          </nav>
        </header>

        <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pb-20 pt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:pt-16">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-sm shadow-sky-200/60">
              Built for California landlords • Licensed escrow partners
            </span>
            <h1 className="mb-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {HEADLINE}
            </h1>
            <p className="mb-2 max-w-xl text-base text-slate-600 sm:text-lg">{SUB_HEADLINE_MANAGER}</p>
            <p className="mb-6 max-w-xl text-sm text-slate-500">{SUB_HEADLINE_RENTER}</p>

            <div className="mb-6 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">CA Civil Code §1950.5</p>
                <p className="mt-1">Deposits must be returned within 21 days. RentGuard logs deadlines and reminders automatically.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">AB 2801 compliance</p>
                <p className="mt-1">Inspection photos, videos, and notes are stored for deduction evidence.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">Low-volume friendly</p>
                <p className="mt-1">Tailored for independent owners and PMs under 50 units who need compliance without complexity.</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <button
                onClick={() => {
                  track("click_cta", { role: "manager", location: "hero", label: "request_demo" });
                  document.getElementById("manager-conversion")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-teal-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-sky-300/50 transition hover:scale-[1.01] hover:shadow-xl"
              >
                For landlords & PMs → Request demo
              </button>
              <button
                onClick={() => {
                  track("click_cta", { role: "renter", location: "hero", label: "join_pilot" });
                  document.getElementById("renter-conversion")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400"
              >
                For renters → Join pilot
              </button>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              RentGuard is a technology platform—not a bank or law firm. Escrow is provided by licensed California partners.
            </p>

            <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-sky-600">Escrow status</p>
                <p className="mt-2 text-base text-slate-600">Funds stay locked until move-in is approved.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-teal-600">Paperwork done</p>
                <p className="mt-2 text-base text-slate-600">Generate leases and handovers in a couple of clicks.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-orange-600">Reputation boost</p>
                <p className="mt-2 text-base text-slate-600">Pilot is currently enrolling the first 100 rentals at no cost.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white via-sky-100 to-teal-100 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-sky-200/50">
              <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 font-medium text-sky-700">
                  <span className="text-sm">🛡️</span> Escrow protection
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-teal-700">
                  <span className="text-sm">✔</span> In good standing
                </span>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 flex items-center justify-between text-sm text-slate-600">
                  <span className="font-semibold">Deposit secured in escrow</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs text-sky-700">Pending move-in</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Identity verified", amount: "Tenant shared documents" },
                    { label: "Funds in escrow", amount: "Held by licensed partner" },
                    { label: "Lease prepared", amount: "Waiting for e-signature" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                        <p className="text-xs text-slate-500">{item.amount}</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-sky-500/10 text-center text-lg font-semibold leading-10 text-sky-600">✓</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                <p className="mb-3 font-semibold text-slate-800">RentGuard keeps tabs on</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-sm">🔒</span> Deposit stays locked until you give the nod
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">🪪</span> Identity and fraud checks in the background
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">📝</span> Ready-to-send lease templates for your city
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm md:flex-row">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-9 w-9 rounded-full border border-white/80 bg-gradient-to-br from-sky-400 to-teal-500" />
                ))}
              </div>
              <p className="font-medium">Join landlords and renters who now hand over keys without stress</p>
            </div>
            <div className="flex items-center gap-6 text-xs uppercase tracking-wide text-slate-400">
              <span>Real escrow</span>
              <span>Verified tenants</span>
              <span>Dispute history saved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
