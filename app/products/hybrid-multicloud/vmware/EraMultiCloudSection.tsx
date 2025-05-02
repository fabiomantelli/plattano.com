'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function EraMultiCloudSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const sectionBg = isDark ? 'bg-neutral-900 text-white' : 'bg-white text-black';

  return (
    <section className={`w-full ${sectionBg} py-24`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        {/* Texto à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-[36px] md:text-[42px] font-extrabold leading-tight mb-6">
            The <span className="text-primary">Era</span> of{' '}
            <span className="text-primary">Multi-Cloud</span> Services Has Arrived
          </h2>
          <p className="text-[16px] md:text-[18px] font-ubuntu leading-relaxed">
            In a multi-cloud world, how can businesses consistently build, run, manage, and secure apps across all clouds? That’s where multi-cloud services come in—a new class of IT services that decouple these capabilities and more so customers can focus on innovations that drive growth on the cloud of their choice.
          </p>
        </motion.div>

        {/* Imagem à direita */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 w-full flex justify-center"
        >
          <Image
            src="/images/products/hybrid-multicloud/vmware/vmware-multicloud-era.png"
            alt="Multi-cloud services illustration"
            width={600}
            height={400}
            className="w-full h-auto max-w-md md:max-w-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
