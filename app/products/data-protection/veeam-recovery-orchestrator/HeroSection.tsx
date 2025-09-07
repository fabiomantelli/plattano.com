'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      {/* décor - disabled on mobile for better LCP */}
      {!isMobile && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0
                    bg-[url('/images/products/data-protection/veeam-recovery-orchestrator/veaam-recovery-orchestrator-hero-bg.png')]
                    bg-center bg-no-repeat bg-cover
                    opacity-20 dark:opacity-15"
        />
      )}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:gap-16">
        {/* ------------ text ------------ */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            VEEAM RECOVERY ORCHESTRATOR IN ORLANDO<br />
            <span className="md:text-3xl text-2xl text-neutral-800 dark:text-gray-300">Automated Disaster Recovery & SLA Assurance</span>
          </h1>

          <p className="max-w-md text-lg text-neutral-700 dark:text-gray-300 lg:mx-0">
            Eliminate manual risk and ensure business continuity with fully tested, orchestrated recovery — delivered by Plattano Technologies.
          </p>

          <ul className="mx-auto flex max-w-md flex-col items-center space-y-4 text-base leading-relaxed lg:mx-0 lg:items-start">
            {[
              'Automate low‑impact testing to verify recoverability',
              'Recover at scale with a single click',
              'Orchestrate recovery that adapts to your business SLAs',
              'Prove compliance with dynamic test reports',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-primary" />
                <span className="text-left">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------ image ------------ */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/images/products/data-protection/veeam-recovery-orchestrator/veeam-recovery-orchestrator-hero.png"
            alt="Veeam Recovery Orchestrator dashboard automating disaster recovery planning"
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
