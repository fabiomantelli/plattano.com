import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, ArrowRight, CheckCircle, Cloud, Server, Eye, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Protection Solutions | Plattano Technologies Orlando',
  description: 'Comprehensive data protection solutions in Orlando. Protect your business with enterprise-grade backup, recovery, and cybersecurity solutions.',
  keywords: [
    'data protection Orlando',
    'backup solutions Florida',
    'business continuity',
    'disaster recovery',
    'cybersecurity Orlando',
    'data backup services'
  ],
  robots: 'index, follow',
  canonical: 'https://plattano.com/products/data-protection',
  openGraph: {
    title: 'Data Protection Solutions | Plattano Technologies',
    description: 'Protect your business data with enterprise-grade solutions. Comprehensive backup, recovery, and security services in Orlando.',
    url: 'https://plattano.com/products/data-protection',
    type: 'website',
  },
};

const solutions = [
  {
    title: 'Veeam Solutions',
    description: 'Complete data protection with industry-leading Veeam technology. From backup and recovery to ransomware protection.',
    icon: Shield,
    href: '/products/data-protection/veeam',
    features: [
      '99.5% Recovery Success Rate',
      '15-Minute Recovery Time',
      'Ransomware Protection',
      'Cloud & On-Premises',
      '24/7 Expert Support'
    ],
    color: 'bg-green-500',
    popular: true
  }
];

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      
      {/* Hero Section */}
      <section className="relative w-full flex items-center overflow-hidden bg-white dark:bg-black text-black dark:text-white" style={{height: 'calc(100vh - var(--header-height, 6rem))', marginTop: 'var(--header-height, 6rem)', minHeight: '600px'}}>
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ED6E00' fill-opacity='0.4'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row lg:flex-row items-center gap-4 sm:gap-6 md:gap-7 lg:gap-8 px-4 sm:px-6 md:px-12 lg:px-24 py-2 sm:py-4 md:py-6 lg:py-8">
          
          {/* Left Content */}
          <div 
            className="flex-1 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center md:text-left lg:text-left"
          >
            
            {/* Enterprise Badge */}
            <div 
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-primary/30 rounded-2xl shadow-2xl"
            >
              <Shield className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-primary font-black text-xs tracking-wider">ENTERPRISE DATA PROTECTION</span>
              <div className="ml-1.5 sm:ml-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-pulse shadow-lg"></div>
            </div>
            
            {/* Main Headline */}
            <div 
              className="space-y-1 sm:space-y-2"
            >
              <h1 className="font-sofia font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.85] tracking-tight">
                <span className="block text-gray-900 dark:text-white">COMPLETE</span>
                <span className="block text-primary drop-shadow-2xl">DATA PROTECTION</span>
                <span className="block text-gray-700 dark:text-gray-300 text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mt-1 sm:mt-2">
                  for Orlando Businesses
                </span>
              </h1>
              
              <div className="flex items-center justify-center md:justify-start lg:justify-start space-x-1.5 sm:space-x-2 mt-2 sm:mt-3">
                <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-primary rounded-full shadow-lg"></div>
                <div className="h-0.5 sm:h-1 w-4 sm:w-6 bg-primary/60 rounded-full shadow-lg"></div>
                <div className="h-0.5 sm:h-1 w-2 sm:w-3 bg-primary/30 rounded-full shadow-lg"></div>
              </div>
            </div>
            
            {/* Power Subtitle */}
            <p 
              className="text-sm sm:text-base lg:text-xl font-semibold text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              Enterprise-grade solutions that <span className="text-primary font-bold">guarantee</span> your data stays safe, accessible, and recoverable — <span className="text-primary font-bold">always</span>.
            </p>

            {/* Performance Metrics */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-3 lg:gap-4 py-2 sm:py-3"
            >
              <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-green-200/50 dark:border-green-700/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 bg-green-100 dark:bg-green-900/40 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white truncate">99.9%</div>
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Data Recovery</div>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-200/50 dark:border-blue-700/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white truncate">&lt; 15min</div>
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Recovery Time</div>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/30 dark:border-primary/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 sm:col-span-1 col-span-1">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white truncate">24/7</div>
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Expert Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-2 sm:gap-3 md:gap-3 lg:gap-4 pt-2 sm:pt-3"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-orange-600 text-white font-black text-xs sm:text-sm rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Get Free Assessment
                  <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href="#data-protection-solutions"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-black text-xs sm:text-sm rounded-2xl sm:rounded-3xl shadow-2xl hover:border-primary hover:text-primary hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  View Solutions
                  <Eye className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-125 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Visual Showcase */}
          <div 
            className="relative flex-1 max-w-2xl hidden md:block lg:block"
          >
            
            {/* Main Dashboard */}
            <div className="relative bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/95 dark:to-gray-900/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-3 sm:space-y-4">
                  <Shield className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-primary mx-auto" />
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Data Protection</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Enterprise Solutions</p>
                  </div>
                </div>
              </div>
              
              {/* Live Status Indicator */}
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-green-500/95 backdrop-blur-sm text-white px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black shadow-2xl flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
                <span>PROTECTED</span>
              </div>
            </div>
            
            {/* Floating Achievement Badges */}
            <div 
              className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-2xl sm:rounded-3xl text-xs sm:text-sm font-black shadow-2xl transform rotate-[-8deg] hover:rotate-0 transition-transform duration-300 hidden md:block"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Cloud className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>CLOUD BACKUP</span>
              </div>
            </div>
            
            <div 
              className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-2xl sm:rounded-3xl text-xs sm:text-sm font-black shadow-2xl transform rotate-[8deg] hover:rotate-0 transition-transform duration-300 hidden md:block"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>INSTANT RECOVERY</span>
              </div>
            </div>
            
            <div 
              className="absolute top-1/2 -left-3 sm:-left-6 bg-gradient-to-r from-primary to-orange-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs font-black shadow-2xl transform rotate-[-90deg] hover:rotate-[-85deg] transition-transform duration-300 hidden lg:block"
            >
              <span>ENTERPRISE GRADE</span>
            </div>
            
            {/* Premium Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-green-500/20 rounded-2xl sm:rounded-3xl blur-3xl -z-10 scale-125 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Data Protection Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade data protection solutions designed to keep your business secure and operational.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                
                {solution.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold z-10 whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 lg:p-12 ${solution.popular ? 'pt-10 lg:pt-12' : ''}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    
                    {/* Left Content */}
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`${solution.color} p-4 rounded-xl`}>
                          <solution.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{solution.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        {solution.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={solution.href}
                        className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 h-64 flex items-center justify-center">
                        <solution.icon className="h-24 w-24 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait for a data disaster. Get a free assessment of your current data protection strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/products/data-protection/veeam"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View Veeam Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}