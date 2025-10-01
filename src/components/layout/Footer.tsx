import Link from "next/link";
import { BrandLogo } from "@/components/ui";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="safe-bottom relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Fairvia home" className="mb-6 inline-flex items-center">
              <BrandLogo size="md" className="w-[140px] sm:w-[152px] lg:w-[180px] drop-shadow-lg" />
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-300">
              Deposits done right in California. Stay compliant with AB 2801.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Product</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/pricing" className="transition hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Trust</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/security" className="transition hover:text-white">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="leading-relaxed">&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Built for property operators • Made with care</p>
            <p className="mt-2 text-xs leading-relaxed">
              Deposits held by DFPI-licensed escrow partners including North American Title Company and Pacific Escrow Services
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="tap inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/30">
              Privacy
            </Link>
            <Link href="/terms" className="tap inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/30">
              Terms
            </Link>
            <Link href="/security" className="tap inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/30">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
