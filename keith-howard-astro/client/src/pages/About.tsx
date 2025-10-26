import { Link } from "wouter";

export default function About() {
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
          <h1 className="text-4xl font-bold mb-4">About Keith Howard</h1>
          <p className="text-lg text-foreground/70">
            A former Teacher of the Year who simplifies complex MarTech systems into predictable revenue engines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Teacher</h2>
            <p className="text-foreground/70 mb-4">
              I was named <strong>Teacher of the Year</strong> early in my career. I earned a <strong>Masters in Education</strong> because I believe that clarity and structure are the foundation of learning. I learned how to break down complex concepts into simple, actionable steps. I learned how to communicate in a way that resonates with different audiences.
            </p>
            <p className="text-foreground/70">
              That skill—the ability to simplify the complex—is what I bring to every RightMessage implementation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">The MarTech Manager</h2>
            <p className="text-foreground/70 mb-4">
              For the past decade, I've worked as an in-house MarTech Manager for high-growth companies. I've built marketing systems from scratch. I've integrated CRMs with email platforms. I've debugged complex data pipelines. I've optimized conversion funnels.
            </p>
            <p className="text-foreground/70 mb-4">
              I've also seen the gap between what MarTech tools promise and what they actually deliver. Most teams install a powerful tool like RightMessage and then get stuck. They don't know how to unlock its full potential.
            </p>
            <p className="text-foreground/70">
              That's the problem I solve.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">The Implementer</h2>
            <p className="text-foreground/70 mb-4">
              I specialize in one thing: taking the raw power of RightMessage and turning it into a strategic, data-backed system that drives measurable revenue.
            </p>
            <p className="text-foreground/70 mb-4">
              I don't just install the tool. I don't just build a few pop-ups. I work with your sales team to understand what data they need to close deals faster. I design segmentation logic that actually works. I create personalized experiences that convert.
            </p>
            <p className="text-foreground/70">
              And I train your team to manage and iterate on the system going forward.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-muted border border-border">
            <h3 className="font-bold mb-3">Why I Do This</h3>
            <p className="text-foreground/70">
              I've seen too many companies waste money on MarTech tools that sit underutilized. I've seen too many sales teams drowning in generic leads. I've seen too many marketers frustrated by the gap between what they're trying to do and what the tools allow them to do.
            </p>
            <p className="text-foreground/70 mt-3">
              My mission is to bridge that gap. To help sales-first organizations arm their teams with the data they need to close more deals in the first 30 days. To turn underperforming funnels into revenue engines.
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

