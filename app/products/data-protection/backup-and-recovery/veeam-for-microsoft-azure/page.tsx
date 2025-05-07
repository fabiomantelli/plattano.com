import Footer from "@/app/ui/layout/Footer";
import VeeamAzureBackupComparisonSection from "./VeeamAzureBackupComparisonSection";
import VeeamAzureBackupReplicationSection from "./VeeamAzureBackupReplicationSection";
import VeeamAzureHeroSection from "./VeeamAzureHeroSection";
import VeeamAzureIntegrateSection from "./VeeamAzureIntegrateSection";
import VeeamAzureKeyFeaturesSection from "./VeeamAzureKeyFeaturesSection";
import VeeamAzureProtectionOverviewSection from "./VeeamAzureProtectionOverviewSection";
import VeeamAzureResiliencyTargetsSection from "./VeeamAzureResiliencyTargetSection";

export default function VeeamForMicrosoftAzurePage() {
    return (
        <>
            <VeeamAzureHeroSection />
            <VeeamAzureProtectionOverviewSection />
            <VeeamAzureKeyFeaturesSection />
            <VeeamAzureResiliencyTargetsSection />
            <VeeamAzureIntegrateSection />
            <VeeamAzureBackupReplicationSection />
            <VeeamAzureBackupComparisonSection />
            <Footer />
        </>
    )
}