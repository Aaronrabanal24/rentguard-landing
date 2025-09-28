export type ContentAudience = "landlord" | "renter" | "advisor" | "general";
export type ContentJourneyStage = "awareness" | "consideration" | "decision" | "retention";
export type ContentType = "hero" | "section" | "feature" | "testimonial" | "faq" | "cta";

export interface ContentMetadata {
  priority: number;
  lastModified: string;
  author: string;
  status: "draft" | "published" | "archived";
  tags: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface ContentItem {
  id: string;
  type: ContentType;
  audience: ContentAudience;
  journeyStage: ContentJourneyStage;
  content: Record<string, unknown>;
  metadata: ContentMetadata;
}

export interface ContentFlowSection {
  id: string;
  contentId: string;
  goal: string[];
  priority: number;
}

export interface ContentFlow {
  id: string;
  name: string;
  audience: ContentAudience;
  journeyStage: ContentJourneyStage;
  sections: ContentFlowSection[];
}
