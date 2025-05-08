// app/(veeam)/veeam-recovery-orchestrator/ui/Hero.tsx
'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      {/* décor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0
                  bg-[url('/images/products/data-protection/veeam-recovery-orchestrator/veaam-recovery-orchestrator-hero-bg.png')]
                  bg-center bg-no-repeat bg-cover
                  opacity-20 dark:opacity-15"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:gap-16">
        {/* ------------ text ------------ */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#ED6E00] sm:text-4xl">
            DON&#8217;T&nbsp;GAMBLE&nbsp;YOUR&nbsp;BUSINESS
            <br />
            ON&nbsp;MANUAL&nbsp;RECOVERY.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg text-neutral-700 dark:text-gray-300 lg:mx-0">
            Eliminate guesswork with fully tested, orchestrated recovery.
          </p>

          <ul className="mx-auto mt-8 flex max-w-md flex-col items-center space-y-4 text-base leading-relaxed lg:mx-0 lg:items-start">
            {[
              'Automate low‑impact testing to verify recoverability',
              'Recover at scale with a single click',
              'Orchestrate recovery that adapts to your needs',
              'Prove compliance with dynamic test reports',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-[#ED6E00]" />
                <span className="text-left">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------ image ------------ */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/images/products/data-protection/veeam-recovery-orchestrator/veeam-recovery-orchestrator-hero.png"
            alt="Veeam Data Platform – Recovery Orchestration diagram"
            width={600}
            height={450}
            priority
            className="w-full max-w-md lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}