import { useState } from "react";
import { useWaitlist } from "@/hooks/useWaitlist";
import type { WaitlistData } from "@/lib/types";
import { track } from "@/lib/tracking";

type FormState = Omit<WaitlistData, "userType"> & { userType: WaitlistData["userType"] | "" };

interface WaitlistFormProps {
  defaultRole?: "renter" | "landlord";
  lockRole?: boolean;
  source?: string;
  ctaLabel?: string;
}

export default function WaitlistForm({
  defaultRole,
  lockRole = false,
  source = "signup_section",
  ctaLabel = "Join the waitlist",
}: WaitlistFormProps) {
  const [formData, setFormData] = useState<FormState>({
    email: "",
    name: "",
    userType: defaultRole || "",
    location: "",
  });

  const { isSubmitting, isSubmitted, error, submitWaitlist } = useWaitlist({ source });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userType) return;

    await submitWaitlist({
      email: formData.email,
      name: formData.name,
      userType: formData.userType,
      location: formData.location,
    });
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    track("waitlist_field_interaction", { field, hasValue: value.length > 0 });
  };

  if (isSubmitted) {
    return (
      <div className="py-8 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
          <svg className="h-8 w-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-slate-900">You're on the list</h3>
        <p className="mb-4 text-slate-600">We’ll let you know as soon as Novatra rolls into your city.</p>
        <p className="text-sm text-slate-500">Keep an eye on your inbox for confirmation.</p>
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
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-200"
          required
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Work email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-200"
          required
        />
      </div>

      <div>
        <select
          value={formData.userType}
          onChange={(e) => handleInputChange("userType", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-200"
          required
          disabled={lockRole}
        >
          <option value="">I'm a...</option>
          <option value="renter">Renter looking for a home</option>
          <option value="landlord">Landlord with available units</option>
        </select>
      </div>

      <div>
        <input
          type="text"
          placeholder="City, State"
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-200"
          required
        />
      </div>

      {error && <div className="rounded-lg bg-rose-500/10 p-3 text-center text-sm text-rose-500">{error}</div>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-teal-500 py-3 px-6 text-base font-semibold text-white shadow-lg shadow-sky-200/60 transition hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Joining..." : ctaLabel}
      </button>

      <p className="text-center text-xs text-slate-500">We respect your privacy. Unsubscribe any time.</p>
    </form>
  );
}
