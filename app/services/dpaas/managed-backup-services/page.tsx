import ManagedBackupServicesLicensingSection from "./ManagedBackupServicesLicensingSection";
import ManagedBackupServicesHeroSection from "./ManagedBackupServicesHeroSection";
import ManagedBackupServicesSaveGainSection from "./ManagedBackupServicesSaveGainSection";
import ManagedBackupServicesDirectPurchaseSection from "./ManagedBackupServicesDirectPurchaseSection";
import ManagedBackupServicesStrategicPartnersSection from "./ManagedBackupServicesStrategicPartnerSection";
import ManagedBackupServicesWhyNotDirectPurchaseSection from "./ManagedBackupServicesWhyNotDirectPurchaseSection";
import ManagedBackupServicesImplementationProjectsSection from "./ManagedBackupServicesImplementationProjectsSection";
import StatsSection from "@/app/(home)/StatsSection";
import ManagedBackupServicesProjectsByProductSection from "./ManagedBackupServicesProjectsProductSection";
import ManagedBackupServicesToolsResourcesProcessesSection from "./ManagedBackupServicesToolResourcesProcessesSection";
import ManagedBackupServicesSupportProgramsSection from "./ManagedBackupServicesSupportProgramsSection";
import ManagedBackupServicesEternalLearningSection from "./ManagedBackupServicesEternalLearningSection";
import ManagedBackupServicesTrustedAdvisorSection from "./ManagedBackupServicesTrustedAdvisorSection";
import Footer from "@/app/ui/layout/Footer";

export default function ManagedBackupServicesPage() {
    return (
        <>
            <ManagedBackupServicesHeroSection />
            <ManagedBackupServicesSaveGainSection />
            <ManagedBackupServicesLicensingSection />
            <ManagedBackupServicesDirectPurchaseSection />
            <ManagedBackupServicesStrategicPartnersSection />
            <ManagedBackupServicesWhyNotDirectPurchaseSection />
            <ManagedBackupServicesImplementationProjectsSection />
            <StatsSection />
            <ManagedBackupServicesProjectsByProductSection />
            <ManagedBackupServicesToolsResourcesProcessesSection />
            <ManagedBackupServicesSupportProgramsSection />
            <ManagedBackupServicesEternalLearningSection />
            <ManagedBackupServicesTrustedAdvisorSection />
            <Footer />
        </>
    )
}