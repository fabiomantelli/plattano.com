'use client'

import { useEffect } from 'react'

export default function PreloadImages() {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/images/home/high-tech-background-light.webp',
      '/images/home/high-tech-background-dark.webp',
      '/images/home/logo-black.webp',
      '/images/home/logo.webp'
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.type = 'image/webp'
      document.head.appendChild(link)
    })
  }, [])

  return null
}