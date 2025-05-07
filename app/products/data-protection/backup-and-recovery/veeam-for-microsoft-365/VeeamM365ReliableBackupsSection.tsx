// app/(m365)/veeam-for-microsoft-365/ui/ReliableBackupsSection.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function VeeamM365ReliableBackupsSection() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const screenshotSrc =
    '/images/products/data-protection/backup-and-recovery/veeam-for-microsoft-365/veeam-m365-reliable.webp';

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12"
      >
        {/* — Text Column */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            <span className='text-primary'>RELIABLE</span> BACKUPS
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
            When you create backup jobs for your Microsoft 365 data, you have the
            flexibility to tailor them to your exact data-protection needs.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <span>
                Back up your entire organization or select individual items to
                include or exclude.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <span>
                Flexible scheduling lets your Office 365 backups run whenever you
                need them.
              </span>
            </li>
          </ul>
        </div>

        {/* — Image Column */}
        <div className="w-full">
          <Image
            src={screenshotSrc}
            alt="Backup job configuration screenshot"
            width={600}
            height={400}
            loading="lazy"
            className="w-full max-w-md mx-auto md:mx-0 cursor-pointer rounded-lg shadow"
            onClick={() => openModal(screenshotSrc)}
          />
        </div>
      </motion.div>

      {/* — Image Modal */}
      {modalImage && (
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
              src={modalImage}
              alt="Expanded backup job screenshot"
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
