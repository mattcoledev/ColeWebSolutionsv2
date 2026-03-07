import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Work",
  description: "Portfolio of web development projects by ColeWebSolutions. Custom web applications, website redesigns, and more.",
}

const projects = [
  {
    slug: "riverside-medical-portal",
    title: "Riverside Medical Group",
    description: "Custom patient portal with appointment scheduling and secure messaging.",
    image: "/projects/medical-portal.jpg",
    tags: ["Custom Build", "Healthcare"],
  },
  {
    slug: "tupelo-chamber-redesign",
    title: "Tupelo Chamber of Commerce",
    description: "Complete website redesign with event management and member directory.",
    image: "/projects/chamber-website.jpg",
    tags: ["Redesign", "Umbraco"],
  },
  {
    slug: "magnolia-realty-platform",
    title: "Magnolia Realty",
    description: "Property listing platform with advanced search and virtual tour integration.",
    image: "/projects/realty-platform.jpg",
    tags: ["Custom Build", "Real Estate"],
  },
  {
    slug: "delta-manufacturing-dashboard",
    title: "Delta Manufacturing",
    description: "Internal dashboard for production tracking and inventory management.",
    image: "/projects/manufacturing-dashboard.jpg",
    tags: ["Custom Build", "Manufacturing"],
  },
  {
    slug: "southern-hospitality-booking",
    title: "Southern Hospitality Inn",
    description: "Booking system with channel management and payment processing.",
    image: "/projects/hospitality-booking.jpg",
    tags: ["Custom Build", "Hospitality"],
  },
  {
    slug: "northeast-legal-website",
    title: "Northeast Legal Associates",
    description: "Professional website with client intake forms and document management.",
    image: "/projects/legal-website.jpg",
    tags: ["Redesign", "Legal"],
  },
]

export default function WorkPage() {
  return (
    <div className="flex flex-col">
      {/* Header - Dark */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-[0.95]">
              Work That Speaks for Itself
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
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
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                <article className={`grid gap-8 lg:gap-16 items-center ${
                  index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                }`}>
                  {/* Image */}
                  <div className={`relative aspect-[16/10] rounded-lg overflow-hidden bg-section-light-foreground/5 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs font-medium uppercase tracking-widest text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-6 inline-flex items-center text-base font-medium text-primary">
                      View Case Study
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Accent */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
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
                className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6"
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
