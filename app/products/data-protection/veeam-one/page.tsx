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
        </>
    )
}