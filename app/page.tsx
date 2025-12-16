import type { Metadata } from 'next'
import HeroSection from './components/sections/HeroSection'
import TrustSection from './components/sections/TrustSection'
import SolutionsSection from './components/sections/SolutionsSection'
import PartnersSection from './components/sections/PartnersSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CTASection from './components/sections/CTASection'
import StructuredData from './components/seo/StructuredData'
import { generateWebSiteSchema } from './lib/seo/generateStructuredData'

export const metadata: Metadata = {
  title: 'Plattano Technologies | Enterprise IT Solutions in Florida',
  description:
    'Leading provider of backup, storage, and cybersecurity solutions in Florida. Veeam, ExaGrid, SentinelOne certified partner. Protect and scale your business.',
  keywords: [
    'IT solutions Florida',
    'Veeam partner',
    'backup solutions',
    'cybersecurity',
    'data protection',
    'cloud storage',
    'enterprise IT',
    'Orlando IT services',
    'ExaGrid partner',
    'SentinelOne partner',
  ],
  alternates: {
    canonical: 'https://plattano.com',
  },
  openGraph: {
    title: 'Plattano Technologies | Enterprise IT Solutions in Florida',
    description:
      'Leading provider of backup, storage, and cybersecurity solutions in Florida. Trusted by 1,100+ businesses.',
    url: 'https://plattano.com',
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
    title: 'Plattano Technologies | Enterprise IT Solutions',
    description:
      'Leading provider of backup, storage, and cybersecurity solutions in Florida.',
    images: ['https://plattano.com/images/home/logo.webp'],
  },
}

export default function NewHomePage() {
  const websiteSchema = generateWebSiteSchema()

  return (
    <>
      <StructuredData data={websiteSchema} />
      <HeroSection />
      <TrustSection />
      <SolutionsSection />
      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
