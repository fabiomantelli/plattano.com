'use client'

import { motion } from 'framer-motion'

export default function VbrCloudReadySection() {
  const items = [
    {
      title: 'Cloud Workloads',
      desc: 'Native, centralized protection for AWS, Azure & Google Cloud.',
    },
    {
      title: 'Cloud Security',
      desc: 'Integrate AWS KMS, Azure Key Vault, immutability and more.',
    },
    {
      title: 'Cloud DR',
      desc: 'Two‑step recovery to or within any cloud for DR, dev/test & DRaaS.',
    },
    {
      title: 'Migrate & Modernize',
      desc: 'Advance and move apps & data to any cloud with confidence.',
    },
    {
      title: 'Deploy Anywhere',
      desc: 'Meet hybrid goals with on‑prem or cloud installations.',
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
          <span className="text-primary">Cloud‑Ready:</span>&nbsp;
          Accelerate Adoption While Cutting Costs
        </motion.h2>

        {/* ---------- cards (3‑over‑2 layout) ---------- */}
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
          {items.map(({ title, desc }, i) => (
            <div
              /* center the two bottom cards on large screens */
              className={`
                rounded-xl border border-primary/60
                bg-black/80 text-white
                px-8 py-10 text-center backdrop-blur
                hover:bg-primary/90 hover:shadow-xl transition
                dark:bg-white/5
                ${i > 2 ? 'sm:col-span-1 lg:col-start-2' : ''}
              `}
              key={title}
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
