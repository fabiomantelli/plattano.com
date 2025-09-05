import Footer from "@/app/ui/layout/Footer";
import VeeamAwsBackupComparisonSection from "./VeeamAwsBackupComparisonSection";
import VeeamAwsBackupReplicationSection from "./VeeamAwsBackupReplicationSection";
import VeeamAwsCapabilitiesSection from "./VeeamAwsCapabilitiesSection";
import VeeamAwsFeaturesSection from "./VeeamAwsFeaturesSection";
import VeeamAwsHeroSection from "./VeeamAwsHeroSection";
import VeeamAwsIntegrateSection from "./VeeamAwsIntegrateSection";
import VeeamAwsProtectedServicesSection from "./VeeamAwsProtectedServicesSection";

export const metadata = {
    title: 'Veeam Backup for AWS in Orlando | Cloud-Native Data Protection – Plattano',
    description:
      'Plattano Technologies offers Veeam Backup for AWS in Orlando, providing cloud-native backup, disaster recovery, and cost-optimized protection for your AWS workloads.',
    keywords: [
      'Veeam Backup for AWS',
      'Veeam Orlando',
      'cloud-native data protection',
      'AWS disaster recovery',
      'Veeam partner Florida',
      'Plattano Technologies',
      'backup AWS workloads',
      'data protection in the cloud',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/data-protection/backup-and-recovery/veeam-for-aws',
    },
    openGraph: {
      title: 'Veeam Backup for AWS | Secure Cloud Workload Protection in Orlando',
      description:
        'Safeguard your AWS environment with Veeam. Plattano delivers backup, replication, and fast recovery for cloud-native workloads across Orlando and beyond.',
      url: 'https://plattano.com/products/data-protection/backup-and-recovery/veeam-for-aws',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };

export default function VeeamForAwsPage() {
    return (
        <>
            <VeeamAwsHeroSection />
            <VeeamAwsFeaturesSection />
            <VeeamAwsCapabilitiesSection />
            <VeeamAwsProtectedServicesSection />
            <VeeamAwsIntegrateSection />
            <VeeamAwsBackupReplicationSection />
            <VeeamAwsBackupComparisonSection />
            <Footer />
        </>
    )
}