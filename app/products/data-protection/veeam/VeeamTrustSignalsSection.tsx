import Image from 'next/image';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

const trustStats = [
  {
    icon: Users,
    number: '450M+',
    label: 'Workloads Protected',
    description: 'Globally by Veeam'
  },
  {
    icon: Award,
    number: '#1',
    label: 'Backup Solution',
    description: 'By Gartner & IDC'
  },
  {
    icon: TrendingUp,
    number: '93%',
    label: 'SLA Compliance',
    description: 'Average customer rate'
  },
  {
    icon: Star,
    number: '4.8/5',
    label: 'Customer Rating',
    description: 'Across all platforms'
  }
];

const certifications = [
  {
    name: 'Veeam Certified Engineer',
    count: '2',
    logo: '/images/certifications/veeam-vce.png'
  },
  {
    name: 'Veeam Sales Professional',
    count: '6',
    logo: '/images/certifications/veeam-vsp.png'
  },
  {
    name: 'Veeam Technical Sales Professional',
    count: '6',
    logo: '/images/certifications/veeam-vtsp.png'
  },
  {
    name: 'Veeam Certified Architect',
    count: '1',
    logo: '/images/certifications/veeam-vca.png'
  }
];

export default function VeeamTrustSignalsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of businesses worldwide who trust Veeam for their critical data protection needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {trustStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Certifications & Partnership */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Partnership Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src="/images/products/data-protection/veeam-data-platform/veeam-logo.png"
                  alt="Veeam Partner"
                  width={120}
                  height={40}
                />
                <div className="h-8 w-px bg-gray-300 dark:bg-gray-600"></div>
                <div>
                  <div className="text-sm font-semibold text-primary">OFFICIAL PARTNER</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Silver Cloud & Service Provider</div>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Certified Veeam Experts in Orlando
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                As an official Veeam Certified Service Provider (VCSP), we maintain the highest 
                technical qualifications to deliver Veeam-powered solutions. Our team holds 
                multiple certifications and is continuously audited by Veeam.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Veeam Accredited Service Provider (VASP)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">24/7 Technical Support Included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Continuous Training & Updates</span>
                </div>
              </div>
            </div>

            {/* Right - Certifications Grid */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Team Certifications</h4>
              <div className="grid grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{cert.count}</div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6">
              "Plattano's Veeam implementation saved us from a ransomware attack. Their expertise and 
              24/7 support gave us complete peace of mind. We recovered everything in under 2 hours."
            </blockquote>
            <div className="text-gray-600 dark:text-gray-400">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm">IT Director, Orlando Healthcare Group</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}