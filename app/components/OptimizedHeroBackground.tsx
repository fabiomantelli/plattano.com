'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDeviceOptimization } from '../hooks/useDeviceOptimization'

interface OptimizedHeroBackgroundProps {
  className?: string
}

export default function OptimizedHeroBackground({ className = '' }: OptimizedHeroBackgroundProps) {
  const { isMobile } = useDeviceOptimization()
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(() => {
    // Detecta o tema inicial no lado do cliente para evitar flash
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    }
    return 'dark' // fallback para SSR
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Detect theme - sync with ThemeToggle logic
    const detectTheme = () => {
      if (typeof window !== 'undefined') {
        // Check if HTML has 'dark' class (this is what ThemeToggle actually sets)
        const isDark = document.documentElement.classList.contains('dark')
        const newTheme = isDark ? 'dark' : 'light'
        setCurrentTheme(newTheme)
      }
    }

    detectTheme()
    setMounted(true)

    
    // Listen for DOM class changes (when ThemeToggle updates the class)
    const observer = new MutationObserver(() => {
      detectTheme()
    })
    
    if (typeof window !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const getOptimalImageSrc = () => {
    return `/images/home/high-tech-background-${currentTheme}.webp`
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div className="absolute inset-0" style={{backgroundColor: 'var(--background)'}} />
      </div>
    )
  }



  return (
    <>
      {/* Optimized background with Next.js Image */}
      <div className={`absolute inset-0 ${className}`}>
        <Image
          src={getOptimalImageSrc()}
          alt="High-tech background"
          fill
          priority
          fetchPriority="high"
          sizes={isMobile ? "100vw" : "100vw"}
          className="object-cover"
          quality={isMobile ? 75 : 85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        
        {/* Theme-specific overlays */}
        {currentTheme === 'dark' && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/95" />
        )}
        {currentTheme === 'light' && (
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/30" />
        )}
      </div>
    </>
  )
}