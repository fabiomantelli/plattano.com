'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    role: "IT Director",
    content: "Plattano transformed our IT infrastructure completely. Their 24/7 support has been a game-changer for our business operations. We've had zero downtime since partnering with them.",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Orlando Medical Group",
    role: "Operations Manager",
    content: "The cybersecurity solutions from Plattano gave us peace of mind. Their team is incredibly responsive and knowledgeable. Best IT investment we've made.",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Jennifer Chen",
    company: "Creative Marketing Agency",
    role: "CEO",
    content: "Working with Plattano has been exceptional. They understand our business needs and provide solutions that actually work. Their expertise is unmatched in Orlando.",
    rating: 5,
    image: "/api/placeholder/60/60"
  }
];

const stats = [
  { number: "500+", label: "Satisfied Clients" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "15min", label: "Response Time" },
  { number: "24/7", label: "Support Available" }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            TRUSTED BY 500+ ORLANDO BUSINESSES
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            See why companies across Central Florida choose Plattano for their IT infrastructure and cybersecurity needs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-8">Certified & Trusted Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-neutral-100 dark:bg-neutral-800 px-6 py-3 rounded-lg font-semibold">
              Microsoft Partner
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 px-6 py-3 rounded-lg font-semibold">
              Veeam Certified
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 px-6 py-3 rounded-lg font-semibold">
              ExaGrid Authorized
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 px-6 py-3 rounded-lg font-semibold">
              SOC 2 Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}