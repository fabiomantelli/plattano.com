'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';

// Define MenuItem interface for type safety
interface MenuItem {
  label: string;
  href?: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products',
    submenu: [
      { label: 'Data Protection', href: '/data-protection' },
      { label: 'Storage', href: '/storage' },
      { label: 'Hybrid Multicloud', href: '/hybrid-multicloud' },
      {
        label: 'Cybersecurity',
        submenu: [
          // Placeholder routes - replace with actual routes
          { label: 'SentinelOne', href: '/products/cybersecurity/sentinelone' },
          { label: 'Rainforest', href: '/products/cybersecurity/rainforest' },
        ],
      },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Contact', href: '/contact' },
  { label: 'The Plattano', href: '/the-plattano' },
  { label: 'Resources', href: '/resources' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [expandedMobileNested, setExpandedMobileNested] = useState<string | null>(null);
  const [expandedDesktop, setExpandedDesktop] = useState<string | null>(null);
  const [expandedDesktopNested, setExpandedDesktopNested] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLUListElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        console.log('Clicked outside mobile menu, closing...');
        setMenuOpen(false);
        setExpandedMobile(null);
        setExpandedMobileNested(null);
      }

      // Close desktop submenu
      if (
        (expandedDesktop || expandedDesktopNested) &&
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        console.log('Clicked outside desktop submenu, closing...');
        setExpandedDesktop(null);
        setExpandedDesktopNested(null);
      }
    };

    const handleScroll = () => {
      if (menuOpen || expandedDesktop || expandedDesktopNested) {
        console.log('Scrolling detected, closing menus...');
        setMenuOpen(false);
        setExpandedMobile(null);
        setExpandedMobileNested(null);
        setExpandedDesktop(null);
        setExpandedDesktopNested(null);
      }
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen, expandedDesktop, expandedDesktopNested]);

  const renderSubmenu = (submenu: MenuItem[], nested?: boolean) => (
    <ul className={`${nested ? 'pl-6 mt-2' : 'pl-4'} space-y-2`}>
      {submenu.map((sub) =>
        sub.submenu ? (
          <li key={sub.label}>
            <button
              onClick={() =>
                setExpandedMobileNested((prev) => (prev === sub.label ? null : sub.label))
              }
              className={`flex items-center justify-between w-full text-left text-sm text-black dark:text-white ${
                expandedMobileNested === sub.label ? 'text-[#ED6E00]' : ''
              }`}
            >
              {sub.label}
              <ChevronDown size={16} className="lucide lucide-chevron-down" />
            </button>
            {expandedMobileNested === sub.label && renderSubmenu(sub.submenu, true)}
          </li>
        ) : (
          <li key={sub.label}>
            <Link
              href={sub.href || '#'}
              className="block text-sm text-black dark:text-white hover:text-[#ED6E00]"
              onClick={() => {
                setMenuOpen(false);
                setExpandedMobile(null);
                setExpandedMobileNested(null);
                setExpandedDesktop(null);
                setExpandedDesktopNested(null);
              }}
            >
              {sub.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-md' : 'py-4'
      } bg-primary dark:bg-black`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 sm:px-8 h-[60px] sm:h-[70px]">
        <Link href="/" className="flex-shrink-0">
          {mounted && (
            <Image
              src={resolvedTheme === 'light' ? '/logo-black.webp' : '/logo.webp'}
              alt="Plattano logo"
              width={180}
              height={50}
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          )}
        </Link>

        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <li key={item.label} className="relative">
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedDesktop((prev) => (prev === item.label ? null : item.label))
                      }
                      className={`text-black dark:text-white font-medium text-sm sm:text-base dark:hover:text-[#ED6E00] hover:text-[#ED6E00] transition duration-150 whitespace-nowrap flex items-center gap-1 ${
                        expandedDesktop === item.label ? 'text-[#ED6E00]' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className="lucide lucide-chevron-down" />
                    </button>
                    {expandedDesktop === item.label && (
                      <ul
                        ref={submenuRef}
                        className="absolute top-full left-0 mt-2 bg-white dark:bg-neutral-900 shadow-lg rounded-md py-2 px-4 z-50 min-w-[200px] space-y-2"
                      >
                        {item.submenu.map((sub) =>
                          sub.submenu ? (
                            <li key={sub.label} className="relative">
                              <button
                                onClick={() =>
                                  setExpandedDesktopNested((prev) =>
                                    prev === sub.label ? null : sub.label
                                  )
                                }
                                className={`flex items-center justify-between w-full text-sm text-left text-black dark:text-white ${
                                  expandedDesktopNested === sub.label ? 'text-[#ED6E00]' : ''
                                }`}
                              >
                                {sub.label}
                                <ChevronDown size={14} className="lucide lucide-chevron-down" />
                              </button>
                              {expandedDesktopNested === sub.label && (
                                <ul className="absolute left-full top-0 ml-2 bg-white dark:bg-neutral-800 shadow-lg rounded-md py-2 px-4 z-50 min-w-[180px] space-y-2">
                                  {sub.submenu.map((nested) => (
                                    <li key={nested.label}>
                                      <Link
                                        href={nested.href || '#'}
                                        className="block text-sm text-black dark:text-white hover:text-[#ED6E00]"
                                        onClick={() => {
                                          setExpandedDesktop(null);
                                          setExpandedDesktopNested(null);
                                        }}
                                      >
                                        {nested.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ) : (
                            <li key={sub.label}>
                              <Link
                                href={sub.href || '#'}
                                className="block text-sm text-black dark:text-white hover:text-[#ED6E00]"
                                onClick={() => {
                                  setExpandedDesktop(null);
                                  setExpandedDesktopNested(null);
                                }}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="text-black dark:text-white font-medium text-sm sm:text-base dark:hover:text-[#ED6E00] hover:text-[#ED6E00] transition duration-150 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
            <Link
              href="https://www.instagram.com/plattanotechnologies.us/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5 dark:text-[#ED6E00] text-black hover:text-[#ED6E00] transition-opacity" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/plattano-technologies/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 dark:text-[#ED6E00] text-black hover:text-[#ED6E00] transition-opacity" />
            </Link>
            <ThemeToggle />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 focus:outline-none focus:ring"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-black dark:text-[#ED6E00]" />
            ) : (
              <Menu className="h-6 w-6 text-black dark:text-[#ED6E00]" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            console.log('Overlay clicked, closing mobile menu...');
            setMenuOpen(false);
            setExpandedMobile(null);
            setExpandedMobileNested(null);
          }}
        />
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white dark:bg-black shadow-xl transform transition-transform duration-300 z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="mt-24 px-6">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setExpandedMobile((prev) => (prev === item.label ? null : item.label))
                      }
                      className={`flex items-center justify-between w-full text-left text-base text-black dark:text-white ${
                        expandedMobile === item.label ? 'text-[#ED6E00]' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} className="lucide lucide-chevron-down" />
                    </button>
                    {expandedMobile === item.label && renderSubmenu(item.submenu)}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="block text-black dark:text-white text-base hover:text-[#ED6E00]"
                    onClick={() => {
                      setMenuOpen(false);
                      setExpandedMobile(null);
                      setExpandedMobileNested(null);
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto p-6 flex items-center space-x-4">
          {mounted && (
            <>
              <Link href="https://instagram.com/plattano.us" target="_blank" aria-label="Instagram">
                <FaInstagram
                  className={`h-6 w-6 ${
                    resolvedTheme === 'light' ? 'text-black' : 'text-[#ED6E00]'
                  } hover:text-[#ED6E00]`}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/plattano-technologies/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  className={`h-6 w-6 ${
                    resolvedTheme === 'light' ? 'text-black' : 'text-[#ED6E00]'
                  } hover:text-[#ED6E00]`}
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