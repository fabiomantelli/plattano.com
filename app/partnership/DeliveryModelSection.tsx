'use client';

import { Leaf } from 'lucide-react';

export default function DeliveryModelSection() {
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          YOUR <span className="text-primary">WAY</span>
        </h2>

        {/* Subtitle */}
        <p className="text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
          OFFER PLATTANO HOT STORAGE <span className='text-primary'>TO YOUR CLIENTS</span> THE WAY YOU PREFER!
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* OPEX Card */}
          <div className="border border-primary rounded-md p-6 text-left space-y-4">
            <h3 className="text-lg font-bold uppercase text-center">OPEX — CONSUMPTION BASED</h3>
            <ul className="space-y-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              {[
                'Reach any target',
                'Monthly usage-based billing',
                'Create flexible pricing models',
                'Integrate Hot Storage with your solutions',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Leaf className="h-4 w-4 text-primary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CAPEX Card */}
          <div className="border border-primary rounded-md p-6 text-left space-y-4">
            <h3 className="text-lg font-bold uppercase text-center">CAPEX — UP FRONT</h3>
            <ul className="space-y-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              {[
                'Engage clients with more services',
                'Secure long-term revenue',
                'Create more aggressive pricing models',
                'Purchase in capacity blocks (1, 3, or 5 years)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Leaf className="h-4 w-4 text-primary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
