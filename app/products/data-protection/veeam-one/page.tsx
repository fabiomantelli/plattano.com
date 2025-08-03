import Footer from "@/app/ui/layout/Footer";
import VeeamOneBenefitsSection from "./VeeamOneBenefitsSection";
import VeeamOneCapabilitiesSection from "./VeeamOneCapabilitiesSection";
import VeeamOneCostCapacitySection from "./VeeamOneCostCapacitySection";
import VeeamOneExtraResourcesSection from "./VeeamOneExtraResourcesSection";
import VeeamOneFaqSection from "./VeeamOneFaqSection";
import VeeamOneGovernanceAndComplianceSection from "./VeeamOneGovernanceAndComplianceSection";
import VeeamOneHeroSection from "./VeeamOneHeroSection";
import VeeamOneInsightsSection from "./VeeamOneInsightSection";
import VeeamOnePlatformSuiteSection from "./VeeamOnePlatformSuiteSection";
import VeeamOneVisibilitySection from "./VeeamOneVisibilitySection";

export const metadata = {
    title: 'Plattano Technologies | Veeam ONE in Orlando | Backup Monitoring & Visibility',
    description:
      'Plattano Technologies provides Veeam ONE in Orlando. Gain real-time visibility, intelligent alerts, reporting, and compliance insights across your backup and virtual environments.',
    keywords: [
      'Veeam ONE',
      'backup monitoring Orlando',
      'Veeam partner Florida',
      'backup visibility',
      'ransomware alerting',
      'capacity planning',
      'compliance reporting',
      'infrastructure insights',
      'Plattano Technologies',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/data-protection/veeam-one',
    },
    openGraph: {
      title: 'Veeam ONE in Orlando | Visibility & Control for Backup Infrastructure',
      description:
        'Monitor and optimize your backup environment with Veeam ONE. Delivered by Plattano Technologies in Orlando, Veeam ONE gives you total visibility, alerts, compliance, and forecasting.',
      url: 'https://plattano.com/products/data-protection/veeam-one',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function VeeamOnePage() {
    return (
        <>
            <VeeamOneHeroSection />
            <VeeamOneBenefitsSection />
            <VeeamOneVisibilitySection />
            <VeeamOneInsightsSection />
            <VeeamOnePlatformSuiteSection />
            <VeeamOneCapabilitiesSection />
            <VeeamOneCostCapacitySection />
            <VeeamOneGovernanceAndComplianceSection />
            <VeeamOneExtraResourcesSection />
            <VeeamOneFaqSection />
            <Footer />
        </>
    )
}