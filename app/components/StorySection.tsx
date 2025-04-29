'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function StorySection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section className={`w-full px-8 py-24 ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-800'}`}>
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12">
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

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 w-full"
        >
          <motion.div
            whileHover={{ rotate: 5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="w-full"
          >
            <Image
              src="/story-image.webp"
              alt="Plattano banner"
              width={1500}
              height={844}
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
              priority
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
