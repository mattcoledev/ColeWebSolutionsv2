"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Loader2 } from "lucide-react"

const serviceOptions = [
  { value: "redesign", label: "Website Redesign" },
  { value: "custom", label: "Custom Web Solution" },
  { value: "app", label: "App Development" },
  { value: "hosting", label: "Managed Hosting" },
  { value: "not-sure", label: "Not Sure Yet" },
  { value: "other", label: "Other" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string

    // Client-side validation
    const newErrors: Record<string, string> = {}
    if (!name?.trim()) newErrors.name = "Name is required"
    if (!email?.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission - replace with actual API call
    // e.g., Formspree, Netlify Forms, or custom API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-section-light-muted">
          Thanks for reaching out. We will get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-section-light-foreground">
            Name <span className="text-destructive" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Smith"
            required
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            className={`bg-white border-section-light-foreground/20 text-section-light-foreground placeholder:text-section-light-muted ${errors.name ? "border-destructive" : ""}`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-section-light-foreground">
            Email <span className="text-destructive" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            className={`bg-white border-section-light-foreground/20 text-section-light-foreground placeholder:text-section-light-muted ${errors.email ? "border-destructive" : ""}`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-section-light-foreground">
            Phone (optional)
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(662) 555-1234"
            className="bg-white border-section-light-foreground/20 text-section-light-foreground placeholder:text-section-light-muted"
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="text-section-light-foreground">
            Company / Organization (optional)
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Acme Inc."
            className="bg-white border-section-light-foreground/20 text-section-light-foreground placeholder:text-section-light-muted"
          />
        </div>
      </div>

      {/* Service Type */}
      <div className="space-y-2">
        <Label htmlFor="service" className="text-section-light-foreground">
          What are you looking for?
        </Label>
        <Select name="service">
          <SelectTrigger className="bg-white border-section-light-foreground/20 text-section-light-foreground">
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-section-light-foreground">
          Tell us about your project (optional)
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe your project, goals, timeline, or any questions you have..."
          rows={5}
          className="resize-none bg-white border-section-light-foreground/20 text-section-light-foreground placeholder:text-section-light-muted"
        />
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-center text-sm text-section-light-muted">
        We typically respond within one business day.
      </p>
    </form>
  )
}
