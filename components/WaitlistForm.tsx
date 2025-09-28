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
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 text-left">
      <div>
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/90 px-4 py-3 text-slate-900 shadow-sm focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          required
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Work email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/90 px-4 py-3 text-slate-900 shadow-sm focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          required
        />
      </div>

      <div>
        <select
          value={formData.userType}
          onChange={(e) => handleInputChange("userType", e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/90 px-4 py-3 text-slate-900 shadow-sm focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          required
        >
          <option value="">I am a...</option>
          <option value="renter">Renter searching</option>
          <option value="landlord">Landlord leasing units</option>
        </select>
      </div>

      <div>
        <input
          type="text"
          placeholder="City, State"
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/90 px-4 py-3 text-slate-900 shadow-sm focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          required
        />
      </div>

      {error && <div className="rounded-lg bg-red-500/10 p-3 text-center text-sm text-red-200">{error}</div>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-indigo-400 via-indigo-500 to-blue-500 py-3 px-6 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/40 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Joining..." : "Join the waitlist"}
      </button>

      <p className="text-center text-xs text-slate-300/80">We respect your privacy. Unsubscribe at any time.</p>
    </form>
  );
}
