'use client'

import { motion } from 'framer-motion'

export default function VbrDataSecuritySection() {
  const items = [
    {
      title: 'Protection',
      desc: 'Make sure every workload is covered with reliable, secure backups.',
    },
    {
      title: 'Data Stays Safe',
      desc: 'End‑to‑end immutability keeps your backup data tamper‑proof.',
    },
    {
      title: 'Automated Backup Verification',
      desc: 'Generate malware‑free backups with trusted, automated checks.',
    },
    {
      title: 'Automated Backup Scanning',
      desc: 'Scan backups for threats before recovery to ensure clean data.',
    },
    {
      title: "Don't Pay the Ransom",
      desc: 'Restore faster than criminals can demand — skip the ransom entirely.',
    },
    {
      title: 'Maintain Compliance',
      desc: 'Prevent compliance gaps with full‑path, end‑to‑end data protection.',
    },
  ]

  return (
    <section className="relative w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl space-y-16 px-6 sm:px-12 lg:px-24">

        {/* ---------- headline ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
        >
          <span className="text-primary">Data Security:</span>&nbsp;
          Protection Against Ransomware & Digital Threats
        </motion.h2>

        {/* ---------- card grid (3 × 2) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="
            grid gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            auto-rows-fr
          "
        >
          {items.map(({ title, desc }) => (
            <div
              key={title}
              className="
                flex flex-col rounded-xl border border-primary/60
                bg-black/80 text-white p-8 text-center backdrop-blur
                hover:bg-primary/90 hover:shadow-xl transition
                dark:bg-white/5
              "
            >
              <h3 className="mb-4 font-extrabold uppercase">{title}</h3>
              <p className="text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}