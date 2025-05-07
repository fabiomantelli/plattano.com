'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: 'What is Veeam Backup for Microsoft 365?',
    answer: `Veeam Backup for Microsoft 365 minimizes the risk of losing access to and control over your Microsoft 365 data so that it’s always protected and accessible. It enables you to securely back up Microsoft 365 (formerly Office 365) and:
• Protect your Office 365 data from accidental deletion, security threats, and retention-policy gaps  
• Quickly restore individual Office 365 items and files with industry-leading recovery flexibility  
• Meet legal and compliance requirements with efficient eDiscovery of Office 365 backup items`,
  },
  {
    question: 'Can Veeam Backup for Microsoft 365 be used standalone, or does it require other Veeam products?',
    answer:
      'Veeam Backup for Microsoft 365 is a separate, standalone product and an integral component of the Veeam platform.',
  },
  {
    question: 'Can I back up Microsoft Teams with Veeam Backup for Microsoft 365?',
    answer:
      'Yes. You can back up and restore Microsoft Teams data with Veeam. When data is posted in Teams, it’s stored in locations like SharePoint Online. Use Veeam Explorers to locate and restore Teams files, sites, and channel/tab attachments, then reattach them manually within Teams.',
  },
  {
    question: 'Can I use Veeam Backup for Microsoft 365 for hybrid deployments between on-premises Exchange or SharePoint and Microsoft 365?',
    answer:
      'Yes. Veeam Backup for Microsoft 365 protects hybrid SharePoint and email deployments and allows you to migrate data between on-premises Exchange and Office 365.',
  },
  {
    question: 'Where can I store my Microsoft 365 backup?',
    answer:
      'Anywhere! Back up to on-premises storage, or use supported object storage such as AWS S3, Azure Blob, IBM Cloud, Plattano Hot Cloud Storage, or any S3-compatible vendor. Tier to low-cost long-term archives like Amazon Glacier, Glacier Deep Archive, or Azure Archive.',
  },
  {
    question: 'Is Veeam Backup for Microsoft 365 offered through the Veeam Universal License?',
    answer:
      'No. Veeam Backup for Microsoft 365 is not part of the Veeam Universal License. It’s sold independently under a per-user subscription.',
  },
  {
    question: 'How is it licensed?',
    answer:
      'Veeam Backup for Microsoft 365 is licensed by subscription. Choose one- to five-year terms with upfront or annual payment. All subscriptions are sold per user (minimum 10 seats) and include Production Support. It’s also available as a managed service—contact Plattano to learn more.',
  },
  {
    question: 'What counts as one user?',
    answer:
      'Count each Microsoft 365 user once across Exchange Online, SharePoint Online, and OneDrive for Business. Shared or resource mailboxes do not require a license. External SharePoint users and OneDrive (non-Business) are not covered.',
  },
  {
    question: 'Can I remove a user from backup and reassign their license?',
    answer:
      'Yes. After 31 days without a backup, a user’s license can be reassigned. You can also revoke a license immediately via PowerShell or the REST API after removing all their backup data.',
  },
  {
    question: 'Does this product help meet compliance requirements?',
    answer:
      'Yes. Store data according to long-term retention policies to satisfy regulatory and compliance needs.',
  },
  {
    question: 'Does this product support self-service?',
    answer:
      'Yes. Veeam Backup for Microsoft 365 includes a self-service restore portal, allowing admins to grant restore permissions to end users via a help-desk interface.',
  },
  {
    question: 'Does Microsoft back up Microsoft 365?',
    answer:
      'It’s a common misconception that Microsoft backs up your data. While Microsoft provides built-in resilience and compliance tools, comprehensive backup is your responsibility under the shared responsibility model.',
  },
  {
    question: 'How can I get started?',
    answer:
      'Contact our specialists to get started!',
  },
];

export default function VeeamM365FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <h2 className="text-4xl font-bold text-center text-primary">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="border rounded-xl overflow-hidden transition-colors bg-neutral-50 dark:bg-white/5 border-neutral-200 dark:border-white/20"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-lg text-primary focus:outline-none"
                >
                  <span>{item.question}</span>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-6 text-base text-neutral-800 dark:text-neutral-200"
                      >
                        {item.answer.split('\n').map((line, i) => (
                          <p key={i} className="mb-2">{line}</p>
                        ))}
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
