import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BrandLogo } from "@/components/ui";
import { track } from "@/lib/tracking";
import { AnimatePresence, motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

export default function Header() {
  const router = useRouter();

  const navLinks: NavLink[] = [
    { href: "/why-fairvia", label: "Why Fairvia" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/features", label: "Features" },
    { href: "/trust", label: "Trust" },
    { href: "/get-started", label: "Get Started" },
    { href: "/faq", label: "FAQ" },
  ];

  const handleCTA = () => {
    track("click_cta", { role: "landlord", location: "nav", label: "request_demo" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  return (
    <header className="safe-top sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="safe-inline container-wide flex items-center justify-between py-2.5 sm:py-3">
        <Link href="/" aria-label="Fairvia home" className="inline-flex items-center">
          <BrandLogo priority size="sm" className="w-[120px] sm:w-[140px] lg:w-[152px] drop-shadow-sm" />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="tap rounded-full px-4 py-2 transition-all hover:bg-sky-50 hover:text-slate-900 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleCTA}
            className="tap rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200/80 transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Request a demo
          </button>
        </nav>

        <MobileMenu navLinks={navLinks} onSelectNav={handleCTA} />
      </div>
    </header>
  );
}

function MobileMenu({ navLinks, onSelectNav }: { navLinks: NavLink[]; onSelectNav: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative lg:hidden">
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        className="tap flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-[1px] hover:border-sky-200 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="safe-bottom safe-inline fixed inset-x-0 top-0 z-50 flex h-screen flex-col overflow-y-auto bg-white pb-6 pt-[clamp(1rem,4vw,1.5rem)]"
            >
              <div className="flex items-center justify-between pb-2">
                <BrandLogo priority size="sm" className="w-[120px]" />
                <button
                  onClick={closeMenu}
                  aria-label="Close navigation"
                  className="tap flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="mt-6 space-y-4 text-base font-medium text-slate-700">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="tap block rounded-2xl border border-slate-200 px-4 py-3 transition hover:-translate-y-[1px] hover:border-sky-200 hover:bg-sky-50/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 space-y-4">
                <button
                  onClick={() => {
                    closeMenu();
                    onSelectNav();
                  }}
                  className="tap w-full rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-teal-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  Request a demo
                </button>
                <p className="text-center text-sm text-slate-500">Built for California landlords under 50 units.</p>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
