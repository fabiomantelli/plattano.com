'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { FadeIn } from '../components/animations'
import ContactForm from '../components/forms/ContactForm'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn className="text-4xl md:text-6xl font-bold mb-6">
            <h1>Let&apos;s Talk?</h1>
          </FadeIn>
          <FadeIn delay={0.1} className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            <p>Fill out the form or contact us directly. Response within 4 hours.</p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Direct Contact</CardTitle>
                  <CardDescription>
                    Prefer to reach out directly? Use one of these options
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="tel:+13213138762"
                    className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <Phone className="h-5 w-5 text-primary-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-sm text-gray-600">(321) 313-8762</p>
                    </div>
                  </a>

                  <a
                    href="mailto:plattano@plattano.com"
                    className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-primary-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">plattano@plattano.com</p>
                    </div>
                  </a>

                  <div className="flex items-start p-3">
                    <MapPin className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-600">
                        7345 W Sand Lake Rd Ste 210
                        <br />
                        Orlando, FL 32819 
                        <br />
                        USA
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <div className="flex-grow">
                      <p className="font-medium text-gray-900">Commercial</p>
                      <p className="text-sm text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM EST</p>
                      <p className="text-sm text-gray-600">Saturday: 9:00 AM - 1:00 PM EST</p>
                      <p className="text-sm text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <p className="font-medium text-gray-900 mb-1">Technical Support</p>
                    <p className="text-sm text-gray-600">24/7 for clients with support contract</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-gradient-to-br from-orange-50 via-white to-primary-50 border-primary-200">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">4 hours</div>
                      <div className="text-sm text-gray-600">Average response time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">99.9%</div>
                      <div className="text-sm text-gray-600">Customer satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                      <div className="text-sm text-gray-600">Happy clients</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              7345 W Sand Lake Rd Ste 210, Orlando, FL 32819
            </p>
            <p className="text-gray-500">
              Located in the heart of Orlando, Florida
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8447891234567!2d-81.4850237!3d28.4509833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77fa8715136dd%3A0x2cdc8c3304c14320!2s7345%20W%20Sand%20Lake%20Rd%20Ste%20210%2C%20Orlando%2C%20FL%2032819!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Plattano Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
