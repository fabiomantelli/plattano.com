'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NutanixTrustedSection() {

  return (
    <section
      className='w-full py-24 bg-black/9 dark:bg-neutral-900'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-8 px-8 sm:px-12 lg:px-24"
      >
        {/* Title */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">
            <span className='text-primary'>OVER 23,000</span> LEADING COMPANIES TRUST  <span className='text-primary'>NUTANIX</span>
          </h2>
        </div>

        {/* Logos Image */}
        <div className="flex justify-center">
          <Image
            src="/images/products/hybrid-multicloud/nutanix/nutanix-logos.webp" // Replace with actual image path
            alt="Nutanix Logos"
            width={1200}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}