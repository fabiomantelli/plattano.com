import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Plattano Technologies - Your trusted IT partner in Florida since 2018. Certified engineers, proven solutions, exceptional service.',
  alternates: {
    canonical: 'https://plattano.com/about',
  },
  openGraph: {
    title: 'About Us | Plattano Technologies',
    description:
      'Learn about Plattano Technologies - Your trusted IT partner in Florida since 2018.',
    url: 'https://plattano.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Plattano Technologies',
    description: 'Your trusted IT partner in Florida since 2018.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

