import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { track } from "@/lib/tracking";

export default function Header() {
  const router = useRouter();

  const navLinks = [
    { href: "/market", label: "Why now" },
    { href: "/workflows", label: "Workflows" },
    { href: "/benefits", label: "Benefits" },
    { href: "/trust", label: "Trust" },
    { href: "/legal", label: "Legal" },
    { href: "/positioning", label: "Positioning" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/conversion", label: "Get started" },
    { href: "/faq", label: "FAQ" },
  ];

  const handleCTA = () => {
    track("click_cta", { role: "general", location: "hero", label: "nav" });
    router.push("/conversion").catch(() => {
      /* noop */
    });
  };

  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
      <div className="flex items-center gap-3">
        <Image
          src="/rentguard-mark.svg"
          alt="Novatra logo"
          width={44}
          height={44}
          priority
          className="h-11 w-11 rounded-xl shadow-lg shadow-sky-200/60"
        />
        <span className="text-lg font-semibold tracking-tight text-slate-900">Novatra</span>
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
    </header>
  );
}
