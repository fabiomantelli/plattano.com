'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: 'What is endpoint security software?',
    answer:
      'Endpoint security software is a program installed on laptops, desktops, and/or servers that protects them from a range of attacks that can infect an endpoint – malware, exploits, live attacks, script-based attacks, and more – with the aim of stealing data, making financial profit, or damaging systems, individuals, or organizations.',
  },
  {
    question: 'EPP vs. EDR',
    answer:
      'While Endpoint Protection Platforms (EPP) prevent security threats like known and unknown malware, Endpoint Detection and Response (EDR) detects and responds to threats that EPP and other tools cannot reach. \n\nAlthough integrated into many platforms, EPP and EDR have their unique capabilities. For example: EPP does not require active supervision, while EDR has active threat detection; EPP combats known and some unknown threats, while EDR enables immediate response to incidents that EPP cannot detect; EPP is passive threat prevention, while EDR helps investigate and contain attacks that have already occurred; EPP does not provide visibility into endpoint activities, whereas EDR aggregates endpoint data across an entire organization.',
  },
  {
    question: 'What is considered an endpoint?',
    answer:
      'An endpoint is the endpoint of a communication channel. It refers to parts of a network that not only relay communications along their channels or transfer these communications from one channel to another. An endpoint is the location where communications originate and where they are received.',
  },
  {
    question: 'Are servers considered endpoints?',
    answer:
      'Yes. Servers are considered endpoints, and most servers run Linux. The SentinelOne Linux agent provides the same level of protection for Linux servers as it does for all other endpoints.',
  },
  {
    question: 'What is next-gen endpoint protection?',
    answer:
      'Next-generation endpoint security solutions are proactive. They anticipate and predict threats in various ways. By assessing all activity in a network, both in the kernel and user space, these tools keep an eye out for anything that seems suspicious. Machine learning processes excel at predicting where an attack will occur. Security tools can use out-of-band monitoring to make surveillance more robust and detect viruses, malware, and other types of attacks in advance.',
  },
  {
    question: 'What is an endpoint protection platform?',
    answer:
      'The best endpoint protection is achieved by combining static and behavioral AI into an autonomous agent that defends the endpoint against file-based malware, fileless attacks, malicious scripts, and memory exploits, whether the endpoint is online or offline.\n\nThe SentinelOne Endpoint Protection Platform was evaluated by MITRE ATT&CK Round 2 on April 21, 2020. It had the fewest missed detections and achieved the highest number of combined high-quality detections and the highest number of correlated detections. It’s important to note that SentinelOne doesn’t rely on human analysis and defeats attacks using an autonomous Active EDR approach.',
  },
  {
    question: 'What is the best endpoint protection?',
    answer:
      'Yes. With Veeam’s portable signature model for VUL, you can freely migrate backups between all VUL-enabled workloads.',
  },
  {
    question: 'What is EDR?',
    answer:
      'EDR provides an organization with the ability to monitor endpoints for suspicious behavior and log every activity and event. It then correlates information to provide critical context for detecting advanced threats and, ultimately, executes automated response activities such as isolating an infected endpoint from the network almost in real-time.',
  },
  {
    question: 'What is Active EDR?',
    answer:
      'Active EDR allows tracking and contextualizing everything on a device. ActiveEDR can identify malicious acts in real-time, automating the necessary responses, and enabling easy threat hunting by searching a single IOC.',
  },
  {
    question: 'What is XDR?',
    answer:
      'XDR is the evolution of EDR, endpoint detection, and response. While EDR collects and correlates activity across multiple endpoints, XDR extends the scope of detection beyond endpoints to provide detection, analysis, and response across endpoints, networks, servers, cloud workloads, SIEM, and more. It provides a unified dashboard with a single glass view across multiple tools and attack vectors. This enhanced visibility offers contextualization of these threats to help with triage, investigation, and rapid remediation efforts, collecting and correlating data automatically across multiple security vectors, making it easier to detect threats quickly, so security analysts can respond before the threat scope expands.',
  },
  {
    question: 'How is XDR different from SOAR?',
    answer:
      'Security Orchestration & Automated Response (SOAR) platforms are used by mature security operations teams to build and execute multi-stage playbooks that automate actions across an API-connected security solution ecosystem. On the other hand, XDR will allow ecosystem integrations through the Marketplace and provide mechanisms to automate simple actions against third-party security controls. SOAR is complex, expensive, and requires a highly mature SOC to implement and maintain partner integrations and playbooks. XDR should be “SOAR-lite”: a simple, intuitive, no-code solution that provides XDR platform actionability for connected security tools.',
  },
  {
    question: 'What is the SentinelOne Agent?',
    answer:
      'The SentinelOne agent is a software program deployed on each endpoint, including desktops, laptops, servers, or virtual environments, running autonomously on each device without relying on an Internet connection. The agent resides at the kernel level and monitors all processes in real-time. This process is performed by our Dynamic Behavioral Tracking engine, allowing users to see exactly what happened on an endpoint at each stage of execution. This includes origin, patient zero, process and file activity, log events, network connections, and forensic data.',
  },
  {
    question: 'Is endpoint security the same as antivirus?',
    answer:
      'Endpoint security, or endpoint protection, is the process of protecting user endpoints (a device connected to a network to communicate) from threats like malware, ransomware, and zero-day attacks. Connecting endpoint devices to corporate networks creates attack paths for security threats of all kinds. This could mean exposing important financial information about an organization or leaking personal information about clients that were thought to be secure.\n\nEndpoint Security platforms are qualified as antivirus solutions. For organizations looking to run "antivirus," SentinelOne meets this requirement and much more with comprehensive prevention, detection, and response on endpoints, cloud, container, mobile IoT, data, and more.\n\nHowever, antivirus is an outdated and antiquated technology that relies on malware file signatures. SentinelOne’s autonomous platform does not use traditional antivirus signatures to detect malicious attacks. Instead, we use a combination of machine learning static analysis and dynamic behavioral analysis to protect systems. All files are evaluated in real-time before execution and during execution. Since SentinelOne technology does not use signatures, customers do not need to worry about intensive network updates or daily intensive disk scans on local system I/O.',
  },
  {
    question: 'What is considered an endpoint in endpoint security?',
    answer:
      'Simply put, an endpoint is one end of a communication channel. It refers to parts of a network that not only relay communications along their channels or switch those communications from one channel to another. An endpoint is the location where communications originate and where they are received – in essence, any device that can be connected to a network.\n\nExamples of endpoint devices include:\n\n– Desktops\n– Laptops\n– Mobile devices\n– Tablets\n– Smartwatches\n– IoT devices\n– Point-of-sale (POS) systems\n– Medical devices\n– Digital printers\n– Servers\n\nFrom a computer security perspective, “endpoint” likely refers to a desktop or laptop. Servers and VMs fall under cloud workload protection, while mobile devices (phones, tablets, Chromebooks, etc.) fall under a specialized category of mobile threat defense. Creating and implementing security software on mobile devices is very different from traditional endpoints.\n\nAs technology continues to advance, more mobile devices are being used for business and personal use. Smartphones, smartwatches, tablets, etc., help businesses operate more efficiently. But they also open you to potential security threats at the same time.\n\nEndpoints are now the true perimeter of a business, meaning they have become the front line of security.',
  },
  {
    question: 'Are Norton and Symantec the same?',
    answer:
      'Norton and Symantec are legacy AV solutions. They (and many others) rely on signatures to identify threats. SentinelOne Endpoint Security does not use traditional antivirus signatures to detect malicious attacks. Instead, we use a combination of machine learning static analysis and dynamic behavioral analysis to protect systems. All files are evaluated in real-time before execution and during execution. Since SentinelOne technology does not use signatures, customers do not need to worry about intensive network updates or daily intensive disk scans on local system I/O.',
  },
]

export default function SentinelOneFaq2Section() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Title */}
        <h2 className="text-[44px] font-sofia font-bold text-primary text-center">
          Frequently Asked Questions About Endpoint Security
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
                  className="w-full flex text-primary items-center justify-between px-6 py-5 text-left font-sofia text-xl font-medium focus:outline-none"
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
