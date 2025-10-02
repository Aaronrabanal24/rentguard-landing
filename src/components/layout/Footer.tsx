import Link from "next/link";
import { BrandLogo } from "@/components/ui";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="safe-bottom relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <Link
              href="/"
              aria-label="Fairvia home"
              className="mb-5 sm:mb-6 inline-flex items-center transition-transform hover:scale-105 active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 rounded-lg"
            >
              <BrandLogo size="md" className="w-[140px] sm:w-[160px] lg:w-[180px] drop-shadow-lg" />
            </Link>
            <p className="mb-5 sm:mb-6 max-w-sm text-base sm:text-lg leading-relaxed text-slate-200">
              Trust, speed, and clarity for every lease.
            </p>
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-emerald-400 flex-shrink-0">✓</span>
                <span>California and Florida compliance built in.</span>
              </p>
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-emerald-400 flex-shrink-0">✓</span>
                <span>Exportable archive for all records.</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3 sm:mb-4">Product</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-base text-slate-300">
              <li>
                <Link
                  href="/pricing"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 rounded inline-block"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 rounded inline-block"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/badge"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 rounded inline-block"
                >
                  Badge
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3 sm:mb-4">For renters</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-base text-slate-300">
              <li>
                <Link
                  href="/renter-portal"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 rounded inline-block"
                >
                  Renter portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-base text-slate-300">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 rounded inline-block"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 rounded inline-block"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-base text-slate-300">
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 rounded inline-block"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col gap-5 sm:gap-6 border-t border-white/20 pt-6 sm:pt-8 text-sm sm:text-base text-slate-300">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <p className="leading-relaxed text-slate-300 mb-2">
                &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                Built for property operators • Made with care
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 max-w-2xl">
                Deposits held by DFPI-licensed escrow partners including North American Title Company and Pacific Escrow Services
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Link
                href="/privacy"
                className="tap inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="tap inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
              >
                Terms
              </Link>
              <Link
                href="/security"
                className="tap inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
