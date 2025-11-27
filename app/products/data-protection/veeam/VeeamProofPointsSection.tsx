import Image from 'next/image';
import { Clock, DollarSign, Shield, TrendingUp, CheckCircle, Quote } from 'lucide-react';

const proofPoints = [
  {
    icon: Clock,
    metric: '15 Minutes',
    description: 'Average Recovery Time',
    detail: 'Get your systems back online in minutes, not hours'
  },
  {
    icon: DollarSign,
    metric: '85%',
    description: 'Cost Reduction',
    detail: 'Compared to traditional backup solutions'
  },
  {
    icon: Shield,
    metric: '99.9%',
    description: 'Success Rate',
    detail: 'Successful recoveries across all client environments'
  },
  {
    icon: TrendingUp,
    metric: '500+',
    description: 'Businesses Protected',
    detail: 'In Orlando and Central Florida region'
  }
];

const caseStudies = [
  {
    company: 'Orlando Medical Center',
    industry: 'Healthcare',
    challenge: 'Ransomware attack encrypted critical patient data systems',
    solution: 'Veeam immutable backups enabled complete recovery in 2 hours',
    result: 'Zero data loss, $2M+ in downtime costs avoided',
    logo: '/images/case-studies/healthcare-icon.svg'
  },
  {
    company: 'Central Florida Bank',
    industry: 'Financial Services',
    challenge: 'Compliance requirements for 7-year data retention',
    solution: 'Veeam cloud backup with automated compliance reporting',
    result: 'Passed all audits, 60% reduction in storage costs',
    logo: '/images/case-studies/finance-icon.svg'
  },
  {
    company: 'Orlando Manufacturing',
    industry: 'Manufacturing',
    challenge: 'Multiple site backup management complexity',
    solution: 'Centralized Veeam management across 5 locations',
    result: '90% reduction in backup management time',
    logo: '/images/case-studies/manufacturing-icon.svg'
  }
];

const testimonials = [
  {
    quote: "The Plattano team's Veeam implementation saved our business. When ransomware hit, we were back online in under 2 hours with zero data loss.",
    author: "Michael Rodriguez",
    title: "IT Director",
    company: "Orlando Regional Hospital"
  },
  {
    quote: "Moving to Veeam with Plattano cut our backup costs by 70% while improving our recovery times dramatically. Best decision we've made.",
    author: "Sarah Chen",
    title: "CTO",
    company: "Florida Tech Solutions"
  },
  {
    quote: "Their 24/7 support and proactive monitoring means we never worry about our backups. It just works, every single time.",
    author: "David Thompson",
    title: "Operations Manager",
    company: "Central Florida Credit Union"
  }
];

export default function VeeamProofPointsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Proof Points */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proven Results You Can Trust
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's the measurable impact our Veeam solutions 
            have delivered for businesses just like yours.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {proofPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <point.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{point.metric}</div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{point.description}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{point.detail}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Real Success Stories
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See how businesses in Orlando overcame their data protection challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{study.company}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{study.industry}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">Result:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hear directly from IT leaders who trust Plattano for their Veeam solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 backdrop-blur rounded-xl p-6 border border-gray-200 dark:border-gray-600 shadow-sm">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{testimonial.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Calculate Your Potential Savings
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            See how much you could save with Veeam solutions tailored to your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors">
              Get ROI Analysis
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-white font-semibold rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}