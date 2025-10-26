import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg">
            Keith Howard
          </Link>
          <div className="flex gap-6">
            <Link href="/about" className="text-sm hover:text-foreground/80">
              About
            </Link>
            <Link href="/services" className="text-sm hover:text-foreground/80">
              Services
            </Link>
            <Link href="/blog" className="text-sm hover:text-foreground/80">
              Blog
            </Link>
            <Link href="/contact" className="text-sm hover:text-foreground/80">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">RightMessage Implementation</h1>
          <p className="text-lg text-foreground/70">
            Strategic, data-backed segmentation that turns your website and email into a sales-qualifying machine.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Who This Service Is For</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-muted/30">
              <h3 className="font-bold text-lg mb-3">Sales-First Organizations</h3>
              <p className="text-foreground/70">
                Your revenue depends on your sales team closing deals. You need them armed with real data, not generic lead sheets.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-muted/30">
              <h3 className="font-bold text-lg mb-3">High-Value Customer Businesses</h3>
              <p className="text-foreground/70">
                Your average customer value is high enough that a 30% conversion lift justifies the investment in proper segmentation and personalization.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-muted/30">
              <h3 className="font-bold text-lg mb-3">Teams Stuck on RightMessage</h3>
              <p className="text-foreground/70">
                You have the tool installed, but you're only using 10% of its power. You need an expert to unlock the full potential and turn it into a revenue engine.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-muted/30">
              <h3 className="font-bold text-lg mb-3">Conversion-Focused Marketers</h3>
              <p className="text-foreground/70">
                You're tired of vanity metrics. You want measurable, revenue-driven results. You need a system that closes more deals in the first 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What's Included in the Implementation</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Discovery & Strategy Session</h3>
                <p className="text-foreground/70">
                  We map out your customer journey, identify the critical decision points, and define the segments that matter for your sales team.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">RightMessage Configuration</h3>
                <p className="text-foreground/70">
                  I build clean, logical segmentation rules. I connect your CRM data to your website. I set up custom properties and surveys to capture the data your sales team needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Personalized Experience Design</h3>
                <p className="text-foreground/70">
                  I create targeted pop-ups, landing pages, and CTAs that speak directly to each segment. No more generic "Sign Up for Our Newsletter" for enterprise buyers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Sales Team Training</h3>
                <p className="text-foreground/70">
                  I teach your sales team how to use the new data. How to qualify faster. How to adjust their pitch based on what they see in the CRM.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">30-Day Optimization & Support</h3>
                <p className="text-foreground/70">
                  We monitor performance, tweak the segments, and optimize for conversions. I'm here to ensure you hit your 30% lift goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">The Implementation Process</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Week 1: Discovery</h3>
                <p className="text-foreground/70">
                  We meet to understand your business, your sales process, and your conversion goals. I audit your current RightMessage setup (if you have one).
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Week 2: Strategy & Setup</h3>
                <p className="text-foreground/70">
                  I build the segmentation logic, set up custom properties, and configure your CRM integration. You review and approve.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Week 3: Personalization & Launch</h3>
                <p className="text-foreground/70">
                  I create the personalized experiences (pop-ups, landing pages, CTAs). We launch and monitor the first week of data.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Week 4: Optimization & Handoff</h3>
                <p className="text-foreground/70">
                  We optimize based on performance data. I train your team on how to manage and iterate on the system going forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results You Can Expect */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Results You Can Expect</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border bg-background">
              <div className="text-3xl font-bold text-green-600 mb-2">30%+</div>
              <p className="text-foreground/70">Conversion lift from proper segmentation and personalization</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%+</div>
              <p className="text-foreground/70">Increase in qualified demo requests or sales calls</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background">
              <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
              <p className="text-foreground/70">Reduction in time spent qualifying leads by your sales team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg text-foreground/70">
            Start with the RightMessage Implementation Checklist. It's a low-cost, high-value guide that shows you the 3-step logic rule your team is missing.
          </p>
          <Button size="lg" className="gap-2">
            Get the Checklist
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 mt-16">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © 2025 Keith Howard. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-foreground/60 hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-foreground/60 hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

