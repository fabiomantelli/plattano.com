'use client'

import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

// Lazy load non-critical sections
const SolutionSection = lazy(() => import('../(home)/SolutionSection'))
const ServicesSection = lazy(() => import('../(home)/ServicesSection'))
const StorySection = lazy(() => import('../(home)/StorySection'))

// Loading skeleton component
function SectionSkeleton() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface LazySectionProps {
  component: 'solution' | 'services' | 'story'
  delay?: number
}

export default function LazySection({ component, delay = 0 }: LazySectionProps) {
  const getSectionComponent = () => {
    switch (component) {
      case 'solution':
        return <SolutionSection />
      case 'services':
        return <ServicesSection />
      case 'story':
        return <StorySection />
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
    >
      <Suspense fallback={<SectionSkeleton />}>
        {getSectionComponent()}
      </Suspense>
    </motion.div>
  )
}