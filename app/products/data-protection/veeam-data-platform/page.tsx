import Footer from "@/app/ui/layout/Footer";
import BestBackupDefenseSection from "./BestBackupDefenseSection";
import DataResiliencePillarsSection from "./DataResiliencePillarsSection";
import DataResilienceSection from "./DataResilienceSection";
import HeroSection from "./HeroSection";
import PlatformComponentsSection from "./PlatformComponentsSection";
import RansomwareSection from "./RansomwareSection";
import VeeamCommercialValueSection from "./VeeamCommercialValueSection";
import VeeamFaqSection from "./VeeamFaqSection";
import VeeamImpactStatsSection from "./VeeamImpactStatsSection";
import VeeamLeaderSection from "./VeeamLeaderSection";
import VeeamLeaderStatsSection from "./VeeamLeaderStatsSection";
import VeeamPlatformOverviewSection from "./VeeamPlatformOverviewSection";
import VeeamProtectsEverythingSection from "./VeeamProtectEverythingSection";

export default function VeeamDataProtectionPage() {
    return (
        <>
            <HeroSection />
            <VeeamPlatformOverviewSection />
            <DataResiliencePillarsSection />
            <BestBackupDefenseSection />
            <PlatformComponentsSection />
            <VeeamImpactStatsSection />
            <VeeamProtectsEverythingSection />
            <VeeamLeaderSection />
            <VeeamLeaderStatsSection />
            <VeeamCommercialValueSection />
            <DataResilienceSection />
            <RansomwareSection />
            <VeeamFaqSection />
            <Footer />
        </>
    )
}