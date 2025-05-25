'use client';

import { motion } from 'framer-motion';
import {
  Rocket,
  BarChart,
  Building2,
  DollarSign,
  Send,
  BadgePercent
} from 'lucide-react';

export default function GridBenefitsSection() {
  const items = [
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: 'Plattano as a Service',
      text: 'Get all the help you need with Plattano’s workforce supporting your services.',
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: 'Expand Your Offer and Revenue',
      text: 'Don’t waste time. Bring the client, and we’ll sell it for you.',
    },
    {
      icon: <Building2 className="h-6 w-6 text-primary" />,
      title: 'Services',
      text: 'Use our sales, technical, and project teams to operate on any front alongside the client.',
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: 'Revenue',
      text: 'Earn recurring income from multiple channels.',
    },
    {
      icon: <Send className="h-6 w-6 text-primary" />,
      title: 'Distribution',
      text: 'Expand your market reach with our full range of solutions and services.',
    },
    {
      icon: <BadgePercent className="h-6 w-6 text-primary" />,
      title: 'Flexibility',
      text: 'You decide how to approach each opportunity—your client, your rules.',
    },
  ];

  return (
    <section
      className="
        relative isolate w-full overflow-hidden
        bg-white dark:bg-black text-black dark:text-white
        before:absolute before:inset-0 before:bg-[url('/images/veeam/bg-veeam-section.webp')]
        before:bg-cover before:bg-center before:opacity-10 before:-z-10
        py-20 px-6 sm:px-12 lg:px-24
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {items.map(({ icon, title, text }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-neutral-200 dark:bg-white/10 text-black dark:text-white rounded-lg p-6 space-y-4 shadow-md dark:shadow-none"
          >
            {icon}
            <h3 className="text-base font-bold uppercase">{title}</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
