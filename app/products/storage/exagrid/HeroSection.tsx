'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 px-6 sm:px-12 lg:px-24 md:h-full md:justify-center">
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
        >
          {/* Exagrid Logo (desktop only) */}
          <div className="hidden md:block mb-4">
            <Image
              src="/images/products/storage/exagrid/exagrid-light-logo.png"
              alt="Exagrid Logo"
              width={300}
              height={103}
              className="block dark:hidden h-auto w-auto"
              priority
            />
            <Image
              src="/images/products/storage/exagrid/exagrid-dark-logo.png"
              alt="Exagrid Logo"
              width={300}
              height={103}
              className="hidden dark:block h-auto w-auto"
              priority
            />
          </div>

          <h1 className="text-[46px] font-bold font-sofia-sans leading-tight">
            BE PREPARED FOR THE <span className="text-primary">INEVITABLE</span>
          </h1>

          <h2 className="text-[24px] font-medium font-sofia-sans">
            IT&apos;S A MATTER OF <span className="text-primary">WHEN</span>
          </h2>

          <p className="text-[18px] font-ubuntu leading-relaxed">
            Add with Plattano and Exagrid® the same robustness and{' '}
            <span className="text-primary">advanced technology</span> from aviation,
            with a &quot;landing zone&quot; for your backups to{' '}
            <span className="text-primary">land</span> and{' '}
            <span className="text-primary">take off</span> with the{' '}
            <span className="text-primary">maximum performance and security</span>{' '}
            your business demands!
          </p>
        </motion.div>

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 w-full flex flex-col items-center md:items-end"
        >
          {/* Exagrid Logo (mobile only) */}
          <div className="block md:hidden mb-6">
            <Image
              src="/images/products/storage/exagrid/exagrid-light-logo.png"
              alt="Exagrid Logo"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto block dark:hidden"
              priority
            />
            <Image
              src="/images/products/storage/exagrid/exagrid-dark-logo.png"
              alt="Exagrid Logo"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto hidden dark:block"
              priority
            />
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-full mt-6 md:mt-0">
            <Image
              src="/images/products/storage/exagrid/exagrid-hero.png"
              alt="Exagrid backup performance"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
