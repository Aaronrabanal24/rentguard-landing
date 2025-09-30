import { useState } from "react";
import { useWaitlist } from "@/hooks/useWaitlist";
import type { WaitlistData } from "@/lib/types";
import { track } from "@/lib/tracking";
import { cn } from "@/lib/utils";

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
  const [focusedField, setFocusedField] = useState<keyof FormState | null>(null);

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
        <h3 className="mb-2 text-2xl font-bold text-slate-900">You&apos;re on the list</h3>
        <p className="mb-4 text-slate-600">We&apos;ll let you know as soon as Fairvia rolls into your city.</p>
        <p className="text-sm text-slate-500">Keep an eye on your inbox for confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-5 text-left">
      <div className="space-y-3">
        {[
          { name: "name" as const, placeholder: "Enter your first and last name", type: "text", label: "Full name" },
          { name: "email" as const, placeholder: "you@company.com", type: "email", label: "Work email" },
        ].map((field) => (
          <div key={field.name} className="relative space-y-2">
            <label htmlFor={field.name} className="text-sm font-medium text-slate-700">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              onFocus={() => setFocusedField(field.name)}
              onBlur={() => setFocusedField(null)}
              className={cn(
                "h-12 w-full rounded-xl border px-4 text-slate-900 shadow-sm transition-all",
                "focus:outline-none focus:ring-4",
                focusedField === field.name
                  ? "border-sky-400 bg-sky-50/50 ring-sky-200"
                  : "border-slate-200 bg-white hover:border-slate-300"
              )}
              required
            />
            {focusedField === field.name ? (
              <div className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-sky-500 animate-pulse" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <div className="relative space-y-2">
          <label htmlFor="userType" className="text-sm font-medium text-slate-700">
            I&apos;m signing up as
          </label>
          <select
            value={formData.userType}
            onChange={(e) => handleInputChange("userType", e.target.value)}
            onFocus={() => setFocusedField("userType")}
            onBlur={() => setFocusedField(null)}
            id="userType"
            className={cn(
              "h-12 w-full appearance-none rounded-xl border px-4 text-slate-900 shadow-sm transition-all",
              "focus:outline-none focus:ring-4",
              focusedField === "userType"
                ? "border-sky-400 bg-sky-50/50 ring-sky-200"
                : "border-slate-200 bg-white hover:border-slate-300",
              lockRole && "cursor-not-allowed opacity-60"
            )}
            required
            disabled={lockRole}
          >
            <option value="">I&apos;m a...</option>
            <option value="renter">Renter looking for a home</option>
            <option value="landlord">Landlord with available units</option>
          </select>
          {focusedField === "userType" ? (
            <div className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-sky-500 animate-pulse" />
          ) : null}
        </div>

        <div className="relative space-y-2">
          <label htmlFor="location" className="text-sm font-medium text-slate-700">
            Operating location
          </label>
          <input
            type="text"
            placeholder="City, State"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            onFocus={() => setFocusedField("location")}
            onBlur={() => setFocusedField(null)}
            id="location"
            className={cn(
              "h-12 w-full rounded-xl border px-4 text-slate-900 shadow-sm transition-all",
              "focus:outline-none focus:ring-4",
              focusedField === "location"
                ? "border-sky-400 bg-sky-50/50 ring-sky-200"
                : "border-slate-200 bg-white hover:border-slate-300"
            )}
            required
          />
          {focusedField === "location" ? (
            <div className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-sky-500 animate-pulse" />
          ) : null}
        </div>
      </div>

      {error ? <div className="rounded-lg bg-rose-500/10 p-3 text-center text-sm text-rose-500">{error}</div> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "group relative w-full overflow-hidden rounded-full px-6 py-3 text-base font-semibold text-white transition-all",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300",
          isSubmitting
            ? "cursor-not-allowed bg-slate-400"
            : "bg-gradient-to-r from-sky-400 via-sky-500 to-teal-500 shadow-lg shadow-sky-200/60 hover:scale-105 hover:shadow-2xl"
        )}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Joining...
            </>
          ) : (
            <>
              {ctaLabel}
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />
      </button>

      <p className="text-center text-xs text-slate-500">We respect your privacy. Unsubscribe any time.</p>
    </form>
  );
}
