import Link from "next/link";
import { useRouter } from "next/router";
import { BrandLogo } from "@/components/ui";
import { track } from "@/lib/tracking";

interface NavLink {
  href: string;
  label: string;
}

export default function Header() {
  const router = useRouter();

  const navLinks: NavLink[] = [
    { href: "/#how-it-works", label: "How it works" },
    { href: "/badge", label: "Badge" },
    { href: "/pricing", label: "Pricing" },
    { href: "/features", label: "Features" },
  ];

  const handleCTA = () => {
    track("click_cta", { role: "landlord", location: "nav", label: "start_free_unit" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  return (
    <header>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-sky-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        Skip to main content
      </a>

      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-2xl shadow-lg shadow-black/20 safe-top">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4">
          <Link
            href="/"
            aria-label="Fairvia home"
            className="inline-flex items-center transition-all hover:scale-[1.02] hover:drop-shadow-md active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 rounded-lg"
          >
            <BrandLogo priority className="drop-shadow-sm" />
          </Link>
          {/* Horizontal nav at sm+ */}
          <nav className="hidden items-center gap-2.5 text-sm font-semibold sm:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="tap min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl bg-slate-800/50 px-5 py-2.5 text-slate-300 font-semibold tracking-tight transition-all hover:bg-slate-700/50 hover:text-white hover:shadow-md hover:shadow-sky-500/20 active:scale-[0.98] border border-slate-700/50"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleCTA}
              className="tap min-h-[44px] min-w-[44px] rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-purple-500 px-6 py-2.5 text-sm font-bold text-white tracking-tight shadow-lg shadow-sky-500/50 transition-all hover:shadow-xl hover:shadow-sky-500/70 hover:scale-[1.02] active:scale-[0.98] border border-sky-400/30"
            >
              Start free unit
            </button>
          </nav>
        </div>
      </div>

      {/* Always-visible vertical nav on mobile (in normal flow) */}
      <nav aria-label="Primary" className="sm:hidden border-b border-slate-700/50 bg-slate-900/95">
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tap min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl bg-slate-800/50 px-4 py-2.5 text-sm font-semibold tracking-tight text-slate-300 transition-all hover:bg-slate-700/50 hover:text-white active:scale-[0.98] border border-slate-700/50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}