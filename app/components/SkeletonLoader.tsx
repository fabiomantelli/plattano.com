'use client'

interface SkeletonLoaderProps {
  className?: string
  variant?: 'text' | 'title' | 'button' | 'image'
  width?: string
  height?: string
  lines?: number
}

export default function SkeletonLoader({ 
  className = '', 
  variant = 'text',
  width = '100%',
  height,
  lines = 1
}: SkeletonLoaderProps) {
  const getSkeletonClasses = () => {
    const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded'
    
    switch (variant) {
      case 'title':
        return `${baseClasses} h-8 sm:h-12 lg:h-16`
      case 'button':
        return `${baseClasses} h-12 w-32 rounded-md`
      case 'image':
        return `${baseClasses} ${height || 'h-64'}`
      default:
        return `${baseClasses} h-4`
    }
  }

  if (lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={getSkeletonClasses()}
            style={{ 
              width: index === lines - 1 ? '75%' : width,
              height: height
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`${getSkeletonClasses()} ${className}`}
      style={{ width, height }}
    />
  )
}

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <section className={`relative w-full h-[65vh] flex items-center justify-center overflow-hidden bg-neutral-100 dark:bg-neutral-900`}>
      {/* Background skeleton */}
      <SkeletonLoader 
        variant="image" 
        className="absolute inset-0" 
        height="100%" 
      />
      
      {/* Content skeleton */}
      <div className="relative z-10 mx-auto max-w-4xl text-center px-6 space-y-6">
        {/* Title skeleton */}
        <div className="space-y-4">
          <SkeletonLoader variant="title" width="90%" />
          <SkeletonLoader variant="title" width="85%" />
          <SkeletonLoader variant="title" width="80%" />
        </div>
        
        {/* Description skeleton */}
        <div className="mt-6 max-w-2xl mx-auto">
          <SkeletonLoader lines={3} />
        </div>
        
        {/* Button skeleton */}
        <div className="mt-8">
          <SkeletonLoader variant="button" className="mx-auto" />
        </div>
      </div>
    </section>
  )
}