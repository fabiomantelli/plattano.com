'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ManagedBackupServicesHeroSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left: Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-4 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="uppercase text-sm font-medium text-primary">
            Data Protection as a Managed Service
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Managed Backup Services in Orlando<br />
            <span className="text-primary">Trusted. Compliant. SLA-Driven.</span>
          </h1>

          <p className="text-base sm:text-lg max-w-xl text-neutral-800 dark:text-neutral-300 mt-4">
            Let Plattano’s certified team manage your backup infrastructure end-to-end with Veeam-powered solutions. Fast recovery, audit-ready compliance, and total peace of mind—delivered locally.
          </p>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/images/services/dpaas/managed-backup-services/managed-backup-services-hero.png"
            alt="Illustration of managed backup and disaster recovery services by Plattano"
            width={800}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
