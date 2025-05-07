import Footer from "@/app/ui/layout/Footer";
import VeeamM365AdvancedEDiscoverySection from "./VeeamM365AdvancedEDiscoverySection";
import VeeamM365AnywhereSection from "./VeeamM365AnywhereSection";
import VeeamM365CoverageSection from "./VeeamM365CoverageSection";
import VeeamM365FaqSection from "./VeeamM365FaqSection";
import VeeamM365FeatureCardsSection from "./VeeamM365FeatureCardsSection";
import VeeamM365FeaturesSection from "./VeeamM365FeaturesSection";
import VeeamM365HeroSection from "./VeeamM365HeroSection";
import VeeamM365HowItWorksSection from "./VeeamM365HowItWorksSection";
import VeeamM365OverviewSection from "./VeeamM365OverviewSection";
import VeeamM365PlattanoReasonsSection from "./VeeamM365PlattanoReasonsSection";
import VeeamM365RapidRecoverySection from "./VeeamM365RapidRecoverySection";
import VeeamM365ReliableBackupsSection from "./VeeamM365ReliableBackupsSection";
import VeeamM365ResponsibilityModelSection from "./VeeamM365ResponsibilityModelSection";
import VeeamM365ResponsibilitySection from "./VeeamM365ResponsibilitySection";
import VeeamM365SharedResponsabilitySection from "./VeeamM365SharedResponsabilitySection";
import VeeamM365ThreatStatsSection from "./VeeamM365ThreatStatsSection";
import VeeamM365WhyBackupSection from "./VeeamM365WhyBackupSection";
import VeeamM365YourResponsibilitySection from "./VeeamM365YourResponsibilitySection";

export default function VeeamForMicrosoft365() {
    return (
        <>
            <VeeamM365HeroSection />
            <VeeamM365OverviewSection />
            <VeeamM365AnywhereSection />
            <VeeamM365FeatureCardsSection />
            <VeeamM365ThreatStatsSection />
            <VeeamM365WhyBackupSection />
            <VeeamM365SharedResponsabilitySection />
            <VeeamM365ResponsibilitySection />
            <VeeamM365YourResponsibilitySection />
            <VeeamM365ResponsibilityModelSection />
            <VeeamM365FeaturesSection />
            <VeeamM365CoverageSection />
            <VeeamM365HowItWorksSection />
            <VeeamM365ReliableBackupsSection />
            <VeeamM365AdvancedEDiscoverySection />
            <VeeamM365RapidRecoverySection />
            <VeeamM365PlattanoReasonsSection />
            <VeeamM365FaqSection />
            <Footer />
        </>
    )
}