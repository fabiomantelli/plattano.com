import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Users, Award } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
import {
  companyInfo,
  values,
  certifications,
  team,
  timeline,
  stats,
  whyChooseUs,
} from '../lib/constants/about'

export const metadata: Metadata = {
  title: 'About Plattano | Your Trusted IT Partner',
  description:
    'Learn about Plattano - 15+ years protecting businesses in Florida with enterprise IT solutions.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted IT Partner in Florida
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {companyInfo.mission}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {companyInfo.location}
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                {companyInfo.employees} Team Members
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Since {companyInfo.founded}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <div className="text-5xl mb-4">🎯</div>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription className="text-lg">
                  {companyInfo.mission}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-5xl mb-4">🚀</div>
                <CardTitle>Our Vision</CardTitle>
                <CardDescription className="text-lg">
                  {companyInfo.vision}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-primary-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              7+ years of growth and innovation
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex items-start bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-2xl font-bold text-primary-600">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Certified by industry-leading technology providers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-5xl mb-4">{cert.badge}</div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {team.engineers}
                </div>
                <CardTitle className="text-lg">Certified Engineers</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {team.certifications}
                </div>
                <CardTitle className="text-lg">Technical Certifications</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {team.experience}
                </div>
                <CardTitle className="text-lg">Average Experience</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {team.languages.length}
                </div>
                <CardTitle className="text-lg">Languages Supported</CardTitle>
                <CardDescription className="text-xs">
                  {team.languages.join(', ')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Plattano?
            </h2>
            <p className="text-xl text-gray-600">
              What makes us different from other IT providers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <CardTitle>{reason.title}</CardTitle>
                  <CardDescription>{reason.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s discuss how we can help protect and scale your business
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="bg-white text-primary-600 hover:bg-gray-100">
              <Link href="/contact">
                Schedule a Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <a href="tel:+13213138762">Call: (321) 313-8762</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
