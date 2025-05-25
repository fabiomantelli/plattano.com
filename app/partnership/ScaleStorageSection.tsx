'use client';

import { BarChartBig } from 'lucide-react';

export default function ScaleStorageSection() {
  return (
    <section className="w-full bg-black/9 dark:bg-neutral-900 text-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Icon */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-start">
          <BarChartBig className="w-64 h-64 text-primary" />
        </div>

        {/* Text block */}
        <div className="md:w-2/3 w-full space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-primary">WE MAKE SCALING</span> YOUR STORAGE BUSINESS <span className="text-primary">EASY</span>!
          </h2>

          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Managing multiple customer accounts or departments under one account is simple. Our web-based multi-tenant management tool allows you to scale your storage business with an intuitive and powerful interface.
          </p>

          <ul className="text-sm sm:text-base space-y-3 text-neutral-700 dark:text-neutral-200 flex flex-col items-center md:items-start text-center md:text-left">
            {[
              'Create and manage accounts and sub-accounts',
              'Offer free trials and easily upgrade them to paid accounts',
              'Suspend and restore accounts without data loss',
              'Perform usage queries at account or bucket level',
              'Generate a single invoice for all customer subaccount charges'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-[2px]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
