'use client'

import { useEffect } from 'react'

export default function PreloadImages() {
  useEffect(() => {
    // Skip preloading background images on mobile for better LCP
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    // Detect theme and preload only the needed background image
    const isDark = document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const backgroundImage = isDark 
      ? '/images/home/high-tech-background-dark.png'
      : '/images/home/high-tech-background-light.png'

    // Preload critical hero background with high priority (desktop only)
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = backgroundImage
    link.fetchPriority = 'high'
    document.head.appendChild(link)

    // Preload both images for theme switching (desktop only)
    const otherImage = isDark 
      ? '/images/home/high-tech-background-light.png'
      : '/images/home/high-tech-background-dark.png'
    
    const linkOther = document.createElement('link')
    linkOther.rel = 'preload'
    linkOther.as = 'image'
    linkOther.href = otherImage
    linkOther.fetchPriority = 'low'
    document.head.appendChild(linkOther)
  }, [])

  return null
}