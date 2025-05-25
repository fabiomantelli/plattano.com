'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  BarChart2,
  Users,
  DollarSign,
  Timer,
  Clock
} from 'lucide-react'; // Se estiver usando lucide-react (pode substituir por SVG inline se preferir)

export default function ChallengeSection() {
  const challenges = [
    {
      icon: <BookOpen className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />,
      text: 'Commercial and technical knowledge of the acquired solution',
    },
    {
      icon: <BarChart2 className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />,
      text: 'Market fit and user adoption',
    },
    {
      icon: <Users className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />,
      text: 'Hiring specialized teams for implementation',
    },
    {
      icon: <DollarSign className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />,
      text: 'High investments without forecasted return',
    },
    {
      icon: <Timer className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />,
      text: 'Time to launch the solution (time-to-market)',
    },
    {
      icon: <Clock className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />,
      text: 'Time to deliver investment value (time-to-value)',
    },
  ];

  return (
    <section
      className="
        relative isolate w-full text-white overflow-hidden
        before:absolute before:inset-0
        before:bg-[url('/images/partnership/challenge-bg.webp')] before:bg-center
        before:bg-cover before:bg-fixed before:-z-20
        after:absolute after:inset-0 after:-z-10
        after:bg-primary/85 dark:after:bg-black/60
      "
    >
      {/* Top border */}
      <div className="h-[2px] w-full bg-primary" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 py-24 text-center"
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">THE <span className='text-black dark:text-primary'>CHALLENGE</span></h2>

        {/* Intro text */}
        <p className="text-base md:text-lg text-white/80 mb-10">
          As you bring your solutions to market, there are several strategic factors to consider in order to ensure business growth:
        </p>

        {/* List */}
        <ul className="space-y-4 text-sm sm:text-base text-white flex flex-col items-center">
          {challenges.map(({ icon, text }, index) => (
            <li key={index} className="dark:text-primary flex items-start gap-3 max-w-xl text-center">
              {icon}
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Bottom border */}
      <div className="h-[2px] w-full bg-primary" />
    </section>
  );
}
