'use client';

import Image from 'next/image';

export default function VeeamOneBenefitsSection() {
  return (
    <section className="relative bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20">
        {/* ------------- text ------------- */}
        <div className="space-y-12 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold tracking-tight">BENEFITS</h2>

          <div>
            <h3 className="text-2xl font-extrabold leading-tight">
              <span className="text-primary">ENSURE&nbsp;DIGITAL&nbsp;RESILIENCE</span>
            </h3>
            <p className="mt-4 max-w-md lg:mx-0 mx-auto text-lg text-neutral-900 dark:text-gray-300">
              Lack of visibility into your backup environments can lead to data loss, undiscovered
              malicious activity and compliance violations.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold leading-tight">
              <span className="text-primary">PROACTIVE&nbsp;MANAGEMENT</span> WITH
              <br className="hidden sm:block" />
              REAL‑TIME&nbsp;VISIBILITY
            </h3>
            <p className="mt-4 max-w-md lg:mx-0 mx-auto text-lg text-neutral-900 dark:text-gray-300">
              Veeam’s advanced IT monitoring and analytics, powered by Veeam ONE technology,
              deliver intelligent insights that let you pinpoint and resolve issues before they turn
              into problems—keeping critical data safe.
            </p>
          </div>
        </div>

        {/* ------------- image ------------- */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/products/data-protection/veeam-one/veeam-one-benefits-analytics.png"
            alt="Real‑time monitoring dashboards"
            width={640}
            height={480}
            priority
            className="w-full max-w-md lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
