'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function NutanixPrismSection() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => setModalImage(src)
  const closeModal = () => setModalImage(null)

  return (
    <section className="w-full py-12 bg-black/9 dark:bg-neutral-900 text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" // items-center added here for vertical centering
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="space-y-6 md:pr-10 z-10 text-center md:text-left"
        >
          <h2 className="text-[32px] font-bold font-sofia-sans">
            NUTANIX PRISM: <span className="text-primary">SINGLE-CLICK MANAGEMENT</span>
          </h2>

          <p className="text-[18px] font-ubuntu leading-relaxed">
            Nutanix Prism brings unprecedented simplicity to data center operations. Manage, scale, and resolve infrastructure issues with a single click, without the need for specialized skills.
          </p>
        </motion.div>

        {/* Right Column with Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="space-y-6 md:pl-10 z-10 text-center md:text-left"
        >
          <div className="mt-6 cursor-pointer">
            <Image
              src="/images/products/hybrid-multicloud/nutanix/nutanix-prism.webp" // Path to your image
              alt="Nutanix Prism"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-xl object-cover"
              onClick={() =>
                openModal('/images/products/hybrid-multicloud/nutanix/nutanix-prism.webp') // Open image in modal when clicked
              }
              priority
            />
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
  )
}