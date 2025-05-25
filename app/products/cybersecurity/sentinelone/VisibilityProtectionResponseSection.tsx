'use client';

import { motion } from 'framer-motion';

export default function VisibilityProtectionResponseSection() {
  return (
    <section
      className={`relative isolate w-full overflow-hidden text-white
        before:absolute before:inset-0
        before:bg-[url('/images/products/cybersecurity/sentinelone/sentinelone-visibility-bg.webp')]
        before:bg-center before:bg-cover before:bg-fixed before:-z-20
        after:absolute after:inset-0 after:-z-10
        dark:after:bg-black/50 after:bg-primary/85
      `}
    >
      {/* Top border */}
      <div className="h-0.5 w-full bg-primary" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-24 py-24 flex flex-col md:flex-row gap-16 md:items-center"
      >
        {/* Left text */}
        <div className="
          w-full md:w-1/2 text-[38px] leading-tight font-semibold text-center md:text-left
          text-neutral-900 dark:text-white
        ">
          <span className="text-white dark:text-primary">Visibility.</span> <br />
          <span className="text-white dark:text-primary">Protection.</span> <br />
          <span className="text-white dark:text-primary">Response.</span>
        </div>

        {/* Right text */}
        <div className="
          w-full md:w-1/2 text-[18px] leading-relaxed text-center md:text-left
          text-neutral-800 dark:text-neutral-200
        ">
          A platform to prevent, detect, respond, and hunt within the context of all your company&apos;s assets. <br />
          See what was never seen before. Control the unknown. All at machine speed.
        </div>
      </motion.div>

      {/* Bottom border */}
      <div className="h-0.5 w-full bg-primary" />
    </section>
  );
}