'use client';

import { Target, UploadCloud, Database, Eye, ShieldCheck, PackageOpen, Skull, Cloud, Moon, MegaphoneOff } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="w-full bg-black text-white py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.6 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16"
      >
        {/* Headline */}
        <div className="space-y-4 text-center">
          <h2 className="text-[46px] font-semibold leading-tight">
            THE POWER OF BEING <span className="text-primary">PRO</span>
          </h2>
          <p className="text-primary text-2xl font-semibold uppercase">AVOID:</p>
        </div>

        {/* Avoid list */}
        <div className="space-y-4 text-2xl">
          <div className="flex items-center justify-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            FINANCIAL DAMAGE
          </div>
          <div className="flex items-center justify-center gap-3">
            <MegaphoneOff className="w-8 h-8 text-primary" />
            NEGATIVE BRAND EXPOSURE
          </div>
          <div className="flex items-center justify-center gap-3">
            <Database className="w-8 h-8 text-primary" />
            DATA LEAKS AND LOSS, AND MORE…
          </div>
        </div>

        {/* Strengths heading */}
        <h3 className="text-primary text-[32px] font-semibold text-center">
          STRENGTHS EMPOWERED BY PLATTANO:
        </h3>

        {/* Strength grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {strengths.map(({ icon: Icon, lead, rest }) => (
            <div
              key={lead}
              className="flex items-center gap-4 p-6 border border-white/40 rounded-lg shadow-md bg-black/40 backdrop-blur-sm"
            >
              <Icon className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="text-[24px] leading-snug uppercase">
                <span className="text-primary font-semibold">{lead} </span>
                {rest}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}