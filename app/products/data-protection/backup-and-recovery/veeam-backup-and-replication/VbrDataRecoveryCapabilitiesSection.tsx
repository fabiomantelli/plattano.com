'use client'

import { motion } from 'framer-motion'

export default function DataRecoveryCapabilitiesSection() {
  const capabilities = [
    {
      title: 'Instant Recovery',
      desc: 'At‑scale, pioneering instant recovery for rapid RTOs.',
    },
    {
      title: 'Restore Anywhere',
      desc: 'Recover across clouds with a portable backup format.',
    },
    {
      title: 'Assured Recovery',
      desc: 'Automated backup tests guarantee recoverability.',
    },
    {
      title: 'Full‑Spectrum Recovery',
      desc: 'Granular‑to‑full restores for files, apps, VMs, DBs and more.',
    },
    {
      title: 'DR‑Ready',
      desc: 'Failover / failback flexibility with cloud repositories.',
    },
    {
      title: 'Dev & Test Sandboxes',
      desc: 'Patch and upgrade safely using backups as production clones.',
    },
  ]

  return (
    <section className="relative w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl space-y-16 px-6 sm:px-12 lg:px-24">

        {/* ---------- headline bar ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
        >
          <span className="text-primary">DATA&nbsp;RECOVERY:</span>&nbsp;
          ACHIEVE YOUR RTO / RPO INSTANTLY
        </motion.h2>

        {/* ---------- card grid ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="
            grid gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {capabilities.map(({ title, desc }) => (
            <div
              key={title}
              className="
                rounded-xl border border-primary/60
                bg-black/80 text-white
                px-8 py-10 text-center
                backdrop-blur
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