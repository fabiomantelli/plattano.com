'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PlattanoHCSHeroSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">

        {/* Text Column */}
        <motion.div
          className="md:w-1/2 w-full space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tiny logo, switches via CSS */}
          <div className="mx-auto md:mx-0 w-32">
            {/* light-mode logo */}
            <div className="block dark:hidden" suppressHydrationWarning>
              <Image
                src="/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-light-logo.webp"
                alt="Plattano Hot Cloud Storage logo (light)"
                width={128}
                height={32}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* dark-mode logo */}
            <div className="hidden dark:block" suppressHydrationWarning>
              <Image
                src="/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-dark-logo.webp"
                alt="Plattano Hot Cloud Storage logo (dark)"
                width={128}
                height={32}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Plattano Hot Cloud Storage in Orlando<br />
            <span className="text-primary md:text-4xl text-3xl">Flat-Rate, Tier-Free Object Storage</span>
          </h1>

          <p className="text-base sm:text-lg max-w-xl mx-auto md:mx-0 opacity-90">
            Keep your data blazing fast and always available with zero egress fees, no tiering, and S3-compatible performance. Built for backup, video, and unstructured data—delivered locally by Plattano Technologies.
          </p>

          <p className="text-sm uppercase font-semibold opacity-80">
            Sometimes, having your <span className="text-primary">head in the clouds</span> just makes sense.
          </p>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-hero.png"
            alt="Plattano Hot Cloud Storage platform performance illustration for object storage"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
