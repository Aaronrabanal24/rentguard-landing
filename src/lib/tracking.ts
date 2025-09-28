// Analytics tracking utility that works with Plausible or GA4

import type { TrackingEvent } from "./types";

export function track(eventName: string, properties?: TrackingEvent) {
  try {
    if (typeof window !== "undefined") {
      if (typeof window.plausible === "function") {
        window.plausible(eventName, { props: properties });
      }

      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, properties || {});
      }
    }

    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("📊 Analytics Event:", eventName, properties);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Analytics tracking error:", error);
  }
}

// Global type declarations for analytics
declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: TrackingEvent }) => void;
    gtag?: (command: string, targetId: string, config?: TrackingEvent) => void;
  }
}
