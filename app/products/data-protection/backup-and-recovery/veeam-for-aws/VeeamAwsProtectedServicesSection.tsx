'use client'

import { motion } from 'framer-motion'

const services = [
  {
    name: 'Amazon EC2',
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
    name: 'Amazon EBS',
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
    name: 'Amazon RDS',
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
    name: 'Amazon EFS',
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
        <path d="M16 32h32v16H16z" />
        <path d="M16 32v-8a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v8" />
        <line x1="32" y1="32" x2="32" y2="48" />
      </svg>
    ),
  },
  {
    name: 'Amazon VPC',
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
        <path d="M20 32h24v16H20z" />
        <path d="M32 32v-8a8 8 0 0 0-8-8h-4a8 8 0 0 0-8 8v4" />
        <path d="M32 32v-8a8 8 0 0 1 8-8h4a8 8 0 0 1 8 8v4" />
      </svg>
    ),
  },
  {
    name: 'Amazon S3',
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
        <path d="M16 24h32v24H16z" />
        <path d="M24 24v-8a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v8" />
      </svg>
    ),
  },
  {
    name: 'Amazon S3 Glacier',
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
        <path d="M16 24h32v24H16z" />
        <path d="M24 24v-8a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v8" />
        <circle cx="32" cy="40" r="4" fill="currentColor" className="text-white" />
      </svg>
    ),
  },
  {
    name: 'AWS Outposts',
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
        <path d="M16 24h32" />
        <path d="M16 40h32" />
        <path d="M24 16v32" />
        <path d="M40 16v32" />
      </svg>
    ),
  },
]

export default function VeeamAwsProtectedServicesSection() {
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
          PROTECTED <span className='text-primary'>AWS SERVICES</span>
        </motion.h2>

        {/* Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-10 gap-x-8 items-center justify-items-center"
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
