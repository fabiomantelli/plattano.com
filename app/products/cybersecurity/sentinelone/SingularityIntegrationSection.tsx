'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const itemsTop = [
  {
    title: 'Automate Triage and Investigation',
    description: 'Automatically enrich threats with integrated and third-party threat intelligence',
  },
  {
    title: 'Unify Response Across Systems',
    description:
      'Defeat high-speed threats by driving a unified and orchestrated response across security tools in different domains',
  },
  {
    title: 'Seamless Integration with Leading Ecosystem Providers',
    description:
      'No need for heavy investment in time, custom business logic, code, or complex configurations',
  },
];

const itemsBottom = [
  {
    title: 'Ingest Native and Third-Party Data',
    description:
      'Singularity XDR is the only XDR platform that brings native endpoint, cloud, and identity telemetry with the flexibility to ingest and combine third-party data into an agile data lake. Singularity XDR ingests security data from any source in an easy and cost-effective way, empowering analysts with visibility across the enterprise.',
  },
  {
    title: 'Resolve with Singularity',
    description:
      'Singularity XDR accelerates threat investigation and remediation recovery, eliminating the need for manual analyst intervention in resolving workloads and affected users. Automatic correction and rollback or a click enables you to take immediate action to revert unauthorized changes originating from malicious activities, without complicated scripts controlled by humans. Additionally, with Singularity RemoteOps, analysts now have the tools to scale response and remediation to thousands of endpoints in any operating system.',
  },
  {
    title: 'Enhanced Threat Detection & Response',
    description:
      'Correlate native and third-party telemetry events in a complete Storyline™ of an attack within your security stack from start to finish. Accelerate investigation time with a more complete event context and accelerate response time with autonomous and orchestrated response actions.',
  },
];

export default function SingularityIntegrationSection() {
  return (
    <section className="w-full py-24 bg-black/9 text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-[36px] font-sofia font-bold">
            <span className="text-primary">START YOUR XDR JOURNEY</span> WITH SIMPLE ONE-CLICK INTEGRATIONS
          </h2>
        </div>

        {/* Top 3 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {itemsTop.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between rounded-xl p-6 text-center shadow-md transition-all bg-neutral-100 border border-neutral-300 dark:bg-white/10 dark:border-white/20 hover:scale-105 transform"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="mt-16">
          <Image
            src="/images/products/cybersecurity/sentinelone/sentinelone-logos.webp" // Replace with your image path
            alt="SentinelOne Logos"
            width={1000}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Bottom 3 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
          {itemsBottom.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl p-6 text-center shadow-md transition-all bg-neutral-100 border border-neutral-300 dark:bg-white/10 dark:border-white/20 hover:scale-105 transform"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}