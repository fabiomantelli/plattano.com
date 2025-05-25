'use client';

import Image from 'next/image';

export default function VeeamPoweredSection() {
  return (
    <section className="w-full bg-primary text-black py-18 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left">
        {/* Logo */}
        <Image
          src="/images/partnership/veeam-logo.svg" // atualize conforme o path correto
          alt="Veeam Logo"
          width={270}
          height={90}
          className="h-auto w-auto"
        />

        {/* Text */}
        <p className="text-lg font-semibold uppercase tracking-wide">
          Powered by Plattano
        </p>
      </div>
    </section>
  );
}
