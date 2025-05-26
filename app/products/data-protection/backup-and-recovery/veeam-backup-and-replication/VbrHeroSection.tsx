'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VbrHeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-100px)] md:h-[80vh] sm:h-[70vh]">
      <Image
        src="/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-hero-bg.png"
        alt="Futuristic datacenter backdrop"
        fill
        priority
        className="-z-10 object-cover"
      />

      <div
        className="absolute inset-0 -z-10
                   bg-white/90 backdrop-brightness-90   /* light‑mode: soft white veil */
                   dark:bg-gradient-to-b               /* dark‑mode: deep gradient */
                   dark:from-black/85 dark:via-black/90 dark:to-black/95"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-5 text-center"
        >
          <h1 className="break-words text-black dark:text-neutral-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            VEEAM
            <br className="sm:hidden" />
            <span className="text-primary"> BACKUP&nbsp;&amp;&nbsp;REPLICATION</span>
          </h1>

          <p className="mx-auto max-w-xl text-base sm:text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-300">
            <span className="text-black dark:text-primary">(core component of the Veeam Data Platform)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}