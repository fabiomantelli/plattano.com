'use client'

import { useState, useEffect } from 'react'

interface DeviceOptimization {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  shouldReduceAnimations: boolean
  shouldLazyLoadImages: boolean
  preferredImageFormat: 'webp' | 'png'
  connectionSpeed: 'slow' | 'fast' | 'unknown'
}

export function useDeviceOptimization(): DeviceOptimization {
  const [optimization, setOptimization] = useState<DeviceOptimization>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    shouldReduceAnimations: false,
    shouldLazyLoadImages: true,
    preferredImageFormat: 'webp',
    connectionSpeed: 'unknown'
  })

  useEffect(() => {
    const updateOptimization = () => {
      const width = window.innerWidth
      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1024
      const isDesktop = width >= 1024

      // Check for reduced motion preference
      const shouldReduceAnimations = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Check connection speed
      let connectionSpeed: 'slow' | 'fast' | 'unknown' = 'unknown'
      if ('connection' in navigator) {
        const connection = (navigator as any).connection
        if (connection) {
          const effectiveType = connection.effectiveType
          connectionSpeed = effectiveType === '4g' ? 'fast' : 'slow'
        }
      }

      // Check WebP support
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      const preferredImageFormat = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0 ? 'webp' : 'png'

      setOptimization({
        isMobile,
        isTablet,
        isDesktop,
        shouldReduceAnimations: shouldReduceAnimations || isMobile,
        shouldLazyLoadImages: !isDesktop || connectionSpeed === 'slow',
        preferredImageFormat,
        connectionSpeed
      })
    }

    updateOptimization()
    window.addEventListener('resize', updateOptimization)
    
    // Listen for connection changes
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection) {
        connection.addEventListener('change', updateOptimization)
      }
    }

    return () => {
      window.removeEventListener('resize', updateOptimization)
      if ('connection' in navigator) {
        const connection = (navigator as any).connection
        if (connection) {
          connection.removeEventListener('change', updateOptimization)
        }
      }
    }
  }, [])

  return optimization
}