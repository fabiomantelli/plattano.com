'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VeeamM365OverviewSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl flex flex-col-reverse items-center gap-12 px-6 sm:px-12 lg:flex-row lg:gap-20 lg:px-24">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-for-microsoft-365/veeam-m365-overview.png"
            alt="Laptop showing Microsoft 365 data protection"
            width={800}
            height={600}
            className="w-full object-cover"
            priority
          />
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-primary">Protect</span> Your Microsoft 365 Data
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
            Microsoft 365 offers powerful services—but it doesn’t include full backup of your Office 365 data. 
            Veeam Backup for Microsoft 365 removes the risk of losing access or control over Exchange Online, 
            SharePoint Online, OneDrive for Business, and Microsoft Teams, so your data is always protected 
            and accessible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}