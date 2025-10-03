"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Can I keep my existing tools and PMS?",
    answer: "Yes. Fairvia is designed as a lightweight layer on top of your existing systems. You don't need to replace your PMS—we integrate with what you already use."
  },
  {
    question: "What happens after the pilot?",
    answer: "After the pilot, you can continue with our Starter plan (free for 1 unit) or upgrade to SMB Pro ($49-$149/month) for additional features like bulk import, fraud protection, and weekly owner updates."
  },
  {
    question: "Which states are supported?",
    answer: "We currently support California and Florida with built-in compliance (21-day CA rules, 30-day FL notices). Texas, New York, and Illinois support coming Q1 2026."
  },
  {
    question: "How is this different from a full PMS?",
    answer: "Fairvia focuses exclusively on transparency, compliance, and proof—not replacing accounting, payments, or maintenance. Think of us as a specialized proof layer, not a heavy all-in-one system."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We maintain SOC 2 Type II compliance and GLBA-level care for all personal information. All data is encrypted at rest and in transit."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24 bg-slate-800">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about Fairvia and the pilot program.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className="bg-slate-700/50 border border-slate-600/50 rounded-xl overflow-hidden transition-all hover:border-teal-500/30">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-slate-700/70"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: Show 2 FAQs on small screens by default */}
        <div className="sm:hidden mt-6 text-center">
          <p className="text-sm text-gray-400">
            {openIndex === null ? "Tap any question to expand" : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
