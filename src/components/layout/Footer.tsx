import Link from "next/link";
import { BrandLogo } from "@/components/ui";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="safe-bottom relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.25fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Fairvia home" className="mb-6 inline-flex items-center">
              <BrandLogo size="md" className="w-[140px] sm:w-[152px] lg:w-[180px] drop-shadow-lg" />
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-300">
              Your leasing layer. Fill faster, stay compliant, prove the work.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Product</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/features" className="transition hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="transition hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="transition hover:text-white">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Resources</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/help" className="transition hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/docs" className="transition hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/templates" className="transition hover:text-white">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/api" className="transition hover:text-white">
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="transition hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
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
              <li>
                <Link href="/trust" className="transition hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="transition hover:text-white">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Built for property operators • Made with care</p>
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
