import Footer from "@/app/ui/layout/Footer";
import OffSiteAndManagedBackupAsAServiceSection from "./OffSiteAndManagedBackupAsAServiceSection";
import OffSiteAndManagedBackupBenefitsSection from "./OffSiteAndManagedBackupBenefitsSection";
import OffSiteAndManagedBackupFaqSection from "./OffSiteAndManagedBackupFaqSection";
import OffSiteAndManagedBackupHeroSection from "./OffSiteAndManagedBackupHeroSection";
import OffSiteAndManagedBackupMspMarketSection from "./OffSiteAndManagedBackupMspMarketSection";
import OffSiteAndManagedBackupWhyBaasSection from "./OffSiteAndManagedBackupWhyBaasSection";

export const metadata = {
    title: 'Plattano Technologies | Off-Site & Managed Backup Services in Orlando | Secure BaaS by Plattano',
    description:
      'Plattano Technologies delivers off-site and fully managed backup services for SMBs and enterprises in Orlando. Ensure data retention, recovery, and compliance with expert-managed BaaS.',
    keywords: [
      'off-site backup services',
      'managed backup Orlando',
      'baas provider Florida',
      'secure cloud backup',
      'data retention as a service',
      'disaster recovery',
      'Veeam offsite backup',
      'Plattano Technologies',
      'backup and restore',
      'Orlando IT managed services',
    ],
    alternates: {
      canonical: 'https://plattano.com/services/dpaas/off-site-and-managed-backup',
    },
    openGraph: {
      title: 'Off-Site & Managed Backup Services in Orlando | Plattano BaaS',
      description:
        'Protect your business data with managed, off-site backup services by Plattano Technologies. Delivered with expert support and proven backup infrastructure.',
      url: 'https://plattano.com/services/dpaas/off-site-and-managed-backup',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function OffSiteManagedBackupPage() {
    return (
        <>
            <OffSiteAndManagedBackupHeroSection />
            <OffSiteAndManagedBackupMspMarketSection />
            <OffSiteAndManagedBackupAsAServiceSection />
            <OffSiteAndManagedBackupWhyBaasSection />
            <OffSiteAndManagedBackupBenefitsSection />
            <OffSiteAndManagedBackupFaqSection />
            <Footer />
        </>
    )
}