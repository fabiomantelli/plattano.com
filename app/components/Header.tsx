'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/partnership', label: 'Partnership' },
  { href: '/contact', label: 'Contact' },
  { href: '/the-plattano', label: 'The Plattano' },
  { href: '/resources', label: 'Resources' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 w-full z-40 bg-primary dark:bg-black shadow-md">
      <div className="max-w-7xl mx-auto h-[100px] flex items-center px-8 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          {mounted && (
            <Image
              src={resolvedTheme === 'light' ? '/logo-black.webp' : '/logo.webp'}
              alt="Plattano logo"
              width={180}
              height={50}
              priority
            />
          )}
        </Link>

        {/* Desktop / Tablet navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center space-x-6 lg:space-x-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 [&>*]:snap-center">
            {menuItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="
                    text-black dark:text-white font-medium
                    text-sm sm:text-base
                    dark:hover:text-primary hover:text-white
                    transition duration-150
                    whitespace-nowrap
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="ml-auto flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          {/* Social & theme toggle (desktop) */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
            <Link
              href="https://www.instagram.com/plattanotechnologies.us/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5 dark:text-primary text-black hover:opacity-80 transition-opacity" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/plattano-technologies/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 dark:text-primary text-black hover:opacity-80 transition-opacity" />
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 focus:outline-none focus:ring"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-black dark:text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-black dark:text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile sliding drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white dark:bg-black shadow-xl transform transition-transform duration-300 z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="mt-24 px-6">
          <ul className="flex flex-col space-y-4">
            {menuItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-white text-base hover:text-[var(--color-primary)] transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto p-6 flex items-center space-x-4">
          {mounted && (
            <>
              <Link
                href="https://instagram.com/plattano.us"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram
                  className={`h-6 w-6 ${resolvedTheme === 'light' ? 'text-black' : 'text-[var(--color-primary)]'}`}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/plattano-technologies/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  className={`h-6 w-6 ${resolvedTheme === 'light' ? 'text-black' : 'text-[var(--color-primary)]'}`}
                />
              </Link>
            </>
          )}
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}
