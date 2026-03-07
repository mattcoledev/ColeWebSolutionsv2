import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Custom Apps",
    description: "Internal tools, dashboards, and customer portals built exactly for your workflow.",
    href: "/services#custom",
  },
  {
    title: "Website Redesigns",
    description: "Modern, fast sites on Umbraco CMS that you can actually manage yourself.",
    href: "/services#redesign",
  },
  {
    title: "Managed Hosting",
    description: "Reliable infrastructure with a real person behind it. Not a chatbot.",
    href: "/services#hosting",
  },
]

const customDevFeatures = [
  "Full visual redesign",
  "Mobile responsiveness",
  "SEO optimization",
  "CMS setup & training",
  "Content migration",
  "Performance optimization",
]

const stats = [
  { value: "30+", label: "Clients Served" },
  { value: "10+", label: "Years Building" },
  { value: "100%", label: "Client Retention" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO - Dark */}
      <section className="relative py-24 md:py-36 lg:py-44">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
              Custom Software & Websites Built for Real Businesses.
            </h1>
            <p className="mt-8 text-xl text-muted-foreground md:text-2xl leading-relaxed max-w-2xl">
              We design, build, and maintain systems that save time, generate leads, and scale operations.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6" asChild>
                <Link href="/work">
                  See Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-12">
            {services.map((service) => (
              <div key={service.title} className="group">
                <h3 className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center text-base font-medium text-primary hover:underline underline-offset-4"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM DEV - Dark with image */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                Custom Development
              </p>
              <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
                Applications That Actually Solve Problems
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Not every business fits into an off-the-shelf solution. We build custom tools 
                that match your exact workflow — from patient portals to inventory systems to 
                internal dashboards.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/services#custom">
                    Explore Custom Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-card">
              <Image
                src="/projects/manufacturing-dashboard.jpg"
                alt="Custom dashboard interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REDESIGNS - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Website Redesigns
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
              Websites That Actually Convert
            </h2>
            <p className="mt-6 text-lg text-section-light-muted leading-relaxed">
              Your website should work as hard as you do. We rebuild outdated sites into 
              fast, modern experiences that generate leads and build trust.
            </p>
            
            <div className="mt-12 border-t border-section-light-foreground/10 pt-12">
              <p className="text-sm font-medium uppercase tracking-widest text-section-light-muted mb-6">
                {"What's Included"}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {customDevFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" asChild>
                <Link href="/services#redesign">
                  See Redesign Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* HOSTING - Dark */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Managed Hosting
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
              {"When Something Breaks at 2AM, You Call Me."}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              No support tickets. No chatbots. No hold music. Just a direct line to 
              someone who knows your system inside and out.
            </p>
            <div className="mt-12">
              <Button size="lg" asChild>
                <Link href="/services#hosting">
                  Learn About Hosting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                About
              </p>
              <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
                {"Not an Agency. A Partner."}
              </h2>
              <p className="mt-6 text-lg text-section-light-muted leading-relaxed">
                ColeWebSolutions is a one-person operation based in Tupelo, Mississippi. 
                That means you talk directly to the person who builds your site — no 
                layers, no handoffs, no miscommunication.
              </p>
              <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
                {"I've"} spent over a decade building web applications for businesses across 
                healthcare, manufacturing, hospitality, and professional services. 
                Every project gets my full attention.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="outline" className="border-section-light-foreground/20 text-section-light-foreground hover:bg-section-light-foreground/5" asChild>
                  <Link href="/about">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex gap-8 lg:gap-12 lg:justify-end">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-5xl font-bold text-primary md:text-6xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-section-light-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Accent */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {"Let's Talk About Your Project"}
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Whether you need a fresh website or a custom application, 
              I would love to hear what you are working on.
            </p>
            <div className="mt-10">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6"
                asChild
              >
                <Link href="/contact">
                  Start a Conversation
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
