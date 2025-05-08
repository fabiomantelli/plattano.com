import Footer from "@/app/ui/layout/Footer";
import OffSiteAndManagedBackupAsAServiceSection from "./OffSiteAndManagedBackupAsAServiceSection";
import OffSiteAndManagedBackupBenefitsSection from "./OffSiteAndManagedBackupBenefitsSection";
import OffSiteAndManagedBackupFaqSection from "./OffSiteAndManagedBackupFaqSection";
import OffSiteAndManagedBackupHeroSection from "./OffSiteAndManagedBackupHeroSection";
import OffSiteAndManagedBackupMspMarketSection from "./OffSiteAndManagedBackupMspMarketSection";
import OffSiteAndManagedBackupWhyBaasSection from "./OffSiteAndManagedBackupWhyBaasSection";

export default function OffSiteManagedBackupPage() {
    return (
        <>
            <OffSiteAndManagedBackupHeroSection />
            <OffSiteAndManagedBackupMspMarketSection />
            <OffSiteAndManagedBackupAsAServiceSection />
            <OffSiteAndManagedBackupWhyBaasSection />
            <OffSiteAndManagedBackupBenefitsSection />
            <OffSiteAndManagedBackupFaqSection />
            <Footer />
        </>
    )
}