'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Protect Your Microsoft 365 Data',
    subtitle: 'against accidental deletion & security threats',
  },
  {
    title: 'Rapidly Restore Microsoft 365 Data',
    subtitle: 'with industry-leading flexibility',
  },
  {
    title: 'Meet Compliance Requirements',
    subtitle: 'with fast search & eDiscovery',
  }
];

const icons = [
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 512 447" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="447" rx="64" fill="#5059C9"/>
        <circle cx="192" cy="128" r="64" fill="#FFFFFF"/>
        <circle cx="320" cy="128" r="64" fill="#D9E6FC"/>
        <path d="M208 256h96v128h-96z" fill="#FFFFFF"/>
        <path d="M304 256h64v128h-64z" fill="#D9E6FC"/>
      </svg>
    ),
    label: 'Microsoft Teams',
  },
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 512 447" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="447" rx="64" fill="#5059C9"/>
        <path d="M416 96H96v255h320V96zm-32 32v191H128V128h256zM160 288h192v-32H160v32zm0-64h192v-32H160v32zm0-64h192v-32H160v32z" fill="#FFFFFF"/>
      </svg>
    ),
    label: 'Exchange Online',
  },
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 512 500" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="500" rx="64" fill="#036C70"/>
        <path d="M384 128H128v256h256V128zm-32 224H160V160h192v192zM192 192h128v32H192v-32zm0 64h128v32H192v-32z" fill="#FFFFFF"/>
      </svg>
    ),
    label: 'SharePoint Online',
  },
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 512 447" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="447" rx="64" fill="#0078D4"/>
        <path d="M128 192c0-35.3 28.7-64 64-64h128c35.3 0 64 28.7 64 64 0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64zm64 0c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32z" fill="#FFFFFF"/>
      </svg>
    ),
    label: 'OneDrive for Business',
  },
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 512 447" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="447" rx="64" fill="#5059C9"/>
        <path d="M416 96H96v255h320V96zm-32 32v191H128V128h256zM160 288h192v-32H160v32zm0-64h192v-32H160v32zm0-64h192v-32H160v32z" fill="#FFFFFF"/>
      </svg>
    ),
    label: 'Exchange On-Prem',
  },
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 512 500" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="500" rx="64" fill="#036C70"/>
        <path d="M384 128H128v256h256V128zm-32 224H160V160h192v192zM192 192h128v32H192v-32zm0 64h128v32H192v-32z" fill="#FFFFFF"/>
      </svg>
    ),
    label: 'SharePoint On-Prem',
  }
];

export default function M365CoverageSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Title & subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Backup Microsoft 365
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Your data. Your responsibility.
          </p>
        </motion.div>

        {/* 3 Primary-color cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map(({ title, subtitle }, idx) => (
            <div
              key={idx}
              className="bg-primary text-white rounded-lg p-6 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm opacity-90">{subtitle}</p>
            </div>
          ))}
        </motion.div>

        {/* 6-icon grid with inline SVGs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center pt-12"
        >
          {icons.map(({ svg, label }, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2">
              {svg}
              <span className="text-sm text-center">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
