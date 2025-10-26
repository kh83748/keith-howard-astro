import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [formState, setFormState] = useState({
    email: "",
    errors: {} as Record<string, string>,
    submitted: false,
  });

  const blogPosts = [
    {
      id: 1,
      title:
        "The Tale of Two Sales Calls: How RightMessage Transforms Lead Quality",
      excerpt:
        "One sales call wasted 20 minutes. The other closed a deal. The difference? Personalized data.",
      date: "Coming Soon",
      readTime: "8 min read",
      slug: "tale-of-two-sales-calls",
    },
    {
      id: 2,
      title: "Why Your Email List Conversion Rate is Flat (And How to Fix It)",
      excerpt:
        "The problem isn't your traffic. It's your segmentation. Here's how to turn a cold list into a revenue engine.",
      date: "Coming Soon",
      readTime: "10 min read",
      slug: "email-list-conversion",
    },
    {
      id: 3,
      title: "The 3-Step Logic Rule That Filters Out 90% of Tire-Kickers",
      excerpt:
        "Your sales team is drowning in bad leads. This simple segmentation rule changes everything.",
      date: "Coming Soon",
      readTime: "7 min read",
      slug: "logic-rule-tire-kickers",
    },
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormState((prev) => ({
      ...prev,
      email,
      errors: {},
      submitted: false,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formState.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(formState.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }));
      return;
    }

    // TODO: Connect to email service (ConvertKit, Mailchimp, etc.)
    console.log("Newsletter signup:", formState.email);
    setFormState({ email: "", errors: {}, submitted: true });

    // Reset success message after 3 seconds
    setTimeout(() => {
      setFormState((prev) => ({ ...prev, submitted: false }));
    }, 3000);
  };

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
            Weekly Insights on RightMessage & Sales Funnels
          </h1>
          <p className="text-lg text-foreground/70">
            Deep dives into personalization, segmentation, and closing more
            deals in the first 30 days.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="p-6 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-2xl font-bold flex-1">{post.title}</h2>
                </div>

                <p className="text-foreground/70 mb-4">{post.excerpt}</p>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-foreground/60">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:text-primary/80 flex items-center gap-2"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 p-8 rounded-lg bg-muted border border-border text-center">
            <h3 className="font-bold text-lg mb-2">New Content Every Week</h3>
            <p className="text-foreground/70 mb-4">
              I publish a new long-form video and article every week, diving
              deep into RightMessage implementation, sales funnel optimization,
              and closing more deals.
            </p>
            <p className="text-foreground/70">
              Subscribe to get notified when new content is published.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-2xl mx-auto">
          <div className="p-8 rounded-lg border border-border bg-background">
            <h2 className="text-2xl font-bold mb-4">Get Weekly Insights</h2>
            <p className="text-foreground/70 mb-6">
              Subscribe to get the latest articles, videos, and implementation
              tips delivered to your inbox.
            </p>

            {formState.submitted ? (
              <div
                className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800"
                role="alert"
              >
                ✓ Thanks for subscribing! Check your email to confirm.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={handleEmailChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      formState.errors.email
                        ? "border-red-500 bg-red-50"
                        : "border-border bg-background"
                    }`}
                    aria-label="Email address for newsletter"
                    aria-invalid={!!formState.errors.email}
                    aria-describedby={
                      formState.errors.email ? "email-error" : undefined
                    }
                  />
                  {formState.errors.email && (
                    <p
                      id="email-error"
                      className="text-sm text-red-600 mt-1"
                      role="alert"
                    >
                      {formState.errors.email}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-xs text-foreground/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
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

