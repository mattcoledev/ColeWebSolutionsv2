import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
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
    readTime: "5 min",
    category: "CMS",
  },
  {
    slug: "custom-vs-template-websites",
    title: "Custom vs. Template Websites: Which Is Right for Your Business?",
    excerpt: "A practical guide to deciding between a custom-built website and a template-based solution for your business needs.",
    image: "/blog/custom-vs-template.jpg",
    date: "2024-01-08",
    readTime: "7 min",
    category: "Web Development",
  },
  {
    slug: "website-performance-matters",
    title: "Why Website Performance Matters More Than Ever",
    excerpt: "Learn how page speed affects your SEO, conversion rates, and user experience — and what you can do about it.",
    image: "/blog/performance.jpg",
    date: "2024-01-02",
    readTime: "6 min",
    category: "Performance",
  },
  {
    slug: "small-business-web-security",
    title: "Web Security Essentials for Small Businesses",
    excerpt: "Protect your business and customers with these essential security practices every website owner should know.",
    image: "/blog/security.jpg",
    date: "2023-12-20",
    readTime: "8 min",
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
  const [featuredPost, ...otherPosts] = posts

  return (
    <div className="flex flex-col">
      {/* Header - Dark */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-[0.95]">
              Insights & Updates
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Practical advice on web development, digital strategy, and building better business tools.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post - Light */}
      <section className="py-24 md:py-32 bg-section-light text-section-light-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <article className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-section-light-foreground/5">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-section-light-muted">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-lg text-section-light-muted leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-section-light-muted">
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="inline-flex items-center text-base font-medium text-primary">
                    Read Article
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Other Posts - Dark */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-12">
            More Articles
          </p>
          <div className="space-y-12">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="grid gap-6 lg:grid-cols-4 lg:gap-12 items-start border-b border-border pb-12">
                  {/* Image */}
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-card lg:aspect-[4/3]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-medium uppercase tracking-widest text-primary">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl font-bold tracking-tight md:text-3xl group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center text-sm font-medium text-primary">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Accent */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Need Help With Your Website?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              {"Let's discuss your project and see how we can help."}
            </p>
            <div className="mt-10">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6"
                asChild
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
