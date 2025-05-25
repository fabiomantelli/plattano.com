'use client';

import { Plus } from 'lucide-react';

export default function CostStrategySection() {
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary">COST STRATEGY</span> & PARTNER REVENUE
        </h2>

        {/* Description */}
        <p className="text-base text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
          At Plattano, we value transparency. As a partner, you'll have access to the full cost and revenue strategy that keeps you competitive—even compared to hyperscalers.
        </p>
        <p className="text-base text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
          We believe every partnership should be fair. That’s why we created discount categories based on your engagement, measured by the amount of TB you provision.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border border-primary rounded-md p-6 text-left space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold uppercase text-sm">
                <Plus className="h-4 w-4 text-primary" /> Volume
              </div>
              <div className="flex items-center gap-2 font-bold uppercase text-sm">
                <Plus className="h-4 w-4 text-primary" /> Discount
              </div>
              <div className="flex items-center gap-2 font-bold uppercase text-sm">
                <Plus className="h-4 w-4 text-primary" /> Margin
              </div>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-4">
              The more you provision, the more you receive <strong>progressive discounts</strong>, increasing your profit <strong>margin</strong>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-primary rounded-md p-6 text-left space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold uppercase text-sm">
                <Plus className="h-4 w-4 text-primary" /> Maximize
              </div>
              <div className="flex items-center gap-2 font-bold uppercase text-sm">
                <Plus className="h-4 w-4 text-primary" /> Revenue
              </div>
              <div className="flex items-center gap-2 font-bold uppercase text-sm">
                <Plus className="h-4 w-4 text-primary" /> Discount
              </div>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-4">
              <strong>Maximize your revenue</strong> with higher <strong>discounts</strong> as your storage volume increases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
