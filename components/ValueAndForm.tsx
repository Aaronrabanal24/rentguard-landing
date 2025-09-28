import { useState } from "react";
import WaitlistForm from "./WaitlistForm";
import { track } from "../lib/track";

const RENTER_BENEFITS = [
  { icon: "🏠", title: "Direct Landlord Contact", description: "Skip middleman fees and connect directly with property owners" },
  { icon: "⚡", title: "Instant Matching", description: "AI powered matching suggests compatible properties fast" },
  { icon: "🔒", title: "Verified Listings", description: "Every property is verified and scam free" },
  { icon: "💰", title: "Zero Fees", description: "No broker fees and no hidden costs" },
];

const LANDLORD_BENEFITS = [
  { icon: "👥", title: "Quality Tenants", description: "Pre screened and verified renters who fit your criteria" },
  { icon: "📊", title: "Smart Analytics", description: "Helpful insights on listings and renter engagement" },
  { icon: "🚀", title: "Faster Filling", description: "Fill vacancies faster with targeted matching" },
  { icon: "🛡️", title: "Secure Payments", description: "Built in payment processing and deposit protection" },
];

export default function ValueAndForm() {
  const [activeTab, setActiveTab] = useState<"renter" | "landlord">("renter");

  const handleTabClick = (tab: "renter" | "landlord") => {
    setActiveTab(tab);
    track("value_tab_clicked", { tab });
  };

  const benefits = activeTab === "renter" ? RENTER_BENEFITS : LANDLORD_BENEFITS;

  return (
    <div className="bg-white py-16" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Built for modern renters and landlords</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Whether you are looking for your next home or seeking quality tenants, our platform streamlines the rental process.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 flex justify-center">
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => handleTabClick("renter")}
              className={`px-8 py-3 font-semibold transition-all rounded-md ${
                activeTab === "renter" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              For renters
            </button>
            <button
              onClick={() => handleTabClick("landlord")}
              className={`px-8 py-3 font-semibold transition-all rounded-md ${
                activeTab === "landlord" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              For landlords
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-xl bg-gray-50 p-6 text-center transition-colors hover:bg-gray-100">
              <div className="mb-4 text-4xl">{b.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{b.title}</h3>
              <p className="text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Waitlist Form Section */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 p-8 lg:p-12" id="waitlist-form">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Be the first to experience better rentals</h2>
            <p className="mb-8 text-lg text-gray-600">Join early adopters and get early access when we launch.</p>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}
