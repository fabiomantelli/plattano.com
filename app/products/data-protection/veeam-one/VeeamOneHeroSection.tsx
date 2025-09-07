'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function VeeamOneHeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      {/* optional backdrop - disabled on mobile for better LCP */}
      {!isMobile && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0
                    bg-[url('/images/products/data-protection/veeam-one/veeam-one-hero-bg.png')]
                    bg-center bg-no-repeat bg-cover
                    opacity-20 dark:opacity-15"
        />
      )}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:gap-16">
        {/* -------- text -------- */}
        <div className="text-center lg:text-left space-y-5">
          <h1 className="text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
            Veeam ONE in Orlando<br />
            <span className="text-primary">Real-Time Backup Monitoring & Compliance Visibility</span>
          </h1>

          <p className="max-w-md text-lg text-neutral-900 dark:text-gray-300 lg:mx-0">
            Detect threats early, track anomalies, and ensure SLA and ransomware compliance with Veeam ONE — part of the Veeam Data Platform.
          </p>

          <p className="max-w-md text-lg font-semibold text-primary lg:mx-0">
            Centralized observability for hybrid, virtual, and cloud infrastructure
          </p>

          <p className="max-w-md text-base italic text-neutral-700 dark:text-gray-400 lg:mx-0">
            Delivered locally by Plattano Technologies
          </p>
        </div>

        {/* -------- image -------- */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/products/data-protection/veeam-one/veeam-one-hero.webp"
            alt="Veeam ONE monitoring dashboard for data protection and compliance"
            width={600}
            height={450}
            priority
            className="w-full max-w-md lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
