import "@/content/homepage";
import {
  Footer,
  Hero,
  HomeCTA,
  StickyCTA,
} from "@/components";
import { motion } from "@/lib/motion";
import Link from "next/link";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, Card, CardTitle, Grid } from "@/components/ui";

// Problem & Solution Section
function ProblemSolutionSection() {
  const problems = [
    {
      title: "Landlord Problems",
      items: [
        "Missed refund deadlines create legal exposure",
        "Poor documentation leads to disputes",
        "Conflict during move-out with documentation gaps"
      ]
    },
    {
      title: "Renter Problems",
      items: [
        "No visibility into deposit status",
        "Surprise deductions without explanation",
        "Can't prove condition or see when refund is sent"
      ]
    }
  ];

  return (
    <Section background="gradient-secondary" padding="xl">
      <SectionHeader>
        <SectionTitle size="lg">The Problem We Solve</SectionTitle>
        <SectionSubtitle>
          A shared proof-first timeline + neutral escrow removes ambiguity and protects both parties.
        </SectionSubtitle>
      </SectionHeader>

      <Grid cols={2} gap="lg" className="max-w-4xl mx-auto">
        {problems.map((problem, index) => (
          <Card key={index} variant="elevated" padding="lg">
            <CardTitle level={3} className="text-slate-900 mb-4">{problem.title}</CardTitle>
            <ul className="space-y-3">
              {problem.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-rose-500 mt-1">⚠️</span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

// Six Core Components Section
function SixCoreComponents() {
  const components = [
    {
      icon: "🏷️",
      title: "SEO-Optimized Property Profile",
      description: "Helps landlords attract renters. Includes a Fairvia badge linking to proof timeline.",
      color: "sky"
    },
    {
      icon: "🧾",
      title: "Timeline & Message Relay",
      description: "Every action logged and visible. Uses landlord's existing email + SMS. Templates and scheduling built in.",
      color: "emerald"
    },
    {
      icon: "🖊️",
      title: "E-Sign Lease Flow",
      description: "5 envelopes/month. Seamless document storage. Renter and co-signer verified before signing.",
      color: "amber"
    },
    {
      icon: "💰",
      title: "Secure Deposit & Escrow",
      description: "Funds stored neutrally. Escrow events logged. Deduction tool generates itemized letters with receipt validation.",
      color: "purple"
    },
    {
      icon: "🧠",
      title: "Compliance Templates & Letters",
      description: "Built for AB 2801. Smart fields guide landlords. Reduce risk of legal noncompliance.",
      color: "rose"
    },
    {
      icon: "📤",
      title: "PDF & JSON Export",
      description: "Locked, timestamped proof. Ready for court or insurance. Ideal for future renter handoff or audits.",
      color: "teal"
    }
  ];

  return (
    <Section background="white" padding="xl">
      <SectionHeader>
        <SectionTitle size="lg">Six Core Components</SectionTitle>
        <SectionSubtitle>
          Your platform is composed of six core components, each tied to a moment in the rental lifecycle.
        </SectionSubtitle>
      </SectionHeader>

      <Grid cols={3} gap="lg" className="max-w-6xl mx-auto">
        {components.map((component, index) => (
          <Card key={index} variant="default" padding="lg" hover>
            <div className="flex items-start gap-4">
              <div className="text-3xl">{component.icon}</div>
              <div>
                <CardTitle level={3} className="text-slate-900 mb-2">{component.title}</CardTitle>
                <p className="text-slate-600">{component.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

// Competitive Advantages Section
function CompetitiveAdvantages() {
  const advantages = [
    {
      icon: "🚫",
      title: "No Renter Marketplace Distractions",
      description: "Pure focus on deposit compliance, not rental listings or marketplace features."
    },
    {
      icon: "✅",
      title: "True California Compliance Focus (AB 2801)",
      description: "Built specifically for California laws with automated AB 2801 photo documentation."
    },
    {
      icon: "🔄",
      title: "Works with What Landlords Already Use",
      description: "Integrates with existing email + SMS workflows. No platform switching required."
    },
    {
      icon: "🧾",
      title: "Public Badge Boosts Inquiries and Trust",
      description: "Fairvia verification badge increases listing quality and renter confidence."
    },
    {
      icon: "📚",
      title: "Built for Defensibility — Not Just Convenience",
      description: "Court-ready documentation and audit trails that protect against disputes."
    }
  ];

  return (
    <Section background="gradient-primary" padding="xl">
      <SectionHeader>
        <SectionTitle size="lg">Why Choose Fairvia</SectionTitle>
        <SectionSubtitle>
          Purpose-built for California landlords who want compliance, not complexity.
        </SectionSubtitle>
      </SectionHeader>

      <Grid cols={2} gap="lg" className="max-w-5xl mx-auto lg:grid-cols-3">
        {advantages.map((advantage, index) => (
          <Card key={index} variant="glass" padding="lg" hover>
            <div className="text-center">
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <CardTitle level={3} className="text-slate-900 mb-3">{advantage.title}</CardTitle>
              <p className="text-slate-600">{advantage.description}</p>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

// Metrics & Performance Section
function MetricsSection() {
  const metrics = [
    {
      value: ">90%",
      label: "On-time deposit return rate",
      description: "We track every deadline to ensure compliance"
    },
    {
      value: "<72hrs",
      label: "Median time to escrow",
      description: "Fast setup gets protection in place quickly"
    },
    {
      value: "<5%",
      label: "Dispute rate",
      description: "Transparency prevents most conflicts"
    },
    {
      value: "+15%",
      label: "Inquiry lift with badge",
      description: "Trust signals attract better renters"
    }
  ];

  return (
    <Section background="dark" padding="xl">
      <SectionHeader>
        <SectionTitle size="lg" className="text-white">Proven Results</SectionTitle>
        <SectionSubtitle className="text-slate-300">
          Real metrics from California landlords using Fairvia.
        </SectionSubtitle>
      </SectionHeader>

      <Grid cols={4} gap="lg" className="max-w-5xl mx-auto">
        {metrics.map((metric, index) => (
          <Card key={index} variant="glass" padding="lg" className="text-center border-slate-600">
            <div className="text-4xl font-bold text-sky-400 mb-2">{metric.value}</div>
            <CardTitle level={4} className="text-white mb-2 text-sm">{metric.label}</CardTitle>
            <p className="text-slate-400 text-sm">{metric.description}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

// How It Works - 6 Step Process
function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Property Profile (SEO + Badge)",
      description: "Create search-optimized listing with trust signals and verification badges that attract qualified renters.",
      color: "sky"
    },
    {
      number: "2",
      title: "Invite Renter with ID Check",
      description: "Send secure invitation with identity verification to ensure legitimate applications only.",
      color: "emerald"
    },
    {
      number: "3",
      title: "E-sign Lease + Fund Escrow",
      description: "Digital lease signing with automatic escrow funding through DFPI-licensed partners.",
      color: "amber"
    },
    {
      number: "4",
      title: "Document the Move",
      description: "Timestamped photo checklist and move-in documentation that satisfies AB 2801 requirements.",
      color: "purple"
    },
    {
      number: "5",
      title: "Deduct & Return Deposit with Proof",
      description: "Automated 21-day tracking with itemized deductions, receipts, and compliant documentation.",
      color: "rose"
    },
    {
      number: "6",
      title: "Export Case Archive",
      description: "Complete case files in PDF and JSON formats for your records and legal protection.",
      color: "teal"
    }
  ];

  return (
    <Section background="slate" padding="xl">
      <SectionHeader>
        <SectionTitle size="lg">How It Works</SectionTitle>
        <SectionSubtitle>
          End-to-end simplicity that de-risks trying the platform. Each step ties to a Fairvia feature.
        </SectionSubtitle>
      </SectionHeader>

      <Grid cols={3} gap="lg" className="max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <Card key={index} variant="elevated" padding="lg">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg ${
                step.color === 'sky' ? 'bg-sky-500' :
                step.color === 'emerald' ? 'bg-emerald-500' :
                step.color === 'amber' ? 'bg-amber-500' :
                step.color === 'purple' ? 'bg-purple-500' :
                step.color === 'rose' ? 'bg-rose-500' :
                step.color === 'teal' ? 'bg-teal-500' : 'bg-slate-500'
              }`}>
                {step.number}
              </div>
              <div className="flex-1">
                <CardTitle level={3} className="text-slate-900 mb-2">{step.title}</CardTitle>
              </div>
            </div>
            <p className="text-slate-600">{step.description}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}


// Pricing Section
function PricingSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-tight text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pricing</h2>
          <p className="text-lg text-slate-600 mb-8">Transparent and scalable pricing that anchors high perceived value.</p>

          <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-xl p-8 border border-sky-200 mb-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter Plan</h3>
              <div className="text-5xl font-bold text-slate-900 mb-2">$69<span className="text-xl text-slate-500">/mo</span></div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6 text-left">
              <h4 className="font-semibold text-slate-900 mb-4">Includes:</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">5 Active Cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">5 E-sign Envelopes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">Message Relay</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">Deduction Tools + Templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">Full Exports</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">DFPI Escrow Partners</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left">
              <h4 className="font-semibold text-slate-900 mb-2">Add-ons:</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div>• $10/case (additional cases)</div>
                <div>• $1.50 per e-sign envelope (additional)</div>
                <div>• Certified Exports (planned)</div>
              </div>
            </div>

            <Link href="/get-started" className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
              Start Now – It&apos;s Free to Join
            </Link>
          </div>

          <div className="bg-slate-100 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-2">Coming Soon – Pro Plan</h4>
            <div className="grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <div>• Unlimited Cases</div>
              <div>• 20+ E-sign Envelopes</div>
              <div>• Admin Reporting</div>
              <div>• Legal Checker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Fairvia eliminated the stress of deposit compliance. The 21-day tracking and automated letters saved me from forfeiting a $2,400 deposit when things got complicated.",
      author: "Sarah Chen",
      role: "Property Owner, Oakland",
      units: "8 units"
    },
    {
      quote: "The neutral escrow gave my tenants confidence, and I get better quality applications. The reputation badge really works on Craigslist.",
      author: "Michael Rodriguez",
      role: "Independent Landlord, San Jose",
      units: "12 units"
    },
    {
      quote: "As a renter, seeing the Fairvia badge told me this landlord was serious about doing things right. The transparent timeline was amazing.",
      author: "Jennifer Park",
      role: "Renter, San Francisco",
      units: null
    }
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What People Are Saying</h2>
          <p className="text-lg text-slate-600">Real quotes from landlords and renters using Fairvia.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-slate-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
                {testimonial.units && (
                  <p className="text-xs text-emerald-600 mt-1">{testimonial.units}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// For Renters Section
function ForRentersSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">For Renters</h2>
          <p className="text-lg text-slate-600">Transparent timeline, receipt uploads, and export access that protects your interests.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👀</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Transparent Timeline</h3>
            <p className="text-sm text-slate-600">See exactly where your deposit is and what happens next</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📤</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Receipt Uploads</h3>
            <p className="text-sm text-slate-600">Submit move-out documentation and receipts directly</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Export Access</h3>
            <p className="text-sm text-slate-600">Download complete case files for your records</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Legal Protection</h3>
            <p className="text-sm text-slate-600">DFPI-licensed escrow and compliance documentation</p>
          </div>
        </div>
      </div>
    </section>
  );
}


// FAQ Section
function FAQ() {
  return (
    <section className="bg-white py-16">
      <div className="container-tight">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Why only one plan?</h3>
            <p className="text-slate-600">Compliance shouldn&apos;t be a menu. One plan includes escrow, countdown, photos, messaging, and the release packet.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Will the price change?</h3>
            <p className="text-slate-600">This is pilot pricing. Early customers are price-locked for 12 months.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">What counts as &apos;on-time&apos;?</h3>
            <p className="text-slate-600">When documentation is completed in-app by day 21, we generate the packet and initiate payout.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Can I cancel?</h3>
            <p className="text-slate-600">Yes—month-to-month, cancel anytime before the next billing period.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="min-h-full bg-slate-50 text-slate-900">
        <header>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Hero />
          </motion.div>
        </header>

        <main className="safe-bot pb-32">
          <ProblemSolutionSection />
          <SixCoreComponents />
          <CompetitiveAdvantages />
          <MetricsSection />
          <HowItWorks />
          <PricingSection />
          <TestimonialsSection />
          <ForRentersSection />
          <FAQ />
          <HomeCTA />
        </main>

        <Footer />
      </div>
      <StickyCTA />
    </>
  );
}
