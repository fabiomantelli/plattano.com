'use client'

import { useEffect, useState } from 'react'

export default function AdvancedResourceHints() {
  const [isMobile, setIsMobile] = useState(false)
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast'>('fast')
  const [preferredImageFormat, setPreferredImageFormat] = useState<'webp' | 'png'>('webp')
  
  useEffect(() => {
    // Detect device and connection on client side
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
      
      // Check connection speed
      const connection = (navigator as Navigator & {
        connection?: {
          effectiveType?: string
        }
      }).connection
      if (connection) {
        setConnectionSpeed(connection.effectiveType === '4g' ? 'fast' : 'slow')
      }
      
      // Check WebP support
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
      setPreferredImageFormat(webpSupported ? 'webp' : 'png')
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    const addResourceHint = (rel: string, href: string, as?: string, type?: string) => {
      // Check if hint already exists
      const existing = document.querySelector(`link[rel="${rel}"][href="${href}"]`)
      if (existing) return

      const link = document.createElement('link')
      link.rel = rel
      link.href = href
      if (as) link.setAttribute('as', as)
      if (type) link.type = type
      document.head.appendChild(link)
    }

    // DNS prefetch for external resources
    addResourceHint('dns-prefetch', 'https://fonts.googleapis.com')
    addResourceHint('dns-prefetch', 'https://fonts.gstatic.com')
    
    // Preconnect to critical origins
    addResourceHint('preconnect', 'https://fonts.googleapis.com')
    addResourceHint('preconnect', 'https://fonts.gstatic.com', undefined, undefined)
    
    // Preload critical images based on device and connection
    const shouldPreloadImages = !isMobile || connectionSpeed === 'fast'
    
    if (shouldPreloadImages) {
      const imageFormat = preferredImageFormat === 'webp' ? 'webp' : 'png'
      
      // Preload hero background images
      addResourceHint('preload', `/images/home/high-tech-background-light.${imageFormat}`, 'image')
      addResourceHint('preload', `/images/home/high-tech-background-dark.${imageFormat}`, 'image')
      
      // Preload logo
      addResourceHint('preload', '/images/home/logo.webp', 'image')
    }
    
    // Note: Fonts are now handled by Next.js font optimization with display=swap
    
    // Module preload for critical JavaScript (if using ES modules)
    if ('modulepreload' in HTMLLinkElement.prototype) {
      // Preload critical chunks
      addResourceHint('modulepreload', '/_next/static/chunks/main.js')
      addResourceHint('modulepreload', '/_next/static/chunks/webpack.js')
    }
    
    // Prefetch next likely pages for mobile users
    if (isMobile) {
      addResourceHint('prefetch', '/contact')
      addResourceHint('prefetch', '/the-plattano')
    }
    
    // Performance observer for LCP optimization
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            // Log LCP for monitoring
            console.log('LCP:', entry.startTime)
            
            // If LCP is slow, preload more aggressively
            if (entry.startTime > 2500) {
              addResourceHint('preload', '/images/home/services-image.png', 'image')
              addResourceHint('preload', '/images/home/solution-image.png', 'image')
            }
          }
        })
      })
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch {
        // Fallback for browsers that don't support LCP
        console.warn('LCP observation not supported')
      }
      
      return () => {
        observer.disconnect()
      }
    }
  }, [isMobile, connectionSpeed, preferredImageFormat])

  return null
}