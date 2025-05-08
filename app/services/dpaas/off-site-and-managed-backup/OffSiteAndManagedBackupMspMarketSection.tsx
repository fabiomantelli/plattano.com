'use client'

import { motion } from 'framer-motion'

export default function OffSiteAndManagedBackupMspMarketSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12">
        {/* Title */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className='text-primary'>ABOUT</span> OUR MSP <span className='text-primary'>MARKET</span>
        </motion.h2>

        {/* Three panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Panel 1 */}
          <motion.div
            className="border border-primary rounded-lg p-6 space-y-4 bg-white dark:bg-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-2 text-primary">
              {/* check icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.485 1.929a.5.5 0 0 1 .057.638l-.057.07L6.707 9.438l-3.146-3.147a.5.5 0 0 1 .638-.765l.07.057L7 8.793l5.778-5.778a.5.5 0 0 1 .707 0z"/>
              </svg>
              <p className="text-base font-semibold">
                Over 125,000 SMB IT service providers worldwide
              </p>
            </div>
            <p className="text-sm leading-relaxed">
              Services offered: Help Desk (40%), Cybersecurity (20%), Cloud (40%).
            </p>
            <p className="text-xs opacity-80">
              Source: Global SME IT Managed Services Spend and N‑able TAM estimates based on Frost & Sullivan “Total Addressable Market for SMB IT Managed Service Providers,” February 2021
            </p>
          </motion.div>

          {/* Panel 2 */}
          <motion.div
            className="border border-primary rounded-lg p-6 space-y-4 bg-white dark:bg-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.485 1.929a.5.5 0 0 1 .057.638l-.057.07L6.707 9.438l-3.146-3.147a.5.5 0 0 1 .638-.765l.07.057L7 8.793l5.778-5.778a.5.5 0 0 1 .707 0z"/>
              </svg>
              <p className="text-base font-semibold">
                17% global MSP market growth forecast for 2023
              </p>
            </div>
            <p className="text-sm leading-relaxed">
              For the first time Latin America represents 2.7% of the MSP market (Brazil emphasized). Regional split: North America 45.5%, 
              EMEA 29.1%, APAC 22.7%, LATAM 2.7%.
            </p>
            <p className="text-xs opacity-80">
              Source: Canalys Worldwide Managed Service Provider
            </p>
          </motion.div>

          {/* Panel 3 */}
          <motion.div
            className="border border-primary rounded-lg p-6 space-y-4 bg-white dark:bg-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.485 1.929a.5.5 0 0 1 .057.638l-.057.07L6.707 9.438l-3.146-3.147a.5.5 0 0 1 .638-.765l.07.057L7 8.793l5.778-5.778a.5.5 0 0 1 .707 0z"/>
              </svg>
              <p className="text-base font-semibold">
                IT investment focus in 2023: Cybersecurity 77%, Big Data 55%, RPA 49%
              </p>
            </div>
            <p className="text-xs opacity-80">
              Source: IT Forum 2022
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}