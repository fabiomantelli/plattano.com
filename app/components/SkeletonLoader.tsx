'use client'

import { useEffect, useState } from 'react'

interface SkeletonLoaderProps {
  className?: string
  lines?: number
  showAvatar?: boolean
  type?: 'hero' | 'content' | 'card'
}

export default function SkeletonLoader({ 
  className = '', 
  lines = 3, 
  showAvatar = false,
  type = 'content'
}: SkeletonLoaderProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide skeleton after content loads
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, type === 'hero' ? 1000 : 2000) // Faster for hero sections

    return () => clearTimeout(timer)
  }, [type])

  if (!isVisible) return null

  // Hero skeleton for better LCP perception
  if (type === 'hero') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="space-y-6 text-center">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={`animate-pulse ${className}`}>
      {showAvatar && (
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-10 w-10"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <section className={`relative w-full h-[65vh] flex items-center justify-center overflow-hidden bg-neutral-100 dark:bg-neutral-900`}>
      {/* Background skeleton */}
      <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-700" />
      
      {/* Content skeleton */}
      <div className="relative z-10 mx-auto max-w-4xl text-center px-6 space-y-6">
        {/* Title skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-[90%] mx-auto animate-pulse" />
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-[85%] mx-auto animate-pulse" />
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-[80%] mx-auto animate-pulse" />
        </div>
        
        {/* Description skeleton */}
        <div className="mt-6 max-w-2xl mx-auto">
          <SkeletonLoader lines={3} />
        </div>
        
        {/* Button skeleton */}
        <div className="mt-8">
          <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-md mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  )
}