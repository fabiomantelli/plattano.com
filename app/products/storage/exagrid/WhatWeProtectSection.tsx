'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function WhatWeProtectSection() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => setModalImage(src)
  const closeModal = () => setModalImage(null)

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-background dark:text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-[40px] font-bold font-sofia-sans leading-tight mb-12"
        >
          WHAT DO WE PROTECT?
        </motion.h2>

        <div
          className="max-w-4xl mx-auto cursor-pointer"
          onClick={() =>
            openModal('/images/products/storage/exagrid/exagrid-app-protect.webp')
          }
        >
          <Image
            src="/images/products/storage/exagrid/exagrid-app-protect.webp"
            alt="What we protect"
            width={1000}
            height={600}
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
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
  )
}