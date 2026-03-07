import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code2, Globe, Server, Check, Lightbulb, Cog, Database, Smartphone, Shield, Clock, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Services",
  description: "Custom web solutions, website redesigns, and managed hosting services from ColeWebSolutions in Tupelo, Mississippi.",
}

const customSolutionsExamples = [
  { icon: Database, text: "Custom client portals" },
  { icon: Clock, text: "Booking and scheduling systems" },
  { icon: Cog, text: "Internal dashboards and admin tools" },
  { icon: Code2, text: "API integrations between business systems" },
  { icon: Smartphone, text: "Progressive web apps (PWAs)" },
]

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
  { icon: Shield, text: "Server monitoring and uptime guarantees" },
  { icon: Shield, text: "Security updates and patches" },
  { icon: Database, text: "Regular backups" },
  { icon: Shield, text: "SSL certificates" },
  { icon: Cog, text: "Performance optimization" },
  { icon: Headphones, text: "Direct access to your developer" },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              What We Build
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you need a fresh coat of paint or a ground-up custom solution, we have got you covered. Every project gets the same attention to detail and commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Web Solutions */}
      <section id="custom" className="py-20 md:py-28 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                <Code2 className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                Custom Web Solutions & App Development
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                For businesses that have outgrown templates and off-the-shelf tools. We build custom web applications, internal business tools, customer portals, booking systems, integrations between existing systems, and mobile-friendly web apps.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every solution is tailored to your specific workflow and business needs — not the other way around.
              </p>

              {/* Examples */}
              <div className="mt-8">
                <h3 className="font-serif text-lg font-semibold mb-4">Example Projects</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {customSolutionsExamples.map((example) => (
                    <div key={example.text} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-primary">
                        <example.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm text-foreground">{example.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* This is for you if... */}
            <div className="lg:mt-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-serif">This is for you if...</CardTitle>
                  <CardDescription>Custom solutions make sense when your business has unique needs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {customSolutionsForYou.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Website Redesigns */}
      <section id="redesign" className="py-20 md:py-28 bg-card/50 border-y border-border scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                Website Redesigns
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Modernizing existing websites with better design, faster performance, improved SEO, and a CMS that is actually usable. We specialize in Umbraco CMS — one of the most flexible enterprise-grade content management systems available.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">We are one of the few shops in the region with deep Umbraco expertise</span> — if your site runs on Umbraco, you have found the right partner.
              </p>
            </div>

            <div className="lg:order-1">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="font-serif">What is Included</CardTitle>
                  <CardDescription>Every redesign includes these core elements.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {redesignIncludes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Hosting */}
      <section id="hosting" className="py-20 md:py-28 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                <Server className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                Managed Hosting
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                This is not commodity hosting. It is a premium, white-glove service with monitoring, updates, security patches, and a real human who picks up the phone.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                When something goes wrong at 2 AM, you will not be opening a support ticket and waiting days for a response. You will be talking to the same person who built your site.
              </p>
              <p className="mt-6 text-sm text-muted-foreground border-l-2 border-primary pl-4">
                Our hosting plans include everything you need to keep your site fast, secure, and online. Contact us for pricing tailored to your needs.
              </p>
            </div>

            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="font-serif">What is Included</CardTitle>
                  <CardDescription>Everything you need for peace of mind.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {hostingIncludes.map((item) => (
                      <li key={item.text} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-primary">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <span className="text-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
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
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Let's figure it out together. Schedule a free consultation and we will help you find the right solution for your business."}
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Call
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
