'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OffSiteAndManagedBackupHeroSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Column */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Off-Site Managed Backup Services in Orlando<br />
            <span className="text-primary md:text-4xl text-3xl">Enterprise-Grade Protection, Delivered</span>
          </h1>

          <p className="text-base sm:text-lg max-w-lg mx-auto md:mx-0 opacity-90">
            Eliminate complexity and secure your workloads with Plattano’s fully managed, off-site backup service. Get guaranteed SLAs, ransomware resilience, and fast recovery—backed by local experts.
          </p>

          <ul className="space-y-4 list-none max-w-md mx-auto md:mx-0">
            {[
              'Continuous off-site replication',
              'Policy-based automated backups',
              'Guaranteed recovery SLAs',
              'Immutable, ransomware-resistant storage',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 md:justify-start justify-center">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/images/services/dpaas/off-site-and-managed-backup/off-site-and-managed-backup-hero.png"
            alt="Illustration of off-site managed backup solution with Plattano Technologies"
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
