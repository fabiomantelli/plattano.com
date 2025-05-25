'use client'

import { useState } from 'react'
import { Phone, Mail, Instagram, Clock } from 'lucide-react'
import Link from 'next/link'
import ContactForm  from '@/app/components/ContactForm'

interface ContactForm {
  name: string
  company: string
  phone: string
  email: string
  note: string
}

export default function Footer() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    company: '',
    phone: '',
    email: '',
    note: '',
  })

  return (
    <footer className="w-full bg-neutral-100 text-neutral-900 dark:bg-black dark:text-white">
      {/* Columns */}
      <div className="mx-auto max-w-7xl py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center md:justify-items-start text-center md:text-left px-8 sm:px-12 lg:px-24">
        
        {/* Left Column */}
        <div className="space-y-6 w-full max-w-sm">
          <h3 className="text-2xl font-semibold">CONNECT WITH US</h3>

          <Link href="tel:+13213138762" className="flex items-center justify-center md:justify-start gap-3 hover:opacity-80 transition">
            <Phone size={20} className="text-primary" />
            <span>+1 321 313-8762</span>
          </Link>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <Clock size={20} className="text-primary" />
            <span>9 AM – 6 PM EST</span>
          </div>

          <Link href="mailto:plattano@plattano.com" className="flex items-center justify-center md:justify-start gap-3 hover:opacity-80 transition">
            <Mail size={20} className="text-primary" />
            <span>plattano@plattano.com</span>
          </Link>

          <Link href="https://www.instagram.com/plattanotechnologies.us/" target="_blank" className="flex items-center justify-center md:justify-start gap-3 hover:opacity-80 transition">
            <Instagram size={20} className="text-primary" />
            <span>@plattanotechnologies.us</span>
          </Link>

          <h4 className="pt-8 text-xl font-semibold">WHERE WE ARE:</h4>
          <address className="not-italic leading-relaxed">
            7345 W Sand Lake Rd Ste 210 Office 6438<br />
            Orlando, FL 32819
          </address>
        </div>

        {/* Right Column (Form) */}
        <div className="space-y-6 w-full max-w-md">
          <h3 className="text-2xl font-semibold">Get in touch with our team</h3>
          <p>Plattano Technologies US, always by your side</p>

          {/* Form */}
          <ContactForm />
        </div>
      </div>

      {/* Google Maps */}
      <iframe
        title="Plattano US Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.6219827658123!2d-81.4734282!3d28.4488801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ed2d02e7e41%3A0x1234567890abcdef!2s7345%20W%20Sand%20Lake%20Rd%20%23210%2C%20Orlando%2C%20FL%2032819!5e0!3m2!1sen!2sus!4v1714300000000"
        className="w-full h-72 border-none"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Bottom Footer */}
      <div className="w-full bg-neutral-200 text-neutral-700 dark:bg-black dark:text-neutral-400 text-center text-sm py-6 border-t border-neutral-300 dark:border-white/20">
        EIN 33-3441498<br />
        <span className="text-primary">© 2025 Plattano® Technologies US</span>
      </div>
    </footer>
  )
}
