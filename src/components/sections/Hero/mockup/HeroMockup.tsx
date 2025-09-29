import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import { MOCKUP_PANELS } from "./panels";

export function HeroMockup() {
  const [activePanel, setActivePanel] = useState<string>(MOCKUP_PANELS[0]?.id ?? "property");
  const currentPanel = MOCKUP_PANELS.find((panel) => panel.id === activePanel) ?? MOCKUP_PANELS[0];
  const ActiveComponent = currentPanel.component;
  const activeIndex = useMemo(() => MOCKUP_PANELS.findIndex((panel) => panel.id === currentPanel.id), [currentPanel.id]);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());

  const focusPanel = (panelId: string) => {
    const node = tabRefs.current.get(panelId);
    node?.focus({ preventScroll: false });
    setActivePanel(panelId);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = MOCKUP_PANELS.length - 1;
    if (lastIndex < 0) return;

    const rotateIndex = (nextIndex: number) => {
      const normalized = (nextIndex + MOCKUP_PANELS.length) % MOCKUP_PANELS.length;
      focusPanel(MOCKUP_PANELS[normalized].id);
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
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 top-6 hidden h-80 w-80 rounded-full bg-sky-200/35 blur-3xl lg:block" aria-hidden />
        <div className="absolute -right-20 bottom-0 hidden h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl lg:block" aria-hidden />
        <div className="absolute left-1/2 top-1/3 hidden h-40 w-72 -translate-x-1/2 rounded-full bg-slate-100/60 blur-2xl lg:block" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[32px] border border-white/50 bg-white/90 p-5 shadow-[0_45px_90px_-40px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
            <nav
              className="-mx-1 flex gap-3 overflow-x-auto pb-2 pr-3 scrollbar-none snap-x snap-mandatory lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0"
              role="tablist"
              aria-label="Hero mockup states"
              aria-orientation="vertical"
            >
              {MOCKUP_PANELS.map((panel, index) => {
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
                      "group relative flex min-w-[160px] flex-1 snap-start items-start gap-3 rounded-xl border border-transparent px-4 py-3 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:flex-none",
                      isActive
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/25"
                        : "bg-white/0 text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                    )}
                    role="tab"
                    id={`tab-${panel.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${panel.id}`}
                    tabIndex={isActive ? 0 : -1}
                  >
                    <span
                      className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: "radial-gradient(circle at top, rgba(56,189,248,0.25), transparent 70%)",
                      }}
                      aria-hidden
                    />
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
              className="relative panel-fade"
            >
              <div className="space-y-4">
                <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-left text-slate-600 shadow-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Active view</p>
                    <h3 className="mt-1 text-base font-semibold text-slate-900 lg:text-lg">{currentPanel.label}</h3>
                    <p className="text-xs text-slate-500 lg:text-sm">{currentPanel.summary}</p>
                  </div>
                  <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white">
                    {activeIndex + 1} of {MOCKUP_PANELS.length}
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
