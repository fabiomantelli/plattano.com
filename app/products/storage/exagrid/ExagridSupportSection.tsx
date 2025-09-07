'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Headphones, Award, Star, CheckCircle, Phone, Clock, Mail } from 'lucide-react';

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

export default function ExagridSupportSection() {
  // Count-up hooks for animated numbers
  const count81 = useCountUp(81);
  const count132 = useCountUp(132);
  const count20 = useCountUp(20);
  const count100 = useCountUp(100);

  const supportFeatures = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Dedicated Level 2 Engineer',
      description: 'Each customer gets an assigned Level 2 Customer Support Engineer who knows your environment.',
      benefit: 'Personal Touch'
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: 'Proactive Monitoring',
      description: 'All systems equipped with health status monitoring and proactive notifications.',
      benefit: '24/7 Monitoring'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'All-Inclusive Maintenance',
      description: 'All upgrades, releases, and support included in maintenance with no hidden costs.',
      benefit: 'No Surprises'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: 'Proven Track Record',
      description: 'Over 20 years in backup storage with customers in 132+ countries worldwide.',
      benefit: 'Global Expertise'
    }
  ];

  const testimonials = [
    {
      quote: "With ExaGrid support, everything is easy and straightforward. They carry a bit of responsibility along with me. I always have someone to reach out to who has knowledge of the product as well as our environment, making my job that much easier.",
      author: "IT Director",
      company: "Healthcare Organization",
      rating: 5
    },
    {
      quote: "The level of support we receive from ExaGrid is unmatched. Our dedicated engineer knows our setup inside and out, which makes troubleshooting incredibly efficient.",
      author: "Systems Administrator",
      company: "Financial Services",
      rating: 5
    },
    {
      quote: "ExaGrid's proactive monitoring has prevented several potential issues before they became problems. The peace of mind is invaluable.",
      author: "IT Manager",
      company: "Manufacturing Company",
      rating: 5
    }
  ];

  const supportStats = [
    { countHook: count81, prefix: '+', label: 'NPS Score', description: 'Industry-leading customer satisfaction' },
    { countHook: count132, suffix: '+', label: 'Countries', description: 'Global certified appliance availability' },
    { countHook: count20, suffix: '+', label: 'Years', description: 'Focused solely on backup storage' },
    { countHook: count100, suffix: '%', label: 'Included', description: 'No hidden costs in support program' }
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
            <span className="text-primary">Unparalleled Support</span> You Can Trust
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Our customers love us, and you will too. Experience the difference that dedicated, 
            knowledgeable support makes for your backup infrastructure.
          </p>
        </motion.div>

        {/* Support Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {supportStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <div className="bg-white dark:bg-black rounded-2xl p-6 border border-neutral-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300">
                <div 
                  ref={stat.countHook.ref} 
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                >
                  {stat.prefix || ''}{stat.countHook.value}{stat.suffix || ''}
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

        {/* Support Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {supportFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="bg-white dark:bg-black rounded-2xl p-8 border border-neutral-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full">
                {/* Icon and Benefit Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                    {feature.benefit}
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

        {/* Customer Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold font-sofia-sans text-center mb-12">
            What Our <span className="text-primary">Customers Say</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white dark:bg-black rounded-2xl p-8 border border-neutral-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-neutral-200 dark:border-white/10 pt-4">
                  <p className="font-bold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 text-center"
        >
          <Phone className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold font-sofia-sans mb-4">
            Ready to Experience ExaGrid Support?
          </h3>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
            Join thousands of satisfied customers worldwide who trust ExaGrid for their backup storage needs. 
            Contact Plattano Technologies for expert ExaGrid deployment and ongoing support.
          </p>
          
          {/* Contact Information */}
          <div className="backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary/20">
            <h4 className="text-xl font-bold text-primary mb-6 text-center">Commercial Contact</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-black rounded-xl border border-primary/20">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-center">
                  <p className="font-bold text-primary">+1 (321) 313 8762</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Call Now</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-black rounded-xl border border-primary/20">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-center">
                  <p className="font-bold text-primary">Available 24/7</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Always Ready</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-black rounded-xl border border-primary/20">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-center">
                  <p className="font-bold text-primary">plattano@plattano.com</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Email Us</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}