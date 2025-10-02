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
      <div className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm safe-top">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link
            href="/"
            aria-label="Fairvia home"
            className="inline-flex items-center transition-transform hover:scale-105 active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 rounded-lg"
          >
            <BrandLogo priority className="drop-shadow-sm" />
          </Link>
          {/* Horizontal nav at sm+ */}
          <nav className="hidden items-center gap-2 text-sm font-medium sm:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="tap min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-2 text-slate-700 font-medium transition-all hover:bg-slate-200 hover:text-slate-900 hover:scale-105 active:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 focus-visible:ring-2 focus-visible:ring-sky-200/50"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleCTA}
              className="tap min-h-[44px] min-w-[44px] rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200/70 transition-all hover:shadow-lg hover:from-sky-600 hover:to-teal-600 hover:scale-105 active:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 focus-visible:ring-4 focus-visible:ring-sky-200/50"
            >
              Start free unit
            </button>
          </nav>
        </div>
      </div>

      {/* Always-visible vertical nav on mobile (in normal flow) */}
      <nav aria-label="Primary" className="sm:hidden border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tap min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-200 active:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 focus-visible:ring-2 focus-visible:ring-sky-200/50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}