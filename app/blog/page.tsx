import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog",
  description: "Web development insights, tips, and updates from ColeWebSolutions in Tupelo, Mississippi.",
}

// [PLACEHOLDER] Replace with real blog data from a CMS
const posts = [
  {
    slug: "why-umbraco-for-business-websites",
    title: "Why Umbraco Is the Best CMS for Business Websites",
    excerpt: "Discover why enterprise-grade businesses are choosing Umbraco over WordPress and other popular CMS platforms for their web presence.",
    image: "/blog/umbraco-cms.jpg",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "CMS",
  },
  {
    slug: "custom-vs-template-websites",
    title: "Custom vs. Template Websites: Which Is Right for Your Business?",
    excerpt: "A practical guide to deciding between a custom-built website and a template-based solution for your business needs.",
    image: "/blog/custom-vs-template.jpg",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Web Development",
  },
  {
    slug: "website-performance-matters",
    title: "Why Website Performance Matters More Than Ever",
    excerpt: "Learn how page speed affects your SEO, conversion rates, and user experience — and what you can do about it.",
    image: "/blog/performance.jpg",
    date: "2024-01-02",
    readTime: "6 min read",
    category: "Performance",
  },
  {
    slug: "small-business-web-security",
    title: "Web Security Essentials for Small Businesses",
    excerpt: "Protect your business and customers with these essential security practices every website owner should know.",
    image: "/blog/security.jpg",
    date: "2023-12-20",
    readTime: "8 min read",
    category: "Security",
  },
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Insights on web development, digital strategy, and building better business tools. Practical advice from the trenches.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group block ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <article className={`h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${index === 0 ? "md:grid md:grid-cols-2 md:gap-0" : ""}`}>
                  {/* Image */}
                  <div className={`aspect-video relative overflow-hidden bg-muted ${index === 0 ? "md:aspect-auto md:h-full" : ""}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className={`font-serif font-semibold text-foreground group-hover:text-primary transition-colors ${index === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
                      {post.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center text-sm font-medium text-primary">
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Need help with your website?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Let's discuss your project and see how we can help."}
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
