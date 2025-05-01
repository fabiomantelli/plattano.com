'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function ExagridBenefitsSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <section className={`w-full py-12 bg-background ${textColor}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative"
      >
        {/* Middle divider */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-primary transform -translate-x-1/2 z-0"></div>

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="space-y-6 md:pr-10 z-10 text-center md:text-left"
        >
          <h2 className="text-[32px] font-bold font-sofia-sans">
            EXAGRID: <span className="text-primary">LAYERED BACKUP STORAGE</span>
          </h2>

          <ul className="space-y-2 text-[18px] font-ubuntu font-semibold">
            <li>- Faster backups. Faster recoveries.</li>
            <li>- Unmatched and economical scalability.</li>
            <li>- Comprehensive security and ransomware recovery</li>
          </ul>

          <p className="text-[18px] font-ubuntu leading-relaxed">
            With ExaGrid®&apos;s layered backup storage, each appliance in the system brings not just disk, but also memory,
            bandwidth, and processing power — all necessary elements to maintain high performance backup and restore.
          </p>

          {/* Image with modal trigger */}
          <div className="mt-6 cursor-pointer">
            <Image
              src="/images/products/storage/exagrid/exagrid-backup-layers.webp"
              alt="Exagrid backup layers"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-xl object-cover"
              onClick={() => openModal('/images/products/storage/exagrid/exagrid-backup-layers.webp')}
              priority
            />
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="space-y-6 md:pl-10 z-10 text-center md:text-left"
        >
          <h3 className="text-[24px] font-bold text-primary font-sofia-sans">BENEFITS</h3>
          <div className="flex justify-center md:justify-start">
            <ul className="pl-0 md:pl-5 text-[16px] font-ubuntu font-semibold space-y-4">
              <li>Implementation included</li>
              <li>Recover at scale</li>
              <li>Scale-Out architecture</li>
              <li>Ransomware protection • Delayed backup deletion • Extra security with MFA</li>
              <li>Alert for deletions above the defined threshold</li>
              <li>Enable all your favorite Veeam features</li>
              <li>Native Veeam integration with 30x faster synthetic backups</li>
              <li>Up to 20:1 deduplication</li>
              <li>Certified appliance in over 132 countries</li>
              <li>100% focused solely on backup storage, in the market since 2002</li>
              <li>NPS score +81</li>
              <li>No hidden costs – everything included in the support program</li>
              <li>Active monitoring and notifications</li>
              <li>DR to private, hybrid, or public cloud</li>
              <li>25+ compatible backup applications</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-primary text-black rounded-full p-2 shadow-lg hover:scale-105 transition"
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <Image
              src={modalImage}
              alt="Expanded view"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}