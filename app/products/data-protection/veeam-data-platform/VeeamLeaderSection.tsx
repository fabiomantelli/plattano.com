'use client'

import Image from 'next/image'

export default function VeeamLeaderSection() {
  return (
    <section className="w-full py-24 bg-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image Block */}
        <div className="flex-1">
          <Image
            src="/images/products/data-protection/veeam-data-platform/gartner-global.webp"
            alt="Gartner Magic Quadrant"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
        {/* Text Block */}
        <div className="space-y-6 text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            GLOBAL LEADER IN <span className="text-primary">DATA PROTECTION</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold">
            LEADER #1 FOR <span className="text-primary">7 CONSECUTIVE YEARS</span>
          </h3>
          <p className="text-lg font-medium">
            Highest position in execution capability
          </p>
          <p className="text-lg font-medium">
            Gartner Magic Quadrant 2023
          </p>
          <p className="text-lg font-medium">
            Enterprise Backup and Recovery Software Solutions
          </p>
        </div>

      </div>
    </section>
  )
}
