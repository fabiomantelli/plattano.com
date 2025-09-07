'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useDeviceOptimization } from '../hooks/useDeviceOptimization'

interface OptimizedHeroBackgroundProps {
  className?: string
}

export default function OptimizedHeroBackground({ className = '' }: OptimizedHeroBackgroundProps) {
  const { isMobile } = useDeviceOptimization()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getOptimalImageSrc = () => {
    return `/images/home/high-tech-background-${theme}.webp`
  }

  // Fallback durante hidratação - usa fundo neutro que funciona em ambos os temas
  if (!mounted) {
    return (
      <div className={`absolute inset-0 -z-10 bg-neutral-100 dark:bg-neutral-900 ${className}`} />
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
        {theme === 'dark' && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/95" />
        )}
        {theme === 'light' && (
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/30" />
        )}
      </div>
    </>
  )
}