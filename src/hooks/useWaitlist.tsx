import { useState } from "react";
import type { WaitlistData } from "@/lib/types";
import { waitlistSchema } from "@/lib/types";
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
      const validation = waitlistSchema.safeParse(data);
      if (!validation.success) {
        setError("Please check your details and try again.");
        track("waitlist_signup_failed", { error: "client_validation_failed", source });
        return;
      }

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const payload: { message?: string } | null = await response.json().catch(() => null);

      if (!response.ok) {
        const message = payload?.message ?? "Failed to join waitlist";
        throw new Error(message);
      }

      setIsSubmitted(true);
      track("waitlist_signup_completed", { ...validation.data });
      track("submit_signup", { ...validation.data, source });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
      track("waitlist_signup_failed", { error: message, source });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, isSubmitted, error, submitWaitlist };
}
