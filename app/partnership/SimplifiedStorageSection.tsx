'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function SimplifiedStorageSection() {
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text block */}
        <div className="md:w-1/2 space-y-6 flex flex-col text-center md:text-left items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold">
                PLATTANO <span className="text-primary">SIMPLIFIES</span> STORAGE
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed">
                The simple pricing model of Hot Storage—no extra fees for downloads or API requests—makes it easier to bundle, price, and brand as if it were your own.
            </p>

            <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                <CheckCircle className="text-primary h-5 w-5 mt-1" />
                <span>
                    <strong>Predictable Pricing</strong> – A blazing-fast, low-cost service layer with no hidden fees. Price it however you want.
                </span>
                </li>
                <li className="flex items-start gap-2">
                <CheckCircle className="text-primary h-5 w-5 mt-1" />
                <span>
                    <strong>Simple Integration</strong> – Fully compatible with AWS S3, with a partner API for provisioning and monitoring.
                </span>
                </li>
                <li className="flex items-start gap-2">
                <CheckCircle className="text-primary h-5 w-5 mt-1" />
                <span>
                    <strong>Enterprise-Grade Storage</strong> – Secure, reliable, and globally accessible storage regions.
                </span>
                </li>
            </ul>
            </div>

        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/partnership/hot-storage-s3.webp" // ajuste conforme o nome real
            alt="Hot Storage and S3 Integration Diagram"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
