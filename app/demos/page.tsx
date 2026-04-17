import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Demos",
  description: "See what a modern business system looks like. Real job pipelines, scheduling, lead capture, and AI-powered insights — built for specific industries.",
}

const demos = [
  {
    title: "HVAC Operations Dashboard",
    subtitle: "Fictional demo — Riverside HVAC & Cooling",
    description:
      "A full operations view for an HVAC company — job board, dispatch status, scheduling, customer history, and AI insights.",
    href: "https://hvac.colewebsolutions.com",
    available: true,
  },
  {
    title: "Vending & Cooler Management Portal",
    subtitle: "Fictional demo — Summit Vend Co.",
    description:
      "A route and inventory management system for a vending operator — machine locations, restock schedules, sales tracking by location, and alerts for low stock or service issues.",
    href: "https://vendor-dash-ivory.vercel.app/",
    available: true,
  },
]

export default function DemosPage() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="container mx-auto px-4 lg:px-8 pt-20 pb-12 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
          See What a Modern Business System Looks Like
        </h1>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            Most small business websites look fine. The problem isn&apos;t how they look — it&apos;s what they can&apos;t do.
          </p>
          <p>
            These demos show what it looks like when your website is connected to the way you actually run your business. Real job pipelines. Real scheduling. Real lead capture. AI-powered insights that tell you what&apos;s working and what isn&apos;t.
          </p>
          <p>
            Every demo is built for a specific industry — because a plumbing operation doesn&apos;t run like an HVAC company, and neither should their system.
          </p>
          <p>
            If you see something that looks like your business, that&apos;s the point. Book a call and we&apos;ll build it for yours.
          </p>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="container mx-auto px-4 lg:px-8 pb-24 max-w-4xl">
        <div className="grid gap-8">
          {demos.map((demo) => (
            <div
              key={demo.title}
              className="rounded-xl border border-border bg-card p-8 flex flex-col gap-6 sm:flex-row sm:items-start"
            >
              <div className="flex-1 space-y-3">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{demo.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{demo.subtitle}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{demo.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:shrink-0 sm:w-44">
                {demo.available ? (
                  <Button asChild>
                    <a href={demo.href} target="_blank" rel="noopener noreferrer">
                      View Demo
                      <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                ) : (
                  <Button disabled>Coming Soon</Button>
                )}
                <Button variant="outline" asChild>
                  <Link href="/#contact">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
