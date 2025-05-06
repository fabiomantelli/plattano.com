'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from '../theme/ThemeToggle';

/* ---------- tipagem e itens de menu ---------- */
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
              { label: 'Veeam Backup & Replication', href: '/products/data-protection/veeam-backup-and-replication' },
              { label: 'Veeam for Microsoft 365', href: '/products/data-protection/veeam-for-microsoft-365' },
              { label: 'Veeam for Microsoft Azure', href: '/products/data-protection/veeam-for-microsoft-azure' },
              { label: 'Veeam for Google Cloud', href: '/products/data-protection/veeam-for-google-cloud' },
              { label: 'Veeam for AWS', href: '/products/data-protection/veeam-for-aws' },
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
          { label: 'VMware by Broadcom', href: '/products/hybrid-multicloud/vmware' },
          { label: 'Nutanix', href: '/products/hybrid-multicloud/nutanix' },
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
          { label: 'Off‑Site and Managed Backup', href: '/services/dpaas/off-site-and-manage-backup' },
        ],
      },
      { label: 'Plattano Services', href: '/services/plattano-services' },
    ],
  },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Contact', href: '/contact' },
  { label: 'The Plattano', href: '/the-plattano' },
];

/* ---------- componente ---------- */
export default function Header() {
  /* estado de navegação */
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [expandedMobileNested, setExpandedMobileNested] = useState<string | null>(null);

  const [expandedDesktop, setExpandedDesktop] = useState<string | null>(null);          // 1º nível
  const [expandedDesktopNested, setExpandedDesktopNested] = useState<string | null>(null); // 2º nível
  const [expandedDesktopThird, setExpandedDesktopThird] = useState<string | null>(null);   // 3º nível

  const [isScrolled, setIsScrolled] = useState(false);

  /* refs para fechar ao clicar fora */
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLUListElement>(null);

  /* -------- efeitos -------- */
  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setExpandedMobile(null);
        setExpandedMobileNested(null);
      }
      if (
        (expandedDesktop || expandedDesktopNested || expandedDesktopThird) &&
        submenuRef.current &&
        !submenuRef.current.contains(e.target as Node)
      ) {
        setExpandedDesktop(null);
        setExpandedDesktopNested(null);
        setExpandedDesktopThird(null);
      }
    };

    const onScroll = () => {
      if (menuOpen || expandedDesktop || expandedDesktopNested || expandedDesktopThird) {
        setMenuOpen(false);
        setExpandedMobile(null);
        setExpandedMobileNested(null);
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

  /* -------- helpers -------- (mobile: recursivo infinito) */
  const renderSubmenu = (submenu: MenuItem[], nested = false) => (
    <ul className={`${nested ? 'pl-6 mt-2' : 'pl-4'} space-y-2`}>
      {submenu.map((sub) =>
        sub.submenu ? (
          <li key={sub.label}>
            <button
              onClick={() =>
                setExpandedMobileNested((prev) => (prev === sub.label ? null : sub.label))
              }
              className={`flex w-full items-center justify-between text-left text-sm text-black dark:text-white ${
                expandedMobileNested === sub.label ? 'text-[#ED6E00]' : ''
              }`}
            >
              {sub.label}
              <ChevronDown size={16} />
            </button>
            {expandedMobileNested === sub.label && renderSubmenu(sub.submenu, true)}
          </li>
        ) : (
          <li key={sub.label}>
            <Link
              href={sub.href ?? '#'}
              className="block text-sm text-black dark:text-white hover:text-[#ED6E00]"
              onClick={() => {
                setMenuOpen(false);
                setExpandedMobile(null);
                setExpandedMobileNested(null);
                setExpandedDesktop(null);
                setExpandedDesktopNested(null);
                setExpandedDesktopThird(null);
              }}
            >
              {sub.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );

  /* -------- render -------- */
  return (
    <header
      className={`fixed top-0 z-40 w-full bg-primary dark:bg-black transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-md' : 'py-4'
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-8 sm:h-[70px] sm:px-8">
        {/* ---------- logo ---------- */}
        <Link href="/" aria-label="Home" className="flex-shrink-0">
          {/*  ⬇️  mesmas classes que o cliente adiciona  */}
          <Image
            src="/images/home/logo-black.webp"
            alt="Plattano logo"
            width={180}
            height={50}
            priority
            className="h-auto w-auto dark:hidden"
          />
          <Image
            src="/images/home/logo.webp"
            alt="Plattano logo dark"
            width={180}
            height={50}
            priority
            className="hidden h-auto w-auto dark:block"
          />
        </Link>

        {/* ---------- navegação desktop ---------- */}
        <nav className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <li key={item.label} className="relative">
                {item.submenu ? (
                  <>
                    {/* ---------- botão 1º nível ---------- */}
                    <button
                      onClick={() =>
                        setExpandedDesktop((prev) => (prev === item.label ? null : item.label))
                      }
                      className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium text-black transition-colors duration-150 hover:text-[#ED6E00] dark:text-white dark:hover:text-[#ED6E00] ${
                        expandedDesktop === item.label ? 'text-[#ED6E00]' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} />
                    </button>

                    {/* ---------- submenu 1º nível ---------- */}
                    {expandedDesktop === item.label && (
                      <ul
                        ref={submenuRef}
                        className="absolute left-0 top-full z-50 mt-2 min-w-[200px] space-y-2 rounded-md bg-white py-2 px-4 shadow-lg dark:bg-neutral-900"
                      >
                        {item.submenu.map((sub) =>
                          sub.submenu ? (
                            <li key={sub.label} className="relative">
                              {/* ---------- botão 2º nível ---------- */}
                              <button
                                onClick={() =>
                                  setExpandedDesktopNested((prev) =>
                                    prev === sub.label ? null : sub.label
                                  )
                                }
                                className={`flex w-full items-center justify-between text-left text-sm text-black dark:text-white ${
                                  expandedDesktopNested === sub.label ? 'text-[#ED6E00]' : ''
                                }`}
                              >
                                {sub.label}
                                <ChevronDown size={14} />
                              </button>

                              {/* ---------- submenu 2º nível ---------- */}
                              {expandedDesktopNested === sub.label && (
                                <ul className="absolute left-full top-0 z-50 ml-2 min-w-[180px] space-y-2 rounded-md bg-white py-2 px-4 shadow-lg dark:bg-neutral-900">
                                  {sub.submenu.map((nested) =>
                                    nested.submenu ? (
                                      <li key={nested.label} className="relative">
                                        {/* ---------- botão 3º nível ---------- */}
                                        <button
                                          onClick={() =>
                                            setExpandedDesktopThird((prev) =>
                                              prev === nested.label ? null : nested.label
                                            )
                                          }
                                          className={`flex w-full items-center justify-between text-left text-sm text-black dark:text-white ${
                                            expandedDesktopThird === nested.label ? 'text-[#ED6E00]' : ''
                                          }`}
                                        >
                                          {nested.label}
                                          <ChevronDown size={14} />
                                        </button>

                                        {/* ---------- submenu 3º nível ---------- */}
                                        {expandedDesktopThird === nested.label && (
                                          <ul className="absolute left-full top-0 z-50 ml-2 min-w-[180px] space-y-2 rounded-md bg-white py-2 px-4 shadow-lg dark:bg-neutral-900">
                                            {nested.submenu.map((third) => (
                                              <li key={third.label}>
                                                <Link
                                                  href={third.href ?? '#'}
                                                  className="block text-sm text-black hover:text-[#ED6E00] dark:text-white"
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
                                          href={nested.href ?? '#'}
                                          className="block text-sm text-black hover:text-[#ED6E00] dark:text-white"
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
                                href={sub.href ?? '#'}
                                className="block text-sm text-black hover:text-[#ED6E00] dark:text-white"
                                onClick={() => {
                                  setExpandedDesktop(null);
                                  setExpandedDesktopNested(null);
                                  setExpandedDesktopThird(null);
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
                    href={item.href ?? '#'}
                    className="whitespace-nowrap text-sm font-medium text-black transition-colors duration-150 hover:text-[#ED6E00] dark:text-white dark:hover:text-[#ED6E00]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* ---------- social + toggle ---------- */}
        <div className="ml-auto flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          <div className="hidden items-center space-x-1 sm:space-x-2 md:flex">
            <Link
              href="https://www.instagram.com/plattanotechnologies.us/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5 text-black transition-opacity hover:text-[#ED6E00] dark:text-[#ED6E00]" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/plattano-technologies/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 text-black transition-opacity hover:text-[#ED6E00] dark:text-[#ED6E00]" />
            </Link>
            <ThemeToggle />
          </div>

          {/* ---------- hambúrguer ---------- */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 focus:outline-none focus:ring md:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-black dark:text-[#ED6E00]" />
            ) : (
              <Menu className="h-6 w-6 text-black dark:text-[#ED6E00]" />
            )}
          </button>
        </div>
      </div>

      {/* ---------- overlay ---------- */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => {
            setMenuOpen(false);
            setExpandedMobile(null);
            setExpandedMobileNested(null);
          }}
        />
      )}

      {/* ---------- drawer mobile ---------- */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs transform bg-white shadow-xl transition-transform duration-300 dark:bg-black ${
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
                      className={`flex w-full items-center justify-between text-left text-base text-black dark:text-white ${
                        expandedMobile === item.label ? 'text-[#ED6E00]' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </button>
                    {expandedMobile === item.label && renderSubmenu(item.submenu)}
                  </>
                ) : (
                  <Link
                    href={item.href ?? '#'}
                    className="block text-base text-black hover:text-[#ED6E00] dark:text-white"
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

        {/* ---------- footer drawer ---------- */}
        <div className="mt-auto flex items-center space-x-4 p-6">
          <Link href="https://instagram.com/plattano.us" target="_blank" aria-label="Instagram">
            <FaInstagram className="h-6 w-6 text-black hover:text-[#ED6E00] dark:text-[#ED6E00]" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/plattano-technologies/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6 text-black hover:text-[#ED6E00] dark:text-[#ED6E00]" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}