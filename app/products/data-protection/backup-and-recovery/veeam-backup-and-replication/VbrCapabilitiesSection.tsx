'use client'

import { motion } from 'framer-motion'

export default function VbrCapabilitiesSection() {
  /* ------------- copy ------------- */
  const cards = [
    {
      title: 'Protect Everything',
      blurb:
        'Back up data across physical, virtual, NAS and cloud workloads with a single platform.',
    },
    {
      title: 'Built for Speed',
      blurb:
        'Image‑based backups of VMs, OS & bare‑metal snapshots deliver record‑fast RPOs.',
    },
    {
      title: 'Cloud‑Native & Modular',
      blurb:
        'Seamlessly integrate with AWS, Azure and Google Cloud using native snapshots.',
    },
    {
      title: 'Scale with Ease',
      blurb:
        'Mix‑and‑match any storage and grow into an infinitely scalable repository.',
    },
    {
      title: 'Actionable Intelligence',
      blurb:
        'Accelerate data mining, classification and security / forensics analytics.',
    },
  ]

  return (
    <section className="relative w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 space-y-16">

        {/* --------------- Section label --------------- */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold tracking-widest uppercase opacity-80"
        >
          Capabilities
        </motion.p>

        {/* --------------- Main headline --------------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Market‑Leading
          <span className="text-primary"> End‑to‑End Data Protection</span>
        </motion.h2>

        {/* --------------- Sub headline (black stripe) --------------- */}
        <div className="bg-black text-white dark:bg-neutral-900 rounded-lg px-4 py-10">
          <h3 className="text-center text-xl sm:text-2xl font-extrabold">
            <span className="text-primary">Data Backup: </span>
            Fast, secure protection for all your data
          </h3>
        </div>

        {/* --------------- Capability cards --------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            justify-items-center
          "
        >
          {cards.map(({ title, blurb }, idx) => (
            <div
              key={title}
              className="
                group w-full sm:w-auto
                rounded-xl border border-primary/60
                bg-black/80 text-white
                p-6 text-center
                hover:bg-primary/90 hover:shadow-xl transition
                dark:bg-white/5
              "
            >
              <h4 className="mb-2 font-extrabold uppercase">{title}</h4>
              <p className="text-sm leading-relaxed">{blurb}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
