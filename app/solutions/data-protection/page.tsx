import type { Metadata } from 'next'
import DataProtectionPageClient from './DataProtectionPageClient'

export const metadata: Metadata = {
  title: 'Data Protection Solutions | Veeam Backup & Recovery | Plattano Technologies',
  description:
    'Veeam Gold Partner. Complete data protection with backup, recovery, and ransomware protection for physical, virtual, and cloud environments. Free trial available.',
  keywords: [
    'Veeam partner',
    'data protection',
    'backup solutions',
    'disaster recovery',
    'Veeam backup',
    'ransomware protection',
    'cloud backup',
    'data recovery',
    'enterprise backup',
  ],
  alternates: {
    canonical: 'https://plattano.com/solutions/data-protection',
  },
  openGraph: {
    title: 'Data Protection Solutions | Veeam Backup & Recovery | Plattano',
    description:
      'Veeam Gold Partner. Complete data protection with backup, recovery, and ransomware protection. Free trial.',
    url: 'https://plattano.com/solutions/data-protection',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: 'https://plattano.com/images/home/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Data Protection Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Protection Solutions | Veeam Backup & Recovery',
    description: 'Complete data protection with Veeam. Veeam Gold Partner.',
  },
}

export default function DataProtectionPage() {
  return <DataProtectionPageClient />
}
