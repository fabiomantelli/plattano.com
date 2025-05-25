'use client';

import { Flag, Eye, Gem } from 'lucide-react';

export default function AboutPlattanoSection() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black text-black dark:text-white px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          A LITTLE BIT <span className="text-primary">ABOUT IT ALL</span>
        </h2>

        {/* Intro paragraph */}
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-4 max-w-4xl mx-auto">
          <p>
            We turn challenges into innovative solutions — we are a specialized IT company focused on projects, delivering personalized services and managed solutions to drive the success of our clients and partners.
          </p>
          <p>
            Our highly consultative commercial team helps guide customers through the complexity of IT solutions, always aiming for what the client truly needs — no more, no less.
          </p>
          <p>
            Our team of engineers and solution architects delivers nothing less than technical excellence. Implementation, consulting, and support of IT environments are in our DNA.
          </p>
          <p>
            Your success is our top priority. That’s why we make sure your business stays available to your customers and secure for your brand — with solutions built on leadership, continuity, and resilience.
          </p>
          <p className="font-semibold">
            Plattano. We redefine your business.
          </p>
        </div>

        {/* Values section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12">
          {/* MISSION */}
          <div className="space-y-4 text-center">
            <Flag className="w-8 h-8 mx-auto text-primary" />
            <h3 className="text-lg font-bold text-primary uppercase">Mission</h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              Connecting innovations and unlocking opportunities for our clients and partners through technology and experience.
            </p>
          </div>

          {/* VISION */}
          <div className="space-y-4 text-center">
            <Eye className="w-8 h-8 mx-auto text-primary" />
            <h3 className="text-lg font-bold text-primary uppercase">Vision</h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              To become the benchmark in IT Services by making a positive impact — because value is our greatest currency.
            </p>
          </div>

          {/* VALUES */}
          <div className="space-y-4 text-center">
            <Gem className="w-8 h-8 mx-auto text-primary" />
            <h3 className="text-lg font-bold text-primary uppercase">Values</h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              What we do is essential. We are bold and loyal to our purpose — <span className="font-semibold text-primary">we deliver value through value itself</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
