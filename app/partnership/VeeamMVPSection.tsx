'use client';

import { motion } from 'framer-motion';
import { Award, Handshake } from 'lucide-react';

export default function VeeamMVPSection() {
  return (
    <section
      className="
        relative isolate w-full text-black dark:text-white overflow-hidden
        bg-white dark:bg-black py-20 px-6 sm:px-12 lg:px-24
        before:absolute before:inset-0 before:bg-[url('/images/veeam/bg-veeam-section.webp')] before:bg-cover before:bg-center before:opacity-10 before:-z-10
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 border border-primary rounded-lg p-6 space-y-4 bg-white dark:bg-black/50 shadow-sm"
        >
          <Award className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-bold text-primary uppercase">
            Don’t be the rookie of the year. Be the MVP among your competitors.
          </h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Over 96% of global businesses back up their data. As a Plattano partner, you can provide your clients with the modern data protection solutions they need to secure their businesses. Veeam offers a unique platform of solutions that are easy to sell and fast to implement.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 border border-primary rounded-lg p-6 space-y-4 bg-white dark:bg-black/50 shadow-sm"
        >
          <Handshake className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-bold text-primary uppercase">
            The Program
          </h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            The Strategic Partnership Program with Plattano Technologies is built to foster long-term, mutually beneficial collaboration with potential partner businesses. Our goal is to create an environment where business synergies drive innovation and growth, empowering both companies to scale operations while delivering the best solutions to end clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
