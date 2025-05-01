'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const imageData = [
  {
    title: 'DOMAINS',
    src: '/images/products/cybersecurity/rainforest/rainforest-domains.webp',
    alt: 'Domains',
    description:
      'Detect domains, URLs, and websites impersonating your brand in attempts to defraud others.',
  },
  {
    title: 'FRAUDULENT APPS',
    src: '/images/products/cybersecurity/rainforest/rainforest-fraudulent-apps.webp',
    alt: 'Fraudulent Apps',
    description:
      'Every day, 24,000 malicious apps are blocked by top app stores*. We help you detect similar apps and take actions to protect your brand’s reach.',
  },
  {
    title: 'SOCIAL MEDIA',
    src: '/images/products/cybersecurity/rainforest/rainforest-social-media.webp',
    alt: 'Fake Social Media',
    description:
      'Find fake profiles and pages on Facebook and Instagram, block their usage, and prevent harm to your business.',
  },
  {
    title: 'TAKEDOWN',
    src: '/images/products/cybersecurity/rainforest/rainforest-takedown.webp',
    alt: 'Takedown',
    description:
      'Submit takedown requests with evidence directly from the platform and track progress in real time — real power to protect your business.',
  },
]

export default function FraudProtectionOverviewSection() {
  const { resolvedTheme: theme } = useTheme()
  const isDark = theme === 'dark'
  const [mounted, setMounted] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className={`w-full py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-16"
      >
        {/* Top headline */}
        <div className="text-center space-y-4">
          <h2 className="text-[40px] font-sofia font-bold leading-tight">
            MONITOR <span className="text-primary">APPS</span>,{' '}
            <span className="text-primary">DOMAINS</span> AND{' '}
            <span className="text-primary">FRAUDULENT WEBSITES</span>
          </h2>
          <h3 className="text-[24px] font-sofia font-medium">
            <span className="text-primary">PROTECT</span> YOUR COMPANY’S REPUTATION
          </h3>
          <p className="text-base font-ubuntu max-w-3xl mx-auto">
            The <strong>Rainforest Fraud</strong> module detects malicious apps, domains, URLs, and websites,
            enabling fast and evidence-based responses to incidents through takedowns and restoration of normalcy.
          </p>
        </div>

        {/* Grid with images and descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {imageData.map(({ title, src, alt, description }) => (
            <div key={title} className="text-center space-y-4">
              <Image
                src={src}
                alt={alt}
                width={400}
                height={300}
                className="w-full h-auto rounded-xl mx-auto cursor-pointer transition hover:opacity-90"
                onClick={() => setSelectedImage(src)}
              />
              <h4 className="text-[28px] font-sofia text-primary">{title}</h4>
              <p className="text-base font-ubuntu">{description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-primary text-black rounded-full p-2 shadow-lg hover:scale-105 transition"
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <Image
              src={selectedImage}
              alt="Expanded"
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
