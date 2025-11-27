'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is Veeam and why do I need it?',
        answer: 'Veeam is the #1 backup and data protection platform that protects your business from data loss, ransomware, and system failures. Unlike basic backup solutions, Veeam provides instant recovery, ransomware protection, and works across physical, virtual, and cloud environments. Every business needs reliable data protection - Veeam ensures you can recover quickly from any disaster.'
      },
      {
        question: 'How is Veeam different from other backup solutions?',
        answer: 'Veeam stands out with its instant VM recovery, built-in ransomware protection, and universal compatibility. While other solutions may take hours to restore, Veeam can get your systems running in minutes. It also provides immutable backups that ransomware cannot encrypt, and works seamlessly across VMware, Hyper-V, physical servers, and all major clouds.'
      },
      {
        question: 'What types of businesses benefit most from Veeam?',
        answer: 'Any business that cannot afford downtime or data loss benefits from Veeam. This includes healthcare organizations, financial services, manufacturing, legal firms, and growing SMBs. If your business relies on email, databases, or any digital systems, Veeam provides the protection and quick recovery you need.'
      }
    ]
  },
  {
    category: 'Implementation',
    questions: [
      {
        question: 'How long does a Veeam implementation take?',
        answer: 'Most Veeam implementations take 1-3 weeks depending on your environment size and complexity. We start with a free assessment, design your solution, then handle installation, configuration, and testing. Our certified team ensures minimal disruption to your operations during the process.'
      },
      {
        question: 'Will Veeam work with my existing infrastructure?',
        answer: 'Yes! Veeam is designed for universal compatibility. It works with VMware, Hyper-V, physical servers, AWS, Azure, Google Cloud, Microsoft 365, and more. Our team will assess your current environment and design a solution that integrates seamlessly with your existing systems.'
      },
      {
        question: 'Do you provide training for our IT staff?',
        answer: 'Absolutely. Every Veeam implementation includes comprehensive training for your IT team. We provide hands-on training, documentation, and ongoing support to ensure your staff is comfortable managing the solution. We also offer advanced training for teams who want to become Veeam certified.'
      }
    ]
  },
  {
    category: 'Pricing & Support',
    questions: [
      {
        question: 'How much does Veeam cost?',
        answer: 'Veeam pricing varies based on your specific needs, number of workloads, and chosen features. We offer flexible licensing options including perpetual licenses, subscription models, and rental options. Contact us for a free assessment and custom quote based on your requirements.'
      },
      {
        question: 'What support do you provide after implementation?',
        answer: 'We provide 24/7 monitoring and support for all Veeam implementations. This includes proactive monitoring, issue resolution, regular health checks, and direct escalation to Veeam when needed. Your Veeam rental license includes 2 hours of basic support monthly, with premium support options available.'
      },
      {
        question: 'Can you manage our Veeam environment completely?',
        answer: 'Yes! Our managed backup service takes complete responsibility for your Veeam environment. We handle monitoring, maintenance, updates, testing, and reporting while you focus on your business. This includes guaranteed SLAs and regular optimization to ensure peak performance.'
      }
    ]
  },
  {
    category: 'Security & Compliance',
    questions: [
      {
        question: 'How does Veeam protect against ransomware?',
        answer: 'Veeam provides multiple layers of ransomware protection including immutable backups that cannot be encrypted or deleted, air-gapped storage options, and built-in threat detection. If ransomware strikes, you can restore from clean, verified backup copies and be back online quickly.'
      },
      {
        question: 'Does Veeam help with compliance requirements?',
        answer: 'Yes, Veeam includes comprehensive reporting and audit trails that help with compliance requirements like HIPAA, SOX, PCI-DSS, and others. We can configure retention policies, generate compliance reports, and ensure your backup strategy meets regulatory requirements.'
      },
      {
        question: 'Where is my backup data stored?',
        answer: 'Your backup data can be stored on-premises, in the cloud, or both depending on your requirements. We offer secure cloud storage options, help you implement the 3-2-1 backup rule, and ensure your data is always encrypted both in transit and at rest.'
      }
    ]
  }
];

export default function VeeamFaqSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get answers to the most common questions about Veeam solutions and our services
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-primary">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openItems.includes(itemId);
                  
                  return (
                    <div key={faqIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                            {faq.question}
                          </h4>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Our Veeam experts are here to help. Get personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Our Experts
            </a>
            <a
              href="tel:+1-407-555-0123"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-colors"
            >
              Call: (407) 555-0123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}