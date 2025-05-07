'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function VeeamAzureBackupReplicationSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <section
      className={`w-full py-20 ${
        isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          VEEAM BACKUP &amp; REPLICATION
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-base sm:text-lg max-w-xl mx-auto opacity-90"
        >
          Manage your Azure backups centrally alongside your physical, virtual,
          cloud, SaaS and Kubernetes workloads.
        </motion.p>

        {/* Call-to-Action */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link
            href="/products/data-protection/backup-and-recovery/veeam-backup-and-replication"
            className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary"
          >
            VEEAM BACKUP &amp; REPLICATION
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
