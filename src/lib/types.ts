import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().trim().email(),
  name: z.string().trim().min(2).max(100),
  userType: z.enum(["renter", "landlord"]),
  location: z.string().trim().min(2).max(200),
});

export type WaitlistData = z.infer<typeof waitlistSchema>;

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrackingEvent {
  [key: string]: string | number | boolean | undefined;
}
