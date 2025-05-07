'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  CloudDownload,
  Smartphone,
  Wifi,
  Server,
  Cpu,
  Archive,
  Brain,
  BarChart2,
  Infinity,
} from 'lucide-react'

export default function PlattanoHCSUseCasesSection() {
  const cases = [
    { title: 'Backup & Recovery', icon: <CloudDownload className="w-8 h-8" /> },
    { title: 'App Development', icon: <Smartphone className="w-8 h-8" /> },
    { title: 'Surveillance', icon: <Wifi className="w-8 h-8" /> },
    { title: 'Content Delivery', icon: <Server className="w-8 h-8" /> },
    { title: 'IoT', icon: <Cpu className="w-8 h-8" /> },
    { title: 'Archiving', icon: <Archive className="w-8 h-8" /> },
    { title: 'AI/ML', icon: <Brain className="w-8 h-8" /> },
    { title: 'Data Analytics', icon: <BarChart2 className="w-8 h-8" /> },
    { title: 'DevOps', icon: <Infinity className="w-8 h-8" /> },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full bg-white text-black dark:bg-black dark:text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12 text-center">
        {/* Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center space-y-3 bg-primary rounded-lg py-6 px-4 hover:shadow-lg transition"
            >
              {item.icon}
              <span className="font-medium text-black dark:text-white">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Logo */}
        <div className="mx-auto w-40">
          {/* light-mode logo */}
          <div className="block dark:hidden">
            <Image
              src="/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-light-logo.webp"
              alt="Plattano Hot Cloud Storage Logo (light)"
              width={160}
              height={40}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* dark-mode logo */}
          <div className="hidden dark:block">
            <Image
              src="/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-dark-logo.webp"
              alt="Plattano Hot Cloud Storage Logo (dark)"
              width={160}
              height={40}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg font-semibold opacity-90">
          STORAGE FOR ANY WORKLOAD.
        </p>
      </div>
    </motion.section>
  )
}