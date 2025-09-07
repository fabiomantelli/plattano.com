// app/components/HeroSection.tsx
'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import SkeletonLoader from '../components/SkeletonLoader'

export default function HeroSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Simulate content loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden bg-white text-neutral-800 dark:bg-black dark:text-white">
      {/* Background image - disabled on mobile for better LCP */}
      {mounted && !isMobile && (
        <>
          <Image
            src={theme === 'dark' ? '/images/home/high-tech-background-dark.png' : '/images/home/high-tech-background-light.png'}
            alt="High-tech background"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          {theme === 'dark' && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/95" />
          )}
        </>
      )}

       {/* Grid watermark */}
       <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M20 0 L0 0 0 20' fill='none' stroke='%23ED6E00' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content - Optimized for mobile LCP */}
      <div className="relative z-10 mx-auto max-w-4xl text-center px-6">
        {isLoading ? (
          <SkeletonLoader 
            type="hero" 
            className="py-8"
          />
        ) : (
          <h1
            className={`
              font-sofia font-extrabold leading-tight
              text-2xl sm:text-4xl lg:text-6xl
              ${isMobile ? '' : 'drop-shadow-[0_0_2px_rgba(237,110,0,0.8)]'}
            `}
          >
            CONNECTING <span className="text-primary">INNOVATION</span>,<br/>
            EMPOWERING <span className="text-primary">POSSIBILITIES</span>:<br/>
            YOUR WORLD, OUR <span className="text-primary">TECHNOLOGY</span>.
          </h1>
        )}
      </div>
    </section>
  )
}
