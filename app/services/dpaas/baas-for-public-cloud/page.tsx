import BaaSPublicCloudHeroSection from "@/app/services/dpaas/baas-for-public-cloud/BaasForPublicCloudHeroSection";
import BaasForPublicCloudMspMarketSection from "./BaasForPublicCloudMspMarketSection";
import BaasForPublicCloudResponsibilitySection from "./BaasForPublicCloudResponsibilitySection";
import BaasForPublicCloudFocusBackupSection from "./BaasForPublicCloudFocusBackupSection";
import BaasForPublicCloudDataResilienceSection from "./BaasForPublicCloudDataResilienceSection";
import BaaSForPublicCloudResourcesSection from "./BaasForPublicCloudResourcesSection";
import BaasForPublicCloudBackupSolutionsSection from "./BaasForPublicCloudBackupSolutionsSection";
import BaaSForPublicCloudFaqSection from "./BaasForPublicCloudFaqSection";
import Footer from "@/app/ui/layout/Footer";

export const metadata = {
    title: 'Plattano Technologies | Managed Backup Services in Orlando | Secure BaaS for Public Cloud',
    description:
      'Plattano Technologies provides fully managed backup services for public cloud environments (AWS, Azure, Google Cloud). Ensure data protection, recovery, and compliance.',
    keywords: [
      'managed backup services',
      'baas for public cloud',
      'backup as a service Orlando',
      'cloud backup solutions',
      'AWS Azure GCP backup',
      'public cloud backup',
      'data protection as a service',
      'Plattano Technologies',
      'Orlando MSP backup',
    ],
    alternates: {
      canonical: 'https://plattano.com/services/dpaas/baas-for-public-cloud',
    },
    openGraph: {
      title: 'Managed Backup Services for Public Cloud in Orlando | Plattano BaaS',
      description:
        'Protect cloud workloads with managed backup from Plattano. Our BaaS covers AWS, Azure, and Google Cloud with secure, compliant data protection services in Orlando.',
      url: 'https://plattano.com/services/dpaas/baas-for-public-cloud',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function BaasForPublicCloudPage() {
    return (
        <>
            <BaaSPublicCloudHeroSection />
            <BaasForPublicCloudMspMarketSection />
            <BaasForPublicCloudResponsibilitySection />
            <BaasForPublicCloudFocusBackupSection />
            <BaasForPublicCloudDataResilienceSection />
            <BaaSForPublicCloudResourcesSection />
            <BaasForPublicCloudBackupSolutionsSection />
            <BaaSForPublicCloudFaqSection />
            <Footer />
        </>
    )
}