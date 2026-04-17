import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Mail, Phone, MapPin, Clock, Mic, GraduationCap, UserCheck, PhoneMissed, CalendarCheck, FolderOpen, BarChart3, Calculator, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { HeroAnimation } from "@/components/hero-animation"
import { AboutVisual } from "@/components/about-visual"
import { WebDesignVisual } from "@/components/web-design-visual"

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

const customTools = [
  {
    icon: CalendarCheck,
    title: "Appointment & Booking Systems",
    description: "Let customers book online with real-time availability. Automated confirmations and reminders. No more phone tag or double bookings. Works on your website, syncs with your calendar.",
  },
  {
    icon: FolderOpen,
    title: "Client Portals",
    description: "Give your customers a login where they can view project status, approve work, download documents, and pay invoices. Fewer emails, fewer calls asking \"where are we at.\"",
  },
  {
    icon: BarChart3,
    title: "Internal Dashboards",
    description: "See your whole business in one place. Track jobs, monitor revenue, manage leads, view team schedules. Built around your data, not someone else's template.",
  },
  {
    icon: Calculator,
    title: "Custom Calculators & Quoting Tools",
    description: "Let website visitors get instant estimates. Roofing calculators, service pricing tools, loan estimators. Captures the lead while giving them value upfront.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Stop doing the same thing manually every day. Automated follow-up emails, job status updates, inventory alerts, report generation. If you do it repeatedly, we can automate it.",
  },
  {
    icon: Target,
    title: "Landing Pages",
    description: "Purpose-built pages for ads, campaigns, or specific services. No navigation, no distractions — just one offer, one message, and one call to action aimed at turning ad spend into actual leads.",
  },
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
    description: "Full redesign paired with a custom booking system — patients schedule online, staff see availability in real time, and no-shows dropped with automated reminders.",
    image: "/projects/dem2.png",
    tags: ["Redesign", "Booking System"],
  },
  {
    title: "Delta Manufacturing",
    description: "Internal dashboard for production tracking and inventory management.",
    image: "/projects/dem3.png",
    tags: ["Custom Build", "Manufacturing"],
  },
]

const voiceUseCases = [
  {
    icon: PhoneMissed,
    title: "After-Hours Coverage",
    description: "Never lose a lead to voicemail again. Your AI agent answers questions and captures contact info when your team is off the clock.",
  },
  {
    icon: UserCheck,
    title: "Front Desk Relief",
    description: "Free up your front desk staff. The agent handles FAQs, appointment scheduling, and basic intake so your team can focus on the people in front of them.",
  },
  {
    icon: GraduationCap,
    title: "Sales Call Training",
    description: "Let your team practice sales calls with AI-powered customers that push back, ask tough questions, and give coaching feedback after every session.",
  },
  {
    icon: Mic,
    title: "Lead Qualification",
    description: "Your agent asks the right questions, identifies serious prospects, and sends you the details — no tire-kickers wasting your time.",
  },
]

const voiceVerticals = [
  "Home Services",
  "Medical & Dental",
  "Legal",
  "Real Estate",
  "Sales Teams",
]

const testimonials = [
  {
    quote: "More new client inquiries came in the first month after launch than all of last year combined. In law, people judge you before they ever pick up the phone. The site finally reflects who we are.",
    name: "James K.",
    title: "Partner",
    company: "Kellerman & Associates",
    initials: "JK",
  },
  {
    quote: "I was skeptical about switching systems, but the booking integration made a real difference. Patients actually use it, our front desk has less phone traffic, and no-shows are way down.",
    name: "Dr. Sarah H.",
    title: "Owner",
    company: "Hartwell Family Dentistry",
    initials: "SH",
  },
  {
    quote: "The site has been rock solid. Anytime something small comes up he takes care of it quickly and I never have to follow up twice. It's just one less thing I have to think about.",
    name: "Rachel S.",
    title: "Owner",
    company: "Cedar Hill Wellness",
    initials: "RS",
  },
]

const stats = [
  { value: "50+", label: "Clients Served" },
  { value: "10+", label: "Years Building" },
  { value: "< 1 Day", label: "Avg. Response Time" },
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
      <section id="hero" className="relative overflow-hidden py-24 md:py-32 lg:py-36 bg-hero hero-texture text-hero-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">

            {/* Left: copy */}
            <div>
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

            {/* Right: animated SVG */}
            <div className="hidden lg:flex items-center justify-end">
              <div className="w-full max-w-[560px]">
                <HeroAnimation />
              </div>
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
                We rebuild outdated websites into fast, mobile-first experiences that build trust and generate leads. Every site we build runs on a modern CMS — so you own your content and can make changes without touching a developer.
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
            <WebDesignVisual />
          </div>
        </div>
      </section>

      {/* ── CUSTOM TOOLS ──────────────────────────────────────────────── */}
      <section id="custom-tools" className="py-24 md:py-32 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Custom Tools
            </p>
            <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
              Custom Tools Built for How You Work
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Stop duct-taping your business together with spreadsheets, paper forms, and disconnected apps. We build custom tools — booking systems, client portals, job trackers, internal dashboards — designed around your exact workflow. No subscriptions to software you only half-use.
            </p>
          </div>

          {/* Tool Cards — 5 items: 3 on top row, 2 centered on bottom */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {customTools.map((tool) => (
              <div
                key={tool.title}
                className="bg-section-light rounded-xl p-7 border border-border flex flex-col gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <tool.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-semibold tracking-tight mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <p className="text-lg text-muted-foreground">
                Have a process that needs fixing?
              </p>
              <Button size="lg" asChild>
                <Link href="/#contact">
                  {"Let's Talk"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ── AI VOICE AGENTS ───────────────────────────────────────────── */}
      <section id="ai-agents" className="py-24 md:py-32 scroll-mt-20 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              AI Voice Agents
            </p>
            <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
              Never Miss Another Call
            </h2>
            <p className="mt-6 text-xl text-section-light-muted leading-relaxed">
              Custom AI voice agents that answer questions, capture leads, and book appointments — 24/7, right on your website.
            </p>
            <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
              We build voice-powered assistants tailored to your business. Your customers click a button, start talking, and get real answers in a natural-sounding voice. No apps to download, no hold music, no missed opportunities. Works on any device with a browser and a microphone.
            </p>
          </div>

          {/* Use Case Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {voiceUseCases.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-xl p-7 border border-border flex flex-col gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-semibold tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-section-light-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Verticals + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 border-t border-section-light-foreground/10 pt-12">
            <div className="flex-1">
              <p className="text-sm font-medium uppercase tracking-widest text-section-light-muted mb-4">
                Great for
              </p>
              <div className="flex flex-wrap gap-2">
                {voiceVerticals.map((v) => (
                  <span
                    key={v}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <Button size="lg" asChild>
                <Link href="/#contact">
                  Book a 15-Minute Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
      <section id="about" className="py-24 md:py-32 scroll-mt-20 bg-hero hero-texture text-hero-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="flex flex-col items-center gap-4 max-w-xs mx-auto w-full">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/MattColeHeadShot.png"
                  alt="Matt Cole — ColeWebSolutions"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="text-center">
                <p className="font-sans font-semibold text-hero-foreground">Matt Cole</p>
                <p className="text-sm text-hero-foreground/50">Founder, ColeWebSolutions</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-hero-foreground/50 mb-4">
                About
              </p>
              <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
                {"Not an Agency. A Partner."}
              </h2>
              <p className="mt-6 text-lg text-hero-foreground/70 leading-relaxed">
                ColeWebSolutions is a one-person operation based in Tupelo, Mississippi. That means you talk directly to the person who builds your site — no layers, no handoffs, no miscommunication.
              </p>
              <p className="mt-4 text-lg text-hero-foreground/70 leading-relaxed">
                {"I've spent over a decade building web applications for businesses across healthcare, manufacturing, hospitality, and professional services. Every project gets my full attention."}
              </p>
              <div className="mt-10 flex gap-12 border-t border-white/10 pt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-sans text-4xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-hero-foreground/50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-hero hero-texture text-hero-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-hero-foreground/50 mb-4">
              Reviews
            </p>
            <h2 className="font-sans text-4xl font-bold tracking-tight md:text-5xl leading-[1.1]">
              What Clients Say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-7"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="flex-1 text-base leading-relaxed text-hero-foreground/75">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Person */}
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/40">
                    <span className="text-xs font-bold text-white">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-hero-foreground/50">{t.title}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
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
