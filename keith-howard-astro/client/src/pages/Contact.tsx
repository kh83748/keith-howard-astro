import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  const emailDisplay = "keith@keith-howard.com";

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
          <h1 className="text-4xl font-bold mb-4">
            Let's Talk About Your RightMessage Implementation
          </h1>
          <p className="text-lg text-foreground/70">
            Ready to close more deals in the first 30 days? Let's start with a
            conversation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 flex-1">
        <div className="container max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Tripwire Product */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Start Here: The Implementation Checklist
            </h2>

            <div className="p-6 rounded-lg border-2 border-primary bg-primary/5 mb-6">
              <h3 className="font-bold text-lg mb-3">
                RightMessage Implementation Checklist: From Zero to 30%
                Conversion Lift
              </h3>
              <p className="text-foreground/70 mb-4">
                A step-by-step guide that shows you the 3-step logic rule your
                sales team is missing. Includes custom templates and
                implementation examples.
              </p>
              <div className="text-2xl font-bold text-primary mb-4">$27</div>

              {/* Bento Embed Placeholder */}
              <div className="bg-muted rounded-lg p-4 mb-4 text-center">
                <p className="text-sm text-foreground/60 mb-3">
                  Email signup form powered by Bento
                </p>
                <div
                  id="bento-form"
                  className="min-h-[120px] flex items-center justify-center text-foreground/40"
                >
                  {/* Bento embed will be inserted here */}
                  <p className="text-sm">
                    [Bento form embed will appear here]
                  </p>
                </div>
              </div>

              <p className="text-xs text-foreground/60 mt-3">
                Instant download. 100% satisfaction guaranteed. Your email is
                safe with us.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold">What's Included:</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  ✓ The 3-step segmentation logic that filters 90% of
                  tire-kickers
                </li>
                <li>✓ Custom property setup guide</li>
                <li>✓ Survey template for capturing buyer intent</li>
                <li>✓ CRM integration checklist</li>
                <li>✓ Sales team training outline</li>
                <li>✓ 30-day optimization roadmap</li>
              </ul>
            </div>
          </div>

          {/* Right: Direct Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Ready for a Full Implementation?
            </h2>

            <div className="space-y-6">
              <p className="text-foreground/70">
                If you're ready to move beyond the checklist and do a full
                RightMessage implementation, let's schedule a conversation.
              </p>

              <div className="p-6 rounded-lg border border-border bg-muted/30">
                <h3 className="font-bold mb-4">Discovery Call (30 minutes)</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  We'll discuss your sales process, your current RightMessage
                  setup (if you have one), and whether a full implementation is
                  the right fit.
                </p>
                <Button variant="outline" className="w-full gap-2">
                  Schedule a Call
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6 rounded-lg border border-border bg-muted/30">
                <h3 className="font-bold mb-4">Email Me Directly</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  If you prefer to start with an email, I'm happy to discuss
                  your situation and see if we're a good fit.
                </p>
                <a
                  href={`mailto:${emailDisplay}`}
                  className="flex items-center gap-2 text-primary hover:text-primary/80"
                  rel="noopener noreferrer"
                  aria-label="Send email to Keith Howard"
                >
                  <Mail className="w-4 h-4" />
                  {emailDisplay}
                </a>
              </div>

              <div className="p-6 rounded-lg border border-border bg-muted/30">
                <h3 className="font-bold mb-4">Connect on LinkedIn</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Let's connect and stay updated on new content and case
                  studies.
                </p>
                <a
                  href="https://linkedin.com/in/keithhoward"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80"
                  aria-label="Connect with Keith Howard on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">
                How long does a full implementation take?
              </h3>
              <p className="text-foreground/70">
                Typically 4 weeks. Week 1 is discovery and strategy. Week 2 is
                setup and configuration. Week 3 is personalization and launch.
                Week 4 is optimization and team training.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                What if I don't have RightMessage yet?
              </h3>
              <p className="text-foreground/70">
                I can help you get set up. Part of the implementation includes
                getting you the right plan and walking through the initial
                setup. You'll need an active subscription before we start the
                implementation work.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Do you guarantee a 30% conversion lift?
              </h3>
              <p className="text-foreground/70">
                I can't guarantee results (every business is different), but I
                can guarantee that we'll implement best practices and optimize
                aggressively. Most clients see a 30%+ lift, but your results
                will depend on your starting point and how well the team
                executes.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                What's the investment for a full implementation?
              </h3>
              <p className="text-foreground/70">
                It depends on the scope and complexity of your setup. Let's talk
                about your specific situation on a discovery call. Most
                implementations are in the $3k-$10k range, depending on the
                level of customization and integration work required.
              </p>
            </div>
          </div>
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

