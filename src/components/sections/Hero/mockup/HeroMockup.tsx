import { useMemo, useRef, useState, type KeyboardEvent, type ReactElement } from "react";
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
  const activeIndex = useMemo(() => HERO_PANELS.findIndex((panel) => panel.id === currentPanel.id), [currentPanel.id]);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());

  const focusPanel = (panelId: string) => {
    const node = tabRefs.current.get(panelId);
    node?.focus({ preventScroll: false });
    setActivePanel(panelId);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = HERO_PANELS.length - 1;
    if (lastIndex < 0) return;

    const rotateIndex = (nextIndex: number) => {
      const normalized = (nextIndex + HERO_PANELS.length) % HERO_PANELS.length;
      focusPanel(HERO_PANELS[normalized].id);
    };

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        rotateIndex(index + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        rotateIndex(index - 1);
        break;
      case "Home":
        event.preventDefault();
        rotateIndex(0);
        break;
      case "End":
        event.preventDefault();
        rotateIndex(lastIndex);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      <div className="absolute -left-12 top-6 hidden h-80 w-80 rounded-full bg-sky-200/30 blur-3xl lg:block" aria-hidden />
      <div className="absolute -right-16 bottom-6 hidden h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl lg:block" aria-hidden />

      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/85 p-5 shadow-2xl shadow-sky-200/60 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
            <nav
              className="-mx-1 flex gap-2 overflow-x-auto pb-1 pr-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:pb-0"
              role="tablist"
              aria-label="Hero mockup states"
              aria-orientation="vertical"
            >
              {HERO_PANELS.map((panel, index) => {
                const isActive = panel.id === currentPanel.id;
                return (
                  <button
                    key={panel.id}
                    type="button"
                    onClick={() => focusPanel(panel.id)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    ref={(node) => {
                      if (!node) {
                        tabRefs.current.delete(panel.id);
                        return;
                      }
                      tabRefs.current.set(panel.id, node);
                    }}
                    className={cn(
                      "group flex min-w-[180px] flex-1 items-start gap-3 rounded-xl border border-transparent px-4 py-3 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:flex-none",
                      isActive
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/30"
                        : "bg-white/0 text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                    )}
                    role="tab"
                    id={`tab-${panel.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${panel.id}`}
                    tabIndex={isActive ? 0 : -1}
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
              <div className="space-y-4">
                <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-left text-slate-600 shadow-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Active view</p>
                    <h3 className="mt-1 text-base font-semibold text-slate-900 lg:text-lg">{currentPanel.label}</h3>
                    <p className="text-xs text-slate-500 lg:text-sm">{currentPanel.summary}</p>
                  </div>
                  <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white">
                    {activeIndex + 1} of {HERO_PANELS.length}
                  </span>
                </header>

                <ActiveComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
