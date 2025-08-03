'use client';

import { Phone, Clock, Mail } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full min-h-[calc(100vh-60px)] flex items-center bg-white dark:bg-black text-black dark:text-white px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-16 py-16">
        
        {/* Headline */}
        <div className="text-center space-y-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            CONTACT <span className="text-primary">PLATTANO TECHNOLOGIES</span><br />
            CHOOSE THE RIGHT CHANNEL BASED ON YOUR <span className="text-primary">URGENCY</span>.
          </h1>
          <p className="md:text-2xl text-xl text-neutral-700 dark:text-neutral-300">
            Our commercial and technical teams are ready to support you — 24/7.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="w-full text-center space-y-12">
          <h2 className="text-2xl md:text-3xl font-bold">I&apos;M IN A HURRY</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Commercial Contact */}
            <div className="border border-primary rounded-lg p-8 bg-white dark:bg-black shadow-md space-y-4 text-center">
              <h3 className="text-xl font-bold uppercase">Commercial Contact</h3>
              <div className="flex justify-center items-center gap-2" aria-label="Phone">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (321) 313 8762</span>
              </div>
              <div className="flex justify-center items-center gap-2" aria-label="Availability">
                <Clock className="w-4 h-4 text-primary" />
                <span>Available 24/7</span>
              </div>
              <div className="flex justify-center items-center gap-2" aria-label="Email">
                <Mail className="w-4 h-4 text-primary" />
                <span>plattano@plattano.com</span>
              </div>
            </div>

            {/* Technical Support */}
            <div className="border border-primary rounded-lg p-8 bg-white dark:bg-black shadow-md space-y-4 text-center">
              <h3 className="text-xl font-bold uppercase">Technical Support</h3>
              <Link
                href="https://wa.me/13213138762"
                target="_blank"
                className="inline-block bg-primary text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition"
              >
                TALK TO US NOW!
              </Link>
              <div className="flex justify-center items-center gap-2" aria-label="Availability">
                <Clock className="w-4 h-4 text-primary" />
                <span>Available 24/7</span>
              </div>
              <div className="flex justify-center items-center gap-2" aria-label="Email">
                <Mail className="w-4 h-4 text-primary" />
                <span>plattano@plattano.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
