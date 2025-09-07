'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, Eye } from 'lucide-react';

// Hook to animate count up when in view
function useCountUp(target: number, duration = 2000, decimals = 0) {
  const [value, setValue] = useState(target); // Start with target to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setValue(0); // Reset to 0 after mount for animation
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start: number | null = null;
          const step = (timestamp: number) => {
            if (start === null) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const currentValue = progress * target;
            setValue(decimals > 0 ? parseFloat(currentValue.toFixed(decimals)) : Math.floor(currentValue));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration, decimals, mounted]);

  return { ref, value };
}

export default function ExagridSecuritySection() {
  // Count-up hooks for animated numbers
  const count100 = useCountUp(100);
  const count999 = useCountUp(99.9, 2000, 1);

  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Non-Network-Facing Tier',
      description: 'Only backup storage solution with a completely isolated, non-network-facing retention tier for ultimate protection.',
      highlight: 'Air-Gapped Protection'
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: 'Retention Time-Lock',
      description: 'Immutable deduplication objects with configurable delayed delete policies prevent unauthorized data removal.',
      highlight: 'Immutable Objects'
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: 'Ransomware Recovery',
      description: 'When ransomware strikes, easily recover data or boot VMs directly from ExaGrid with all retained backups intact.',
      highlight: 'Complete Recovery'
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: 'Threat Detection',
      description: 'Advanced monitoring and alerting for suspicious activities and unauthorized access attempts.',
      highlight: 'Proactive Monitoring'
    }
  ];

  const securityStats = [
    { countHook: count100, suffix: '%', label: 'Air-Gapped Retention', description: 'Complete isolation from network threats' },
    { number: '0', label: 'Network Exposure', description: 'Retention tier has zero network connectivity' },
    { number: '24/7', label: 'Security Monitoring', description: 'Continuous threat detection and alerting' },
    { countHook: count999, suffix: '%', label: 'Recovery Success', description: 'Proven ransomware recovery rate' }
  ];

  const recoverySteps = [
    {
      step: '1',
      title: 'Detect Attack',
      description: 'ExaGrid monitoring identifies ransomware activity and suspicious patterns.'
    },
    {
      step: '2',
      title: 'Isolate Systems',
      description: 'Automatic isolation prevents spread while maintaining backup integrity.'
    },
    {
      step: '3',
      title: 'Assess Damage',
      description: 'Determine scope of infection and identify clean recovery points.'
    },
    {
      step: '4',
      title: 'Instant Recovery',
      description: 'Boot VMs directly from ExaGrid or restore to clean infrastructure.'
    }
  ];

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sofia-sans mb-6">
            <span className="text-primary">Ransomware Protection</span> That Works
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            ExaGrid provides the industry&apos;s most comprehensive ransomware protection with retention time-lock, 
            delayed deletes, and the only non-network-facing backup storage tier.
          </p>
        </motion.div>

        {/* Security Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {securityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 h-full flex flex-col justify-center min-h-[140px]">
                <div 
                  ref={stat.countHook?.ref} 
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                >
                  {stat.countHook ? `${stat.countHook.value}${stat.suffix}` : stat.number}
                </div>
                <h3 className="text-sm md:text-base font-bold mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="bg-neutral-50 dark:bg-white/5 rounded-2xl p-8 border border-neutral-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full">
                {/* Icon and Highlight Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                    {feature.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-sofia-sans mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ransomware Recovery Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-sofia-sans mb-4">
              Ransomware Recovery Process
            </h3>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              ExaGrid&apos;s proven 4-step recovery process gets your business back online quickly and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recoverySteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center"
              >
                <div className="bg-white dark:bg-black rounded-2xl p-6 border border-primary/30 relative">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>

                  {/* Step Title */}
                  <h4 className="text-lg font-bold mb-3">
                    {step.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (except last item) */}
                  {index < recoverySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-primary"></div>
                      <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}