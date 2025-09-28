import type { ReactElement } from "react";
import { ChatPanel } from "./ChatPanel";
import { DeductionPanel } from "./DeductionPanel";
import { EscrowPanel } from "./EscrowPanel";
import { PropertyProfilePanel } from "./PropertyProfilePanel";

export interface MockupPanelDefinition {
  id: string;
  label: string;
  summary: string;
  accent: string;
  component: () => ReactElement;
}

export const MOCKUP_PANELS: MockupPanelDefinition[] = [
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
