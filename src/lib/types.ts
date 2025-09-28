export interface WaitlistData {
  email: string;
  name: string;
  userType: "renter" | "landlord";
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrackingEvent {
  [key: string]: string | number | boolean | undefined;
}
