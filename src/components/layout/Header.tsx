import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BrandLogo } from "@/components/ui";
import { track } from "@/lib/tracking";

interface NavLink {
  href: string;
  label: string;
}

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { href: "/#how-it-works", label: "How it works" },
    { href: "/badge", label: "Badge" },
    { href: "/pricing", label: "Pricing" },
    { href: "/features", label: "Features" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleCTA = () => {
    track("click_cta", { role: "landlord", location: "nav", label: "start_free_unit" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return router.pathname === href;
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
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
      <div className={`sticky top-0 z-50 border-b transition-all duration-300 safe-top ${
        scrolled
          ? "border-slate-700/70 bg-slate-900/98 backdrop-blur-2xl shadow-xl shadow-black/30"
          : "border-slate-700/50 bg-slate-900/95 backdrop-blur-2xl shadow-lg shadow-black/20"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4">
          <Link
            href="/"
            aria-label="Fairvia home"
            className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 rounded-lg transition-transform hover:scale-105 active:scale-95"
          >
            <BrandLogo size="sm" variant="dark" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2.5 text-base font-semibold sm:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`tap min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] border ${
                  isActive(item.href)
                    ? "bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-md shadow-sky-500/30"
                    : "bg-slate-800/50 text-slate-200 border-slate-700/50 hover:bg-slate-700/60 hover:text-white hover:shadow-md hover:shadow-sky-500/20 hover:border-slate-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleCTA}
              className="tap min-h-[44px] min-w-[44px] rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-purple-500 px-6 py-2.5 text-base font-bold text-white tracking-tight shadow-lg shadow-sky-500/50 transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/70 hover:scale-[1.02] active:scale-[0.98] border border-sky-400/30 hover:border-sky-300/50"
            >
              Start free unit
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="sm:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl bg-slate-800/50 p-2.5 text-slate-200 transition-all hover:bg-slate-700/60 hover:text-white active:scale-95 border border-slate-700/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            <svg
              className="h-6 w-6 transition-transform duration-200"
              style={{ transform: mobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ top: scrolled ? "65px" : "73px" }}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <nav
          aria-label="Mobile navigation"
          className={`absolute top-0 left-0 right-0 bg-slate-900/98 border-b border-slate-700/50 shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                  }
                  handleNavClick(link.href);
                }}
                className={`tap min-h-[48px] inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] border ${
                  isActive(link.href)
                    ? "bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-md shadow-sky-500/30"
                    : "bg-slate-800/50 text-slate-200 border-slate-700/50 hover:bg-slate-700/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleCTA();
                setMobileMenuOpen(false);
              }}
              className="tap min-h-[48px] rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-purple-500 px-6 py-3 text-base font-bold text-white tracking-tight shadow-lg shadow-sky-500/50 transition-all duration-200 active:scale-[0.98] border border-sky-400/30 mt-2"
            >
              Start free unit
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}