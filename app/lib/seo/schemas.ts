/**
 * Structured Data (JSON-LD) Schemas for SEO
 * Following Schema.org standards as of December 2025
 */

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string
  description?: string
  address?: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint?: {
    '@type': string
    telephone: string
    contactType: string
    email?: string
    areaServed?: string[]
  }[]
  sameAs?: string[]
  foundingDate?: string
  numberOfEmployees?: {
    '@type': string
    value: string
  }
}

export interface WebSiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description?: string
  publisher?: {
    '@type': string
    name: string
  }
  potentialAction?: {
    '@type': string
    target: {
      '@type': string
      urlTemplate: string
    }
    'query-input': string
  }
}

export interface BreadcrumbListSchema {
  '@context': string
  '@type': string
  itemListElement: {
    '@type': string
    position: number
    name: string
    item?: string
  }[]
}

export interface FAQPageSchema {
  '@context': string
  '@type': string
  mainEntity: {
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }[]
}

export interface ServiceSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  provider: {
    '@type': string
    name: string
  }
  areaServed?: string[]
  serviceType?: string
  offers?: {
    '@type': string
    priceCurrency?: string
    availability?: string
  }
}

export interface LocalBusinessSchema {
  '@context': string
  '@type': string
  name: string
  image?: string
  '@id'?: string
  url?: string
  telephone?: string
  priceRange?: string
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    '@type': string
    latitude: number
    longitude: number
  }
  openingHoursSpecification?: {
    '@type': string
    dayOfWeek: string[]
    opens: string
    closes: string
  }[]
  sameAs?: string[]
}

export const BASE_URL = 'https://plattano.com'

export const ORGANIZATION_DATA = {
  name: 'Plattano Technologies',
  legalName: 'Plattano',
  url: BASE_URL,
  logo: `${BASE_URL}/images/home/logo.webp`,
  description:
    'Leading provider of backup, storage, and cybersecurity solutions in Florida. Veeam, ExaGrid, Wasabi, SentinelOne certified partner.',
  streetAddress: '7345 W Sand Lake Rd Ste 210',
  addressLocality: 'Orlando',
  addressRegion: 'FL',
  postalCode: '32819',
  addressCountry: 'US',
  telephone: '+1-321-313-8762',
  email: 'plattano@plattano.com',
  foundingDate: '2018',
  numberOfEmployees: '15+',
  areaServed: ['US', 'FL', 'Orlando'],
  sameAs: [
    // Add social media links here if available
    // 'https://www.linkedin.com/company/plattano',
    // 'https://twitter.com/plattano',
  ],
}
