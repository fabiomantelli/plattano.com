'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function VisibilitySection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section className={`w-full py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 sm:px-12 lg:px-24"
      >
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-[48px] font-sofia font-extrabold leading-tight">
            PROTECT YOUR <span className="text-primary">REPUTATION</span>.<br />
            MAXIMIZE <span className="text-primary">SECURITY</span> VISIBILITY.
          </h2>

          <div className="text-[18px] font-ubuntu space-y-4 leading-relaxed">
            <p>
              With the growing trend of cybercrime, hundreds of tools and solutions flood security teams with thousands of alerts daily.
              How can they filter redundant information, correlate data, and prioritize what truly matters?
            </p>
            <p>
              Through a unique, broad, and integrated approach, Rainforest empowers operations, compliance, development, and cybersecurity teams in their ongoing pursuit of efficiency and effectiveness — helping to safeguard company reputation and avoid financial loss and brand exposure.
            </p>
            <p>
              Its seamless integration with any development pipeline brings cybersecurity into DevOps, enabling full <strong>DevSecOps visibility</strong>.
            </p>
          </div>
        </motion.div>

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 w-full flex justify-center"
        >
          <Image
            src="/images/products/cybersecurity/rainforest/rainforest-visibility-image.png"
            alt="Rainforest security visibility"
            width={600}
            height={400}
            className="w-full h-auto max-w-md md:max-w-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Graph image (desktop only) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto mt-16 px-6 sm:px-12 lg:px-24 hidden md:block"
      >
        <div className="w-full flex justify-center">
          <Image
            src="/images/products/cybersecurity/rainforest/rainforest-vulnerabilities-graph.png"
            alt="Vulnerability coverage graph"
            width={1000}
            height={600}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
