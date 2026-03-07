import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin, Users, MessageSquare, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ColeWebSolutions — custom web development from Tupelo, Mississippi. Direct communication, quality work, long-term partnerships.",
}

const technologies = [
  { name: "Umbraco CMS", category: "CMS" },
  { name: ".NET / C#", category: "Backend" },
  { name: "JavaScript / TypeScript", category: "Frontend" },
  { name: "React / Next.js", category: "Frontend" },
  { name: "SQL Server", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Azure", category: "Cloud" },
  { name: "HTML5 / CSS3", category: "Frontend" },
]

const values = [
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "When you work with ColeWebSolutions, you work directly with the person building your site. No handoffs, no miscommunication, no surprises.",
  },
  {
    icon: Users,
    title: "Long-Term Relationships",
    description: "We are not looking for one-off projects. We build partnerships that last, growing alongside your business for years to come.",
  },
  {
    icon: Heart,
    title: "Quality Over Quantity",
    description: "We take on a limited number of clients to ensure every project gets the attention it deserves. Your success is our reputation.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              About ColeWebSolutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Building digital solutions for businesses that want a partner, not just a vendor.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-6">
                The Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  [PLACEHOLDER - Add your personal story here. How did you get into web development? What drove you to start ColeWebSolutions? This should feel authentic and human, not like a corporate bio.]
                </p>
                <p>
                  ColeWebSolutions was born from a simple belief: businesses deserve better than template websites and faceless agencies. Every business has unique challenges, and cookie-cutter solutions rarely solve them.
                </p>
                <p>
                  What started as helping local Tupelo businesses modernize their web presence has grown into a full-service web development practice. But no matter how much we grow, the fundamentals stay the same: quality work, honest communication, and genuine investment in our clients success.
                </p>
                <p>
                  Today, we serve over 30 clients across Mississippi and beyond. From Umbraco redesigns for established businesses to custom-built applications for growing companies, we are proud of the work we do and the relationships we have built.
                </p>
              </div>
            </div>

            <div className="lg:mt-8">
              {/* Stats Card */}
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="font-serif text-4xl font-bold text-primary">30+</p>
                      <p className="mt-1 text-sm text-muted-foreground">Active Clients</p>
                    </div>
                    <div>
                      <p className="font-serif text-4xl font-bold text-primary">10+</p>
                      <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
                    </div>
                    <div>
                      <p className="font-serif text-4xl font-bold text-primary">100%</p>
                      <p className="mt-1 text-sm text-muted-foreground">Client Retention</p>
                    </div>
                    <div>
                      <p className="font-serif text-4xl font-bold text-primary">1</p>
                      <p className="mt-1 text-sm text-muted-foreground">Point of Contact</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 md:py-28 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">The Approach</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are not a big agency. That is a feature, not a bug.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-6">
                Technologies & Platforms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We use modern, proven technologies that are built to last. No trendy frameworks that will be obsolete in two years — just solid foundations that scale with your business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{tech.name}</p>
                      <p className="text-xs text-muted-foreground">{tech.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:mt-8">
              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-serif font-semibold text-foreground">Based in Tupelo, Mississippi</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We are proud to call Tupelo home. While we work with clients anywhere, there is something special about building solutions for the businesses that make our community great.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Local clients enjoy the option of face-to-face meetings. Remote clients get the same level of attention through video calls and responsive communication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Ready to work together?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Let's discuss your project and see if we are a good fit."}
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
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
