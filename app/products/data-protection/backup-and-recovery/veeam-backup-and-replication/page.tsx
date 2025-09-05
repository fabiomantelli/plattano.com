import VbrLicensingSection from "@/public/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/VbrLicensingSection";
import Vbr105RecoveryOptionsSection from "./Vbr105RecoveryOptionsSection";
import VbrCapabilitiesSection from "./VbrCapabilitiesSection";
import VbrCloudReadySection from "./VbrCloudReadySection";
import VbrControlYourDataSection from "./VbrControlYourDataSection";
import VbrCorePillarSection from "./VbrCorePillarSection";
import VbrDataProtectionConfidenceSection from "./VbrDataProtectionConfidenceSection";
import VbrDataRecoveryCapabilitiesSection from "./VbrDataRecoveryCapabilitiesSection";
import VbrDataSecuritySection from "./VbrDataSecuritySection";
import VbrDifferentiatorsHeadingSection from "./VbrDifferentiatorsHeadingSection";
import VbrFourPillarsSection from "./VbrFourPillarsSection";
import VbrHeroSection from "./VbrHeroSection";
import VbrHybridCloudSection from "./VbrHybridCloudSection";
import VbrInstantRecoverySection from "./VbrInstantRecoverySection";
import VbrModularAndCloudNativeSection from "./VbrModularAndCloudNativeSection";
import VbrOutageStatsSection from "./VbrOutageStatsSection";
import VbrRansomwareProtectionSection from "./VbrRansomwareProtectionSection";
import VbrRecoveryObjectivesSection from "./VbrRecoveryObjectsSection";
import VbrReviewsBadgesSection from "./VbrReviewsBadgesSection";
import VbrSoftwareDefinedSection from "./VbrSoftwareDefinedSection";
import VbrTrustedBySection from "./VbrTrustedBySection";
import VbrWhatYourBusinessEnablesSection from "./VbrWhatYourBusinessEnablesSection";
import VbrFaqSection from "./VbrFaqSection";
import Footer from "@/app/ui/layout/Footer";

export const metadata = {
    title: 'Plattano Technologies | Veeam Backup & Replication in Orlando',
    description:
      'Plattano Technologies provides Veeam Backup & Replication solutions in Orlando. Protect your business with hybrid-cloud backup, instant recovery, and ransomware resilience.',
    keywords: [
      'Veeam Orlando',
      'Veeam Backup & Replication',
      'enterprise backup solutions',
      'data protection Orlando',
      'hybrid cloud backup',
      'ransomware protection',
      'Veeam partner Florida',
      'Plattano Technologies',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/data-protection/backup-and-recovery/veeam-backup-and-replication',
    },
    openGraph: {
      title: 'Veeam Backup & Replication in Orlando | Hybrid-Cloud Resilience by Plattano',
      description:
        'Get enterprise-grade data protection with Veeam through Plattano. We deliver secure, fast, and flexible backup and disaster recovery solutions for businesses in Orlando.',
      url: 'https://plattano.com/products/data-protection/backup-and-recovery/veeam-backup-and-replication',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };

export default function VeeamBackupAndReplicationPage() {
    return (
        <>
            <VbrHeroSection />
            <VbrCorePillarSection />
            <VbrWhatYourBusinessEnablesSection />
            <VbrDataProtectionConfidenceSection />
            <VbrRecoveryObjectivesSection />
            <VbrHybridCloudSection />
            <VbrOutageStatsSection />
            <VbrControlYourDataSection />
            <VbrDifferentiatorsHeadingSection />
            <VbrSoftwareDefinedSection />
            <VbrModularAndCloudNativeSection />
            <VbrInstantRecoverySection />
            <VbrRansomwareProtectionSection />
            <Vbr105RecoveryOptionsSection />
            <VbrFourPillarsSection />
            <VbrCapabilitiesSection />
            <VbrDataRecoveryCapabilitiesSection />
            <VbrCloudReadySection />
            <VbrDataSecuritySection />
            <VbrTrustedBySection />
            <VbrReviewsBadgesSection />
            <VbrLicensingSection />
            <VbrFaqSection />
            <Footer />
        </>
    )
}