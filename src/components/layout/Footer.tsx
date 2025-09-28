import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.25fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-indigo-500 to-blue-500 text-lg font-semibold text-white shadow-lg shadow-indigo-500/40">
                RG
              </span>
              <span className="text-xl font-semibold text-white">{COMPANY.name}</span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-300">
              We bring transparency, verification, and speed to every rental interaction so trustworthy people can find each other faster.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">Escrow protection</span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">Instant verification</span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">AI matching</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Product</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#market" className="transition hover:text-white">
                  Why now
                </a>
              </li>
              <li>
                <a href="#platform" className="transition hover:text-white">
                  Platform
                </a>
              </li>
              <li>
                <a href="#value-stacks" className="transition hover:text-white">
                  Value stacks
                </a>
              </li>
              <li>
                <a href="#conversion" className="transition hover:text-white">
                  Get started
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Media kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Connect</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Investors
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            <p>Pilot availability: California only. First 100 rentals are free.</p>
            <p>
              {COMPANY.name} is not a bank, law firm, or escrow agent. All escrow accounts are managed by licensed California partners.
              Lease templates are reviewed for California compliance but do not substitute for legal advice.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
