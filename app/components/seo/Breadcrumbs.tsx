/**
 * Breadcrumbs component with visual navigation and JSON-LD structured data
 */

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import StructuredData from './StructuredData'
import { generateBreadcrumbListSchema } from '@/app/lib/seo/generateStructuredData'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Always include home as first item
  const allItems = [
    { name: 'Home', url: '/' },
    ...items,
  ]

  const structuredData = generateBreadcrumbListSchema(
    allItems.map((item) => ({
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `https://plattano.com${item.url}`,
    }))
  )

  return (
    <>
      <StructuredData data={structuredData} />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        <ol className="flex items-center space-x-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1
            return (
              <li key={item.url} className="flex items-center">
                {index === 0 ? (
                  <Link
                    href={item.url}
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label="Home"
                  >
                    <Home className="h-4 w-4" />
                  </Link>
                ) : (
                  <>
                    <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                    {isLast ? (
                      <span className="text-gray-900 font-medium" aria-current="page">
                        {item.name}
                      </span>
                    ) : (
                      <Link
                        href={item.url}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
