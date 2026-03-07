import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
    tags: ["Custom Build", "App Development", "Healthcare"],
  },
  {
    slug: "tupelo-chamber-redesign",
    title: "Tupelo Chamber of Commerce",
    description: "Complete website redesign with event management and member directory.",
    image: "/projects/chamber-website.jpg",
    tags: ["Redesign", "Umbraco", "Non-Profit"],
  },
  {
    slug: "magnolia-realty-platform",
    title: "Magnolia Realty",
    description: "Property listing platform with advanced search and virtual tour integration.",
    image: "/projects/realty-platform.jpg",
    tags: ["Custom Build", "Real Estate", "Integrations"],
  },
  {
    slug: "delta-manufacturing-dashboard",
    title: "Delta Manufacturing",
    description: "Internal dashboard for production tracking and inventory management.",
    image: "/projects/manufacturing-dashboard.jpg",
    tags: ["Custom Build", "Dashboard", "Manufacturing"],
  },
  {
    slug: "southern-hospitality-booking",
    title: "Southern Hospitality Inn",
    description: "Booking system with channel management and payment processing.",
    image: "/projects/hospitality-booking.jpg",
    tags: ["Custom Build", "Booking System", "Hospitality"],
  },
  {
    slug: "northeast-legal-website",
    title: "Northeast Legal Associates",
    description: "Professional website with client intake forms and document management.",
    image: "/projects/legal-website.jpg",
    tags: ["Redesign", "Umbraco", "Legal"],
  },
]

export default function WorkPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Our Work
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A few of the projects we are proudest of. Each one represents a unique challenge solved and a business transformed.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                <article className="h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                      View Case Study
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Want results like these?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Let's discuss your project and see how we can help your business grow online."}
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  {"Let's Talk"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
