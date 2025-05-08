import Footer from "@/app/ui/layout/Footer";
import ManagedBackupServicesAdvantagesSection from "./ManagedBackupServicesAdvantagesSection";
import ManagedBackupServicesAServiceSection from "./ManagedBackupServicesAServiceSection";
import ManagedBackupServicesDataProtectionTrendsSection from "./ManagedBackupServicesDataProtectionTrendsSection";
import ManagedBackupServicesFaqSection from "./ManagedBackupServicesFaqSection";
import ManagedBackupServicesFreeUpResourcesSection from "./ManagedBackupServicesFreeUpResourcesSection";
import ManagedBackupServicesHeroSection from "./ManagedBackupServicesHeroSection";
import ManagedBackupServicesMspMarketSection from "./ManagedBackupServicesMspMarketSection";
import ManagedBackupServicesVaspPartner2Section from "./ManagedBackupServicesVaspPartner2Section";
import ManagedBackupServicesVaspPartnerSection from "./ManagedBackupServicesVaspPartnerSection";
import ManagedBackupServicesVaspServices3Section from "./ManagedBackupServicesVaspServices3Section";
import ManagedBackupServicesVeeamPartnerSection from "./ManagedBackupServicesVeeamPartnerSection";
import ManagedBackupServicesWeTakeCareOfEverythingSection from "./ManagedBackupServicesWeTakeCareOfEverthingSection";

export default function ManagedBackupServicesPage() {
    return (
        <>
            <ManagedBackupServicesHeroSection />
            <ManagedBackupServicesFreeUpResourcesSection />
            <ManagedBackupServicesMspMarketSection />
            <ManagedBackupServicesAdvantagesSection />
            <ManagedBackupServicesDataProtectionTrendsSection />
            <ManagedBackupServicesVeeamPartnerSection />
            <ManagedBackupServicesVaspPartnerSection />
            <ManagedBackupServicesVaspPartner2Section />
            <ManagedBackupServicesVaspServices3Section />
            <ManagedBackupServicesAServiceSection />
            <ManagedBackupServicesWeTakeCareOfEverythingSection />
            <ManagedBackupServicesFaqSection />
            <Footer />
        </>
    )
}