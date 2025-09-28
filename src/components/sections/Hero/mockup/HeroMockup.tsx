import { useState, type ReactElement } from "react";
import { cn } from "@/lib/utils";
import { ChatPanel } from "./ChatPanel";
import { DeductionPanel } from "./DeductionPanel";
import { EscrowPanel } from "./EscrowPanel";
import { PropertyProfilePanel } from "./PropertyProfilePanel";

type HeroPanel = {
  id: string;
  label: string;
  summary: string;
  accent: string;
  component: () => ReactElement;
};

const HERO_PANELS: HeroPanel[] = [
  {
    id: "property",
    label: "Property profile",
    summary: "Fairvia verified listing snapshot",
    accent: "bg-emerald-400",
    component: PropertyProfilePanel,
  },
  {
    id: "escrow",
    label: "Escrow status",
    summary: "Deposit timer and protections",
    accent: "bg-sky-400",
    component: EscrowPanel,
  },
  {
    id: "chat",
    label: "Communications",
    summary: "Shared updates with renters",
    accent: "bg-indigo-400",
    component: ChatPanel,
  },
  {
    id: "deductions",
    label: "Final statement",
    summary: "Itemized deductions and refunds",
    accent: "bg-teal-400",
    component: DeductionPanel,
  },
];

export function HeroMockup() {
  const [activePanel, setActivePanel] = useState<string>(HERO_PANELS[0]?.id ?? "property");
  const currentPanel = HERO_PANELS.find((panel) => panel.id === activePanel) ?? HERO_PANELS[0];
  const ActiveComponent = currentPanel.component;

  return (
    <div className="relative">
      <div className="absolute -left-12 top-6 hidden h-80 w-80 rounded-full bg-sky-200/30 blur-3xl lg:block" aria-hidden />
      <div className="absolute -right-16 bottom-6 hidden h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl lg:block" aria-hidden />

      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/85 p-5 shadow-2xl shadow-sky-200/60 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
            <nav className="flex flex-wrap gap-2 lg:flex-col" role="tablist" aria-label="Hero mockup states">
              {HERO_PANELS.map((panel) => {
                const isActive = panel.id === currentPanel.id;
                return (
                  <button
                    key={panel.id}
                    type="button"
                    onClick={() => setActivePanel(panel.id)}
                    className={cn(
                      "group flex min-w-[160px] flex-1 items-start gap-3 rounded-xl border border-transparent px-4 py-3 text-left text-sm transition lg:flex-none",
                      isActive
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/30"
                        : "bg-white/0 text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                    )}
                    role="tab"
                    id={`tab-${panel.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${panel.id}`}
                  >
                    <span className={cn("mt-1 h-2.5 w-2.5 rounded-full", isActive ? panel.accent : "bg-slate-300")} />
                    <span className="space-y-1">
                      <span className="block font-semibold tracking-tight">{panel.label}</span>
                      <span className="block text-xs text-current/80">{panel.summary}</span>
                    </span>
                  </button>
                );
              })}
            </nav>

            <div
              key={currentPanel.id}
              role="tabpanel"
              id={`panel-${currentPanel.id}`}
              aria-labelledby={`tab-${currentPanel.id}`}
              className="relative"
            >
              <ActiveComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
