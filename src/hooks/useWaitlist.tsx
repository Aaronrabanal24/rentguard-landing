import { useState } from "react";
import type { WaitlistData } from "@/lib/types";
import { track } from "@/lib/tracking";

interface UseWaitlistConfig {
  source?: string;
}

export function useWaitlist({ source = "default" }: UseWaitlistConfig = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitWaitlist = async (data: WaitlistData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to join waitlist");

      setIsSubmitted(true);
      track("waitlist_signup_completed", { ...data });
      track("submit_signup", { ...data, source });
    } catch (err: any) {
      const message = err?.message || "Something went wrong. Please try again.";
      setError(message);
      track("waitlist_signup_failed", { error: message, source });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, isSubmitted, error, submitWaitlist };
}
