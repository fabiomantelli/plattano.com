'use client';

import { motion } from 'framer-motion';

export default function NutanixCloudFeaturesSection() {
  return (
    <section
      className="relative isolate w-full text-white overflow-hidden
        before:absolute before:inset-0
        before:bg-[url('/images/products/hybrid-multicloud/nutanix/nutanix-bg.webp')] before:bg-center
        before:bg-cover before:bg-fixed before:-z-20
        after:absolute after:inset-0 after:-z-10
        dark:after:bg-black/50 after:bg-primary/85"
    >
      {/* Top border */}
      <div className="h-0.5 w-full bg-primary" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-24 py-24 flex flex-col md:flex-row gap-16 md:items-center"
      >
        {/* Left text */}
        <div className="w-full md:w-1/2 text-[38px] leading-tight font-semibold text-center md:text-left dark:text-white text-neutral-900">
            A HYBRID <span className="dark:text-primary text-white">MULTICLOUD</span>
          <br />
          SOLUTION <span className="dark:text-primary text-white">THAT WORKS</span>
        </div>

        {/* Right text */}
        <div className="w-full md:w-1/2 text-[18px] leading-relaxed text-center md:text-left dark:text-neutral-200 text-neutral-800">
          The Nutanix hybrid multicloud solution allows you to meet your cloud needs by extending a perfectly integrated local environment to the public cloud, making it more agile, scalable, efficient, and cost-effective.
        </div>
      </motion.div>

      {/* Border */}
      <div className="h-0.5 w-full bg-primary" />
    </section>
  );
}
