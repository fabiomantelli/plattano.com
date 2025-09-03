'use client'

import { useEffect, useState } from 'react'
import { useDeviceOptimization } from '../hooks/useDeviceOptimization'

interface OptimizedHeroBackgroundProps {
  className?: string
}

export default function OptimizedHeroBackground({ className = '' }: OptimizedHeroBackgroundProps) {
  const { isMobile, preferredImageFormat } = useDeviceOptimization()
  const [imageLoaded, setImageLoaded] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Detect theme
    const detectTheme = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      setCurrentTheme(isDark ? 'dark' : 'light')
    }

    detectTheme()
    
    // Listen for theme changes
    const observer = new MutationObserver(detectTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', detectTheme)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', detectTheme)
    }
  }, [])

  useEffect(() => {
    // Preload critical images based on device and theme
    const preloadImage = (src: string) => {
      const img = new Image()
      img.onload = () => setImageLoaded(true)
      img.src = src
    }

    const getOptimalImageSrc = () => {
      const format = preferredImageFormat === 'webp' ? 'webp' : 'png'
      const size = isMobile ? 'mobile' : 'desktop'
      const theme = currentTheme
      
      // For now, use existing images but with optimized loading
      return `/images/home/high-tech-background-${theme}.${format}`
    }

    preloadImage(getOptimalImageSrc())
  }, [isMobile, preferredImageFormat, currentTheme])

  const getBackgroundStyles = () => {
    const baseStyles = {
      willChange: 'transform',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }

    if (currentTheme === 'dark') {
      return {
        ...baseStyles,
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.95)), url('/images/home/high-tech-background-dark.webp')`,
      }
    }

    return {
      ...baseStyles,
      backgroundImage: `url('/images/home/high-tech-background-light.webp')`,
    }
  }

  return (
    <>
      {/* Skeleton/placeholder while loading */}
      {!imageLoaded && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse ${className}`}
        />
      )}
      
      {/* Optimized background */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        style={getBackgroundStyles()}
      />
    </>
  )
}