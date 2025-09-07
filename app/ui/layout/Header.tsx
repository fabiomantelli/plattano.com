'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from '../theme/ThemeToggle';

interface MenuItem {
  label: string;
  href?: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    submenu: [
      {
        label: 'Data Protection',
        submenu: [
          {
            label: 'Backup and Recovery',
            submenu: [
              { label: 'Veeam Backup & Replication', href: '/products/data-protection/backup-and-recovery/veeam-backup-and-replication' },
              { label: 'Veeam for Microsoft 365', href: '/products/data-protection/backup-and-recovery/veeam-for-microsoft-365' },
              { label: 'Veeam for Microsoft Azure', href: '/products/data-protection/backup-and-recovery/veeam-for-microsoft-azure' },
              { label: 'Veeam for Google Cloud', href: '/products/data-protection/backup-and-recovery/veeam-for-google-cloud' },
              { label: 'Veeam for AWS', href: '/products/data-protection/backup-and-recovery/veeam-for-aws' },
            ],
          },
          { label: 'Veeam Data Platform', href: '/products/data-protection/veeam-data-platform' },
          { label: 'Veeam Recovery Orchestrator', href: '/products/data-protection/veeam-recovery-orchestrator' },
          { label: 'Veeam ONE', href: '/products/data-protection/veeam-one' },
        ],
      },
      {
        label: 'Storage',
        submenu: [
          { label: 'ExaGrid', href: '/products/storage/exagrid' },
          { label: 'Plattano Hot Cloud Storage', href: '/products/storage/plattano-hot-cloud-storage' },
        ],
      },
      {
        label: 'Hybrid Multicloud',
        submenu: [
          { label: 'VMware by Broadcom', href: '/products/hybrid-multicloud/vmware-by-broadcom' },
        ],
      },
      {
        label: 'Cybersecurity',
        submenu: [
          { label: 'SentinelOne', href: '/products/cybersecurity/sentinelone' },
          { label: 'Rainforest', href: '/products/cybersecurity/rainforest' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    submenu: [
      {
        label: 'DPaaS',
        submenu: [
          { label: 'Managed Backup Services', href: '/services/dpaas/managed-backup-services' },
          { label: 'BaaS for Public Cloud', href: '/services/dpaas/baas-for-public-cloud' },
          { label: 'Off‑Site and Managed Backup', href: '/services/dpaas/off-site-and-managed-backup' },
        ],
      },
      { label: 'Plattano Services', href: '/services/plattano-services' },
    ],
  },
  { label: 'Partnership', href: '/partnership' },
  { label: 'The Plattano', href: '/the-plattano' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobileLevel1, setExpandedMobileLevel1] = useState<string | null>(null);
  const [expandedMobileLevel2, setExpandedMobileLevel2] = useState<string | null>(null);
  const [expandedMobileLevel3, setExpandedMobileLevel3] = useState<string | null>(null);
  const [expandedDesktop, setExpandedDesktop] = useState<string | null>(null);
  const [expandedDesktopNested, setExpandedDesktopNested] = useState<string | null>(null);
  const [expandedDesktopThird, setExpandedDesktopThird] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setExpandedMobileLevel1(null);
        setExpandedMobileLevel2(null);
        setExpandedMobileLevel3(null);
      }
      if ((expandedDesktop || expandedDesktopNested || expandedDesktopThird) && submenuRef.current && !submenuRef.current.contains(e.target as Node)) {
        setExpandedDesktop(null);
        setExpandedDesktopNested(null);
        setExpandedDesktopThird(null);
      }
    };
    const onScroll = () => {
      if (menuOpen || expandedDesktop || expandedDesktopNested || expandedDesktopThird) {
        setMenuOpen(false);
        setExpandedMobileLevel1(null);
        setExpandedMobileLevel2(null);
        setExpandedMobileLevel3(null);
        setExpandedDesktop(null);
        setExpandedDesktopNested(null);
        setExpandedDesktopThird(null);
      }
      setIsScrolled(window.scrollY > 10);
    };
    document.addEventListener('mousedown', outsideClick);
    window.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('mousedown', outsideClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, [menuOpen, expandedDesktop, expandedDesktopNested, expandedDesktopThird]);

  const linkClass = 'block text-sm text-black hover:text-primary dark:text-white dark:hover:text-primary';

  const renderSubmenu = (items: MenuItem[], level = 1) => (
    <ul className={`pl-${level * 4} mt-2 space-y-2`}>
      {items.map(item => {
        const hasChildren = !!item.submenu;
        let expanded = false;
        let toggle: () => void = () => {};

        if (level === 1) {
          expanded = expandedMobileLevel1 === item.label;
          toggle = () => {
            setExpandedMobileLevel1(prev => (prev === item.label ? null : item.label));
            setExpandedMobileLevel2(null);
            setExpandedMobileLevel3(null);
          };
        } else if (level === 2) {
          expanded = expandedMobileLevel2 === item.label;
          toggle = () => {
            setExpandedMobileLevel2(prev => (prev === item.label ? null : item.label));
            setExpandedMobileLevel3(null);
          };
        } else {
          expanded = expandedMobileLevel3 === item.label;
          toggle = () => setExpandedMobileLevel3(prev => (prev === item.label ? null : item.label));
        }

        return (
          <li key={item.label}>
            {hasChildren ? (
              <button
                onClick={toggle}
                className="flex w-full items-center justify-between text-left text-base text-black dark:text-white hover:text-primary dark:hover:text-primary"
              >
                {item.label}
                <ChevronDown
                  size={16}
                  className={`${expanded ? 'rotate-180' : 'rotate-0'} transition-transform`}
                />
              </button>
            ) : (
              <Link
                href={item.href!}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )}
            {hasChildren && expanded && renderSubmenu(item.submenu!, level + 1)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${isScrolled ? 'py-4 shadow-md' : 'py-6'} bg-primary dark:bg-black`}>
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-8 sm:px-12">
        {/* logo */}
      <Link href="/" className="flex-shrink-0">
          <Image src="/images/home/logo-black.webp" alt="Plattano logo" width={180} height={50} className="h-auto w-auto dark:hidden" priority />
          <Image src="/images/home/logo.webp" alt="Plattano logo dark" width={180} height={50} className="hidden h-auto w-auto dark:block" priority />
        </Link>

        {/* desktop nav */}
        <nav className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center space-x-6 lg:space-x-8">
            {menuItems.map(item => (
              <li key={item.label} className="relative">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setExpandedDesktop(prev => (prev === item.label ? null : item.label))}
                      className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium
                        hover:text-neutral-200 hover:dark:text-primary
                        ${expandedDesktop === item.label ? 'text-black dark:text-primary' : 'text-black dark:text-white'}
                      `}
                    >
                      {item.label}
                      <ChevronDown size={14} />
                    </button>
                    {expandedDesktop === item.label && (
                      <ul ref={submenuRef} className="absolute left-0 top-full mt-2 min-w-[200px] space-y-2 rounded-md bg-white py-2 px-4 shadow-lg dark:bg-neutral-900">
                        {item.submenu!.map(sub =>
                          sub.submenu ? (
                            <li key={sub.label} className="relative">
                              <button
                                onClick={() =>
                                  setExpandedDesktopNested(prev => (prev === sub.label ? null : sub.label))
                                }
                                className={`flex w-full items-center justify-between text-left text-sm
                                ${expandedDesktopNested === sub.label
                                  ? 'text-primary'
                                  : 'text-black hover:text-primary dark:text-white dark:hover:text-primary'}`}
                              >
                                {sub.label}
                                <ChevronDown size={14} />
                              </button>
                              {expandedDesktopNested === sub.label && (
                                <ul className="absolute left-full top-0 ml-2 min-w-[180px] space-y-2 rounded-md bg-white py-2 px-4 shadow-lg dark:bg-neutral-900">
                                  {sub.submenu!.map(nested =>
                                    nested.submenu ? (
                                      <li key={nested.label} className="relative">
                                        <button
                                          onClick={() =>
                                            setExpandedDesktopThird(prev => (prev === nested.label ? null : nested.label))
                                          }
                                         className={`flex w-full items-center justify-between text-left text-sm
                                          ${expandedDesktopThird === nested.label
                                            ? 'text-primary'
                                            : 'text-black hover:text-primary dark:text-white dark:hover:text-primary'}`}
                                        >
                                          {nested.label}
                                          <ChevronDown size={14} />
                                        </button>
                                        {expandedDesktopThird === nested.label && (
                                          <ul className="absolute left-full top-0 ml-2 min-w-[180px] space-y-2 rounded-md bg-white py-2 px-4 shadow-lg dark:bg-neutral-900">
                                            {nested.submenu!.map(third => (
                                              <li key={third.label}>
                                                <Link
                                                  href={third.href!}
                                                  className="block text-sm text-black hover:text-primary hover:dark:text-primary dark:text-white"
                                                  onClick={() => {
                                                    setExpandedDesktop(null);
                                                    setExpandedDesktopNested(null);
                                                    setExpandedDesktopThird(null);
                                                  }}
                                                >
                                                  {third.label}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </li>
                                    ) : (
                                      <li key={nested.label}>
                                        <Link
                                          href={nested.href!}
                                          className="block text-sm text-black hover:text-primary hover:dark:text-primary dark:text-white"
                                          onClick={() => {
                                            setExpandedDesktop(null);
                                            setExpandedDesktopNested(null);
                                            setExpandedDesktopThird(null);
                                          }}
                                        >
                                          {nested.label}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </li>
                          ) : (
                            <li key={sub.label}>
                              <Link
                                href={sub.href!}
                                className="block text-sm text-black hover:text-primary hover:dark:text-primary dark:text-white"
                                onClick={() => setExpandedDesktop(null)}
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
                  <Link href={item.href!} className="whitespace-nowrap text-sm font-medium text-black dark:text-white hover:text-neutral-200 hover:dark:text-primary">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* social & theme */}
        <div className="ml-auto hidden items-center space-x-4 md:flex">
          <Link href="https://www.instagram.com/plattanotechnologies.us/" target="_blank">
            <FaInstagram className="h-5 w-5 text-black dark:text-primary hover:text-primary hover:dark:text-neutral-700" />
          </Link>
          <Link href="https://www.linkedin.com/company/plattano-technologies/" target="_blank">
            <FaLinkedin className="h-5 w-5 text-black dark:text-primary hover:text-primary hover:dark:text-neutral-700" />
          </Link>
          <ThemeToggle />
        </div>

        {/* mobile hamburger */}
        <button aria-label="Toggle menu" onClick={() => setMenuOpen(o => !o)} className="md:hidden p-2">
          {menuOpen ? <X className="h-6 w-6 text-black dark:text-primary" /> : <Menu className="h-6 w-6 text-black dark:text-primary" />}
        </button>
      </div>

      {/* mobile overlay */}
      {menuOpen && <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setMenuOpen(false)} />}

      {/* mobile drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs bg-white dark:bg-black transform transition-transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="mt-24 px-6">
          <ul className="flex flex-col space-y-4">
            {renderSubmenu(menuItems, 1)}
          </ul>
        </nav>
        <div className="mt-auto flex items-center space-x-4 p-6">
          <Link href="https://instagram.com/plattano.us" target="_blank">
            <FaInstagram className="h-6 w-6 text-black dark:text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/company/plattano-technologies/" target="_blank">
            <FaLinkedin className="h-6 w-6 text-black dark:text-primary" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}