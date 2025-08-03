import VeeamFeatureBlocksSection from "./VeeamFeatureBlocksSection";
import HeroSection from "./HeroSection";
import CapabilitiesGridSection from "./CapabilitiesGridSection";
import MulticloudImpactSection from "./MulticloudImpactSection";
import EraMultiCloudSection from "./EraMultiCloudSection";
import CloudFoundationSection from "./CloudFoundationSection";
import CloudFoundationFeaturesSection from "./CloudFoundationFeaturesSection";
import UseCasesGridSection from "./UseCasesGridSection";
import VmwareFaqSection from "./VmwareFaqSection";
import Footer from "@/app/ui/layout/Footer";

export const metadata = {
    title: 'Plattano Technologies | VMware by Broadcom in Orlando | Cloud Foundation & Multi-Cloud Solutions',
    description:
      'Plattano Technologies delivers VMware Cloud Foundation solutions in Orlando. Accelerate your hybrid cloud journey with secure infrastructure, mobility, and multicloud operations.',
    keywords: [
      'VMware by Broadcom',
      'VMware Orlando',
      'Cloud Foundation',
      'multi-cloud infrastructure',
      'VMware partner Florida',
      'hybrid cloud Orlando',
      'virtualization solutions',
      'Plattano Technologies',
      'modern data center',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/hybrid-multicloud/vmware-by-broadcom',
    },
    openGraph: {
      title: 'VMware Cloud Foundation in Orlando | Multi-Cloud Infrastructure by Plattano',
      description:
        'Transform your hybrid IT with VMware by Broadcom. Plattano delivers Cloud Foundation, workload mobility, and secure virtualization in Orlando.',
      url: 'https://plattano.com/products/hybrid-multicloud/vmware-by-broadcom',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function VmwarePage() {
    return (
        <>
            <HeroSection />
            <VeeamFeatureBlocksSection />
            <CapabilitiesGridSection />
            <MulticloudImpactSection />
            <EraMultiCloudSection />
            <CloudFoundationSection />
            <CloudFoundationFeaturesSection />
            <UseCasesGridSection />
            <VmwareFaqSection />
            <Footer />
        </>
    )
}