import Footer from "@/app/ui/layout/Footer";
import VeeamAzureBackupComparisonSection from "./VeeamAzureBackupComparisonSection";
import VeeamAzureBackupReplicationSection from "./VeeamAzureBackupReplicationSection";
import VeeamAzureHeroSection from "./VeeamAzureHeroSection";
import VeeamAzureIntegrateSection from "./VeeamAzureIntegrateSection";
import VeeamAzureKeyFeaturesSection from "./VeeamAzureKeyFeaturesSection";
import VeeamAzureProtectionOverviewSection from "./VeeamAzureProtectionOverviewSection";
import VeeamAzureResiliencyTargetsSection from "./VeeamAzureResiliencyTargetSection";

export const metadata = {
    title: 'Plattano Technologies | Veeam Backup for Microsoft Azure in Orlando | Cloud-Native Protection',
    description:
      'Plattano Technologies offers Veeam Backup for Microsoft Azure in Orlando. Protect your Azure workloads with native backup, DR, immutability, and cost-optimized retention.',
    keywords: [
      'Veeam Backup for Azure',
      'Microsoft Azure backup',
      'Azure disaster recovery',
      'Veeam Orlando',
      'cloud-native backup',
      'Plattano Technologies',
      'Azure data protection Florida',
      'secure Azure workloads',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/data-protection/veeam-for-microsoft-azure',
    },
    openGraph: {
      title: 'Veeam for Microsoft Azure | Backup & DR for Cloud Workloads in Orlando',
      description:
        'Veeam-native backup and recovery for Microsoft Azure. Delivered by Plattano for secure, scalable, and resilient cloud operations in Orlando.',
      url: 'https://plattano.com/products/data-protection/veeam-for-microsoft-azure',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function VeeamForMicrosoftAzurePage() {
    return (
        <>
            <VeeamAzureHeroSection />
            <VeeamAzureProtectionOverviewSection />
            <VeeamAzureKeyFeaturesSection />
            <VeeamAzureResiliencyTargetsSection />
            <VeeamAzureIntegrateSection />
            <VeeamAzureBackupReplicationSection />
            <VeeamAzureBackupComparisonSection />
            <Footer />
        </>
    )
}