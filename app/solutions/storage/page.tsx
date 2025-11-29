'use client'

import Link from 'next/link'
import { Database, CheckCircle, ArrowRight, Phone, TrendingDown, Shield } from 'lucide-react'
import { FadeIn, FadeInView, StaggerChildren, StaggerItem } from '../../components/animations'
import { Button } from '../../components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card'
import { Accordion, AccordionItem } from '../../components/ui/accordion'
import {
  exagrid,
  plattanoHot,
  storageStats,
  comparisonTable,
  caseStudies,
  faqs,
  savingsCalculator,
} from '../../lib/constants/storage-solutions'

export default function StoragePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Database className="h-4 w-4 mr-2" />
              Storage Challenges 2025
            </FadeIn>
            <FadeIn delay={0.1} className="text-4xl md:text-6xl font-bold mb-6">
              <h1>
                Intelligent Storage That Scales with Your Business
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} className="text-xl md:text-2xl text-white/90 mb-8">
              <p>
                Advanced deduplication, guaranteed performance, and savings of up to 60%.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="bg-white text-primary-600 hover:bg-gray-100">
                <Link href="/contact">
                  Calculate Your Savings
                  <TrendingDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <a href="tel:+13213138762">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to Storage Expert
                </a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ExaGrid Trust Bar */}
      <section className="py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-center">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <p className="text-sm font-semibold">
                ExaGrid Certified Partner • Tiered Backup Storage Leader
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Stats */}
      <section className="py-16 bg-orange-50 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            <h2>Storage Challenges</h2>
          </FadeInView>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {storageStats.map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeInView delay={0.4} className="text-center mt-8 text-lg text-gray-700 font-semibold">
            <p>Intelligent storage with deduplication and integrated protection.</p>
          </FadeInView>
        </div>
      </section>

      {/* Solutions Side-by-Side */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Storage Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right solution for your infrastructure
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* ExaGrid */}
            <Card className="border-2 border-primary-200">
              <CardHeader className="bg-primary-50">
                <div className="text-5xl mb-4">🗄️</div>
                <CardTitle className="text-2xl">{exagrid.name}</CardTitle>
                <CardDescription className="text-lg">{exagrid.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">{exagrid.description}</p>

                <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {exagrid.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-2xl mr-3">{feature.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900">{feature.title}</p>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-900 mb-3">Ideal For:</h4>
                <ul className="space-y-2 mb-6">
                  {exagrid.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-primary-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-primary-900">
                    Pricing: {exagrid.pricing}
                  </p>
                </div>

                <Button asChild className="w-full">
                  <Link href="/contact">Calculate ROI</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Plattano Hot */}
            <Card className="border-2 border-accent-200">
              <CardHeader className="bg-accent-50">
                <div className="text-5xl mb-4">☁️</div>
                <CardTitle className="text-2xl">{plattanoHot.name}</CardTitle>
                <CardDescription className="text-lg">{plattanoHot.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">{plattanoHot.description}</p>

                <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {plattanoHot.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-2xl mr-3">{feature.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900">{feature.title}</p>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-900 mb-3">Ideal For:</h4>
                <ul className="space-y-2 mb-6">
                  {plattanoHot.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-accent-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-accent-900">
                    Pricing: {plattanoHot.pricing}
                  </p>
                </div>

                <Button asChild className="w-full">
                  <Link href="/contact">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              ExaGrid vs. Plattano Hot Storage: Which to Choose?
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Compare and decide the best fit for your needs
            </p>
          </FadeInView>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Criterion
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">
                    ExaGrid
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-accent-600">
                    Plattano Hot
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonTable.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      {row.criterion}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      {row.exagrid}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      {row.plattanoHot}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center mt-8 text-lg text-gray-700">
            <strong>Recommendation:</strong> Or use both in hybrid architecture!
          </p>
        </div>
      </section>

      {/* Savings Calculator CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-accent-50">
        <FadeInView className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingDown className="h-16 w-16 text-primary-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {savingsCalculator.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {savingsCalculator.description}
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Calculate My Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </FadeInView>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            <h2>Success Stories</h2>
          </FadeInView>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <StaggerItem key={index}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-primary-600">{study.industry}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Challenge:</p>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Solution:</p>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary-600 mb-1">Result:</p>
                      <p className="text-sm font-semibold text-gray-900">{study.result}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            <h2>Frequently Asked Questions</h2>
          </FadeInView>
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                <p className="text-gray-700">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Optimize Your Storage Today
          </h2>
          <p className="text-xl mb-8">
            Save up to 60% with intelligent storage solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="bg-white text-primary-600 hover:bg-gray-100">
              <Link href="/contact">
                Calculate Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Request POC</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
