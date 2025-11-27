'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Star, TrendingUp } from 'lucide-react'

export default function PartnersSection() {
  const partners = [
    { name: 'Veeam', badge: 'Gold Partner' },
    { name: 'SentinelOne', badge: 'Authorized Partner' },
    { name: 'ExaGrid', badge: 'Certified Partner' },
    { name: 'Rainforest', badge: 'Partner' },
  ]

  const certifications = [
    { icon: Award, text: 'Veeam Certified Engineers' },
    { icon: Shield, text: 'Security Certified' },
    { icon: Star, text: '5-Star Rated' },
    { icon: TrendingUp, text: 'Proven ROI' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Trusted Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Certified by industry-leading technology providers
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {partner.name}
              </div>
              <div className="text-xs text-primary-600 font-medium px-3 py-1 bg-primary-50 rounded-full">
                {partner.badge}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">{cert.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
