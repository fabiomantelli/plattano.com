'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Gauge, CheckCircle } from 'lucide-react';

// Hook to animate count up when in view
function useCountUp(target: number, duration = 2000) {
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
            setValue(Math.floor(progress * target));
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
  }, [target, duration, mounted]);

  return { ref, value };
}

export default function ExagridPerformanceSection() {
  // Count-up hooks for animated numbers
  const count20x = useCountUp(20);
  const count6PB = useCountUp(6);
  const count20to1 = useCountUp(20);
  const count100 = useCountUp(100);
  
  // Progress bar animation hooks
  const backupSpeed = useCountUp(95);
  const recoverySpeed = useCountUp(98);
  const deduplicationSpeed = useCountUp(90);

  const performanceStats = [
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      countHook: count20x,
      suffix: 'x',
      label: 'Faster Recovery',
      description: 'VM boots and restores are 20 times faster than other solutions with Landing Zone technology.'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      countHook: count6PB,
      suffix: 'PB',
      label: 'Scalability',
      description: 'Scale to 6 petabytes without forklift upgrades or performance degradation.'
    },
    {
      icon: <Gauge className="h-12 w-12 text-primary" />,
      countHook: count20to1,
      suffix: ':1',
      label: 'Deduplication',
      description: 'Up to 20:1 deduplication ratio for maximum storage efficiency and cost savings.'
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      countHook: count100,
      suffix: '%',
      label: 'Backup Focus',
      description: 'Focused solely on backup storage since 2002 with proven expertise and reliability.'
    }
  ];

  const benefits = [
    'Shortest possible backup windows that stay short as data grows',
    'No performance degradation when adding new appliances',
    'Latest backup copy always available in high-speed Landing Zone',
    'Instant VM boots directly from backup storage',
    'Parallel processing across all appliances in the system',
    'Adaptive deduplication that optimizes for both speed and efficiency'
  ];

  return (
    <section className="w-full py-20 bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white">
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
            <span className="text-primary">Unmatched Performance</span> at Scale
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            ExaGrid&apos;s unique architecture delivers consistent high performance that doesn&apos;t degrade as your data grows. 
            Experience the fastest backups and recoveries in the industry.
          </p>
        </motion.div>

        {/* Performance Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {performanceStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center group"
            >
              <div className="bg-white dark:bg-black rounded-2xl p-8 border border-neutral-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                </div>

                {/* Animated Stat */}
                <div ref={item.countHook.ref} className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {item.countHook.value}{item.suffix}
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold font-sofia-sans mb-4">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-sofia-sans mb-8">
              Performance That <span className="text-primary">Scales With You</span>
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Performance Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-6">Landing Zone Technology</h4>
                
                {/* Performance Chart Visualization */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Backup Speed</span>
                    <div className="flex-1 mx-4 bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
                      <div 
                        ref={backupSpeed.ref}
                        className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out" 
                        style={{width: `${backupSpeed.value}%`}}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-primary">{backupSpeed.value}%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Recovery Speed</span>
                    <div className="flex-1 mx-4 bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
                      <div 
                        ref={recoverySpeed.ref}
                        className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out" 
                        style={{width: `${recoverySpeed.value}%`}}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-primary">{recoverySpeed.value}%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Deduplication</span>
                    <div className="flex-1 mx-4 bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
                      <div 
                        ref={deduplicationSpeed.ref}
                        className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out" 
                        style={{width: `${deduplicationSpeed.value}%`}}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-primary">{deduplicationSpeed.value}%</span>
                  </div>
                </div>
                
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-6">
                  Consistent performance across all backup and recovery operations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}