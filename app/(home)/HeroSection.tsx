'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Suspense } from 'react'
import OptimizedHeroBackground from '../components/OptimizedHeroBackground'
import { HeroSkeleton } from '../components/SkeletonLoader'
import { useDeviceOptimization } from '../hooks/useDeviceOptimization'

export default function HeroSection() {
  const { isMobile } = useDeviceOptimization()
  
  return (
    <section className={`hero-section relative w-full ${isMobile ? 'h-[50vh]' : 'h-[65vh]'} flex items-center justify-center overflow-hidden bg-white text-neutral-800 dark:bg-black dark:text-white`}>
      {/* Optimized background with skeleton loading */}
      <Suspense fallback={<HeroSkeleton />}>
        <OptimizedHeroBackground className="bg-optimized" />
      </Suspense>

      {/* Grid watermark - hidden on mobile for better performance */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M20 0 L0 0 0 20' fill='none' stroke='%23ED6E00' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")",
          }}
        />
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center px-6"
        initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1
          className={`
            font-sofia font-extrabold leading-tight
            ${isMobile ? 'text-xl' : 'text-2xl sm:text-4xl lg:text-6xl'}
            drop-shadow-[0_0_2px_rgba(237,110,0,0.8)]
          `}
        >
          {isMobile ? (
            <>
              CONNECTING <span className="text-primary">INNOVATION</span>,<br />
              EMPOWERING <span className="text-primary">POSSIBILITIES</span>
            </>
          ) : (
            <>
              CONNECTING <span className="text-primary">INNOVATION</span>,<br />
              EMPOWERING <span className="text-primary">POSSIBILITIES</span>:<br />
              YOUR WORLD, OUR <span className="text-primary">TECHNOLOGY</span>.
            </>
          )}
        </h1>

        <p className={`mt-6 ${isMobile ? 'text-sm' : 'text-md sm:text-xl'} font-medium text-neutral-800 dark:text-neutral-300 max-w-2xl mx-auto`}>
          {isMobile 
            ? 'Secure IT solutions for your business growth.'
            : 'Plattano Technologies delivers secure IT solutions, including cloud infrastructure, data backup, and cybersecurity, helping businesses thrive across the U.S.—with headquarters in Orlando, Florida.'
          }
        </p>

        <Link
          href="/contact"
          className={`mt-8 inline-block bg-primary text-white font-semibold ${isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-3'} rounded-md hover:opacity-90 transition`}
        >
          {isMobile ? 'Contact Us' : 'Talk to an Expert'}
        </Link>
      </motion.div>
    </section>
  )
}
