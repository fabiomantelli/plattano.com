import { lazy, Suspense } from 'react'
import HeroSection from './(home)/HeroSection'
import FeaturesSection from './(home)/FeaturesSection'
import StatsSection from './(home)/StatsSection'
import RaiseBarSection from './(home)/RaiseBarSection'
import Footer from './ui/layout/Footer'

// Lazy load non-critical sections
const StorySection = lazy(() => import('./(home)/StorySection'))
const SolutionsSection = lazy(() => import('./(home)/SolutionSection'))
const ServicesSection = lazy(() => import('./(home)/ServicesSection'))
const ResilienceSection = lazy(() => import('./(home)/ResilienceSection'))
const ProPowerSection = lazy(() => import('./(home)/ProPowerSection'))

// Loading skeleton
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

export default function Home() {
  return (
    <> 
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <RaiseBarSection />
      
      <Suspense fallback={<SectionSkeleton />}>
        <StorySection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <SolutionsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ResilienceSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ProPowerSection />
      </Suspense>
      
      <Footer />
    </>
  )
}
