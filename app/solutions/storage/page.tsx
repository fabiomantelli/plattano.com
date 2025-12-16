import type { Metadata } from 'next'
import StoragePageClient from './StoragePageClient'

export const metadata: Metadata = {
  title: 'Storage Solutions | ExaGrid & Hot Cloud Storage | Plattano Technologies',
  description:
    'Enterprise storage solutions with ExaGrid and Plattano Hot Cloud Storage. Reduce storage costs up to 85% with S3-compatible object storage and deduplication.',
  keywords: [
    'ExaGrid partner',
    'cloud storage',
    'object storage',
    'S3 storage',
    'data deduplication',
    'storage solutions',
    'enterprise storage',
  ],
  alternates: {
    canonical: 'https://plattano.com/solutions/storage',
  },
  openGraph: {
    title: 'Storage Solutions | ExaGrid & Hot Cloud Storage | Plattano',
    description:
      'Enterprise storage solutions. Reduce storage costs up to 85% with S3-compatible object storage.',
    url: 'https://plattano.com/solutions/storage',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: 'https://plattano.com/images/home/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Storage Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Storage Solutions | ExaGrid & Hot Cloud Storage',
    description: 'Enterprise storage solutions. Reduce storage costs up to 85%.',
  },
}

export default function StoragePage() {
  return <StoragePageClient />
}
