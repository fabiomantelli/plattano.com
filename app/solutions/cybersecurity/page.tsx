import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, ArrowRight, Phone, AlertTriangle, Check, X } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs'
import { Accordion, AccordionItem } from '../../components/ui/accordion'
import {
  sentinelOne,
  rainforest,
  threatStats,
  comparisonTable,
  caseStudies,
  faqs,
} from '../../lib/constants/cybersecurity-solutions'

export const metadata: Metadata = {
  title: 'Cybersecurity Solutions | Plattano',
  description:
    'AI-powered defense against advanced threats. SentinelOne and Rainforest protection.',
}

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-red-500 via-primary-500 to-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Threat Landscape 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intelligent Defense Against Advanced Threats
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              AI-powered protection with SentinelOne and Rainforest. Automatic detection and response 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/contact">
                  Free 30-Day Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <a href="tel:+13213138762">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to Security Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            The Threat Landscape in 2025
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg text-red-400 font-semibold">
            Is your company prepared?
          </p>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Cybersecurity Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right protection for your business
            </p>
          </div>

          <Tabs defaultValue="sentinelone" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="sentinelone">
                  🛡️ SentinelOne
                </TabsTrigger>
                <TabsTrigger value="rainforest">
                  🌐 Rainforest
                </TabsTrigger>
              </TabsList>
            </div>

            {/* SentinelOne Tab */}
            <TabsContent value="sentinelone">
              <div className="space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {sentinelOne.name}
                  </h3>
                  <p className="text-xl text-primary-600 font-semibold mb-4">
                    {sentinelOne.tagline}
                  </p>
                  <p className="text-lg text-gray-600">
                    {sentinelOne.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sentinelOne.features.map((feature, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="text-4xl mb-2">{feature.icon}</div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <div className="bg-primary-50 rounded-xl p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Use Cases:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {sentinelOne.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary-50 rounded-xl p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Differentiators:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {sentinelOne.differentiators.map((diff, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-secondary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{diff}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Start 30-Day Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Rainforest Tab */}
            <TabsContent value="rainforest">
              <div className="space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {rainforest.name}
                  </h3>
                  <p className="text-xl text-secondary-600 font-semibold mb-4">
                    {rainforest.tagline}
                  </p>
                  <p className="text-lg text-gray-600">
                    {rainforest.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rainforest.features.map((feature, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="text-4xl mb-2">{feature.icon}</div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <div className="bg-secondary-50 rounded-xl p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Use Cases:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {rainforest.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary-50 rounded-xl p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Differentiators:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {rainforest.differentiators.map((diff, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{diff}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Request Free Scan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Which Solution is Right for You?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Compare features and choose the best fit
          </p>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Need
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    SentinelOne
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Rainforest
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Both
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonTable.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">{row.need}</td>
                    <td className="px-6 py-4 text-center">
                      {row.sentinelone ? (
                        <Check className="h-5 w-5 text-secondary-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.rainforest ? (
                        <Check className="h-5 w-5 text-secondary-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.sentinelone && row.rainforest ? (
                        <Check className="h-5 w-5 text-primary-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center mt-8 text-lg text-gray-700">
            <strong>Recommendation:</strong> For complete protection, we recommend both solutions integrated.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-red-600">{study.industry}</CardTitle>
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
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
      <section className="py-20 bg-gradient-to-r from-red-500 via-primary-500 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Don't Wait for an Attack to Happen
          </h2>
          <p className="text-xl mb-8">
            Protect your business now with AI-powered security
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Talk to Security Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
