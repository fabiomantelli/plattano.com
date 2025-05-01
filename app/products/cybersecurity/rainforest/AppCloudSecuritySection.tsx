'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AppCloudSecuritySection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === 'dark';

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className={`w-full py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12"
      >
        {/* Text Block */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-[36px] font-sofia font-bold leading-tight">
            APP & <span className="text-primary">CLOUD</span> SEC
          </h2>
          <p className="text-[24px] font-sofia font-semibold text-primary">
            DevSecOps made simple — as it should be
          </p>
          <div className="text-[18px] font-ubuntu leading-relaxed space-y-4">
            <p>
              Rainforest Application, Cloud, and Asset modules give development and security teams full visibility into the application’s lifecycle, enabling fast and simple vulnerability management with every new line of code.
            </p>
            <p>
              The architecture and technology used in Rainforest Application and Cloud require no custom scripts and integrate plug-and-play into existing DevOps pipelines. They provide instant visibility into application vulnerabilities, container images, infrastructure, and cloud security best practice compliance — all from a single intuitive dashboard.
            </p>
          </div>
        </div>

        {/* Image Block (visible on all screens) */}
        <div className="flex-1 w-full flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Image
              src="/images/products/cybersecurity/rainforest/rainforest-appcloud.webp"
              alt="Rainforest App & Cloud Security"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
