'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="w-full py-12 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 sm:px-12 lg:px-24 md:min-h-[calc(100vh-150px)]">
        
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
        >
          {/* VMware Logo (desktop only) */}
          <div className="hidden md:block mb-4">
            <Image
              src="/images/products/hybrid-multicloud/vmware/vmware-light-logo.png"
              alt="VMware Logo Light"
              width={300}
              height={103}
              className="block dark:hidden h-auto w-auto"
              priority
            />
            <Image
              src="/images/products/hybrid-multicloud/vmware/vmware-dark-logo.webp"
              alt="VMware Logo Dark"
              width={300}
              height={103}
              className="hidden dark:block h-auto w-auto"
              priority
            />
          </div>

          <h1 className="text-[48px] font-extrabold font-sofia leading-tight">
            <span className="text-primary">MOVE</span> FAST &{' '}
            <span className="text-primary">FREELY</span> IN A{' '}
            <span className="text-primary">MULTICLOUD WORLD</span>
          </h1>

          <p className="text-[18px] font-ubuntu leading-relaxed">
            Gain flexibility and control. Go beyond virtualization with multicloud services for cloud-native apps, cloud infrastructure, cloud management, networking & security, and workspaces—anywhere.
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
          {/* VMware Logo (mobile only) */}
          <div className="block md:hidden mb-6">
            <Image
              src="/images/products/hybrid-multicloud/vmware/vmware-light-logo.png"
              alt="VMware Logo Light"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto block dark:hidden"
              priority
            />
            <Image
              src="/images/products/hybrid-multicloud/vmware/vmware-dark-logo.webp"
              alt="VMware Logo Dark"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto hidden dark:block"
              priority
            />
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-full mt-6 md:mt-0">
            <Image
              src="/images/products/hybrid-multicloud/vmware/vmware-hero.png"
              alt="VMware multicloud services"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}