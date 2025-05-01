'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CloudSecurityOverviewSection() {
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
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-24"
      >
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="w-full">
            <Image
              src="/images/products/cybersecurity/rainforest/rainforest-vulnerabilities-per-severity.webp"
              alt="Rainforest modules analysis"
              width={500}
              height={400}
              className="w-full max-w-md mx-auto md:mx-0 cursor-pointer"
              onClick={() =>
                openModal(
                  '/images/products/cybersecurity/rainforest/rainforest-vulnerabilities-per-severity.webp'
                )
              }
            />
          </div>
          <div className="text-center md:text-left font-ubuntu text-base space-y-6">
            <p>
              The <strong>Rainforest Application</strong> and <strong>Rainforest Asset</strong> modules analyze container images and infrastructure automation processes (IaC – Infrastructure as Code), detecting vulnerabilities before applications go live.
            </p>
            <p>
              It also identifies vulnerabilities in various infrastructure components such as databases and application servers.
            </p>
            <p>
              <strong>Rainforest Cloud</strong> monitors the security controls of major cloud providers, helping ensure a safer and more stable environment for your application (AWS, Azure, GCP, and Oracle).
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-center md:text-left text-[32px] font-sofia leading-snug uppercase">
            Automated cloud security is essential for confident scaling. Reduce risk through continuous monitoring and proactive actions.
          </div>
          <div className="w-full">
            <Image
              src="/images/products/cybersecurity/rainforest/rainforest-status-devsecops.webp"
              alt="Status DevSecOps"
              width={500}
              height={400}
              className="w-full max-w-md mx-auto md:mx-0 cursor-pointer"
              onClick={() =>
                openModal(
                  '/images/products/cybersecurity/rainforest/rainforest-status-devsecops.webp'
                )
              }
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-[40px] font-sofia font-bold text-primary">GARTNER:</h3>
          <p className="text-base font-ubuntu text-primary">
            “Nearly all successful attacks on cloud services are the result of misconfiguration, inadequate management, and mistakes.”
          </p>
          <p className={`text-base font-ubuntu ${isDark ? 'text-white' : 'text-black'}`}>
            Security gaps can lead to lawsuits and fines that cost millions. An automated approach to cloud posture security and compliance can help your company prevent misconfigurations that often result in breaches.
          </p>
        </div>
      </motion.div>

      {/* Image Modal */}
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
