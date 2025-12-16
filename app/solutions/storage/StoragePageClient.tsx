'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Database, Check, X } from 'lucide-react'
import { FadeIn, FadeInView, StaggerChildren, StaggerItem } from '../../components/animations'
import { Button } from '../../components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card'
import { Accordion, AccordionItem } from '../../components/ui/accordion'
import Breadcrumbs from '../../components/seo/Breadcrumbs'
import StructuredData from '../../components/seo/StructuredData'
import {
  generateFAQPageSchema,
  generateServiceSchema,
} from '../../lib/seo/generateStructuredData'
import {
  exagrid,
  plattanoHot,
  storageStats,
  comparisonTable,
  caseStudies,
  faqs,
} from '../../lib/constants/storage-solutions'

export default function StoragePageClient() {
  const faqSchema = generateFAQPageSchema(faqs)
  const exagridServiceSchema = generateServiceSchema(
    'ExaGrid Backup Storage',
    exagrid.description,
    'Storage Service'
  )
  const plattanoHotServiceSchema = generateServiceSchema(
    'Plattano Hot Cloud Storage',
    plattanoHot.description,
    'Cloud Storage Service'
  )

  return (
    <>
      <StructuredData data={[faqSchema, exagridServiceSchema, plattanoHotServiceSchema]} />
      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[
              { name: 'Solutions', url: '/#solutions' },
              { name: 'Storage', url: '/solutions/storage' },
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <FadeIn className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <Database className="h-5 w-5 text-green-400" />
                <span className="text-white font-semibold text-sm">ExaGrid & Cloud Storage Partners</span>
              </FadeIn>
              <FadeIn delay={0.1} className="text-4xl md:text-6xl font-bold mb-6">
                <h1>Intelligent Storage That Scales with Your Business</h1>
              </FadeIn>
              <FadeIn delay={0.2} className="text-xl md:text-2xl text-white/90 mb-8">
                <p>
                  Advanced deduplication, guaranteed performance, and up to 85% cost savings with S3-compatible cloud storage.
                </p>
              </FadeIn>
              <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild className="bg-white text-primary-600 hover:bg-gray-100">
                  <Link href="/contact">
                    Calculate Your Savings
                    <ArrowRight className="ml-2 h-5 w-5" />
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

        {/* Stats Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="text-2xl md:text-3xl font-bold text-center mb-12">
              <h2>Storage Challenges in 2025</h2>
            </FadeInView>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {storageStats.map((stat, index) => (
                <StaggerItem key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Storage Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the right storage for your infrastructure
              </p>
            </FadeInView>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* ExaGrid */}
              <StaggerItem>
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-5xl mb-4">{exagrid.tagline.includes('Appliance') ? '🗜️' : '💾'}</div>
                    <CardTitle className="text-3xl">{exagrid.name}</CardTitle>
                    <p className="text-xl text-primary-600 font-semibold mb-4">{exagrid.tagline}</p>
                    <CardDescription className="text-lg">{exagrid.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exagrid.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="text-2xl mr-3">{feature.icon}</span>
                            <div>
                              <p className="font-semibold text-gray-900">{feature.title}</p>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Ideal For:</h4>
                      <ul className="space-y-1">
                        {exagrid.idealFor.map((item, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start">
                            <Check className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button size="lg" className="w-full" asChild>
                      <Link href="/contact">Request ExaGrid Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>

              {/* Plattano Hot Storage */}
              <StaggerItem>
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-5xl mb-4">☁️</div>
                    <CardTitle className="text-3xl">{plattanoHot.name}</CardTitle>
                    <p className="text-xl text-primary-600 font-semibold mb-4">{plattanoHot.tagline}</p>
                    <CardDescription className="text-lg">{plattanoHot.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {plattanoHot.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="text-2xl mr-3">{feature.icon}</span>
                            <div>
                              <p className="font-semibold text-gray-900">{feature.title}</p>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Ideal For:</h4>
                      <ul className="space-y-1">
                        {plattanoHot.idealFor.map((item, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start">
                            <Check className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button size="lg" className="w-full" asChild>
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                Which Solution is Right for You?
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Compare features and choose the best fit
              </p>
            </FadeInView>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Criterion
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      ExaGrid
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Plattano Hot
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.criterion}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">{row.exagrid}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">{row.plattanoHot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center mt-8 text-lg text-gray-700">
              <strong>Recommendation:</strong> For hybrid environments, we recommend ExaGrid for on-premises and Plattano Hot for cloud/DR.
            </p>
          </div>
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
                        <p className="text-sm font-semibold text-primary-600 mb-1">Result:</p>
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
        <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Reduce Storage Costs by Up to 85%
            </h2>
            <p className="text-xl mb-8">
              Calculate your savings and see how intelligent storage can transform your infrastructure
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="bg-white text-primary-600 hover:bg-gray-100">
                <Link href="/contact">
                  Calculate Your Savings
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Talk to Storage Expert</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

