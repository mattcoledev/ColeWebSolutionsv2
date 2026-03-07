import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    { href: "#", label: "LinkedIn", icon: Linkedin },
    { href: "#", label: "GitHub", icon: Github },
    { href: "#", label: "Twitter", icon: Twitter },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-xl font-bold text-foreground tracking-tight">
                Cole<span className="text-primary">Web</span>Solutions
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Custom web solutions from Tupelo, MS. From redesigns to full-scale web applications, we build digital experiences that help businesses grow.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="block text-foreground/70">Email</span>
                <a href="mailto:hello@colewebsolutions.com" className="hover:text-primary transition-colors">
                  hello@colewebsolutions.com
                </a>
              </li>
              <li>
                <span className="block text-foreground/70">Phone</span>
                <a href="tel:+16625551234" className="hover:text-primary transition-colors">
                  (662) 555-1234
                </a>
              </li>
              <li>
                <span className="block text-foreground/70">Location</span>
                Tupelo, Mississippi
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ColeWebSolutions. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built by ColeWebSolutions
          </p>
        </div>
      </div>
    </footer>
  )
}
