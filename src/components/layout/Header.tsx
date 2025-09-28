import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { track } from "@/lib/tracking";

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
    track("click_cta", { role: "general", location: "hero", label: "nav" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
      <div className="flex items-center gap-3">
        <Image
          src="/fairvia-logo.svg"
          alt="Fairvia logo"
          width={44}
          height={44}
          priority
          className="h-11 w-11 rounded-xl shadow-lg shadow-sky-200/60"
        />
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Fairvia
        </Link>
      </div>
      <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        {navLinks.map((item) => (
          <Link key={item.href} href={item.href} className="transition-colors hover:text-slate-900">
            {item.label}
          </Link>
        ))}
        <button
          onClick={handleCTA}
          className="rounded-full bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-500/20"
        >
          Join the pilot
        </button>
      </nav>

      <MobileMenu navLinks={navLinks} onSelectNav={handleCTA} />
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
    <div className="relative md:hidden">
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-sky-200 hover:text-slate-900"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-full z-50 mt-4 w-64 rounded-2xl border border-slate-200 bg-white py-4 shadow-xl">
          <nav className="space-y-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pt-4">
            <button
              onClick={() => {
                closeMenu();
                onSelectNav();
              }}
              className="w-full rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
            >
              Join the pilot
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
