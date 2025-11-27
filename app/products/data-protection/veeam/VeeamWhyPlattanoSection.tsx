import Image from 'next/image';
import Link from 'next/link';
import { 
  Award, 
  Clock, 
  Users, 
  MapPin, 
  Phone, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star,
  Headphones
} from 'lucide-react';

const differentiators = [
  {
    icon: Award,
    title: 'Certified Expertise',
    description: 'Our team holds 15+ Veeam certifications including VCE, VTSP, and VCA levels',
    benefits: [
      'Veeam Certified Engineers on staff',
      'Continuous training and updates',
      'Best practice implementations',
      'Proven deployment methodologies'
    ]
  },
  {
    icon: MapPin,
    title: 'Local Orlando Presence',
    description: 'Based right here in Orlando with deep understanding of local business needs',
    benefits: [
      'On-site support when needed',
      'Local compliance knowledge',
      'Same time zone support',
      'Face-to-face consultations'
    ]
  },
  {
    icon: Clock,
    title: '24/7 Proactive Support',
    description: 'Round-the-clock monitoring and support to ensure your backups never fail',
    benefits: [
      '24/7/365 monitoring',
      'Proactive issue resolution',
      '15-minute response times',
      'Escalation to Veeam when needed'
    ]
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    description: '500+ successful Veeam deployments with 99.9% client satisfaction rate',
    benefits: [
      '10+ years Veeam experience',
      'Zero failed recoveries',
      'Industry-leading SLAs',
      'Client retention rate >95%'
    ]
  }
];

const serviceIncludes = [
  'Free initial assessment and consultation',
  'Custom solution design and architecture',
  'Professional installation and configuration',
  'Data migration and testing',
  'Staff training and documentation',
  '24/7 monitoring and support',
  'Regular health checks and optimization',
  'Compliance reporting and auditing'
];

const supportLevels = [
  {
    name: 'Basic Support',
    description: 'Included with all Veeam licenses',
    features: [
      '2 hours monthly support included',
      'Email and phone support',
      'Basic monitoring',
      'Standard response times'
    ],
    price: 'Included'
  },
  {
    name: 'Premium Support',
    description: 'Enhanced support for critical environments',
    features: [
      'Unlimited support hours',
      'Priority response (15 min)',
      'Proactive monitoring',
      'Quarterly health checks'
    ],
    price: 'From $500/month'
  },
  {
    name: 'Managed Service',
    description: 'Complete hands-off backup management',
    features: [
      'Full backup management',
      'Proactive optimization',
      'Monthly reporting',
      'Guaranteed SLAs'
    ],
    price: 'Custom pricing'
  }
];

export default function VeeamWhyPlattanoSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Plattano for Your Veeam Solutions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As Orlando's premier Veeam partner, we combine deep technical expertise with 
            local service to deliver exceptional results for your business.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {differentiators.map((diff, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg flex-shrink-0">
                  <diff.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{diff.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{diff.description}</p>
                  <ul className="space-y-2">
                    {diff.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Complete Veeam Service Package
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                When you choose Plattano for your Veeam implementation, you get a complete 
                service package designed to ensure your success from day one.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {serviceIncludes.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8 text-center">
                <div className="mb-6">
                  <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dedicated Team</h4>
                  <p className="text-gray-600 dark:text-gray-300">Your success is our priority</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Levels */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Support Level
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From basic support to fully managed services, we have options for every business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg ${index === 1 ? 'ring-2 ring-primary' : ''} relative`}>
                {index === 1 && (
                  <div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className={`${index === 1 ? 'pt-4' : ''}`}>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{level.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{level.description}</p>
                  
                  <div className="text-2xl font-bold text-primary mb-6">{level.price}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={`/contact?support=${level.name.toLowerCase().replace(' ', '-')}`}
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    index === 1 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Protect Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ Orlando businesses who trust Plattano for their Veeam solutions. 
            Get started with a free assessment today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+1-407-555-0123"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (407) 555-0123
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                15-min response time
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                99.9% success rate
              </div>
              <div className="flex items-center">
                <Headphones className="h-4 w-4 mr-1" />
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}