'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';

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
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 py-24 flex flex-col items-center gap-16"
    >
      {/* Heading */}
      <div className="text-center space-y-4">
        <h2 className="text-[42px] font-semibold text-white">
          WHAT HAVE WE ACHIEVED?
        </h2>
        <p className="text-[22px] text-white">
          In <span className="text-primary font-semibold">+7 YEARS</span> WE HAVE
          SERVED <span className="text-primary font-semibold">+1,000 CLIENTS</span>{' '}
          NATIONWIDE –{' '}
          <span className="text-primary font-semibold">ACROSS EVERY SEGMENT.</span>
        </p>
      </div>

      {/* Stats */}
      <div
        className="
          w-full
          grid grid-cols-2            /* mobile & tablet: 2 cols, horizontal lines */
          lg:grid-cols-7              /* desktop: 7 cols in one row */
          text-center
          divide-y-2 divide-primary  /* horizontal lines */
          lg:divide-y-0 lg:divide-x-2 /* desktop: switch to vertical lines */
        "
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center p-6">
            <span className="text-4xl md:text-3xl font-bold">
              {stat.prefix ?? ''}
              {isInView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  decimals={stat.decimals ?? 0}
                  separator="."
                />
              ) : (
                0
              )}
              {stat.suffix ?? ''}
            </span>
            <span className="mt-2 text-base md:text-lg text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
