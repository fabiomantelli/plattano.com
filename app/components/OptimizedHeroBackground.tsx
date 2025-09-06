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
    // Detect theme - prioriza a classe 'dark' no documentElement
    const detectTheme = () => {
      // Primeiro verifica se há classe 'dark' explícita no HTML
      const hasDarkClass = document.documentElement.classList.contains('dark')
      const newTheme = hasDarkClass ? 'dark' : 'light'
      
      setCurrentTheme(prevTheme => {
        if (prevTheme !== newTheme) {
          // Force re-render when theme changes
          setImageLoaded(false)
          return newTheme
        }
        return prevTheme
      })
    }

    // Detecta tema inicial
    detectTheme()
    
    // Observa mudanças na classe do documentElement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          detectTheme()
        }
      })
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => {
      observer.disconnect()
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

    // Light mode com overlay para melhor contraste do texto
    return {
      ...baseStyles,
      backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.75)), url('/images/home/high-tech-background-light.webp')`,
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