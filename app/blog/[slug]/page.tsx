import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// [PLACEHOLDER] Replace with real blog data from a CMS
const posts: Record<string, {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  content: string
}> = {
  "why-umbraco-for-business-websites": {
    title: "Why Umbraco Is the Best CMS for Business Websites",
    excerpt: "Discover why enterprise-grade businesses are choosing Umbraco over WordPress and other popular CMS platforms for their web presence.",
    image: "/blog/umbraco-cms.jpg",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "CMS",
    content: `
      <p>[PLACEHOLDER - Add your full article content here]</p>
      
      <h2>Introduction</h2>
      <p>When it comes to choosing a content management system for your business website, the options can be overwhelming. WordPress dominates the market, but is it really the best choice for serious business applications?</p>
      
      <h2>What Makes Umbraco Different</h2>
      <p>Umbraco is an open-source CMS built on Microsoft's .NET framework. Unlike WordPress, which was originally designed for blogging, Umbraco was built from the ground up for enterprise-grade websites.</p>
      
      <h2>Security First</h2>
      <p>One of the biggest advantages of Umbraco is security. Because it runs on .NET and doesn't rely on thousands of third-party plugins, the attack surface is significantly smaller than WordPress.</p>
      
      <h2>Performance at Scale</h2>
      <p>Umbraco sites are known for their exceptional performance. The compiled .NET code runs faster than interpreted PHP, and the architecture scales beautifully as your traffic grows.</p>
      
      <h2>Developer-Friendly</h2>
      <p>For developers, Umbraco offers the best of both worlds: a flexible, code-first approach when you need it, and intuitive content editing for non-technical users.</p>
      
      <h2>Conclusion</h2>
      <p>If you're building a business website that needs to be secure, performant, and flexible, Umbraco deserves serious consideration. While WordPress works fine for simple sites, Umbraco is built for businesses that demand more.</p>
    `,
  },
  "custom-vs-template-websites": {
    title: "Custom vs. Template Websites: Which Is Right for Your Business?",
    excerpt: "A practical guide to deciding between a custom-built website and a template-based solution for your business needs.",
    image: "/blog/custom-vs-template.jpg",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Web Development",
    content: `
      <p>[PLACEHOLDER - Add your full article content here]</p>
      
      <h2>The Template Temptation</h2>
      <p>Templates are appealing. They're fast, they're cheap, and with thousands of options available, you can find something that looks pretty close to what you want.</p>
      
      <h2>When Templates Make Sense</h2>
      <p>Templates work well for simple brochure sites, personal blogs, and businesses just getting started online. If you need something up quickly and don't have unique requirements, a template might be the right choice.</p>
      
      <h2>The Custom Advantage</h2>
      <p>Custom websites shine when your business has specific needs that templates can't address. Need a unique booking system? Custom. Complex integrations with your existing tools? Custom. Want to stand out from every competitor using the same template? Custom.</p>
      
      <h2>The Hidden Costs of Templates</h2>
      <p>Templates often come with hidden costs: premium plugins that add up, limitations that require workarounds, and eventually, the realization that you've outgrown the template and need to start over.</p>
      
      <h2>Making the Decision</h2>
      <p>Consider your budget, timeline, and long-term goals. If you're building something you want to last and grow with your business, custom is usually worth the investment.</p>
    `,
  },
  "website-performance-matters": {
    title: "Why Website Performance Matters More Than Ever",
    excerpt: "Learn how page speed affects your SEO, conversion rates, and user experience — and what you can do about it.",
    image: "/blog/performance.jpg",
    date: "2024-01-02",
    readTime: "6 min read",
    category: "Performance",
    content: `
      <p>[PLACEHOLDER - Add your full article content here]</p>
      
      <h2>The Speed-Conversion Connection</h2>
      <p>Studies show that a one-second delay in page load time can reduce conversions by 7%. For an e-commerce site doing $100,000 per day, that's $2.5 million in lost sales per year.</p>
      
      <h2>Google Cares About Speed</h2>
      <p>Page speed is a confirmed ranking factor. Google's Core Web Vitals measure loading, interactivity, and visual stability — all of which affect your search rankings.</p>
      
      <h2>Mobile Users Expect Speed</h2>
      <p>Over half of all web traffic comes from mobile devices, often on slower connections. If your site isn't optimized for mobile performance, you're losing customers.</p>
      
      <h2>Quick Wins for Better Performance</h2>
      <p>Some easy improvements: optimize images, enable browser caching, use a CDN, minimize JavaScript, and choose quality hosting. These alone can dramatically improve load times.</p>
      
      <h2>When to Get Professional Help</h2>
      <p>If your site is sluggish despite basic optimizations, it might be time to dig deeper. Architecture changes, code optimization, and better hosting infrastructure can make a huge difference.</p>
    `,
  },
  "small-business-web-security": {
    title: "Web Security Essentials for Small Businesses",
    excerpt: "Protect your business and customers with these essential security practices every website owner should know.",
    image: "/blog/security.jpg",
    date: "2023-12-20",
    readTime: "8 min read",
    category: "Security",
    content: `
      <p>[PLACEHOLDER - Add your full article content here]</p>
      
      <h2>Why Small Businesses Are Targets</h2>
      <p>Small businesses are actually more likely to be targeted than large enterprises. Why? Because attackers know smaller companies often lack dedicated security resources.</p>
      
      <h2>HTTPS Is Non-Negotiable</h2>
      <p>If your site doesn't have SSL (the padlock icon), fix this immediately. It protects your visitors' data and is required by Google for good search rankings.</p>
      
      <h2>Keep Everything Updated</h2>
      <p>Most security breaches exploit known vulnerabilities in outdated software. Regular updates to your CMS, plugins, and server software are essential.</p>
      
      <h2>Strong Passwords and 2FA</h2>
      <p>Use strong, unique passwords for every account. Enable two-factor authentication wherever possible. These simple steps prevent the majority of unauthorized access attempts.</p>
      
      <h2>Regular Backups</h2>
      <p>Even with perfect security, things can go wrong. Regular, tested backups ensure you can recover quickly if something happens.</p>
      
      <h2>When to Bring in Experts</h2>
      <p>If you handle sensitive customer data, process payments, or operate in a regulated industry, consider professional security auditing and managed security services.</p>
    `,
  },
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  // Get related posts (excluding current)
  const relatedPosts = Object.entries(posts)
    .filter(([postSlug]) => postSlug !== slug)
    .slice(0, 2)
    .map(([postSlug, postData]) => ({ slug: postSlug, ...postData }))

  return (
    <div className="flex flex-col">
      {/* Back Link */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </article>

      {/* Featured Image */}
      <div className="pb-12 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative overflow-hidden rounded-2xl bg-muted border border-border">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 border-t border-border bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-2xl font-bold mb-8">Related Posts</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">{relatedPost.category}</Badge>
                      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border">
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
