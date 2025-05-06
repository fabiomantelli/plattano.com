'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: 'What is Veeam Backup & Replication?',
    answer: `Veeam® Backup & Replication™ is advanced backup and recovery software from Veeam—the industry leader—delivering simple, reliable, and flexible protection for all your physical, virtual, and cloud workloads. With a rich set of features for backup, restore, replication, and continuous data protection, it’s your all-in-one solution to back up your entire environment—on-premises, in the cloud, or anywhere in between.`,
  },
  {
    question: 'Which workloads can Veeam Backup & Replication protect?',
    answer: `Veeam Backup & Replication™ continues to expand its capabilities and now includes features once available only in other products. Today it protects:
• Virtual workloads: VMware vSphere, Microsoft Hyper-V, Nutanix AHV  
• Physical workloads: Windows, Linux, macOS, IBM AIX, Oracle Solaris  
• Cloud workloads: AWS, Microsoft Azure, Google Cloud  
• Enterprise applications: SQL Server, Exchange, SharePoint, Active Directory, SAP HANA, Oracle RMAN, Kubernetes, MySQL, PostgreSQL  
• NAS file shares  

All of these are included at no extra cost with the Veeam Universal License (VUL), along with:
• Veeam Backup for AWS and for Microsoft Azure  
• Veeam Backup for Nutanix AHV  
• Veeam Agents for Windows, Linux, macOS, AIX, and Solaris`,
  },
  {
    question: 'Can I get advanced monitoring, reporting, and capacity planning without buying Veeam Availability Suite?',
    answer: `No. Advanced monitoring, reporting, and capacity planning features are part of Veeam Availability Suite’s Veeam ONE (now Veeam Data Platform – Monitoring & Analytics). To access them, you must license Veeam Availability Suite or its standalone Monitoring & Analytics component.`,
  },
  {
    question: 'Which workloads can I monitor with Veeam Monitoring & Analytics?',
    answer: `In addition to protected VMs (vSphere, Hyper-V, Nutanix AHV) and Veeam Agents, you can monitor backup protection for Google Cloud VMs, Nutanix AHV VMs, and NAS file shares.`,
  },
  {
    question: 'Which hypervisors does Veeam protect?',
    answer: `A single copy of Veeam Backup & Replication protects VMware vSphere, Microsoft Hyper-V, and Nutanix AHV—no separate editions required. Your VUL license covers all supported hypervisors.`,
  },
  {
    question: 'What if my virtual environment includes both vSphere and Hyper-V?',
    answer: `Veeam is hypervisor-agnostic, so you simply purchase the total number of licenses you need, and you can mix and match them across VMware vSphere, Hyper-V, or Nutanix AHV as you like.`,
  },
  {
    question: 'Can I migrate protection from other hypervisors to Nutanix AHV?',
    answer: `Yes. With the VUL portable licensing model, you can freely move backups between any VUL-enabled workload, including Nutanix AHV.`,
  },
  {
    question: 'How is Veeam Backup & Replication licensed?',
    answer: `There are three licensing models:
1. VUL (Veeam Universal License) – portable, full-feature license with continuous production support  
2. Per-socket license – limited features, fixed to CPU sockets  
3. VCSP rental license – available to Veeam Cloud & Service Provider partners  

VUL is sold in packs of 5–10 licenses, covers every workload interchangeably, and can be purchased for 1–5-year terms (prepaid or annual billing).`,
  },
  {
    question: 'How are Veeam Agents licensed?',
    answer: `All Veeam Agents are included with a VUL license or via VCSP rental licensing. There is no separate Agent SKU.`,
  },
  {
    question: 'I only need one or two agent licenses. Why must I buy a pack of 10?',
    answer: `You can keep your existing agent-only license SKU, but you won’t be able to install the latest version or benefit from new features unless you move to VUL—which still starts at 10 licenses.`,
  },
  {
    question: 'Can I stay on my current license version and not upgrade to the latest release?',
    answer: `Yes, you may continue using your current license version, but you cannot install or use the newest software release or access any new features.`,
  },
  {
    question: 'How do I renew support for my licenses and what happens if it expires?',
    answer: `VUL subscriptions always include maintenance and support while active.  
For per-socket licenses, you must submit a renewal quote request. If maintenance lapses, you lose access to technical support and all software updates, including patches and new releases.`,
  },
  {
    question: 'Can I merge my existing licenses with VUL licenses?',
    answer: `Yes. You can merge your per-socket Veeam Backup & Replication or Availability Suite licenses into a single VUL license file via my.veeam.com. Follow the instructions there to generate a merged license for your current support period.`,
  },
  {
    question: 'Can I run per-workload VUL licenses and per-socket licenses side by side?',
    answer: `Yes, in a mixed-mode environment:  
• Backup & Replication or Availability Suite per-socket licenses can be merged into VUL.  
• Backup Essentials sockets can be merged into Availability Suite or Backup & Replication VUL (but not Backup Essentials VUL).  

Note: When merging, the per-socket edition dictates the feature level of the merged license. To upgrade feature sets, migrate sockets to VUL or upgrade your socket edition.`,
  },
  {
    question: 'I currently have Veeam Backup Essentials. Can I buy Availability Suite or Backup & Replication licenses?',
    answer: `Yes. To generate a merged key (including your Essentials licenses), you must upgrade all your existing Essentials sockets to a VUL of Availability Suite or Backup & Replication—providing full portability and functionality. See our licensing policy for details.`,
  },
]

export default function VbrFaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    )
  }

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="text-[44px] font-sofia font-bold text-primary text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index)
            return (
              <div
                key={index}
                className="border rounded-xl transition overflow-hidden border-neutral-300 bg-neutral-50 dark:border-white/20 dark:bg-white/5"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-sofia text-xl text-primary focus:outline-none"
                  onClick={() => toggleIndex(index)}
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
                        className="px-6 pb-6 text-base font-ubuntu"
                      >
                        {item.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
