import { heroContent } from "@/data/content";
import { Button } from "@/components/ui";
import { scrollToElement } from "@/lib/utils";
import { track } from "@/lib/tracking";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  const handleManagerClick = () => {
    track("click_cta", { role: "manager", location: "hero", label: "request_demo" });
    scrollToElement("manager-conversion");
  };

  const handleRenterClick = () => {
    track("click_cta", { role: "renter", location: "hero", label: "join_pilot" });
    scrollToElement("renter-conversion");
  };

  return (
    <div>
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-sm shadow-sky-200/60">
        Built for California landlords • Licensed escrow partners
      </span>
      <h1 className="mb-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{heroContent.headline}</h1>
      <p className="mb-2 max-w-xl text-base text-slate-600 sm:text-lg">{heroContent.subHeadlines.manager}</p>
      <p className="mb-6 max-w-xl text-sm text-slate-500">{heroContent.subHeadlines.renter}</p>

      <HeroStats />

      <div className="flex flex-col items-start gap-4 sm:flex-row">
        <Button onClick={handleManagerClick} size="lg">
          For landlords & PMs → Request demo
        </Button>
        <Button onClick={handleRenterClick} variant="secondary" size="lg">
          For renters → Join pilot
        </Button>
      </div>

      <p className="mt-6 text-xs text-slate-500">
        RentGuard is a technology platform—not a bank or law firm. Escrow is provided by licensed California partners.
      </p>
    </div>
  );
}
