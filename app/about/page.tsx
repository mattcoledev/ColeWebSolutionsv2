import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ColeWebSolutions — custom web development from Tupelo, Mississippi. Direct communication, quality work, long-term partnerships.",
}

const technologies = [
  "Umbraco CMS",
  ".NET / C#",
  "JavaScript / TypeScript",
  "React / Next.js",
  "SQL Server",
  "PostgreSQL",
  "Azure",
  "HTML5 / CSS3",
]

const values = [
  {
    title: "Direct Communication",
    description: "When you work with ColeWebSolutions, you work directly with the person building your site. No handoffs, no miscommunication.",
  },
  {
    title: "Long-Term Relationships",
    description: "We build partnerships that last, growing alongside your business for years to come.",
  },
  {
    title: "Quality Over Quantity",
    description: "We take on a limited number of clients to ensure every project gets the attention it deserves.",
  },
]

const stats = [
  { value: "30+", label: "Active Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Client Retention" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-24 md:py-32 bg-hero hero-texture text-hero-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-sans text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-none">
              Not an Agency. A Partner.
            </h1>
            <p className="mt-8 text-xl text-hero-foreground/70 leading-relaxed">
              ColeWebSolutions is a one-person operation. That means you talk
              directly to the person who builds your site.
            </p>
          </div>
        </div>
      </section>

      {/* The Story - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card">
              <Image
                src="https://picsum.photos/seed/cws-about-person/600/800"
                alt="Matt Cole — ColeWebSolutions"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                The Story
              </p>
              <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
                Building for Real Businesses Since Day One
              </h2>
            <div className="mt-6 space-y-6 text-lg text-section-light-muted leading-relaxed">
              <p>
                [PLACEHOLDER - Add your personal story here. How did you get into web development? 
                What drove you to start ColeWebSolutions? This should feel authentic and human.]
              </p>
              <p>
                ColeWebSolutions was born from a simple belief: businesses deserve better than 
                template websites and faceless agencies. Every business has unique challenges, 
                and cookie-cutter solutions rarely solve them.
              </p>
              <p>
                What started as helping local Tupelo businesses modernize their web presence 
                has grown into a full-service web development practice. But no matter how much 
                we grow, the fundamentals stay the same: quality work, honest communication, 
                and genuine investment in our clients success.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 lg:gap-32">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-5xl font-bold text-primary md:text-6xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Approach - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              The Approach
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
              We Are Not a Big Agency. That Is a Feature.
            </h2>
            
            <div className="mt-12 space-y-8">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold">{value.title}</h3>
                    <p className="mt-2 text-lg text-section-light-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies - Dark */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                Technologies
              </p>
              <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
                Modern Tools. Proven Platforms.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We use technologies that are built to last. No trendy frameworks that will 
                be obsolete in two years — just solid foundations that scale with your business.
              </p>
            </div>
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3 text-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Location
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
              Based in Tupelo, Mississippi
            </h2>
            <p className="mt-6 text-lg text-section-light-muted leading-relaxed">
              We are proud to call Tupelo home. While we work with clients anywhere, 
              there is something special about building solutions for the businesses 
              that make our community great.
            </p>
            <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
              Local clients enjoy face-to-face meetings. Remote clients get the same 
              level of attention through video calls and responsive communication.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Accent */}
      <section className="py-24 md:py-32 bg-primary primary-texture text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Ready to Work Together?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              {"Let's discuss your project and see if we are a good fit."}
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/contact">
                  Get in Touch
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
