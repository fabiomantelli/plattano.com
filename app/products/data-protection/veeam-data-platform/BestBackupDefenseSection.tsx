'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldAlert, Server, Ban } from 'lucide-react'

export default function BestBackupDefenseSection() {
  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-[32px] md:text-[40px] font-extrabold leading-tight">
            BACKUP IS YOUR <span className="text-primary">BEST DEFENSE</span>
          </h2>

          <p className="text-base md:text-lg font-ubuntu">
            When your data is compromised or destroyed, backups are your best line of defense. 
            As a direct result, your backups are now the primary target for cybercriminals—posing 
            an existential threat to your business and creating the harsh reality that:
          </p>

          <ul className="space-y-5 text-base font-ubuntu">
            <li className="flex items-start justify-center md:justify-start gap-3">
              <ShieldAlert className="text-primary w-6 h-6 mt-1" />
              <span>
                <strong>Unlike a flood or fire, a criminal is actively working against you.</strong>
              </span>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-3">
              <Server className="text-primary w-6 h-6 mt-1" />
              <span>
                <strong>Backup repositories are the most targeted during an attack.</strong>
              </span>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-3">
              <Ban className="text-primary w-6 h-6 mt-1" />
              <span>
                <strong>Compromised backups become completely unusable.</strong>
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 w-full flex justify-center"
        >
          <Image
            src="/images/products/data-protection/veeam-data-platform/best-backup.png"
            alt="Best Backup Defense"
            width={600}
            height={400}
            className="w-full h-auto object-contain max-w-md md:max-w-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
