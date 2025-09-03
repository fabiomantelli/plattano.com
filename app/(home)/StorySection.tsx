'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function StorySection() {
  return (
    <section className="w-full py-12 bg-white text-neutral-800 dark:bg-neutral-900 dark:text-white">
      <div className="mx-auto max-w-7xl py-8 px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <h3 className="text-[30px] font-medium uppercase">
            We were born from the seed of an idea
          </h3>
          <p className="text-[18px] leading-relaxed">
            Like a tree, we have weathered many seasons to now serve countless
            companies through technology. Our deep roots reflect our
            reputation, yet we never stop{' '}
            <span className="font-semibold text-primary">GROWING</span> new
            branches, following the rhythm of innovation to solve whatever each
            client needs to perform better and more securely.
          </p>
          <h3 className="text-[46px] font-bold uppercase">
            We are <span className="text-primary">PLATTANO!</span>
          </h3>
          <p className="text-[20px]">Technologies to Serve and Transform.</p>
        </motion.div>

        {/* Large image on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="hidden lg:block flex-1 w-full"
        >
          <motion.div
            whileHover={{ rotate: 5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="w-full"
          >
            <Image
              src="/images/home/story-image.png"
              alt="Plattano banner"
              width={1500}
              height={844}
              className="w-full h-auto"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>

        {/* Smaller image for mobile + tablet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="block lg:hidden w-2/3 mx-auto"
        >
          <Image
            src="/images/home/story-image.png"
            alt="Plattano mobile/tablet banner"
            width={800}
            height={450}
            className="w-full h-auto"
            loading="lazy"
            sizes="(max-width: 768px) 66vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  )
}