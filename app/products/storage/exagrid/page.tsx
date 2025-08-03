import Footer from "@/app/ui/layout/Footer";
import ExagridBenefitsSection from "./ExagridBenefitsSections";
import ExagridFaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import HybridStorageSection from "./HybridStorageSection";
import WhatWeProtectSection from "./WhatWeProtectSection";

export const metadata = {
    title: 'Plattano Technologies | ExaGrid Backup Storage in Orlando | Scalable Tiered Backup Appliances',
    description:
      'Plattano Technologies delivers ExaGrid Tiered Backup Storage solutions in Orlando. Gain fast backups, reliable recovery, and scalable retention with secure deduplicated storage.',
    keywords: [
      'ExaGrid backup Orlando',
      'tiered backup storage',
      'ExaGrid appliances',
      'deduplicated backup storage',
      'secure backup appliances',
      'backup retention and recovery',
      'Plattano Technologies',
      'ExaGrid partner Florida',
      'data protection storage',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/storage/exagrid',
    },
    openGraph: {
      title: 'ExaGrid Backup Storage in Orlando | Fast Recovery & Secure Tiered Backup - Plattano',
      description:
        'ExaGrid delivers backup storage with scalability, performance, and security. Plattano offers ExaGrid appliances in Orlando with local support and deployment expertise.',
      url: 'https://plattano.com/products/storage/exagrid',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function ExagridPage() {
    return (
        <>
            <HeroSection />
            <ExagridBenefitsSection />
            <HybridStorageSection />
            <WhatWeProtectSection />
            <ExagridFaqSection />
            <Footer />
        </>
    )
}