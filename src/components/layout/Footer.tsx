import Link from "next/link";
import { BrandLogo } from "@/components/ui";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="safe-bottom relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950" aria-hidden="true" />
      <div className="container-tight relative py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Fairvia home" className="mb-6 inline-flex items-center">
              <BrandLogo size="md" className="w-[140px] sm:w-[152px] lg:w-[180px] drop-shadow-lg" />
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-300">
              We bring transparency, verification, and speed to every rental interaction so trustworthy people can find each other faster.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="tap inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1">Escrow protection</span>
              <span className="tap inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1">Instant verification</span>
              <span className="tap inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1">AI matching</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Explore</h4>
            <ul className="mt-4 space-y-4 text-sm text-slate-400">
              <li>
                <Link href="/why-fairvia" className="tap inline-flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white">
                  Why Fairvia
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="tap inline-flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/features" className="tap inline-flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/trust" className="tap inline-flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white">
                  Trust &amp; security
                </Link>
              </li>
              <li>
                <Link href="/faq" className="tap inline-flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Company</h4>
            <ul className="mt-4 space-y-4 text-sm text-slate-400">
              <li>
                <Link href="/about" className="tap inline-flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="tap inline-flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="tap inline-flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Policies</h4>
            <ul className="mt-4 space-y-4 text-sm text-slate-400">
              <li>
                <Link href="/privacy" className="tap inline-flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="tap inline-flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            <p>Pilot availability: California only while we onboard landlords.</p>
            <p>
              {COMPANY.name} is not a bank, law firm, or escrow agent. All escrow accounts are managed by licensed California partners.
              Lease templates are reviewed for California compliance but do not substitute for legal advice.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="tap inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/30">
              Privacy
            </Link>
            <Link href="/terms" className="tap inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/30">
              Terms
            </Link>
            <Link href="/trust" className="tap inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/30">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
