import { ArrowRight, Phone, Calendar, MessageCircle } from 'lucide-react';

export default function VeeamCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 dark:from-primary dark:via-primary/95 dark:to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Don't wait for a disaster to strike. Get enterprise-grade data protection with Veeam today. 
            Our certified experts will design, implement, and manage your solution.
          </p>
        </div>

        {/* Urgency Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/90">Expert Support</div>
          </div>
          <div className="bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/90">Uptime SLA</div>
          </div>
          <div className="bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">Free</div>
            <div className="text-white/90">Assessment</div>
          </div>
        </div>

        {/* Primary CTA Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Immediate Action CTA */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Speak with an Expert Now
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get immediate answers and a custom quote in 15 minutes
              </p>
            </div>
            
            <div className="space-y-4">
              <a
                href="tel:+1-407-555-0123"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (407) 555-0123
              </a>
              
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Available Mon-Fri 8AM-6PM EST
              </div>
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Schedule Free Assessment
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get a comprehensive analysis of your current backup strategy
              </p>
            </div>
            
            <div className="space-y-4">
              <a
                href="/contact?service=veeam-assessment"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold text-lg rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Assessment
              </a>
              
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Usually scheduled within 24 hours
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact?service=veeam-quote"
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 dark:bg-white/20 dark:hover:bg-white/30 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm"
          >
            Get Custom Quote
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
          
          <a
            href="/resources/veeam-guide"
            className="inline-flex items-center px-6 py-3 border-2 border-white/30 hover:border-white/50 dark:border-white/30 dark:hover:border-white/50 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm"
          >
            Download Buyer's Guide
          </a>
          
          <a
            href="mailto:veeam@plattano.com"
            className="inline-flex items-center px-6 py-3 text-white/90 hover:text-white font-semibold transition-colors"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Email Us
          </a>
        </div>

        {/* Trust Reinforcement */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-white/80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm">Veeam Gold Partner</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm">500+ Implementations</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="mt-8 text-center">
          <p className="text-white/90 text-lg">
            <strong>Don't wait for a data disaster.</strong> Every day without proper backup protection puts your business at risk.
          </p>
        </div>
      </div>
    </section>
  );
}