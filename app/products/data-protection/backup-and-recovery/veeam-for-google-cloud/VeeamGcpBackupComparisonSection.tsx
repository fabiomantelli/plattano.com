// app/(gcp)/veeam-for-google-cloud/ui/VeeamGcpBackupComparisonSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'

const FEATURES = [
  'GCP backup & recovery',
  'Cost control',
  'Security & compliance',
  'Unlimited data portability',
  'Multi-cloud & hybrid-cloud management',
]

const MODES = [
  {
    key: 'standalone',
    title: 'Veeam Backup for GCP',
    subtitle:
      'A standalone solution to back up and restore GCP workloads within GCP only.',
    supported: [true, true, true, false, false],
  },
  {
    key: 'integrated',
    title: 'Veeam Backup & Replication (Integrated)',
    subtitle:
      'The best backup & recovery for unified data protection across hybrid and multi-cloud environments.',
    supported: [true, true, true, true, true],
  },
]

export default function VeeamGcpBackupComparisonSection() {
  return (
    <section className="w-full py-20 bg-white text-neutral-900 dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl sm:text-4xl font-extrabold"
        >
          Compare GCP-only vs. Integrated Modes
        </motion.h2>

        {/* Desktop & Tablet: wide table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-[800px] w-full border-collapse text-left">
            <thead>
              <tr>
                <th
                  rowSpan={2}
                  className="bg-primary text-white px-4 py-6 border border-primary align-top"
                >
                  Autonomous vs. Integrated Mode<br/>
                  <strong>Veeam Backup (VBR)</strong>
                </th>
                {MODES.map((mode) => (
                  <th
                    key={mode.key}
                    className="bg-primary text-white px-4 py-4 border border-primary"
                  >
                    {mode.title}
                  </th>
                ))}
              </tr>
              <tr>
                {MODES.map((mode) => (
                  <th
                    key={mode.key}
                    className="px-4 py-4 border border-primary font-normal"
                  >
                    {mode.subtitle}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feat, i) => (
                <tr key={feat} className={i % 2 === 0 ? 'bg-white/5' : ''}>
                  <td className="px-4 py-3 border border-primary font-medium">
                    {feat}
                  </td>
                  {MODES.map((mode) => (
                    <td
                      key={mode.key}
                      className="px-4 py-3 border border-primary text-center"
                    >
                      {mode.supported[i] ? (
                        <Check className="inline-block w-5 h-5 text-primary" />
                      ) : (
                        <Minus className="inline-block w-5 h-5 text-neutral-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-6">
          {MODES.map((mode) => (
            <div
              key={mode.key}
              className="border rounded-xl p-6 bg-white/5 dark:bg-white/10 space-y-4"
            >
              <h3 className="text-xl font-semibold">{mode.title}</h3>
              <p className="text-sm opacity-80">{mode.subtitle}</p>
              <ul className="space-y-2 pt-4">
                {FEATURES.map((feat, i) => (
                  <li key={feat} className="flex items-center gap-3">
                    {mode.supported[i] ? (
                      <Check className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <Minus className="w-5 h-5 text-neutral-500 shrink-0" />
                    )}
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}