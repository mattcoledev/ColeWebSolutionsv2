import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Quote, Clock, Zap, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// [PLACEHOLDER] Replace with real project data from a CMS or database
const projects: Record<string, {
  title: string
  description: string
  image: string
  tags: string[]
  challenge: string
  solution: string
  tech: string[]
  results: { label: string; value: string }[]
  testimonial?: { quote: string; author: string; role: string }
}> = {
  "riverside-medical-portal": {
    title: "Riverside Medical Group",
    description: "Custom patient portal with appointment scheduling and secure messaging.",
    image: "/projects/medical-portal.jpg",
    tags: ["Custom Build", "App Development", "Healthcare"],
    challenge: "Riverside Medical Group needed a way to reduce phone call volume and give patients 24/7 access to schedule appointments, view test results, and communicate with their care team. Their existing system was outdated and required patients to call during business hours for everything.",
    solution: "We built a custom patient portal that integrates with their practice management system. Patients can now schedule appointments, view upcoming visits, access their medical records, and send secure messages to their providers — all from any device.",
    tech: ["React", ".NET Core", "SQL Server", "Azure", "HL7 FHIR Integration"],
    results: [
      { label: "Reduction in phone calls", value: "60%" },
      { label: "Patient satisfaction score", value: "4.8/5" },
      { label: "Online bookings per month", value: "500+" },
    ],
    testimonial: {
      quote: "The patient portal has transformed how we interact with our patients. Our staff can focus on care instead of answering phones, and patients love the convenience.",
      author: "Dr. Sarah Mitchell",
      role: "Medical Director, Riverside Medical Group",
    },
  },
  "tupelo-chamber-redesign": {
    title: "Tupelo Chamber of Commerce",
    description: "Complete website redesign with event management and member directory.",
    image: "/projects/chamber-website.jpg",
    tags: ["Redesign", "Umbraco", "Non-Profit"],
    challenge: "The Tupelo Chamber of Commerce had an outdated website that was difficult to update and did not reflect the vibrant business community it represented. They needed a modern site that could showcase events, manage member directories, and serve as a resource for local businesses.",
    solution: "We redesigned their entire web presence on Umbraco CMS, giving their team full control over content. The new site features an integrated event calendar, searchable member directory, resource library, and a news section — all manageable without technical knowledge.",
    tech: ["Umbraco CMS", ".NET", "SQL Server", "Bootstrap", "Custom Integrations"],
    results: [
      { label: "Increase in web traffic", value: "150%" },
      { label: "Event registrations online", value: "85%" },
      { label: "Content updates by staff", value: "Weekly" },
    ],
    testimonial: {
      quote: "ColeWebSolutions understood exactly what we needed. The new website has made it so much easier to serve our members and promote Tupelo as a great place to do business.",
      author: "James Patterson",
      role: "Executive Director, Tupelo Chamber of Commerce",
    },
  },
  "magnolia-realty-platform": {
    title: "Magnolia Realty",
    description: "Property listing platform with advanced search and virtual tour integration.",
    image: "/projects/realty-platform.jpg",
    tags: ["Custom Build", "Real Estate", "Integrations"],
    challenge: "Magnolia Realty was using a third-party listing service that did not match their brand and lacked the features they needed to stand out in a competitive market. They wanted a custom solution that would showcase properties beautifully and integrate with their existing tools.",
    solution: "We built a custom property listing platform with MLS integration, advanced search filters, virtual tour embedding, and lead capture forms. The platform automatically syncs with their MLS feed and allows agents to enhance listings with additional photos and descriptions.",
    tech: ["Next.js", ".NET API", "PostgreSQL", "MLS Integration", "Matterport API"],
    results: [
      { label: "Increase in leads", value: "200%" },
      { label: "Average time on site", value: "4.2 min" },
      { label: "Virtual tour views", value: "10K+/mo" },
    ],
    testimonial: {
      quote: "Our new platform has completely changed how we present properties. Buyers love the virtual tours, and we are getting more qualified leads than ever.",
      author: "Amanda Cole",
      role: "Broker, Magnolia Realty",
    },
  },
  "delta-manufacturing-dashboard": {
    title: "Delta Manufacturing",
    description: "Internal dashboard for production tracking and inventory management.",
    image: "/projects/manufacturing-dashboard.jpg",
    tags: ["Custom Build", "Dashboard", "Manufacturing"],
    challenge: "Delta Manufacturing was tracking production and inventory using spreadsheets and whiteboards. As they grew, this manual process became a bottleneck, leading to delays and inventory discrepancies. They needed a real-time system their team could access from the floor.",
    solution: "We developed a custom dashboard that connects to their equipment sensors and ERP system. Floor managers can now see real-time production data, track inventory levels, and identify bottlenecks instantly. The system also generates automated reports for leadership.",
    tech: ["React", ".NET Core", "SignalR", "SQL Server", "IoT Integration"],
    results: [
      { label: "Reduction in downtime", value: "35%" },
      { label: "Inventory accuracy", value: "99.5%" },
      { label: "Time saved on reporting", value: "10 hrs/wk" },
    ],
    testimonial: {
      quote: "The dashboard has given us visibility we never had before. We catch issues before they become problems, and our efficiency has improved dramatically.",
      author: "Mike Thompson",
      role: "Operations Manager, Delta Manufacturing",
    },
  },
  "southern-hospitality-booking": {
    title: "Southern Hospitality Inn",
    description: "Booking system with channel management and payment processing.",
    image: "/projects/hospitality-booking.jpg",
    tags: ["Custom Build", "Booking System", "Hospitality"],
    challenge: "Southern Hospitality Inn was managing bookings across multiple platforms manually, leading to overbookings and missed revenue opportunities. They needed a centralized system that could sync with OTAs while allowing direct bookings at better rates.",
    solution: "We built a custom booking engine that syncs inventory across Booking.com, Expedia, and their direct website. Guests booking direct get the best rates and perks, while the system prevents overbookings and automates payment processing.",
    tech: ["Next.js", ".NET API", "PostgreSQL", "Stripe", "Channel Manager API"],
    results: [
      { label: "Direct bookings increase", value: "75%" },
      { label: "Overbookings eliminated", value: "100%" },
      { label: "Commission savings", value: "$30K/yr" },
    ],
    testimonial: {
      quote: "We finally have control over our bookings. The direct booking incentives are working, and we are saving thousands in OTA commissions.",
      author: "Linda Williams",
      role: "Owner, Southern Hospitality Inn",
    },
  },
  "northeast-legal-website": {
    title: "Northeast Legal Associates",
    description: "Professional website with client intake forms and document management.",
    image: "/projects/legal-website.jpg",
    tags: ["Redesign", "Umbraco", "Legal"],
    challenge: "Northeast Legal Associates had an outdated website that did not reflect their reputation or make it easy for potential clients to reach out. They also needed a secure way to collect client information and share documents.",
    solution: "We redesigned their website on Umbraco with a focus on professionalism and trust. The new site includes secure client intake forms, a client portal for document sharing, attorney profiles, and practice area pages optimized for local search.",
    tech: ["Umbraco CMS", ".NET", "Azure", "Secure Forms", "Document Portal"],
    results: [
      { label: "Inquiries increase", value: "120%" },
      { label: "Client portal adoption", value: "90%" },
      { label: "Local search ranking", value: "Top 3" },
    ],
    testimonial: {
      quote: "Our new website has been a game-changer for client acquisition. The intake forms save us hours of administrative work, and clients appreciate the professionalism.",
      author: "Robert Chen",
      role: "Managing Partner, Northeast Legal Associates",
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug]
  if (!project) return { title: "Project Not Found" }
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Back Link */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Link
            href="/work"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="aspect-video relative overflow-hidden rounded-2xl bg-muted border border-border">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* The Challenge */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* The Solution */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-6 md:p-8">
                    <Quote className="h-8 w-8 text-primary/40 mb-4" />
                    <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                      {`"${project.testimonial.quote}"`}
                    </blockquote>
                    <div>
                      <p className="font-semibold text-foreground">{project.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4">Results</h3>
                <div className="space-y-4">
                  {project.results.map((result, i) => (
                    <div key={result.label} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                        {i === 0 ? <TrendingUp className="h-4 w-4" /> : i === 1 ? <Zap className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-serif text-xl font-bold text-primary">{result.value}</p>
                        <p className="text-sm text-muted-foreground">{result.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Want results like this?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Let's discuss your project and see how we can help your business achieve similar success."}
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
