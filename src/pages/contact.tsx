import { PageContainer } from "@/components/layout/PageContainer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageContainer title="Contact Us" animateMain={false}>
      <section className="bg-white py-16 text-slate-900">
        <div className="container-tight max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Have questions about deposit management or need help getting started? We&apos;re here to help.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-slate-900 mb-2">
                  I am a...
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                >
                  <option value="">Select your role</option>
                  <option value="landlord">Landlord (1-20 units)</option>
                  <option value="property-manager">Property Manager</option>
                  <option value="renter">Renter</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-teal-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">Message Sent!</h2>
              <p className="text-slate-600 leading-relaxed">
                Thank you for reaching out. We&apos;ll get back to you within 1 business day.
              </p>
            </div>
          )}

          <div className="mt-12 pt-12 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Other Ways to Reach Us</h3>
            <div className="space-y-3 text-slate-600">
              <p className="leading-relaxed">
                <strong>Email:</strong> support@fairvia.com
              </p>
              <p className="leading-relaxed">
                <strong>For Compliance Questions:</strong> compliance@fairvia.com
              </p>
              <p className="leading-relaxed">
                <strong>For Partnership Inquiries:</strong> partners@fairvia.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
