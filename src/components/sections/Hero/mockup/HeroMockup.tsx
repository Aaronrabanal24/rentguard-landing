import { ChatPanel } from "./ChatPanel";
import { DeductionPanel } from "./DeductionPanel";
import { EscrowPanel } from "./EscrowPanel";
import { PropertyProfilePanel } from "./PropertyProfilePanel";

export function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -left-10 top-10 hidden h-72 w-72 rounded-full bg-sky-200/30 blur-3xl lg:block" aria-hidden />
      <div className="absolute -right-12 bottom-10 hidden h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl lg:block" aria-hidden />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <PropertyProfilePanel />
          <EscrowPanel />
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ChatPanel />
          <DeductionPanel />
        </div>
      </div>
    </div>
  );
}
