'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhereWeAreSection() {
  return (
    <section className="w-full bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white px-6 sm:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texto à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">WHERE WE ARE</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Our HQ is in Orlando, FL – but our collaborators, partners, and clients are spread across the entire country.
          </p>
          <Link
            href="https://www.google.com/search?q=Plattano+Technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary cursor-pointer"
          >
            FIND US ON GOOGLE
          </Link>
        </motion.div>

        {/* Google Maps iframe à direita */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Plattano US Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13957.916903248817!2d-81.47719093725582!3d28.447356599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ed2d02e7e41%3A0x4fc7ad54c105d98f!2s7345%20W%20Sand%20Lake%20Rd%20Ste%20210%20Office%206438%2C%20Orlando%2C%20FL%2032819%2C%20USA!5e0!3m2!1sen!2sus!4v1716666666666"
            className="w-full h-72 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
