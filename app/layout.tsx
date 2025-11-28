import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Plattano | Enterprise IT Solutions in Florida',
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
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
