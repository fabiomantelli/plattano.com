'use client'

import { useEffect } from 'react'

export default function PreloadImages() {
  useEffect(() => {
    // Detect theme and preload only the needed background image
    const isDark = document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const backgroundImage = isDark 
      ? '/images/home/high-tech-background-dark.webp'
      : '/images/home/high-tech-background-light.webp'

    // Preload only critical hero background
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = backgroundImage
    link.type = 'image/webp'
    link.fetchPriority = 'high'
    document.head.appendChild(link)
  }, [])

  return null
}