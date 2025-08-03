// app/ui/analytics/AnalyticsTracker.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { pageview } from '@/lib/gtag/pageview'

export function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + '?' + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams])

  return null
}