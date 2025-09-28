// Analytics tracking utility that works with Plausible or GA4

interface TrackingEvent {
  [key: string]: string | number | boolean | undefined;
}

export function track(eventName: string, properties?: TrackingEvent) {
  try {
    // Plausible
    if (typeof window !== "undefined" && typeof (window as any).plausible === "function") {
      (window as any).plausible(eventName, { props: properties });
    }
    // GA4
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", eventName, properties || {});
    }
    // Dev log
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
