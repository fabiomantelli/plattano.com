'use client';

import {
  Target,
  UploadCloud,
  Database,
  Eye,
  ShieldCheck,
  PackageOpen,
  Skull,
  Cloud,
  Moon,
  MegaphoneOff,
} from 'lucide-react';
import { motion } from 'framer-motion';

const avoidItems = [
  { icon: Target, label: 'Financial damage' },
  { icon: MegaphoneOff, label: 'Negative brand exposure' },
  { icon: Database, label: 'Data leaks and loss, and more…' },
];

const strengths = [
  { icon: Target, lead: 'FOCUS', rest: 'ON YOUR BUSINESS' },
  { icon: UploadCloud, lead: 'OFFLOAD', rest: 'YOUR IT' },
  { icon: Database, lead: 'VALUE', rest: 'YOUR DATA' },
  { icon: Eye, lead: 'GAIN', rest: 'EXTENDED VISIBILITY' },
  { icon: ShieldCheck, lead: 'ACTIVATE', rest: 'EXTREME RESILIENCE' },
  { icon: PackageOpen, lead: 'BREAK', rest: 'FREE FROM LEGACY' },
  { icon: Skull, lead: 'OUTSMART', rest: 'THE VILLAINS' },
  { icon: Cloud, lead: 'STAY', rest: 'IN THE CLOUDS' },
  { icon: Moon, lead: 'SLEEP', rest: 'SOUNDLY' },
];

export default function ProPowerSection() {
  return (
    <section className="w-full py-24 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Headline */}
        <div className="space-y-4 text-center">
          <h2 className="text-[46px] font-semibold leading-tight">
            THE POWER OF BEING <span className="text-primary">PRO</span>
          </h2>
          <p className="text-primary text-2xl font-semibold uppercase">AVOID:</p>
        </div>

        {/* Avoid list */}
        <div className="space-y-4 text-xl">
          {avoidItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-3">
              <Icon className="w-8 h-8 text-primary" />
              {label}
            </div>
          ))}
        </div>

        {/* Strengths heading */}
        <h3 className="text-primary text-[32px] font-semibold text-center">
          Strengths empowered by Plattano:
        </h3>

        {/* Strength grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {strengths.map(({ icon: Icon, lead, rest }) => (
            <div
              key={lead}
              className="
                flex items-center gap-4 p-6 rounded-xl shadow-lg transition
                bg-neutral-100 border border-neutral-300 dark:bg-white/10 dark:border-white/20
              "
            >
              <Icon className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="text-[24px] leading-snug uppercase">
                <span className="text-primary font-semibold">{lead}</span> {rest}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
