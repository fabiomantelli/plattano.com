import Link from 'next/link'
import { footerNav } from '../../lib/constants/navigation'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Plattano</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of enterprise IT solutions in Florida.
              Specializing in backup, storage, and cybersecurity solutions.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@plattano.com"
                className="flex items-center text-gray-400 hover:text-secondary-400 transition-colors group"
              >
                <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                info@plattano.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center text-gray-400 hover:text-secondary-400 transition-colors group"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                (555) 123-4567
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Florida, USA
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerNav.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-500">Certified Partner:</div>
              <div className="flex items-center space-x-4">
                <span className="text-xs text-gray-600 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                  Veeam
                </span>
                <span className="text-xs text-gray-600 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                  ExaGrid
                </span>
                <span className="text-xs text-gray-600 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                  SentinelOne
                </span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {footerNav.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Plattano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
