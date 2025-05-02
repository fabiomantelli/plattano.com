'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-white text-black dark:bg-black dark:text-white">
      {/* Mobile Logo (top) */}
      <div className="block md:hidden mt-12 mb-6 px-6 sm:px-12 lg:px-24 w-full">
        <Image
          src="/images/products/data-protection/veeam-data-platform/veeam-logo.png"
          alt="Veeam Logo"
          width={200}
          height={60}
          className="h-auto w-[200px] mx-auto"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 px-6 sm:px-12 lg:px-24 flex-1 md:h-full md:justify-center">

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
        >
          {/* Desktop Logo */}
          <div className="hidden md:block mb-4">
            <Image
              src="/images/products/data-protection/veeam-data-platform/veeam-logo.png"
              alt="Veeam Logo"
              width={200}
              height={60}
              className="h-auto w-[200px]"
              priority
            />
          </div>

          <p className="text-[20px] font-medium">
            Data Protection and Management Solution
          </p>

          <h1 className="text-[48px] font-bold font-sofia leading-tight">
            THE <span className="text-primary">POWER</span> OF CONTINUITY <br />
            <span className="text-primary">IN YOUR HANDS</span>
          </h1>

          <p className="text-[18px] font-ubuntu leading-relaxed">
            We provide data resilience for businesses through secure backup solutions and fast,
            reliable recovery for your hybrid clouds.
          </p>
        </motion.div>

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 w-full flex justify-center md:justify-end"
        >
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-full mt-6 md:mt-0">
            <Image
              src="/images/products/data-protection/veeam-data-platform/veeam-data-platform-hero.png"
              alt="Veeam Data Platform"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}