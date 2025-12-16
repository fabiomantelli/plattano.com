/**
 * Helper functions to generate Structured Data (JSON-LD)
 */

import {
  OrganizationSchema,
  WebSiteSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
  ServiceSchema,
  LocalBusinessSchema,
  ORGANIZATION_DATA,
  BASE_URL,
} from './schemas'

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORGANIZATION_DATA.name,
    url: ORGANIZATION_DATA.url,
    logo: ORGANIZATION_DATA.logo,
    description: ORGANIZATION_DATA.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANIZATION_DATA.streetAddress,
      addressLocality: ORGANIZATION_DATA.addressLocality,
      addressRegion: ORGANIZATION_DATA.addressRegion,
      postalCode: ORGANIZATION_DATA.postalCode,
      addressCountry: ORGANIZATION_DATA.addressCountry,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: ORGANIZATION_DATA.telephone,
        contactType: 'customer service',
        email: ORGANIZATION_DATA.email,
        areaServed: ORGANIZATION_DATA.areaServed,
      },
      {
        '@type': 'ContactPoint',
        telephone: ORGANIZATION_DATA.telephone,
        contactType: 'technical support',
        areaServed: ORGANIZATION_DATA.areaServed,
      },
    ],
    sameAs: ORGANIZATION_DATA.sameAs,
    foundingDate: ORGANIZATION_DATA.foundingDate,
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: ORGANIZATION_DATA.numberOfEmployees,
    },
  }
}

export function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ORGANIZATION_DATA.name,
    url: BASE_URL,
    description: ORGANIZATION_DATA.description,
    publisher: {
      '@type': 'Organization',
      name: ORGANIZATION_DATA.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBreadcrumbListSchema(
  items: { name: string; url: string }[]
): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQPageSchema(
  faqs: { question: string; answer: string }[]
): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceType?: string,
  areaServed?: string[]
): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: ORGANIZATION_DATA.name,
    },
    areaServed: areaServed || ORGANIZATION_DATA.areaServed,
    serviceType: serviceType,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}#business`,
    name: ORGANIZATION_DATA.name,
    image: ORGANIZATION_DATA.logo,
    url: BASE_URL,
    telephone: ORGANIZATION_DATA.telephone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANIZATION_DATA.streetAddress,
      addressLocality: ORGANIZATION_DATA.addressLocality,
      addressRegion: ORGANIZATION_DATA.addressRegion,
      postalCode: ORGANIZATION_DATA.postalCode,
      addressCountry: ORGANIZATION_DATA.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4509833,
      longitude: -81.4850237,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    sameAs: ORGANIZATION_DATA.sameAs,
  }
}
