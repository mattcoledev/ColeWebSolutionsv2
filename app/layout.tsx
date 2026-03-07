import type { Metadata, Viewport } from 'next'
import { Sora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ColeWebSolutions — Web Development in Tupelo, MS',
    template: '%s | ColeWebSolutions — Web Development in Tupelo, MS',
  },
  description: 'Custom web solutions, website redesigns, and managed hosting from Tupelo, Mississippi. Specializing in Umbraco CMS and modern web applications.',
  keywords: ['web development Tupelo MS', 'Umbraco developer Mississippi', 'website redesign Mississippi', 'custom web solutions', 'app development Mississippi', 'managed hosting Mississippi'],
  authors: [{ name: 'ColeWebSolutions' }],
  creator: 'ColeWebSolutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ColeWebSolutions',
    title: 'ColeWebSolutions — Web Development in Tupelo, MS',
    description: 'Custom web solutions, website redesigns, and managed hosting from Tupelo, Mississippi.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ColeWebSolutions — Web Development in Tupelo, MS',
    description: 'Custom web solutions, website redesigns, and managed hosting from Tupelo, Mississippi.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1d2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
