import Footer from "@/app/ui/layout/Footer";
import VeeamAwsBackupComparisonSection from "./VeeamAwsBackupComparisonSection";
import VeeamAwsBackupReplicationSection from "./VeeamAwsBackupReplicationSection";
import VeeamAwsCapabilitiesSection from "./VeeamAwsCapabilitiesSection";
import VeeamAwsFeaturesSection from "./VeeamAwsFeaturesSection";
import VeeamAwsHeroSection from "./VeeamAwsHeroSection";
import VeeamAwsIntegrateSection from "./VeeamAwsIntegrateSection";
import VeeamAwsProtectedServicesSection from "./VeeamAwsProtectedServicesSection";

export default function VeeamForAwsPage() {
    return (
        <>
            <VeeamAwsHeroSection />
            <VeeamAwsFeaturesSection />
            <VeeamAwsCapabilitiesSection />
            <VeeamAwsProtectedServicesSection />
            <VeeamAwsIntegrateSection />
            <VeeamAwsBackupReplicationSection />
            <VeeamAwsBackupComparisonSection />
            <Footer />
        </>
    )
}