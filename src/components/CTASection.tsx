"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./ui/Button";
import { CheckCircle, Loader2 } from "lucide-react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState<"landlord" | "renter">("landlord");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/zoho", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          userType,
          location,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to join waitlist");
      }

      setIsSuccess(true);
      setEmail("");
      setName("");
      setLocation("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="px-4 py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Welcome to Fairvia!</h3>
              <p className="text-gray-300 text-lg">
                We&apos;ve added you to the pilot program. Check your email for next steps.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    );
  }

  return (
    <section className="px-4 py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Start with one free unit
            </h2>
            <p className="text-xl text-gray-300">
              Join property managers who are building trust through clear, compliant deposit management.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-2 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                  City, State *
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Austin, TX"
                />
              </div>

              {/* User Type */}
              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-gray-300 mb-2">
                  I am a *
                </label>
                <select
                  id="userType"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value as "landlord" | "renter")}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="landlord">Property Manager / Owner</option>
                  <option value="renter">Renter</option>
                </select>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              variant="primary"
              disabled={isLoading}
              className="w-full sm:w-auto min-w-[200px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join the Pilot →"
              )}
            </Button>

            <p className="text-sm text-gray-400 mt-4">
              No credit card required. Start with one unit free.
            </p>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}
