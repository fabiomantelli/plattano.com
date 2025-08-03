import Footer from "@/app/ui/layout/Footer";
import VeeamGcpBackupComparisonSection from "./VeeamGcpBackupComparisonSection";
import VeeamGcpBackupReplicationSection from "./VeeamGcpBackupReplicationSection";
import VeeamGcpCapabilitiesSection from "./VeeamGcpCapabilitiesSection";
import VeeamGcpFeaturesSection from "./VeeamGcpFeaturesSection";
import VeeamGcpHeroSection from "./VeeamGcpHeroSection";
import VeeamGcpIntegrateSection from "./VeeamGcpIntegrateSection";
import VeeamGcpProtectedServicesSection from "./VeeamGcpProtectedServicesSection";

export const metadata = {
    title: 'Plattano Technologies | Veeam Backup for Google Cloud in Orlando | GCP Data Protection',
    description:
      'Plattano Technologies offers Veeam Backup for Google Cloud in Orlando. Secure and optimize your GCP workloads with native backup, instant recovery, and ransomware protection.',
    keywords: [
      'Veeam for Google Cloud',
      'GCP backup Orlando',
      'Veeam Orlando',
      'cloud-native backup',
      'Google Cloud disaster recovery',
      'Veeam partner Florida',
      'Plattano Technologies',
      'data protection for GCP',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/data-protection/veeam-for-google-cloud',
    },
    openGraph: {
      title: 'Veeam Backup for Google Cloud | Cloud-Native GCP Backup in Orlando',
      description:
        'Plattano delivers Veeam-powered backup and recovery for Google Cloud. Protect your GCP workloads with agentless backups, fast restores, and strong security in Orlando.',
      url: 'https://plattano.com/products/data-protection/veeam-for-google-cloud',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };

export default function VeeamForGoogleCloudPage() {
    return (
        <>
            <VeeamGcpHeroSection />
            <VeeamGcpFeaturesSection />
            <VeeamGcpCapabilitiesSection />
            <VeeamGcpProtectedServicesSection />
            <VeeamGcpIntegrateSection />
            <VeeamGcpBackupReplicationSection />
            <VeeamGcpBackupComparisonSection />
            <Footer />
        </>
    )
}