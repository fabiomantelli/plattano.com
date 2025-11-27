import Link from 'next/link';
import { 
  Shield, 
  Cloud, 
  Server, 
  Eye, 
  RefreshCw, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Database,
  Smartphone
} from 'lucide-react';

const solutions = [
  {
    category: 'Backup & Recovery',
    icon: Database,
    color: 'bg-blue-500',
    description: 'Complete backup and recovery for all your workloads',
    problems: [
      'Data loss from hardware failures',
      'Accidental file deletions',
      'System crashes and corruption',
      'Need for quick recovery'
    ],
    solutions: [
      'Automated daily backups',
      'Instant VM recovery',
      '15-minute recovery objectives',
      'Cross-platform protection'
    ],
    products: [
      'Veeam Backup & Replication',
      'Veeam for Microsoft 365',
      'Veeam for AWS/Azure/GCP'
    ],
    cta: 'Protect Your Data',
    ctaLink: '/contact?solution=backup'
  },
  {
    category: 'Ransomware Protection',
    icon: Shield,
    color: 'bg-red-500',
    description: 'Advanced protection against ransomware and cyber threats',
    problems: [
      'Ransomware attacks increasing',
      'Encrypted files and systems',
      'Business downtime costs',
      'Compliance requirements'
    ],
    solutions: [
      'Immutable backup copies',
      'Threat detection & alerts',
      'Clean recovery points',
      'Air-gapped storage'
    ],
    products: [
      'Veeam Data Platform',
      'Ransomware Hardening',
      'Secure Restore'
    ],
    cta: 'Stop Ransomware',
    ctaLink: '/contact?solution=ransomware'
  },
  {
    category: 'Cloud Backup',
    icon: Cloud,
    color: 'bg-green-500',
    description: 'Secure cloud backup for hybrid and multi-cloud environments',
    problems: [
      'Cloud data not automatically backed up',
      'Vendor lock-in concerns',
      'Compliance in the cloud',
      'Multi-cloud complexity'
    ],
    solutions: [
      'Native cloud integrations',
      'Cross-cloud portability',
      'Automated compliance',
      'Cost optimization'
    ],
    products: [
      'Veeam for AWS',
      'Veeam for Microsoft Azure',
      'Veeam for Google Cloud'
    ],
    cta: 'Secure Cloud Data',
    ctaLink: '/contact?solution=cloud'
  },
  {
    category: 'Monitoring & Analytics',
    icon: Eye,
    color: 'bg-purple-500',
    description: 'Complete visibility and control over your backup infrastructure',
    problems: [
      'Backup failures going unnoticed',
      'No visibility into backup health',
      'Compliance reporting challenges',
      'Capacity planning difficulties'
    ],
    solutions: [
      'Real-time monitoring',
      'Predictive analytics',
      'Automated reporting',
      'Capacity forecasting'
    ],
    products: [
      'Veeam ONE',
      'Backup monitoring',
      'Compliance dashboards'
    ],
    cta: 'Get Visibility',
    ctaLink: '/contact?solution=monitoring'
  },
  {
    category: 'Disaster Recovery',
    icon: RefreshCw,
    color: 'bg-orange-500',
    description: 'Automated disaster recovery orchestration and testing',
    problems: [
      'Manual DR processes',
      'Untested recovery plans',
      'Long recovery times',
      'Compliance requirements'
    ],
    solutions: [
      'Automated failover',
      'Regular DR testing',
      'Orchestrated recovery',
      'SLA compliance'
    ],
    products: [
      'Veeam Recovery Orchestrator',
      'Disaster Recovery as a Service',
      'DR testing automation'
    ],
    cta: 'Plan Recovery',
    ctaLink: '/contact?solution=disaster-recovery'
  },
  {
    category: 'Microsoft 365',
    icon: Smartphone,
    color: 'bg-indigo-500',
    description: 'Complete protection for your Microsoft 365 environment',
    problems: [
      'Microsoft doesn\'t backup your data',
      'Accidental deletions',
      'Retention policy gaps',
      'eDiscovery requirements'
    ],
    solutions: [
      'Complete M365 backup',
      'Granular recovery',
      'Long-term retention',
      'Advanced eDiscovery'
    ],
    products: [
      'Veeam for Microsoft 365',
      'Teams backup',
      'SharePoint protection'
    ],
    cta: 'Protect M365',
    ctaLink: '/contact?solution=microsoft-365'
  }
];

export default function VeeamSolutionsByNeedSection() {
  return (
    <section id="solutions" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your Perfect Veeam Solution
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every business has unique data protection needs. Discover which Veeam solution 
            is right for your specific challenges and requirements.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              
              {/* Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`${solution.color} p-3 rounded-lg`}>
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{solution.category}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{solution.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  
                  {/* Problems */}
                  <div>
                    <h4 className="flex items-center text-sm font-semibold text-red-600 dark:text-red-400 mb-3">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Common Challenges
                    </h4>
                    <ul className="space-y-2">
                      {solution.problems.map((problem, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="flex items-center text-sm font-semibold text-green-600 dark:text-green-400 mb-3">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Our Solutions
                    </h4>
                    <ul className="space-y-2">
                      {solution.solutions.map((sol, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {sol}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Products */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.products.map((product, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={solution.ctaLink}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 group"
                >
                  {solution.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Not Sure Which Solution You Need?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our Veeam experts will assess your current infrastructure and recommend 
            the perfect combination of solutions for your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}