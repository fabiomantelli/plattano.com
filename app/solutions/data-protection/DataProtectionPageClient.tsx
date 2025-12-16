'use client'

import Link from 'next/link'
import { Shield, CheckCircle, ArrowRight, Phone } from 'lucide-react'
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
  veeamSolutions,
  managedServices,
  dataProtectionStats,
  whyPlattano,
  caseStudies,
  faqs,
} from '../../lib/constants/veeam-solutions'

export default function DataProtectionPageClient() {
  const faqSchema = generateFAQPageSchema(faqs)
  const veeamServiceSchema = generateServiceSchema(
    'Veeam Data Protection Solutions',
    'Complete data protection with backup, recovery, and ransomware protection for physical, virtual, and cloud environments.',
    'Data Protection Service'
  )

  return (
    <>
      <StructuredData data={[faqSchema, veeamServiceSchema]} />
      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[
              { name: 'Solutions', url: '/#solutions' },
              { name: 'Data Protection', url: '/solutions/data-protection' },
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <FadeIn className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-white font-semibold text-sm">Veeam Gold Partner</span>
              </FadeIn>
              <FadeIn delay={0.1} className="text-4xl md:text-6xl font-bold mb-6">
                <h1>Protect Your Critical Data with Veeam</h1>
              </FadeIn>
              <FadeIn delay={0.2} className="text-xl md:text-2xl text-white/90 mb-8">
                <p>
                  Backup, recovery, and ransomware protection for physical, virtual, and cloud
                  environments.
                </p>
              </FadeIn>
              <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Talk to a Specialist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white/10"
                >
                  <a href="tel:+13213138762">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Veeam Trust Bar */}
        <section className="py-4 bg-gradient-to-r from-green-600 via-green-500 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-center">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <p className="text-sm font-semibold">
                  Veeam Certified Partner • Trusted by 450,000+ customers worldwide
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-red-50 border-y border-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              <h2>Why Data Protection is Critical?</h2>
            </FadeInView>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataProtectionStats.map((stat, index) => (
                <StaggerItem key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerChildren>
            <FadeInView delay={0.4} className="text-center mt-8 text-lg text-gray-700 font-semibold">
              <p>Don&apos;t be a statistic. Protect yourself now.</p>
            </FadeInView>
          </div>
        </section>

        {/* Veeam Solutions */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Veeam Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive data protection for every environment
              </p>
            </FadeInView>

            <Accordion>
              {veeamSolutions.map((solution, index) => (
                <AccordionItem
                  key={solution.id}
                  title={`${solution.icon} ${solution.title}`}
                  defaultOpen={index === 0}
                >
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg">{solution.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Use Cases:</h4>
                      <ul className="space-y-2">
                        {solution.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span className="text-gray-700">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild>
                      <Link href="/contact">Request Demo</Link>
                    </Button>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Managed Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Prefer to Leave it to Us?
              </h2>
              <p className="text-xl text-gray-600">Fully managed services with 24/7 support</p>
            </div>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {managedServices.map((service) => (
                <StaggerItem key={service.id}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-secondary-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Why Plattano */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              <h2>Why Choose Plattano as Your Veeam Partner?</h2>
            </FadeInView>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {whyPlattano.map((item, index) => (
                <StaggerItem key={index} className="text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-primary-50">
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
        <section className="py-20 bg-white">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Protect Your Data?</h2>
            <p className="text-xl mb-8">
              Schedule a free consultation with our Veeam specialists
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <Link href="/contact">
                  Talk to a Specialist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

