'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '../ui/button'
import { contactFormSchema, type ContactFormData } from '../../lib/validations/contact'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Implement API call to /api/contact
      console.log('Form data:', data)
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 flex items-start">
          <CheckCircle className="h-5 w-5 text-secondary-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-secondary-900">Message sent successfully!</p>
            <p className="text-sm text-secondary-700 mt-1">
              We'll get back to you within 4 hours.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
          <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-red-900">Error sending message</p>
            <p className="text-sm text-red-700 mt-1">
              Please try again or call us directly.
            </p>
          </div>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            {...register('lastName')}
            type="text"
            id="lastName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Corporate Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="john@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company *
        </label>
        <input
          {...register('company')}
          type="text"
          id="company"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="Your Company Inc."
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone (optional)
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
          I'm interested in *
        </label>
        <select
          {...register('interest')}
          id="interest"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
        >
          <option value="">Select an option</option>
          <option value="data-protection">Data Protection (Veeam)</option>
          <option value="cybersecurity">Cybersecurity (SentinelOne/Rainforest)</option>
          <option value="storage">Storage (ExaGrid/Plattano Hot)</option>
          <option value="managed-services">Managed Services</option>
          <option value="other">Other</option>
        </select>
        {errors.interest && (
          <p className="mt-1 text-sm text-red-600">{errors.interest.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message (optional)
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
          placeholder="Tell us about your needs..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy Policy */}
      <div className="flex items-start">
        <input
          {...register('acceptPrivacy')}
          type="checkbox"
          id="acceptPrivacy"
          className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label htmlFor="acceptPrivacy" className="ml-3 text-sm text-gray-600">
          I accept the{' '}
          <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
            privacy policy
          </a>{' '}
          and agree to receive communications from Plattano *
        </label>
      </div>
      {errors.acceptPrivacy && (
        <p className="text-sm text-red-600">{errors.acceptPrivacy.message}</p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-center text-gray-500">
        Average response time: 4 hours
      </p>
    </form>
  )
}
