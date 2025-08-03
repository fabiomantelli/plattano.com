// app/ui/analytics/SafeAnalytics.tsx
'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy-load only on client, prevent SSG issues
const AnalyticsTracker = dynamic(() => import('./AnalyticsTracker').then(mod => mod.AnalyticsTracker), {
  ssr: false,
})

export function SafeAnalytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  )
}
