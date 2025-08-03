import NutanixCloudPlatformSection from "./NutanixCloudPlatformSection";
import NutanixFeatureSection from "./NutanixFeatureSection";
import NutanixHeroSection from "./NutanixHeroSection";
import NutanixFeaturesSection from "./NutanixFeaturesSection";
import NutanixLeadingCompaniesSection from "./NutanixLeadingCompaniesSection";
import NutanixMultiCloudArchitectureSection from "./NutanixMultiCloudArchitectureSection";
import NutanixThreeIconsSection from "./NutanixThreeIconsSection";
import NutanixTrustedSection from "./NutanixTrustedSection";
import NutanixHybridCloudSection from "./NutanixHybridCloudSection";
import NutanixCloudWorkloadSection from "./NutanixCloudWorkloadSection";
import NutanixPrismSection from "./NutanixPrismSection";
import NutanixAutomationSection from "./NutanixAutomationSection";
import NutanixBusinessSection from "./NutanixBusinessSection";
import NutanixResourcesSection from "./NutanixResourcesSection";
import NutanixCloudSection from "./NutanixCloudSection";
import NutanixStorageComputationNetworkClodSection from "./NutanixStorageComputationNetworkClodSection";
import NutanixCloudFeaturesSection from "./NutanixCloudFeaturesSection";
import NutanixHybridCloudFeaturesSection from "./NutanixHybridCloudFeaturesSection";
import Footer from "@/app/ui/layout/Footer";
import NutanixFaqSection from "./NutanixFaqSection";

export const metadata = {
    title: 'Plattano Technologies | Nutanix Solutions in Orlando | Hybrid & Multi-Cloud Infrastructure',
    description:
      'Plattano Technologies delivers Nutanix Cloud Platform solutions in Orlando. Simplify IT with hyperconverged infrastructure, hybrid cloud management, and application mobility.',
    keywords: [
      'Nutanix Orlando',
      'Nutanix Cloud Platform',
      'hyperconverged infrastructure',
      'HCI solutions',
      'hybrid cloud Orlando',
      'multi-cloud management',
      'Nutanix partner Florida',
      'Plattano Technologies',
      'data center modernization',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/cloud/nutanix',
    },
    openGraph: {
      title: 'Nutanix Cloud Platform in Orlando | Hyperconverged Infrastructure – Plattano',
      description:
        'Simplify your hybrid cloud journey with Nutanix. Plattano Technologies offers Nutanix HCI and multi-cloud solutions in Orlando for scalable, secure IT transformation.',
      url: 'https://plattano.com/products/cloud/nutanix',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function NutanixPage() {
    return (
        <>
            <NutanixHeroSection />
            <NutanixThreeIconsSection />
            <NutanixFeatureSection />
            <NutanixLeadingCompaniesSection />
            <NutanixTrustedSection />
            <NutanixMultiCloudArchitectureSection />
            <NutanixCloudPlatformSection />
            <NutanixFeaturesSection />
            <NutanixHybridCloudSection />
            <NutanixCloudWorkloadSection />
            <NutanixPrismSection />
            <NutanixAutomationSection />
            <NutanixBusinessSection />
            <NutanixResourcesSection />
            <NutanixCloudSection />
            <NutanixStorageComputationNetworkClodSection />
            <NutanixCloudFeaturesSection />
            <NutanixHybridCloudFeaturesSection />
            <NutanixFaqSection />
            <Footer />
        </>
    )
}