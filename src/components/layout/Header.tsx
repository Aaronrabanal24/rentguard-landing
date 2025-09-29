import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const scrollYRef = useRef(0);
  const portalTarget = typeof window !== "undefined" ? document.getElementById("portal-root") : null;

  const lockScroll = () => {
    scrollYRef.current = window.scrollY || window.pageYOffset || 0;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    const body = document.body;
    body.style.position = "";
    body.style.top = "";
    body.style.width = "";
    body.style.overflow = "";
    window.scrollTo(0, scrollYRef.current);
  };

  useEffect(() => {
    if (isOpen) {
      lockScroll();
      // Delay focus to ensure portal content is mounted
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      unlockScroll();
      triggerRef.current?.focus();
    }
    return () => {
      // safety on unmount
      if (isOpen) {
        unlockScroll();
      }
    };
  }, [isOpen]);

  const onKeyDownTrap: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      setIsOpen(false);
      return;
    }
    if (e.key !== "Tab") return;
    const root = document.getElementById("mobile-menu-drawer");
    if (!root) return;
    const focusables = root.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        (last as HTMLElement).focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        (first as HTMLElement).focus();
      }
    }
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative lg:hidden">
      <button
        ref={triggerRef}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        aria-controls="mobile-menu-drawer"
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

      {portalTarget && (
        <AnimatePresence>
          {isOpen ? (
            <>
              {createPortal(
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="fixed inset-0 z-[60] bg-black/50"
                  onClick={closeMenu}
                  aria-hidden
                />,
                portalTarget
              )}
              {createPortal(
                <motion.aside
                  id="mobile-menu-drawer"
                  role="dialog"
                  aria-modal="true"
                  onKeyDown={onKeyDownTrap}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="fixed inset-0 z-[70] flex h-full w-full flex-col bg-white safe-top safe-bot"
                >
                  {/* Top bar */}
                  <div className="flex items-center justify-between px-4 py-3">
                    <Link href="/" aria-label="Fairvia home" onClick={closeMenu} className="inline-flex items-center">
                      <BrandLogo priority className="h-6 w-auto drop-shadow-sm" />
                    </Link>
                    <button
                      ref={closeBtnRef}
                      aria-label="Close menu"
                      onClick={closeMenu}
                      className="tap flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                    >
                      <svg className="h-5 w-5" aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Links area (scrollable) */}
                  <nav className="flex-1 overflow-y-auto px-4 py-2">
                    <ul className="space-y-1">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="tap block rounded-lg px-3 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                            onClick={closeMenu}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Bottom CTA pinned */}
                  <div className="border-t border-slate-200 px-4 pb-4 pt-3">
                    <button
                      onClick={() => {
                        closeMenu();
                        onSelectNav();
                      }}
                      className="tap w-full rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                    >
                      Request a demo
                    </button>
                  </div>
                </motion.aside>,
                portalTarget
              )}
            </>
          ) : null}
        </AnimatePresence>
      )}
    </div>
  );
}
