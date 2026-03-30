import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services",
  description: "Custom web solutions, website redesigns, and managed hosting services from ColeWebSolutions in Tupelo, Mississippi.",
}

const customSolutionsForYou = [
  "You're copying data between systems manually",
  "Your current website can't do what your business needs",
  "You need something that doesn't exist off the shelf",
  "You want to automate a manual business process",
]

const redesignIncludes = [
  "Full visual redesign",
  "Mobile responsiveness",
  "SEO optimization",
  "CMS setup and training",
  "Content migration",
  "Performance optimization",
]

const hostingIncludes = [
  "Server monitoring and uptime guarantees",
  "Security updates and patches",
  "Regular automated backups",
  "SSL certificates included",
  "Performance optimization",
  "Direct access to your developer",
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-24 md:py-32 bg-hero hero-texture text-hero-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-sans text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-none">
              What We Actually Build
            </h1>
            <p className="mt-8 text-xl text-hero-foreground/70 leading-relaxed">
              Three core offerings. Each one done right.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Web Solutions - Light */}
      <section id="custom" className="py-24 md:py-32 bg-section-light text-section-light-foreground scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                01 — Custom Development
              </p>
              <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
                Applications That Solve Real Problems
              </h2>
              <p className="mt-6 text-lg text-section-light-muted leading-relaxed">
                For businesses that have outgrown templates and off-the-shelf tools. 
                We build custom web applications, internal business tools, customer portals, 
                booking systems, and integrations between existing systems.
              </p>
              <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
                Every solution is tailored to your specific workflow — not the other way around.
              </p>
              
              <div className="mt-12">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:mt-16">
              <p className="text-sm font-medium uppercase tracking-widest text-section-light-muted mb-6">
                This is for you if...
              </p>
              <ul className="space-y-4">
                {customSolutionsForYou.map((item) => (
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

      {/* Website Redesigns - Dark with image */}
      <section id="redesign" className="py-24 md:py-32 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-card order-2 lg:order-1">
              <Image
                src="https://picsum.photos/seed/cws-chamber/800/600"
                alt="Website redesign example"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                02 — Website Redesigns
              </p>
              <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
                Websites That Actually Convert
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Modernizing existing websites with better design, faster performance, 
                improved SEO, and a CMS you can actually use. We specialize in 
                Umbraco CMS — one of the most flexible enterprise-grade content 
                management systems available.
              </p>
              <p className="mt-4 text-foreground font-medium">
                We are one of the few shops in the region with deep Umbraco expertise.
              </p>
              
              <div className="mt-12">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Redesign Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-section-light-muted mb-6">
              {"What's Included in Every Redesign"}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {redesignIncludes.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managed Hosting - Dark */}
      <section id="hosting" className="py-24 md:py-32 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              03 — Managed Hosting
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
              {"When Something Breaks at 2AM, You Call Me."}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              This is not commodity hosting. It is a premium, white-glove service with 
              monitoring, updates, security patches, and a real human who picks up the phone.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              When something goes wrong, you will not be opening a support ticket and 
              waiting days for a response. You will be talking to the same person who 
              built your site.
            </p>

            <div className="mt-12 border-t border-border pt-12">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
                {"What's Included"}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {hostingIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Learn About Hosting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Accent */}
      <section className="py-24 md:py-32 bg-primary primary-texture text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              {"Let's figure it out together. Schedule a free consultation and we will help you find the right solution for your business."}
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/contact">
                  Schedule a Call
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
