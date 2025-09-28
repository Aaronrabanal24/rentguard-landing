import { ContentManager, type ContentFlow, type ContentItem } from "@/lib/content";

const homepageContent: ContentItem[] = [
  {
    id: "hero-landlord-primary",
    type: "hero",
    audience: "landlord",
    journeyStage: "awareness",
    content: {
      badge: "California compliance",
      headline: "Deposit management that keeps you DFPI-ready",
      subheadline:
        "Fairvia automates escrow, documentation, and releases so landlords avoid penalties and build renter trust.",
    },
    metadata: {
      priority: 100,
      lastModified: new Date().toISOString(),
      author: "system",
      status: "published",
      tags: ["homepage", "hero"],
      seo: {
        title: "Fairvia — Professional Deposit Management",
        description: "Automated compliance, neutral escrow, and transparent tenant communications for California landlords.",
      },
    },
  },
  {
    id: "trust-signals-compliance",
    type: "section",
    audience: "landlord",
    journeyStage: "awareness",
    content: {
      title: "Proof points every landlord can share",
      highlights: [
        "Neutral deposit custody with DFPI partners",
        "Compliance overlays for AB 2801 and §1950.5",
        "Verified Listing Assist badge for every property",
      ],
    },
    metadata: {
      priority: 90,
      lastModified: new Date().toISOString(),
      author: "system",
      status: "published",
      tags: ["trust", "homepage"],
    },
  },
];

const homepageFlow: ContentFlow = {
  id: "landlord-homepage-flow",
  name: "Landlord Homepage Journey",
  audience: "landlord",
  journeyStage: "awareness",
  sections: [
    {
      id: "hero",
      contentId: "hero-landlord-primary",
      goal: ["capture_attention", "clarify_value"],
      priority: 100,
    },
    {
      id: "trust",
      contentId: "trust-signals-compliance",
      goal: ["build_trust"],
      priority: 90,
    },
  ],
};

ContentManager.registerContent(homepageContent);
ContentManager.registerFlows([homepageFlow]);

export { homepageContent, homepageFlow };
