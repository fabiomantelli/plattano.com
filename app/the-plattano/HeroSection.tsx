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
            ABOUT PLATTANO TECHNOLOGIES:<br />
            <span className="text-primary">Raising the Bar</span> in IT Services
          </h1>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
            <p>
              Plattano Technologies was born from an idea—and like a tree, we grew through seasons, serving businesses through secure, resilient, and smart technology.
            </p>
            <p>
              With deep roots in innovation and excellence, we continue <strong className="text-white dark:text-primary">GROWING</strong>, delivering IT services in Orlando and beyond with cybersecurity, cloud, and data protection at our core.
            </p>
            <p className="text-primary font-semibold uppercase">We are Plattano.</p>
            <p className="font-semibold uppercase">Technology to serve and transform.</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          {/* Light mode image */}
          <Image
            src="/images/the-plattano/plattano-logo-hero-light.svg"
            alt="Plattano Technologies logo with identity concept for IT services in Orlando"
            width={600}
            height={400}
            className="w-full h-auto max-w-md md:max-w-full block dark:hidden"
            priority
          />

          {/* Dark mode image */}
          <Image
            src="/images/the-plattano/plattano-logo-hero-dark.svg"
            alt="Plattano Technologies logo with identity concept for IT services in Orlando (dark)"
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
