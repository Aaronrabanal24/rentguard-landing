import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "@/lib/motion";
import HomeCTA from "@/components/sections/HomeCTA";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionBadge, Card, CardHeader, CardTitle, CardContent, Grid, Button } from "@/components/ui";

const PLAN_FEATURES = [
  "5 Active Cases",
  "5 E-sign Envelopes",
  "Message Relay",
  "Deduction Tools + Templates",
  "Full Exports",
  "DFPI Escrow Partners",
  "21-day countdown automation",
  "AB 2801 photo compliance",
];

export default function PricingPage() {
  return (
    <PageContainer title="Fairvia Pricing" animateMain={false}>
      <Section background="gradient-primary" padding="xl">
        <SectionHeader>
          <SectionBadge>Updated Pricing</SectionBadge>
          <SectionTitle size="xl">Simple, Transparent Pricing</SectionTitle>
          <SectionSubtitle size="lg">
            Professional deposit management with neutral escrow, automated compliance, and court-ready documentation.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          className="mx-auto mt-10 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Card variant="elevated" padding="xl" radius="xl" className="bg-gradient-to-br from-white via-slate-50 to-white">
            <CardHeader>
              <div className="flex flex-col items-start gap-6 text-left sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-2">Starter Plan</p>
                  <CardTitle level={2} className="text-5xl font-bold text-slate-900">
                    $69<span className="text-xl font-medium text-slate-500">/month</span>
                  </CardTitle>
                  <p className="text-slate-600 mt-2">Everything you need to get started</p>
                </div>
                <div className="text-sm text-slate-600">
                  <p>• Price-locked for 12 months</p>
                  <p>• Month-to-month billing</p>
                  <p>• Cancel anytime</p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <Grid cols={2} gap="sm">
                {PLAN_FEATURES.map((feature) => (
                  <Card key={feature} variant="glass" padding="sm" radius="lg" className="border border-slate-100/50">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500 text-lg">✓</span>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  </Card>
                ))}
              </Grid>
            </CardContent>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button variant="primary" size="lg" className="w-full">
                Start Now – It&apos;s Free to Join
              </Button>
              <Button variant="secondary" size="lg" className="w-full">
                Talk to a Specialist
              </Button>
            </div>

            <Card variant="gradient" padding="md" radius="lg" className="mt-6 border-emerald-200">
              <CardHeader>
                <CardTitle level={4} className="text-emerald-800">Proven ROI</CardTitle>
              </CardHeader>
              <Grid cols={2} gap="sm" className="text-sm text-slate-700">
                <span>• Average 6.2 hours saved per move-out</span>
                <span>• 147 deposits processed successfully</span>
                <span>• Zero forfeitures from missed deadlines</span>
                <span>• 100% on-time release rate</span>
              </Grid>
            </Card>

            <Card variant="default" padding="md" radius="lg" className="mt-6 border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle level={4} className="text-amber-900">On-time Guarantee</CardTitle>
              </CardHeader>
              <p className="text-sm text-amber-800">Packet generated and payout initiated by day 21 when documentation is completed in-app.</p>
            </Card>
          </Card>
        </motion.div>

      </Section>

      <Section background="white" padding="xl">
        <SectionHeader>
          <SectionTitle size="lg">Frequently Asked Questions</SectionTitle>
        </SectionHeader>
        <div className="max-w-3xl mx-auto">
          <Grid cols={1} gap="md">
            <Card variant="default" padding="lg" hover>
              <CardHeader>
                <CardTitle level={3}>Why this pricing structure?</CardTitle>
              </CardHeader>
              <p className="text-slate-600">Transparent pricing that scales with your business. Everything you need included, with clear add-ons for growth.</p>
            </Card>
            <Card variant="default" padding="lg" hover>
              <CardHeader>
                <CardTitle level={3}>Will the price change?</CardTitle>
              </CardHeader>
              <p className="text-slate-600">Early customers are price-locked for 12 months. We believe in rewarding our early supporters.</p>
            </Card>
            <Card variant="default" padding="lg" hover>
              <CardHeader>
                <CardTitle level={3}>What counts as &apos;on-time&apos;?</CardTitle>
              </CardHeader>
              <p className="text-slate-600">When documentation is completed in-app by day 21, we generate the packet and initiate payout automatically.</p>
            </Card>
            <Card variant="default" padding="lg" hover>
              <CardHeader>
                <CardTitle level={3}>Can I cancel anytime?</CardTitle>
              </CardHeader>
              <p className="text-slate-600">Yes—month-to-month billing with the ability to cancel anytime before the next billing period.</p>
            </Card>
          </Grid>
        </div>

        <Card variant="gradient" padding="xl" radius="xl" className="max-w-2xl mx-auto text-center mt-12">
          <CardHeader>
            <CardTitle level={3} className="text-xl">Enterprise Solutions</CardTitle>
            <p className="text-slate-600">Managing 50+ doors? Talk to a specialist about volume pricing and advanced reporting.</p>
          </CardHeader>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </Card>

      </Section>

      <Section background="dark" padding="lg">
        <div className="text-center">
          <p className="text-slate-300 text-sm mb-2">
            Deposits held by DFPI-licensed partners • Shared timeline and receipts • Same packet for landlord and tenant
          </p>
          <p className="text-slate-500 text-xs">
            Fairvia is not a bank, escrow agent, or law firm. Deposits are held by DFPI-licensed partners.
          </p>
        </div>
      </Section>

      <HomeCTA />
    </PageContainer>
  );
}
