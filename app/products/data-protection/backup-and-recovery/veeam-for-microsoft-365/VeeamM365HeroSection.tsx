'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function VeeamM365HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback timer to ensure content shows even if Intersection Observer fails
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    'Protects over 17 million Microsoft 365 users worldwide',
    'Covers Exchange Online, SharePoint, OneDrive, and Microsoft Teams',
    'Self-service recovery portal for fast data access',
    'Fully managed backup solution by Plattano in Orlando',
  ];

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 flex flex-col items-center gap-16 lg:flex-row lg:items-center">

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-extrabold leading-tight">
            Veeam Backup for Microsoft 365 in Orlando <br />
            <span className="text-primary">Protecting Your Business-Critical SaaS Data</span>
          </h1>

          <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
            Secure your Exchange, OneDrive, SharePoint, and Teams data against accidental deletion, ransomware, and compliance risks — with Plattano Technologies.
          </p>

          <ul className="space-y-4 text-neutral-800 dark:text-neutral-300 pt-2">
            {features.map((feat) => (
              <li key={feat} className="flex justify-center lg:justify-start gap-2">
                <span className="mt-2 block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 w-full max-w-md sm:max-w-lg"
        >
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-for-microsoft-365/veeam-m365-hero.png"
            alt="Secure cloud backup illustration for Microsoft 365 with Veeam"
            width={640}
            height={480}
            className="w-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
