import Footer from "@/app/ui/layout/Footer";
import BestBackupDefenseSection from "./BestBackupDefenseSection";
import DataResiliencePillarsSection from "./DataResiliencePillarsSection";
import DataResilienceSection from "./DataResilienceSection";
import HeroSection from "./HeroSection";
import PlatformComponentsSection from "./PlatformComponentsSection";
import RansomwareSection from "./RansomwareSection";
import VeeamCommercialValueSection from "./VeeamCommercialValueSection";
import VeeamFaqSection from "./VeeamFaqSection";
import VeeamImpactStatsSection from "./VeeamImpactStatsSection";
import VeeamLeaderSection from "./VeeamLeaderSection";
import VeeamLeaderStatsSection from "./VeeamLeaderStatsSection";
import VeeamPlatformOverviewSection from "./VeeamPlatformOverviewSection";
import VeeamProtectsEverythingSection from "./VeeamProtectEverythingSection";

export const metadata = {
    title: 'Plattano Technologies | Veeam Data Platform in Orlando | Unified Backup, Monitoring & Recovery',
    description:
      'Plattano Technologies delivers the full Veeam Data Platform in Orlando. Protect your data with a unified solution combining backup, monitoring, ransomware defense, and DR orchestration.',
    keywords: [
      'Veeam Data Platform',
      'unified data protection',
      'Veeam backup Orlando',
      'ransomware protection',
      'data monitoring',
      'disaster recovery orchestration',
      'Plattano Technologies',
      'Veeam partner Florida',
      'enterprise data resilience',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/data-protection/veeam-data-platform',
    },
    openGraph: {
      title: 'Veeam Data Platform | Complete Data Protection in Orlando – Plattano',
      description:
        'Veeam Data Platform offers enterprise-grade backup, recovery, monitoring, and security in one unified solution. Available from Plattano Technologies in Orlando.',
      url: 'https://plattano.com/products/data-protection/veeam-data-platform',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function VeeamDataProtectionPage() {
    return (
        <>
            <HeroSection />
            <VeeamPlatformOverviewSection />
            <DataResiliencePillarsSection />
            <BestBackupDefenseSection />
            <PlatformComponentsSection />
            <VeeamImpactStatsSection />
            <VeeamProtectsEverythingSection />
            <VeeamLeaderSection />
            <VeeamLeaderStatsSection />
            <VeeamCommercialValueSection />
            <DataResilienceSection />
            <RansomwareSection />
            <VeeamFaqSection />
            <Footer />
        </>
    )
}