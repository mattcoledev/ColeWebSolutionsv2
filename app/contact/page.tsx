import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ColeWebSolutions for custom web development, website redesigns, and managed hosting in Tupelo, Mississippi.",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "matt@colewebsolutions.com",
    href: "mailto:matt@colewebsolutions.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(662) 401-8289",
    href: "tel:+16624018289",
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
      {/* Header - Dark */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-[0.95]">
              {"Let's Talk About Your Project"}
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Whether you have a detailed brief or just a rough idea, we would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-6">
                Send a Message
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <p className="text-sm font-medium uppercase tracking-widest text-section-light-muted mb-6">
                Or Reach Out Directly
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-section-light-muted">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Calendly CTA */}
              <div className="mt-12 pt-8 border-t border-section-light-foreground/10">
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Prefer to Book a Call?
                </h3>
                <p className="text-section-light-muted leading-relaxed mb-4">
                  Skip the back-and-forth. Pick a time that works for you.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-primary hover:underline underline-offset-4"
                >
                  Schedule a Call
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
