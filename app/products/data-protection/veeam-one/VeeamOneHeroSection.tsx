'use client';

import Image from 'next/image';

export default function VeeamOneHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      {/* optional backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0
                  bg-[url('/images/products/data-protection/veeam-one/veeam-one-hero-bg.png')]
                  bg-center bg-no-repeat bg-cover
                  opacity-20 dark:opacity-15"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:gap-16">
        {/* -------- text -------- */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
            IT’S TIME TO BE&nbsp;
            <span className="text-primary">PROACTIVE</span>
            <br />
            ABOUT&nbsp;<span className="text-primary">THREAT MITIGATION</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg text-neutral-900 dark:text-gray-300 lg:mx-0">
            Detect malicious backup activity to keep your recovery posture compliant.
          </p>

          <p className="mx-auto mt-4 max-w-md text-lg font-semibold text-primary lg:mx-0">
            Advanced monitoring &amp; analytics for your entire IT environment
          </p>

          <p className="mx-auto mt-4 max-w-md text-base italic text-neutral-700 dark:text-gray-400 lg:mx-0">
            (part of Veeam Data Platform)
          </p>
        </div>

        {/* -------- image -------- */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/products/data-protection/veeam-one/veeam-one-hero.webp"
            alt="Veeam Data Platform – Monitoring & Analytics module"
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
