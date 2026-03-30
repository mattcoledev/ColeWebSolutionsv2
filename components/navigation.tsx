"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#web-design", label: "Web Design" },
  { href: "/#custom-apps", label: "Custom Apps" },
  { href: "/#hosting", label: "Hosting" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="ColeWebSolutions — home">
          <span className="font-sans text-xl font-bold text-foreground tracking-tight">
            Cole<span className="text-primary">Web</span>Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:items-center md:gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone + CTA — Desktop */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <a
            href="tel:+16624018289"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>(662) 401-8289</span>
          </a>
          <Button asChild>
            <Link href="/#contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 text-foreground rounded-md hover:bg-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden border-t border-border bg-background ${
          mobileMenuOpen ? "block animate-fade-in" : "hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="list-none space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-[44px] items-center px-2 rounded-md text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-3">
            <Button asChild className="w-full">
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
