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
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
  ];

  const handleCTA = () => {
    track("click_cta", { role: "landlord", location: "nav", label: "start_free_unit" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  return (
    <header>
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-lg shadow-sm safe-top">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-4 sm:py-4">
          <Link href="/" aria-label="Fairvia home" className="inline-flex items-center">
            <BrandLogo priority className="drop-shadow-sm" />
          </Link>
          {/* Horizontal nav at sm+ */}
          <nav className="hidden items-center gap-2 text-sm font-medium text-slate-600 sm:flex">
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
              Start Free Unit
            </button>
          </nav>
        </div>
      </div>

      {/* Always-visible vertical nav on mobile (in normal flow) */}
      <nav aria-label="Primary" className="sm:hidden">
        <ul className="mx-auto max-w-7xl px-3 py-2">
          {navLinks.map((link) => (
            <li key={link.href} className="py-1">
              <Link
                href={link.href}
                className="tap block rounded-lg px-3 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-7xl border-t border-slate-200 px-3 pb-3 pt-2 safe-bot">
          <button
            onClick={handleCTA}
            className="tap w-full rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Start with One Free Unit
          </button>
        </div>
      </nav>
    </header>
  );
}