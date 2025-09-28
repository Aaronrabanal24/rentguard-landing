import Image from "next/image";
import { scrollToElement } from "@/lib/utils";
import { track } from "@/lib/tracking";

export default function Header() {
  const handleCTA = () => {
    track("click_cta", { role: "general", location: "hero", label: "nav" });
    scrollToElement("conversion");
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
        <a href="#market" className="transition-colors hover:text-slate-900">
          Why now
        </a>
        <a href="#edge" className="transition-colors hover:text-slate-900">
          Workflows
        </a>
        <a href="#benefits" className="transition-colors hover:text-slate-900">
          Benefits
        </a>
        <a href="#trust" className="transition-colors hover:text-slate-900">
          Compliance
        </a>
        <a href="#positioning" className="transition-colors hover:text-slate-900">
          Positioning
        </a>
        <a href="#how-it-works" className="transition-colors hover:text-slate-900">
          How it works
        </a>
        <a href="#conversion" className="transition-colors hover:text-slate-900">
          Get started
        </a>
        <a href="#faq" className="transition-colors hover:text-slate-900">
          FAQ
        </a>
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
