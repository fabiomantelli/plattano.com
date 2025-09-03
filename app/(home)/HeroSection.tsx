'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero-section relative w-full h-[65vh] flex items-center justify-center overflow-hidden bg-white text-neutral-800 dark:bg-black dark:text-white">
      {/* Background image - optimized */}
      <div
        className={`
          bg-optimized absolute inset-0
          bg-[url('/images/home/high-tech-background-light.webp')]
          dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.95)),url('/images/home/high-tech-background-dark.webp')]
        `}
        style={{
          willChange: 'transform',
        }}
      />
      <div />

      {/* Grid watermark */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M20 0 L0 0 0 20' fill='none' stroke='%23ED6E00' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1
          className={`
            font-sofia font-extrabold leading-tight
            text-2xl sm:text-4xl lg:text-6xl
            drop-shadow-[0_0_2px_rgba(237,110,0,0.8)]
          `}
        >
          CONNECTING <span className="text-primary">INNOVATION</span>,<br />
          EMPOWERING <span className="text-primary">POSSIBILITIES</span>:<br />
          YOUR WORLD, OUR <span className="text-primary">TECHNOLOGY</span>.
        </h1>

        <p className="mt-6 text-md sm:text-xl font-medium text-neutral-800 dark:text-neutral-300 max-w-2xl mx-auto">
          Plattano Technologies delivers secure IT solutions, including cloud infrastructure, data backup, and cybersecurity, helping businesses thrive across the U.S.—with headquarters in Orlando, Florida.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Talk to an Expert
        </Link>
      </motion.div>
    </section>
  )
}
