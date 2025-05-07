'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function VeeamM365AdvancedEDiscoverySection() {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const screenshot =
    '/images/products/data-protection/backup-and-recovery/veeam-for-microsoft-365/veeam-m365-powerful-ediscovery.webp';

  const openModal = (src: string) => setModalSrc(src);
  const closeModal = () => setModalSrc(null);

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 flex flex-col md:flex-row items-center gap-12"
      >
        {/* Image Column (on mobile this will be second) */}
        <div className="w-full md:w-1/2 order-2 md:order-none">
          <Image
            src={screenshot}
            alt="Advanced eDiscovery filters and indexing"
            width={600}
            height={400}
            loading="lazy"
            className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(screenshot)}
          />
        </div>

        {/* Text Column (on mobile this will be first) */}
        <div className="w-full md:w-1/2 order-1 md:order-none space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Advanced <span className="text-primary">eDiscovery</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
            Use granular filters and indexing to quickly search your Microsoft 365 backup data
            and pinpoint exactly what you need to recover.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <span>
                Browse your entire backup by snapshot or point-in-time for the most recent data.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <span>
                Perform sophisticated eDiscovery queries with custom criteria across all items.
              </span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Image Modal */}
      {modalSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close image"
              className="absolute -top-4 -right-4 bg-primary text-black rounded-full p-2 shadow-lg hover:scale-105 transition"
            >
              <X size={24} />
            </button>
            <Image
              src={modalSrc}
              alt="Expanded eDiscovery screenshot"
              width={1200}
              height={800}
              loading="eager"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
