import type { Metadata } from 'next'
import CybersecurityPageClient from './CybersecurityPageClient'

export const metadata: Metadata = {
  title: 'Cybersecurity Solutions | SentinelOne & Rainforest | Plattano Technologies',
  description:
    'AI-powered cybersecurity with SentinelOne and Rainforest. Protect against advanced threats, ransomware, and brand attacks. Free 30-day trial available.',
  keywords: [
    'SentinelOne partner',
    'cybersecurity Florida',
    'endpoint protection',
    'XDR platform',
    'ransomware protection',
    'brand protection',
    'dark web monitoring',
    'cybersecurity solutions',
    'Rainforest security',
  ],
  alternates: {
    canonical: 'https://plattano.com/solutions/cybersecurity',
  },
  openGraph: {
    title: 'Cybersecurity Solutions | SentinelOne & Rainforest | Plattano',
    description:
      'AI-powered protection against advanced threats, ransomware, and brand attacks. Free 30-day trial.',
    url: 'https://plattano.com/solutions/cybersecurity',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: 'https://plattano.com/images/home/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Cybersecurity Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Solutions | SentinelOne & Rainforest',
    description: 'AI-powered protection against advanced threats and ransomware.',
  },
}

export default function CybersecurityPage() {
  return <CybersecurityPageClient />
}
