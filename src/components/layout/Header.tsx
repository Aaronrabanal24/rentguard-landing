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
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-4 sm:py-4">
        <Link href="/" aria-label="Fairvia home" className="inline-flex items-center">
          <BrandLogo priority className="drop-shadow-sm" />
        </Link>
      <nav className="hidden items-center gap-4 text-sm font-medium text-slate-600 lg:flex">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 transition-all hover:bg-sky-50 hover:text-slate-900 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            {item.label}
          </Link>
        ))}
        <button
          onClick={handleCTA}
          className="rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200/80 transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
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
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-[1px] hover:border-sky-200 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[calc(100vw-1.5rem)] max-w-sm -translate-x-1/2 rounded-2xl border border-slate-200 bg-white py-3 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-100 sm:left-auto sm:right-0 sm:translate-x-0 sm:w-72 sm:max-w-none sm:py-4"
          >
            <nav className="max-h-[calc(100vh-8rem)] space-y-1.5 overflow-y-auto px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-[1px] hover:bg-slate-50 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 pt-3 pb-1">
              <button
                onClick={() => {
                  closeMenu();
                  onSelectNav();
                }}
                className="w-full rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-teal-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Request a demo
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
