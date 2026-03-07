import Link from "next/link"
import { ArrowRight, Code2, Globe, Server, MessageSquare, Users, Phone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Custom Web Solutions & App Development",
    description: "From internal tools to customer-facing apps, we build exactly what your business needs.",
    href: "/services#custom",
  },
  {
    icon: Globe,
    title: "Website Redesigns",
    description: "Modernize your web presence with a redesign built on platforms like Umbraco that you can actually manage.",
    href: "/services#redesign",
  },
  {
    icon: Server,
    title: "Managed Hosting",
    description: "Reliable, secure hosting with a real person behind it — not a chatbot.",
    href: "/services#hosting",
  },
]

const whyChooseUs = [
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "You talk to the person who builds your site — no layers of account managers.",
  },
  {
    icon: Code2,
    title: "Technical Expertise",
    description: "Deep expertise in Umbraco and .NET — platforms built for serious businesses.",
  },
  {
    icon: Phone,
    title: "Local & Accessible",
    description: "Local presence, available by phone, invested in your success.",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "From a simple refresh to a full custom build — we scale with you.",
  },
]

const stats = [
  { value: "30+", label: "Businesses Served" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Websites That Work.{" "}
              <span className="text-primary">Solutions That Scale.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl mx-auto text-pretty">
              From redesigns to custom-built web applications — ColeWebSolutions helps businesses grow online. Based in Tupelo, MS. Serving clients everywhere.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-card/50 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
            <div className="text-center">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="font-heading text-lg font-semibold text-foreground">Based in Tupelo, MS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">What We Build</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Whether you need a fresh coat of paint or a ground-up custom solution, we have got you covered.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why ColeWebSolutions */}
      <section className="py-20 md:py-28 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Why ColeWebSolutions</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We are not a big agency — and that is exactly what makes us different.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Ready to upgrade your web presence?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let us build something great together. Get in touch for a free consultation and see how we can help your business grow online.
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
        </div>
      </section>
    </div>
  )
}
