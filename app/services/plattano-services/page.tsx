import PlattanoServicesLicensingSection from "./PlattanoServicesLicensingSection";
import PlattanoServicesHeroSection from "./PlattanoServicesHeroSection";
import PlattanoServicesSaveGainSection from "./PlattanoServicesSaveGainSection";
import PlattanoServicesDirectPurchaseSection from "./PlattanoServicesDirectPurchaseSection";
import PlattanoServicesStrategicPartnersSection from "./PlattanoServicesStrategicPartnerSection";
import PlattanoServicesWhyNotDirectPurchaseSection from "./PlattanoServicesWhyNotDirectPurchaseSection";
import PlattanoServicesImplementationProjectsSection from "./PlattanoServicesImplementationProjectsSection";
import StatsSection from "@/app/(home)/StatsSection";
import PlattanoServicesProjectsByProductSection from "./PlattanoServicesProjectsProductSection";
import PlattanoServicesToolsResourcesProcessesSection from "./PlattanoServicesToolResourcesProcessesSection";
import PlattanoServicesSupportProgramsSection from "./PlattanoServicesSupportProgramsSection";
import PlattanoServicesEternalLearningSection from "./PlattanoServicesEternalLearningSection";
import PlattanoServicesTrustedAdvisorSection from "./PlattanoServicesTrustedAdvisorSection";
import Footer from "@/app/ui/layout/Footer";

export default function PlattanoServicesPage() {
    return (
        <>
            <PlattanoServicesHeroSection />
            <PlattanoServicesSaveGainSection />
            <PlattanoServicesLicensingSection />
            <PlattanoServicesDirectPurchaseSection />
            <PlattanoServicesStrategicPartnersSection />
            <PlattanoServicesWhyNotDirectPurchaseSection />
            <PlattanoServicesImplementationProjectsSection />
            <StatsSection />
            <PlattanoServicesProjectsByProductSection />
            <PlattanoServicesToolsResourcesProcessesSection />
            <PlattanoServicesSupportProgramsSection />
            <PlattanoServicesEternalLearningSection />
            <PlattanoServicesTrustedAdvisorSection />
            <Footer />
        </>
    )
}