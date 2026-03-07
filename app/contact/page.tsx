import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ColeWebSolutions for custom web development, website redesigns, and managed hosting in Tupelo, Mississippi.",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@colewebsolutions.com",
    href: "mailto:hello@colewebsolutions.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(662) 555-1234",
    href: "tel:+16625551234",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tupelo, Mississippi",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 1 business day",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {"Let's Build Something"}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you have a detailed project brief or just a rough idea, we would love to hear from you. No pressure, no hard sell — just a conversation about how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-serif text-2xl font-bold mb-6">Send a Message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Prefer to reach out directly? Use any of the methods below. We typically respond within one business day.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-border"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Calendly CTA */}
                <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold mb-2">Prefer to book a call?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Skip the back-and-forth. Pick a time that works for you and we will chat.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Schedule a Call
                      <span className="ml-1">→</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
