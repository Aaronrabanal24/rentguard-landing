import { useState } from "react";
import { track } from "../lib/track";

interface FormData {
  email: string;
  name: string;
  userType: "renter" | "landlord" | "";
  location: string;
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    userType: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to join waitlist");

      track("waitlist_signup_completed", {
        userType: formData.userType,
        location: formData.location,
      });

      setIsSubmitted(true);
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
      track("waitlist_signup_failed", { error: err?.message || "Unknown error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    track("waitlist_field_interaction", { field, hasValue: value.length > 0 });
  };

  if (isSubmitted) {
    return (
      <div className="py-8 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-900">You are on the list</h3>
        <p className="mb-4 text-gray-600">We will notify you when we launch. Stay tuned.</p>
        <p className="text-sm text-gray-500">Check your email for confirmation and updates.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <select
          value={formData.userType}
          onChange={(e) => handleInputChange("userType", e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        >
          <option value="">I am a...</option>
          <option value="renter">Renter looking for a place</option>
          <option value="landlord">Landlord with properties</option>
        </select>
      </div>

      <div>
        <input
          type="text"
          placeholder="City, State"
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      {error && <div className="text-center text-sm text-red-600">{error}</div>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-indigo-600 py-3 px-6 font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Joining..." : "Join the Waitlist"}
      </button>

      <p className="text-center text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
    </form>
  );
}
