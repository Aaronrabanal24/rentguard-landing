import type { ReactElement } from "react";
import { ChatPanel } from "./ChatPanel";
import { ChecklistPanel } from "./ChecklistPanel";
import { DeductionPanel } from "./DeductionPanel";
import { EscrowPanel } from "./EscrowPanel";
import { FundsFlowPanel } from "./FundsFlowPanel";
import { PropertyProfilePanel } from "./PropertyProfilePanel";
import { SeoPanel } from "./SeoPanel";
import { TimelinePanel } from "./TimelinePanel";

export interface MockupPanelDefinition {
  id: string;
  label: string;
  summary: string;
  accent: string;
  component: () => ReactElement;
}

export const MOCKUP_PANELS: MockupPanelDefinition[] = [
  {
    id: "profile",
    label: "Profile",
    summary: "Verified property snapshot",
    accent: "bg-emerald-400",
    component: PropertyProfilePanel,
  },
  {
    id: "seo",
    label: "SEO page",
    summary: "Public marketing link",
    accent: "bg-sky-400",
    component: SeoPanel,
  },
  {
    id: "lease-escrow",
    label: "Lease + escrow",
    summary: "Neutral deposit tracking",
    accent: "bg-indigo-400",
    component: EscrowPanel,
  },
  {
    id: "funds",
    label: "Funds flow",
    summary: "Verified custody steps",
    accent: "bg-teal-400",
    component: FundsFlowPanel,
  },
  {
    id: "communication",
    label: "Communication",
    summary: "Tenant messages",
    accent: "bg-purple-400",
    component: ChatPanel,
  },
  {
    id: "timeline",
    label: "Shared timeline",
    summary: "Everyone sees the plan",
    accent: "bg-amber-400",
    component: TimelinePanel,
  },
  {
    id: "release",
    label: "Release",
    summary: "Refund math at a glance",
    accent: "bg-emerald-500",
    component: DeductionPanel,
  },
  {
    id: "checklist",
    label: "21-day checklist",
    summary: "Every deadline covered",
    accent: "bg-slate-500",
    component: ChecklistPanel,
  },
];
