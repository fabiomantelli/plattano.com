'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import {
  DollarSign,
  Clock,
  Users,
  FastForward,
  UserCog,
  TrendingUp
} from 'lucide-react'

const saveItems = [
  { Icon: DollarSign, label: 'Money' },
  { Icon: Clock,       label: 'Time' },
  { Icon: Users,       label: 'Staff' },
]

const gainItems = [
  { Icon: FastForward, label: 'Agility' },
  { Icon: UserCog,     label: 'Partner Expertise' },
  { Icon: TrendingUp,  label: 'Service Value Add' },
]

const PlattanoServicesSaveGainSection: FC = () => {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-0 space-y-12 text-center">
        {/* Save */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">Save On:</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {saveItems.map(({ Icon, label }, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <Icon className="w-8 h-8 text-primary" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-primary mx-16" />

        {/* Gain */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">Gain In:</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {gainItems.map(({ Icon, label }, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <Icon className="w-8 h-8 text-primary" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlattanoServicesSaveGainSection
