import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

const designIncludes = [
  "Full visual redesign",
  "Mobile responsiveness",
  "SEO optimization",
  "CMS setup & training",
  "Content migration",
  "Performance optimization",
]

const hostingIncludes = [
  "Server monitoring & uptime guarantees",
  "Security updates & patches",
  "Regular automated backups",
  "SSL certificates included",
  "Performance optimization",
  "Direct access to your developer",
]

const customForYou = [
  "You're copying data between systems manually",
  "Your current website can't do what your business needs",
  "You need something that doesn't exist off the shelf",
  "You want to automate a manual business process",
]

const featuredProjects = [
  {
    title: "Benson's Plumbing & Heating",
    description: "Outdated site modernized with a clean layout, strong call-to-action, and mobile-first design that drives more service calls.",
    image: "/projects/dem1.png",
    tags: ["Redesign", "Home Services"],
  },
  {
    title: "Hartwell Family Dentistry",
    description: "Full redesign with a modern look, online appointment prompts, and trust-focused layout built to convert new patients.",
    image: "/projects/dem2.png",
    tags: ["Redesign", "Professional Services"],
  },
  {
    title: "Delta Manufacturing",
    description: "Internal dashboard for production tracking and inventory management.",
    image: "/projects/dem3.png",
    tags: ["Custom Build", "Manufacturing"],
  },
]

const stats = [
  { value: "30+", label: "Clients Served" },
  { value: "10+", label: "Years Building" },
  { value: "100%", label: "Retention" },
]

const contactInfo = [
  { icon: Mail, label: "Email", value: "matt@colewebsolutions.com", href: "mailto:matt@colewebsolutions.com" },
  { icon: Phone, label: "Phone", value: "(662) 401-8289", href: "tel:+16624018289" },
  { icon: MapPin, label: "Location", value: "Tupelo, Mississippi", href: null },
  { icon: Clock, label: "Response Time", value: "Within 1 business day", href: null },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden py-24 md:py-32 lg:py-40 bg-hero hero-texture text-hero-foreground">
        {/* Full-height image — fades out to the left */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/projects/hero1.png"
            alt="Custom web application dashboard"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] from-35% via-[#0F172A]/75 via-55% to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-sans text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-none">
              Custom Websites & Software for Growing Businesses.
            </h1>
            <p className="mt-8 text-xl text-hero-foreground/70 leading-relaxed">
              We design, build, and maintain digital systems that save time, generate leads, and scale operations — from Tupelo, MS.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="cursor-pointer" asChild>
                <Link href="/#contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white cursor-pointer"
                asChild
              >
                <Link href="/#work">See Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WEB DESIGN ────────────────────────────────────────────────── */}
      <section id="web-design" className="py-24 md:py-32 scroll-mt-20 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                Web Design
              </p>
              <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
                Websites That Convert Visitors Into Clients
              </h2>
              <p className="mt-6 text-lg text-section-light-muted leading-relaxed">
                We rebuild outdated websites into fast, mobile-first experiences that build trust and generate leads. We specialize in Umbraco CMS — so you own your content and don't need to call a developer every time you need to make a change.
              </p>
              <div className="mt-10 border-t border-section-light-foreground/10 pt-10">
                <p className="text-sm font-medium uppercase tracking-widest text-section-light-muted mb-6">
                  {"What's included"}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {designIncludes.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/#contact">
                    Start Your Redesign
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/projects/webdesign1.png"
                alt="Website redesign example"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOM APPS ───────────────────────────────────────────────── */}
      <section id="custom-apps" className="py-24 md:py-32 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/projects/workflow.png"
                alt="Custom application dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                Custom Development
              </p>
              <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
                {"Built Around Your Workflow, Not Someone Else's Template"}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                From patient portals and booking systems to internal dashboards and third-party integrations — we build exactly what your business needs, nothing more and nothing less.
              </p>
              <div className="mt-10">
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-5">
                  This might be for you if...
                </p>
                <ul className="space-y-4">
                  {customForYou.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/#contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOSTING ───────────────────────────────────────────────────── */}
      <section id="hosting" className="py-24 md:py-32 scroll-mt-20 bg-hero hero-texture text-hero-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-hero-foreground/50 mb-4">
                Managed Hosting
              </p>
              <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
                {"When Something Breaks at 2AM, You Call Me."}
              </h2>
              <p className="mt-6 text-lg text-hero-foreground/70 leading-relaxed">
                Not a chatbot. Not a support ticket. A direct line to the same person who built your site. Premium, white-glove hosting with monitoring, backups, security updates, and a real human who picks up the phone.
              </p>
              <p className="mt-4 text-lg text-hero-foreground/70 leading-relaxed">
                When something goes wrong, you will not be waiting days for a response — you will be talking to the person who knows your system inside and out.
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white cursor-pointer"
                  asChild
                >
                  <Link href="/#contact">
                    Ask About Hosting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-hero-foreground/50 mb-6">
                {"What's included"}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {hostingIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-hero-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK ──────────────────────────────────────────────────────── */}
      <section id="work" className="py-24 md:py-32 scroll-mt-20 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                Our Work
              </p>
              <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
                Projects We're Proud Of
              </h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-wrap gap-3 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium uppercase tracking-widest text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-sans text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-section-light-muted leading-relaxed">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/projects/partner1.png"
                alt="Matt Cole — ColeWebSolutions"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                About
              </p>
              <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
                {"Not an Agency. A Partner."}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                ColeWebSolutions is a one-person operation based in Tupelo, Mississippi. That means you talk directly to the person who builds your site — no layers, no handoffs, no miscommunication.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {"I've spent over a decade building web applications for businesses across healthcare, manufacturing, hospitality, and professional services. Every project gets my full attention."}
              </p>
              <div className="mt-10 flex gap-12 border-t border-border pt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-sans text-4xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 scroll-mt-20 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Contact
            </p>
            <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
              {"Let's Talk About Your Project"}
            </h2>
            <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
              Whether you have a detailed brief or just a rough idea, reach out and we will figure it out together.
            </p>
          </div>
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-section-light-muted">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
