'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Check, Minus } from 'lucide-react'

const FEATURES = [
  'Azure backup & recovery',
  'Cost control',
  'Security & compliance',
  'Unlimited data portability',
  'Multi-cloud & hybrid-cloud management'
]

const MODES = [
  {
    key: 'standalone',
    title: 'Veeam Backup for Microsoft Azure',
    subtitle:
      'A standalone solution to back up and restore Azure workloads within Azure only.',
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

export default function VeeamAzureBackupComparisonSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const isDark = resolvedTheme === 'dark'

  return (
    <section
      className={`w-full py-20 ${
        isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8">
        {/* Header */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold">
          Compare Azure-only vs. Integrated Modes
        </h2>

        {/* DESKTOP/TABLET: full table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-[800px] w-full border-collapse text-left">
            <thead>
              <tr>
                <th
                  rowSpan={2}
                  className="bg-primary text-white px-4 py-6 border border-primary align-top"
                >
                  Autonomous vs. Integrated Mode
                  <br />
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
                    className="dark:bg-neutral-900 dark:text-white px-4 py-4 border border-primary font-normal"
                  >
                    {mode.subtitle}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feature, i) => (
                <tr key={feature} className={i % 2 === 0 ? 'bg-white/5' : ''}>
                  <td className="px-4 py-3 border border-primary font-medium">
                    {feature}
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

        {/* MOBILE: stacked cards */}
        <div className="md:hidden space-y-6">
          {MODES.map((mode) => (
            <div
              key={mode.key}
              className={`border ${
                isDark ? 'border-neutral-700' : 'border-neutral-300'
              } rounded-xl p-6 space-y-4`}
            >
              <h3 className="text-xl font-semibold">{mode.title}</h3>
              <p className="text-sm opacity-80">{mode.subtitle}</p>
              <ul className="space-y-2 pt-4">
                {FEATURES.map((feature, i) => (
                  <li key={feature} className="flex items-center gap-3">
                    {mode.supported[i] ? (
                      <Check className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <Minus className="w-5 h-5 text-neutral-500 shrink-0" />
                    )}
                    <span>{feature}</span>
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
