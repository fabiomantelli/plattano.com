'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const leakItems = [
  {
    title: 'SOURCE CODE LEAK',
    highlight: 'SOURCE CODE',
    image: '/images/products/cybersecurity/rainforest/rainforest-code-leak.webp',
    text:
      'Find proprietary code in public repositories and other parts of the web before malicious actors get the chance to examine it for exploitable vulnerabilities.',
  },
  {
    title: 'CREDENTIAL LEAK',
    highlight: 'CREDENTIAL',
    image: '/images/products/cybersecurity/rainforest/rainforest-credentials-leak.webp',
    text:
      'Using our intelligence network, we scan for leaked or compromised credentials available on the web and in deep and dark web forums.',
  },
  {
    title: 'TAKEDOWN',
    highlight: 'TAKEDOWN',
    image: '/images/products/cybersecurity/rainforest/rainforest-leak-takedown.webp',
    text:
      'Submit takedown requests with evidence directly from the platform and track progress in real time — real power to protect.',
  },
  {
    title: 'BEYOND THE WEB',
    highlight: 'BEYOND THE WEB',
    image: '/images/products/cybersecurity/rainforest/rainforest-beyond-web.webp',
    text:
      'Only 4% of the web is visible on the surface. Most content remains hidden or unindexed, often found in the deep and dark web where hackers trade information.',
  },
]

export default function LeakDetectionOverviewSection() {
  const { resolvedTheme: theme } = useTheme()
  const isDark = theme === 'dark'
  const [mounted, setMounted] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openModal = (src: string) => setModalImage(src)
  const closeModal = () => setModalImage(null)

  if (!mounted) return null

  return (
    <section className={`w-full py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-20"
      >
        {/* Title Section */}
        <div className="text-center space-y-4">
          <h2 className="text-[40px] font-sofia font-bold leading-tight">
            <span className="text-primary">DETECT</span> DATA <span className="text-primary">LEAKS</span> AND
            <span className="text-primary"> SENSITIVE INFORMATION</span>
          </h2>
          <p className="text-base font-ubuntu max-w-3xl mx-auto">
            The <strong>Rainforest Leak</strong> module monitors the deep, dark, and surface web to identify a wide range of leaks that may compromise your company&rsquo;s reputation.
          </p>
        </div>

        {/* Leak Items */}
        <div className="space-y-24">
          {leakItems.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col-reverse md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-12 items-center md:items-start text-center md:text-left`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-[28px] md:text-[36px] font-sofia font-bold">
                  {item.title.replace(item.highlight, '')}
                  <span className="text-primary">{item.highlight}</span>
                </h3>
                <p className="text-base font-ubuntu">{item.text}</p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl cursor-pointer"
                  onClick={() => openModal(item.image)}
                />
              </div>
            </div>
          
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full"
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
