'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function PlattanoHCSNoMoreTiersSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const diagramSrc =
    '/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-no-more-tears.webp'

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          <span className='text-primary'>&quot;NO MORE TIERS&quot;</span> — NO MORE LAYERS
        </motion.h2>

        {/* Diagram preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="w-full lg:w-1/2 cursor-pointer" onClick={openModal}>
            <Image
              src={diagramSrc}
              alt="Single‑tier vs multi‑tier cloud storage comparison"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <p>
              Plattano Hot Cloud Storage uses just a single tier to meet all your
              needs. Eliminate the complexity that first‑generation cloud storage
              providers create with multiple confusing tiered services—each with
              different performance characteristics, pricing, and SLAs—and simplify
              your data storage deployments with Plattano Hot Cloud Storage.
            </p>
            <p>
              Hot Storage is an incredibly affordable, ultra‑fast, and reliable cloud
              object storage solution—for any use case.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-x-hidden"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close diagram"
              className="absolute -top-0 -right-0 bg-primary text-black rounded-full p-2 shadow-lg hover:scale-105 transition"
            >
              <X size={24} />
            </button>
            <Image
              src={diagramSrc}
              alt="Full‑size single‑tier vs multi‑tier comparison"
              width={1200}
              height={900}
              loading="eager"
              className="w-full max-w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
