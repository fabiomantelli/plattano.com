import Footer from "@/app/ui/layout/Footer";
import ManagedBackupServicesAdvantagesSection from "./ManagedBackupServicesAdvantagesSection";
import ManagedBackupServicesAServiceSection from "./ManagedBackupServicesAServiceSection";
import ManagedBackupServicesDataProtectionTrendsSection from "./ManagedBackupServicesDataProtectionTrendsSection";
import ManagedBackupServicesFaqSection from "./ManagedBackupServicesFaqSection";
import ManagedBackupServicesFreeUpResourcesSection from "./ManagedBackupServicesFreeUpResourcesSection";
import ManagedBackupServicesHeroSection from "./ManagedBackupServicesHeroSection";
import ManagedBackupServicesMspMarketSection from "./ManagedBackupServicesMspMarketSection";
import ManagedBackupServicesVaspPartner2Section from "./ManagedBackupServicesVaspPartner2Section";
import ManagedBackupServicesVaspPartnerSection from "./ManagedBackupServicesVaspPartnerSection";
import ManagedBackupServicesVaspServices3Section from "./ManagedBackupServicesVaspServices3Section";
import ManagedBackupServicesVeeamPartnerSection from "./ManagedBackupServicesVeeamPartnerSection";
import ManagedBackupServicesWeTakeCareOfEverythingSection from "./ManagedBackupServicesWeTakeCareOfEverthingSection";

export const metadata = {
    title: 'Plattano Technologies | Managed Backup Services in Orlando | Veeam Accredited BaaS by Plattano',
    description:
      'Fully managed backup services (BaaS) for businesses in Orlando. Ensure compliance, fast recovery, and 24/7 protection with our Veeam-certified experts.',
    keywords: [
      'Managed Backup Services Orlando',
      'BaaS Veeam Partner',
      'Backup as a Service',
      'VASP provider',
      'cloud backup solutions',
      'data protection services',
      'Plattano Technologies',
      'Orlando Veeam backup',
      'backup compliance services',
      'backup automation and SLAs',
    ],
    alternates: {
      canonical: 'https://plattano.com/services/dpaas/managed-backup-services',
    },
    openGraph: {
      title: 'Managed Backup Services in Orlando | BaaS by Veeam-Certified Experts – Plattano',
      description:
        'Plattano offers managed backup with proven Veeam infrastructure and local Orlando expertise. From compliance to SLA-driven recovery, we handle everything for you.',
      url: 'https://plattano.com/services/dpaas/managed-backup-services',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function ManagedBackupServicesPage() {
    return (
        <>
            <ManagedBackupServicesHeroSection />
            <ManagedBackupServicesFreeUpResourcesSection />
            <ManagedBackupServicesMspMarketSection />
            <ManagedBackupServicesAdvantagesSection />
            <ManagedBackupServicesDataProtectionTrendsSection />
            <ManagedBackupServicesVeeamPartnerSection />
            <ManagedBackupServicesVaspPartnerSection />
            <ManagedBackupServicesVaspPartner2Section />
            <ManagedBackupServicesVaspServices3Section />
            <ManagedBackupServicesAServiceSection />
            <ManagedBackupServicesWeTakeCareOfEverythingSection />
            <ManagedBackupServicesFaqSection />
            <Footer />
        </>
    )
}