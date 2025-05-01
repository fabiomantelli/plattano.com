'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function HybridStorageSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const bgColor = isDark ? 'bg-neutral-800' : 'bg-neutral-300';
  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <section className={`w-full ${bgColor} py-20`}>
      <div className={`max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center ${textColor}`}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-[40px] font-bold font-sofia-sans leading-tight mb-6"
        >
          <span className="text-primary">THE BEST OF </span> BOTH <span className="text-primary">WORLDS</span>
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-[40px] font-bold font-sofia-sans leading-tight mb-12"
        >
          <span className="text-primary">EXAGRID</span>® LAYERED <span className="text-primary">BACKUP STORAGE</span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cursor-pointer" onClick={() => openModal('/images/products/storage/exagrid/exagrid-disk-cache.webp')}>
            <Image
              src="/images/products/storage/exagrid/exagrid-disk-cache.webp"
              alt="Hybrid architecture 1"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </div>
          <div className="cursor-pointer" onClick={() => openModal('/images/products/storage/exagrid/exagrid-security.webp')}>
            <Image
              src="/images/products/storage/exagrid/exagrid-security.webp"
              alt="Hybrid architecture 2"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
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