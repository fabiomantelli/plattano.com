import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us | Plattano Technologies | IT Solutions Florida',
  description:
    'Get in touch with Plattano Technologies. Located in Orlando, Florida. Call (321) 313-8762 or email plattano@plattano.com. Average response time: 4 hours.',
  keywords: [
    'contact Plattano',
    'IT support Florida',
    'Orlando IT services',
    'IT consultation',
    'enterprise IT contact',
    'Plattano Technologies contact',
  ],
  alternates: {
    canonical: 'https://plattano.com/contact',
  },
  openGraph: {
    title: 'Contact Plattano Technologies | IT Solutions Florida',
    description:
      'Get in touch with our IT experts. Located in Orlando, Florida. Response within 4 hours.',
    url: 'https://plattano.com/contact',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: 'https://plattano.com/images/home/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Plattano Technologies Contact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Plattano Technologies',
    description: 'Get in touch with our IT experts. Response within 4 hours.',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
