import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Monitor, Server, Palette, Zap, Shield, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Design & Hosting",
  description: "Professional web design and managed hosting services from ColeWebSolutions in Tupelo, Mississippi.",
}

const designIncludes = [
  "Custom visual design — no templates",
  "Mobile-first, fully responsive layouts",
  "Brand color & typography system",
  "SEO-optimized structure",
  "Fast load times & Core Web Vitals",
  "CMS setup so you can manage content",
]

const hostingIncludes = [
  "Server monitoring and uptime guarantees",
  "Security updates and patches",
  "Regular automated backups",
  "SSL certificates included",
  "Performance optimization",
  "Direct line to your developer",
]

const designPrinciples = [
  {
    icon: Palette,
    title: "Built Around Your Brand",
    description: "Every design starts from your goals, your audience, and your existing brand identity — not a theme marketplace.",
  },
  {
    icon: Monitor,
    title: "Works on Every Device",
    description: "Designed mobile-first, then refined for tablets and desktops. Your site looks sharp everywhere.",
  },
  {
    icon: Zap,
    title: "Fast by Default",
    description: "Clean code, optimized images, and smart caching. Fast sites rank higher and convert better.",
  },
]

export default function DesignHostingPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-24 md:py-32 bg-hero hero-texture text-hero-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-sans text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-none">
              Design & Hosting
            </h1>
            <p className="mt-8 text-xl text-hero-foreground/70 leading-relaxed">
              A site that looks the part — and stays up. Two things that go hand in hand.
            </p>
          </div>
        </div>
      </section>

      {/* Design - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                01 — Web Design
              </p>
              <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
                Designed to Convert, Not Just to Look Good
              </h2>
              <p className="mt-6 text-lg text-section-light-muted leading-relaxed">
                Good design is not decoration — it is clarity. Every layout decision,
                color choice, and typography call is made to guide your visitors toward
                taking action.
              </p>
              <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
                Whether you need a brand-new site or a complete refresh of an outdated one,
                we build from scratch around your specific goals.
              </p>
              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Talk About Design
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:mt-16">
              <p className="text-sm font-medium uppercase tracking-widest text-section-light-muted mb-6">
                {"What's Included"}
              </p>
              <ul className="space-y-4">
                {designIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles - Dark */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              How We Approach Design
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
              Three Things Every Site Needs
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {designPrinciples.map((principle) => (
              <div key={principle.title}>
                <principle.icon className="h-8 w-8 text-primary mb-6" />
                <h3 className="font-serif text-2xl font-bold tracking-tight mb-4">
                  {principle.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                02 — Managed Hosting
              </p>
              <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
                {"When Something Breaks at 2AM, You Call Me."}
              </h2>
              <p className="mt-6 text-lg text-section-light-muted leading-relaxed">
                This is not commodity hosting. It is a premium service with monitoring,
                updates, security patches, and a real human who picks up the phone.
              </p>
              <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
                No support tickets. No chatbots. No hold music. You talk directly to
                the person who built your site.
              </p>
              <div className="mt-10">
                <Button size="lg" variant="outline" className="border-section-light-foreground/20 text-section-light-foreground hover:bg-section-light-foreground/5" asChild>
                  <Link href="/contact">
                    Ask About Hosting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:mt-16">
              <p className="text-sm font-medium uppercase tracking-widest text-section-light-muted mb-6">
                {"What's Included"}
              </p>
              <ul className="space-y-4">
                {hostingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Both Together - Dark */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Better Together
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
              One Person Builds It and Keeps It Running
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              When the same person who designed and built your site also manages
              the server it runs on, things just work. No finger-pointing between
              a designer, a developer, and a hosting provider when something goes wrong.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              I know your site inside and out because I built it. That makes every
              update faster, every fix cleaner, and every conversation more productive.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Accent */}
      <section className="py-24 md:py-32 bg-primary primary-texture text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Ready for a Site That Works?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              {"Let's talk about what you need — design, hosting, or both."}
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
