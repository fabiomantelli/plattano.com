'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VeeamGcpHeroSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Veeam Backup for Google Cloud in Orlando <br />
            <span className="text-primary">Cloud-Native Data Protection</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-300">
            Plattano Technologies provides secure, agentless backup and fast recovery for your Google Cloud workloads — fully optimized for enterprises in Orlando.
          </p>

          <ul className="space-y-3 pt-2 text-neutral-800 dark:text-neutral-300">
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Beyond limited snapshots with deep visibility and control</span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>5× faster recovery for mission-critical GCP services</span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Secure, end-to-end backup with encryption and immutability</span>
            </li>
          </ul>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:w-1/2 w-full"
        >
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-for-google-cloud/veeam-gcp-hero.png"
            alt="Veeam backup platform securing Google Cloud workloads"
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
