import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import StructuredData from './components/seo/StructuredData'
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from './lib/seo/generateStructuredData'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://plattano.com'),
  title: {
    default: 'Plattano | Enterprise IT Solutions in Florida',
    template: '%s | Plattano',
  },
  description:
    'Leading provider of backup, storage, and cybersecurity solutions in Florida. Veeam, ExaGrid, Wasabi, SentinelOne certified partner.',
  keywords: [
    'IT solutions Florida',
    'Veeam partner',
    'backup solutions',
    'cybersecurity',
    'data protection',
    'cloud storage',
  ],
  openGraph: {
    title: 'Plattano | Enterprise IT Solutions',
    description: 'Transform your IT infrastructure with proven solutions',
    url: 'https://plattano.com',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: '/images/home/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Plattano Technologies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plattano | Enterprise IT Solutions',
    description: 'Transform your IT infrastructure with proven solutions',
    images: ['/images/home/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebSiteSchema()

  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <Navigation />
        <main className="min-h-screen pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
