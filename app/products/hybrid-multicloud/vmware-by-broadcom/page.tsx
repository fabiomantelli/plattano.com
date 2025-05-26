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