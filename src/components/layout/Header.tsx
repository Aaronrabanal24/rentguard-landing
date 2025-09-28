import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { track } from "@/lib/tracking";

export default function Header() {
  const router = useRouter();

  const navLinks = [
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
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
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
    </header>
  );
}
