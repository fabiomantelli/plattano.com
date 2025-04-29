'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useTheme } from 'next-themes';

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

const stats: Stat[] = [
  { label: 'Years in the market', value: 7, prefix: '+' },
  { label: 'VMs provisioned', value: 15_000, prefix: '+' },
  { label: 'Clients served', value: 1_100, prefix: '+' },
  { label: 'Project hours', value: 6_000, prefix: '+' },
  { label: 'Certifications', value: 50, prefix: '+' },
  { label: 'Data lost or encrypted', value: 0 },
  { label: 'Attacks on managed clients', value: 0 },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section
      ref={ref}
      className={`
        relative isolate overflow-hidden py-24
        before:absolute before:inset-0 before:-z-10
        ${isDark
          ? 'before:bg-[linear-gradient(120deg,#953B01_0%,#000000_40%)]'
          : 'before:bg-[linear-gradient(120deg,#ffffff_0%,#ED6E00_50%)]'}
        before:opacity-60
      `}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 flex flex-col items-center gap-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className={`text-[42px] font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            WHAT HAVE WE ACHIEVED?
          </h2>
          <p className={`text-[22px] ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            In <span className="text-primary font-semibold">+7 YEARS</span> WE HAVE SERVED{' '}
            <span className="text-primary font-semibold">+1,000 CLIENTS</span> NATIONWIDE –{' '}
            <span className="text-primary font-semibold">ACROSS EVERY SEGMENT.</span>
          </p>
        </div>

        {/* Stats grid */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-7 text-center divide-y-2 divide-primary lg:divide-y-0 lg:divide-x-2">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center p-6">
              <span className={`text-4xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                {stat.prefix}
                {/* Force dynamic mount to animate only on client */}
                {mounted && isInView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals ?? 0}
                    separator="."
                  />
                ) : (
                  stat.value.toLocaleString()
                )}
                {stat.suffix}
              </span>
              <span className={`mt-2 text-base md:text-lg ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
