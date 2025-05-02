'use client'

import Image from 'next/image'

export default function VeeamProtectsEverythingSection() {
  return (
    <section className="w-full py-24 bg-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center space-y-16">
        {/* Title */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-primary">VEEAM PROTECTS</span> EVERYTHING
          </h2>
          <p className="text-lg md:text-xl">
            The Data Platform is composed of solutions that integrate, each within its own concept of intelligent data management.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/products/data-protection/veeam-data-platform/softwares.webp"  // Make sure this path is correct
            alt="Veeam Supported Software"
            width={1200} // You can adjust the size
            height={600} // You can adjust the size
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
