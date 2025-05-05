// app/(veeam)/veeam-recovery-orchestrator/ui/VeeamFaqSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: 'What is a disaster‑recovery (DR) solution?',
    answer:
      'A DR solution is a structured plan or system that enables timely action, resource allocation and coordinated assistance to effectively manage and remediate the impact of disasters.',
  },
  {
    question: 'Why is a DR solution important?',
    answer:
      'It safeguards data, minimizes downtime and keeps the business running during crises. A solid DR strategy enables rapid recovery, prevents data loss and protects customer trust and productivity.',
  },
  {
    question: 'How is DR different from backup?',
    answer:
      'Backup stores copies of data to protect against accidental loss. DR encompasses broader strategies, technologies and processes to restore entire systems and keep the business operating after a disaster, reducing downtime and preserving critical functions.',
  },
  {
    question: 'What RTOs and RPOs does Veeam Recovery Orchestrator support?',
    answer:
      'RTO (Recovery Time Objective) is how long it should take to restore apps and systems; RPO (Recovery Point Objective) is the maximum acceptable data loss in time. Veeam Recovery Orchestrator delivers rapid recovery with flexible RTO/RPO targets so you can choose the tolerance that fits your business.',
  },
  {
    question: 'Which disaster types can Veeam Recovery Orchestrator handle?',
    answer:
      'Everything from natural events—floods or earthquakes—to hardware failures, power outages, cyber‑attacks, user error and software issues. It offers comprehensive DR capabilities to maintain data availability through virtually any disruptive event.',
  },
  {
    question: 'How do I create and test my DR plan?',
    answer:
      'Use Veeam Recovery Orchestrator: install the Veeam components, define your objectives, design orchestration plans, simulate failover, monitor, document and train staff. Validate and refine the plan regularly for true DR readiness.',
  },
  {
    question: 'Where should I back up data for DR?',
    answer:
      'Follow a multi‑location approach: on‑prem storage, off‑site repositories and secure cloud solutions. Distribute backups to avoid localized disasters and select reputable providers with redundancy, encryption and compliance controls.',
  },
  {
    question: 'What are the best DR methods?',
    answer:
      'Regular backups, real‑time replication, cloud solutions, virtualization, comprehensive planning, routine testing, automation and clear communication—all aimed at minimizing downtime and ensuring business continuity.',
  },
  {
    question: 'Can a DR product work in hybrid or multi‑cloud environments?',
    answer:
      'Yes. A modern DR platform supports backup and recovery across on‑prem and multiple clouds, giving you flexibility, scalability and data availability whether your workloads are hybrid or cloud‑native.',
  },
  {
    question: 'Does Veeam Recovery Orchestrator integrate with existing backup solutions?',
    answer:
      'Absolutely. It layers orchestration, automated testing and centralized management on top of your current backups to deliver reliable, efficient recovery of critical systems and data.',
  },
  {
    question: 'How does Veeam Recovery Orchestrator compare to other DR solutions?',
    answer:
      'It offers deep reporting, automated testing and quick‑view compliance dashboards. With an intuitive UI, non‑disruptive tests, customizable recovery plans and strong support for virtual and cloud workloads, it delivers fast, flexible, dependable DR.',
  },
];

export default function VeeamOrchestratorFaqSection() {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (idx: number) =>
    setOpen((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));

  return (
    <section className="w-full bg-white py-20 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-4xl space-y-12 px-6">
        <h2 className="text-center text-[38px] font-bold text-primary">
          Frequently&nbsp;Asked&nbsp;Questions
        </h2>

        <div className="space-y-6">
          {faqItems.map(({ question, answer }, idx) => {
            const isOpen = open.includes(idx);
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-neutral-300 bg-neutral-50 transition
                           dark:border-white/20 dark:bg-white/5"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-xl font-medium
                             text-primary focus:outline-none"
                  onClick={() => toggle(idx)}
                >
                  <span>{question}</span>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-base"
                      >
                        {answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
