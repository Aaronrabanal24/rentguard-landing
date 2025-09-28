import Image from "next/image";
import { useState, useEffect } from "react";
import { track } from "../lib/track";

const HEADLINE_VARIANTS: Record<"A" | "B" | "C", string> = {
  A: "End Rental Horror Stories Forever",
  B: "The Trust Layer for Rentals",
  C: "Secure Deposits. Verified People. Safe Rentals.",
};

const SUBHEADLINE_VARIANTS: Record<"A" | "B" | "C", string> = {
  A: "Protect your deposits with escrow, verify identities, and use compliant digital leases. No more scams, disputes, or sleepless nights.",
  B: "We eliminate rental fraud and deposit disputes through secure escrow, identity verification, and legal compliance tools.",
  C: "RentGuard holds deposits safely in escrow while verifying both parties, so you can rent with complete confidence.",
};

export default function Hero() {
  const [variant, setVariant] = useState<"A" | "B" | "C">("A");

  useEffect(() => {
    const variants = ["A", "B", "C"] as const;
    const selectedVariant = variants[Math.floor(Math.random() * variants.length)];
    setVariant(selectedVariant);
    track("headline_variant_shown", { variant: selectedVariant });
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
        <div className="absolute left-1/2 top-[-12rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-orange-500/35 blur-3xl" />
        <div className="absolute right-[-12rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-amber-400/25 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-rose-400/25 blur-3xl" />
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
              className="h-11 w-11 rounded-xl shadow-lg shadow-orange-600/30"
            />
            <span className="text-lg font-semibold tracking-tight text-white">RentGuard</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a href="#how-it-works" className="transition-colors hover:text-white">
              How it works
            </a>
            <a href="#pricing" className="transition-colors hover:text-white">
              Pricing
            </a>
            <a href="#waitlist-form" className="transition-colors hover:text-white">
              Early Access
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
            <button
              onClick={() => {
                track("hero_cta_clicked", { variant, button: "nav" });
                document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Get protected
            </button>
          </nav>
        </header>

        <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pb-20 pt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:pt-16">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/15 px-4 py-2 text-sm font-medium text-orange-100 shadow-sm shadow-orange-500/25">
              <span className="inline-flex h-2 w-2 rounded-full bg-orange-400" />
              Licensed escrow partners • NYC, LA, SF
            </div>
            <h1 className="mb-6 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              {HEADLINE_VARIANTS[variant]}
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
              {SUBHEADLINE_VARIANTS[variant]}
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <button
                onClick={() => {
                  track("hero_cta_clicked", { variant, button: "primary" });
                  document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/40 transition hover:scale-[1.01] hover:shadow-xl"
              >
                Start protected rental
              </button>
              <button
                onClick={() => {
                  track("hero_cta_clicked", { variant, button: "secondary" });
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-base font-semibold text-white transition hover:border-white/40"
              >
                See how escrow works
              </button>
            </div>

            <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
                <p className="text-2xl font-semibold text-orange-300">$0</p>
                <p className="text-sm text-slate-300">upfront costs for renters • pay only when protected</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
                <p className="text-2xl font-semibold text-orange-300">1-2%</p>
                <p className="text-sm text-slate-300">deposit fee • split between both parties</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
                <p className="text-2xl font-semibold text-orange-300">Licensed</p>
                <p className="text-sm text-slate-300">escrow partners in major metro areas</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-orange-500/35 via-slate-900/45 to-rose-500/35 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-lg shadow-2xl shadow-orange-600/30">
              <div className="mb-6 flex items-center justify-between text-xs text-slate-200">
                <span className="rounded-full bg-white/15 px-3 py-1 font-medium">Escrow Protection</span>
                <span className="rounded-full bg-orange-400/20 px-2 py-1 text-orange-200">Active</span>
              </div>
              <div className="rounded-2xl bg-slate-900/60 p-5">
                <div className="mb-4 flex items-center justify-between text-sm text-slate-200">
                  <span className="font-semibold">Deposit Status</span>
                  <span className="rounded-full bg-orange-400/10 px-2 py-1 text-xs text-orange-200">Secured</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Identity verified", amount: "$2,500 deposit" },
                    { label: "Funds in escrow", amount: "Licensed partner" },
                    { label: "Lease approved", amount: "Ready to move" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4">
                      <div>
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                        <p className="text-xs text-slate-300">{item.amount}</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 text-center text-lg font-semibold leading-10 text-white">
                        ✓
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-200">
                <p className="mb-3 font-semibold text-white">RentGuard Protection</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    Deposit held until move-in approved
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    Identity & fraud verification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    Compliant digital lease templates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur md:flex-row">
            <div className="flex items-center gap-3 text-white">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-9 w-9 rounded-full border border-white/30 bg-gradient-to-br from-orange-400 to-rose-500" />
                ))}
              </div>
              <p className="font-medium">Join early renters and landlords who've eliminated deposit fears</p>
            </div>
            <div className="flex items-center gap-6 text-xs uppercase tracking-wide text-slate-300">
              <span>Licensed escrow</span>
              <span>Identity verified</span>
              <span>Fraud protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
