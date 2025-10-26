import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
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

      {/* Hero Section */}
      <section className="flex-1 py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight">
                Close More Deals in the First 30 Days
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl">
                Most sales teams are drowning in generic leads. Your RightMessage implementation should arm them with the data they need to qualify faster and adjust their pitch in real-time.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Get Your Implementation Checklist
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tale of Two Sales Calls Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            The Tale of Two Sales Calls
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Call 1: Without RightMessage */}
            <div className="space-y-4 p-6 rounded-lg border border-destructive/20 bg-destructive/5">
              <h3 className="font-bold text-lg text-destructive">
                The Call That Wasted 20 Minutes
              </h3>
              <p className="text-sm text-foreground/70">
                Mark opens his CRM. The lead sheet is sparse: <em>Name, Title, Company, Downloaded "The Ultimate Guide."</em>
              </p>
              <p className="text-sm text-foreground/70">
                He dials. Sarah is a sole proprietor on a $29/month budget. Mark just wasted 20 minutes of everyone's time.
              </p>
              <p className="text-sm font-semibold text-destructive">
                Result: $50,000 in lost sales time this quarter.
              </p>
            </div>

            {/* Call 2: With RightMessage */}
            <div className="space-y-4 p-6 rounded-lg border border-green-500/20 bg-green-500/5">
              <h3 className="font-bold text-lg text-green-600">
                The Call That Closed a Deal
              </h3>
              <p className="text-sm text-foreground/70">
                Jessica opens her CRM. Her lead sheet is a full narrative: <em>Director of Marketing, 200+ employees, biggest pain point is lead quality.</em>
              </p>
              <p className="text-sm text-foreground/70">
                She dials. David is immediately engaged. He's surprised she knows his pain point. A demo is booked.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Result: 40% increase in qualified demo requests.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-background border border-border">
            <p className="text-center text-foreground/80">
              <strong>The difference?</strong> Not skill. It's the system—the invisible, personalized infrastructure that feeds them information.
            </p>
          </div>
        </div>
      </section>

      {/* Why RightMessage Implementation Matters */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            Why RightMessage Implementation Matters
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Arm Your Sales Team with Real Data</h3>
                <p className="text-foreground/70">
                  Instead of generic lead sheets, your sales team gets a rich profile: intent, budget, timeline, and on-site behavior. They know exactly who they're calling and why.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Close More Deals Before the Drop-Off</h3>
                <p className="text-foreground/70">
                  Most conversions happen in the first 30 days. After that, leads go cold. Proper RightMessage segmentation ensures your sales team calls the hot leads first, when they're most likely to buy.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Adjust Your Pitch in Real-Time</h3>
                <p className="text-foreground/70">
                  When your sales team knows a prospect is an "Enterprise Buyer Looking for Integration" vs. a "Solo Founder on a Budget," they can adjust their pitch immediately. No wasted time on irrelevant features.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Measurable ROI</h3>
                <p className="text-foreground/70">
                  A properly implemented RightMessage system delivers a 30%+ conversion lift. That's not a guess—that's the result of strategic segmentation and personalization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem with Generic Implementation */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            The Problem with Generic Implementation
          </h2>

          <div className="space-y-4 text-foreground/70">
            <p>
              RightMessage is powerful. But it's also complex. Most teams install it, build a few basic pop-ups, and call it a day. They're paying for a Ferrari engine but driving in first gear.
            </p>
            <p>
              The real power of RightMessage comes from strategic, data-backed segmentation. It requires:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Understanding your customer journey</li>
              <li>Building clean, logical segmentation rules</li>
              <li>Connecting your CRM data to your website</li>
              <li>Creating personalized experiences that actually convert</li>
            </ul>
            <p>
              This is where most teams get stuck. They need an expert who understands both the tool and the strategy.
            </p>
          </div>
        </div>
      </section>

      {/* About Keith */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Who I Am</h2>

          <div className="space-y-4 text-foreground/70">
            <p>
              I'm a former <strong>Teacher of the Year</strong> with a <strong>Masters in Education</strong>. For the past decade, I've worked as an <strong>in-house MarTech Manager</strong>, building and optimizing marketing systems for high-growth companies.
            </p>
            <p>
              I know how to simplify the complex. I know how to teach systems. And I know how to implement RightMessage in a way that actually drives revenue.
            </p>
            <p>
              My specialty is taking the raw power of RightMessage and turning it into a predictable, revenue-generating system that your sales team can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Ready to Close More Deals in the First 30 Days?
          </h2>
          <p className="text-lg opacity-90">
            Download the RightMessage Implementation Checklist and see the 3-step logic rule your team is missing.
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            Get the Checklist
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
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

