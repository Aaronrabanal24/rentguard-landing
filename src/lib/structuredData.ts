export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fairvia",
  description: "Professional deposit management for California landlords",
  url: "https://fairvia.com",
  logo: "https://fairvia.com/fairvia-logo.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-000-000-0000",
    contactType: "customer service",
    areaServed: "California",
    availableLanguage: "English",
  },
  sameAs: [],
} as const;

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fairvia",
  operatingSystem: "Web",
  applicationCategory: "PropertyManagement",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "42",
  },
} as const;

export type StructuredData = typeof organizationSchema | typeof softwareSchema;
