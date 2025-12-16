import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About Us | Plattano Technologies | Trusted IT Partner in Florida',
  description:
    'Learn about Plattano Technologies, your trusted IT partner in Florida. 7+ years protecting 1,100+ businesses with proven backup, storage, and cybersecurity solutions.',
  keywords: [
    'IT company Florida',
    'Orlando IT services',
    'enterprise IT solutions',
    'data protection experts',
    'cybersecurity specialists',
    'Florida IT partner',
  ],
  alternates: {
    canonical: 'https://plattano.com/about',
  },
  openGraph: {
    title: 'About Plattano Technologies | Trusted IT Partner in Florida',
    description:
      '7+ years protecting 1,100+ businesses with proven IT solutions. Based in Orlando, Florida.',
    url: 'https://plattano.com/about',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: 'https://plattano.com/images/home/logo.webp',
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
    title: 'About Plattano Technologies | Trusted IT Partner',
    description: '7+ years protecting 1,100+ businesses with proven IT solutions.',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
