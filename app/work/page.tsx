import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// [PLACEHOLDER] Replace with real project data when available

export const metadata: Metadata = {
  title: "Our Work",
  description: "Portfolio of web development projects by ColeWebSolutions. Custom web applications, website redesigns, and more.",
}

const projects = [
  {
    slug: "riverside-medical-portal",
    title: "Riverside Medical Group",
    description: "Custom patient portal with appointment scheduling and secure messaging.",
    image: "https://picsum.photos/seed/cws-medical/1200/750",
    tags: ["Custom Build", "Healthcare"],
  },
  {
    slug: "tupelo-chamber-redesign",
    title: "Tupelo Chamber of Commerce",
    description: "Complete website redesign with event management and member directory.",
    image: "https://picsum.photos/seed/cws-chamber/1200/750",
    tags: ["Redesign", "Umbraco"],
  },
  {
    slug: "magnolia-realty-platform",
    title: "Magnolia Realty",
    description: "Property listing platform with advanced search and virtual tour integration.",
    image: "https://picsum.photos/seed/cws-realty/1200/750",
    tags: ["Custom Build", "Real Estate"],
  },
  {
    slug: "delta-manufacturing-dashboard",
    title: "Delta Manufacturing",
    description: "Internal dashboard for production tracking and inventory management.",
    image: "https://picsum.photos/seed/cws-manufacturing/1200/750",
    tags: ["Custom Build", "Manufacturing"],
  },
  {
    slug: "southern-hospitality-booking",
    title: "Southern Hospitality Inn",
    description: "Booking system with channel management and payment processing.",
    image: "https://picsum.photos/seed/cws-hospitality/1200/750",
    tags: ["Custom Build", "Hospitality"],
  },
  {
    slug: "northeast-legal-website",
    title: "Northeast Legal Associates",
    description: "Professional website with client intake forms and document management.",
    image: "https://picsum.photos/seed/cws-legal/1200/750",
    tags: ["Redesign", "Legal"],
  },
]

export default function WorkPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-24 md:py-32 bg-hero hero-texture text-hero-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-sans text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-none">
              Work That Speaks for Itself
            </h1>
            <p className="mt-8 text-xl text-hero-foreground/70 leading-relaxed">
              Each project represents a unique challenge solved and a business transformed.
            </p>
          </div>
        </div>
      </section>

      {/* Projects - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <article 
                key={project.slug}
                className={`grid gap-8 lg:gap-16 items-center lg:grid-cols-2`}
              >
                {/* Image */}
                <div className={`relative aspect-[16/10] rounded-lg overflow-hidden bg-section-light-foreground/5 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium uppercase tracking-widest text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl text-section-light-foreground">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Accent */}
      <section className="py-24 md:py-32 bg-primary primary-texture text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Want Results Like These?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              {"Let's discuss your project and see how we can help your business grow."}
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/contact">
                  Start a Project
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
