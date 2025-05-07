'use client'

import { motion } from 'framer-motion'

const services = [
  {
    name: 'Compute Engine',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="h-12 w-12 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="16" y="16" width="32" height="32" rx="4" />
        <line x1="32" y1="16" x2="32" y2="8" />
        <line x1="32" y1="48" x2="32" y2="56" />
        <line x1="16" y1="32" x2="8" y2="32" />
        <line x1="48" y1="32" x2="56" y2="32" />
      </svg>
    ),
  },
  {
    name: 'Persistent Disk',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="h-12 w-12 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="32" cy="24" rx="20" ry="8" />
        <ellipse cx="32" cy="32" rx="20" ry="8" />
        <ellipse cx="32" cy="40" rx="20" ry="8" />
      </svg>
    ),
  },
  {
    name: 'Cloud SQL for MySQL',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="h-12 w-12 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="32" cy="18" rx="20" ry="6" />
        <path d="M12,18 V38 A20,6 0 0 0 52,38 V18" />
        <ellipse cx="32" cy="38" rx="20" ry="6" />
      </svg>
    ),
  },
  {
    name: 'Cloud SQL for PostgreSQL',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="h-12 w-12 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="32" cy="18" rx="20" ry="6" />
        <path d="M12,18 V38 A20,6 0 0 0 52,38 V18" />
        <ellipse cx="32" cy="38" rx="20" ry="6" />
        <circle cx="32" cy="28" r="4" fill="currentColor" className="text-white" />
      </svg>
    ),
  },
  {
    name: 'Cloud Storage',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="h-12 w-12 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M48 32H20a12 12 0 0 0 0 24h28a8 8 0 1 0 0-16H44a12 12 0 0 0 4-8z" />
        <path d="M16 48v4a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-4" />
      </svg>
    ),
  },
]

export default function VeeamGcpProtectedServicesSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl sm:text-4xl font-extrabold"
        >
          PROTECTED GCP SERVICES
        </motion.h2>

        {/* Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 items-center justify-items-center"
        >
          {services.map((svc, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3 px-4">
              {svc.icon}
              <span className="text-base font-medium text-center">{svc.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
