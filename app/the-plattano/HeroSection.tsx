'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="w-full bg-white dark:bg-black text-black dark:text-white px-6 sm:px-12 lg:px-24"
      style={{ height: 'calc(100vh - 60px)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 h-full py-20">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            WE <span className="text-primary">RAISE THE BAR</span> FOR IT SERVICE DELIVERY.
          </h1>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
            <p>
              We were born from a seed of an idea. Like a tree, we grew through seasons, serving companies through technology.
            </p>
            <p>
              We have strong roots that reflect our reputation. And we never stop <strong className="text-white dark:text-primary">GROWING</strong>, branching out through innovation to solve the challenges our clients face.
            </p>
            <p className="text-primary font-semibold">WE ARE PLATTANO.</p>
            <p className="font-semibold">TECHNOLOGY TO SERVE AND TRANSFORM.</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          {/* Light mode image */}
          <Image
            src="/images/the-plattano/plattano-logo-hero-light.svg"
            alt="Plattano Logo Light"
            width={600}
            height={400}
            className="w-full h-auto max-w-md md:max-w-full block dark:hidden"
            priority
          />

          {/* Dark mode image */}
          <Image
            src="/images/the-plattano/plattano-logo-hero-dark.svg"
            alt="Plattano Logo Dark"
            width={600}
            height={400}
            className="w-full h-auto max-w-md md:max-w-full hidden dark:block"
            priority
          />
        </div>
      </div>
    </section>
  );
}
