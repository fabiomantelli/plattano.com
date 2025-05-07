import Footer from "@/app/ui/layout/Footer";
import VeeamGcpBackupComparisonSection from "./VeeamGcpBackupComparisonSection";
import VeeamGcpBackupReplicationSection from "./VeeamGcpBackupReplicationSection";
import VeeamGcpCapabilitiesSection from "./VeeamGcpCapabilitiesSection";
import VeeamGcpFeaturesSection from "./VeeamGcpFeaturesSection";
import VeeamGcpHeroSection from "./VeeamGcpHeroSection";
import VeeamGcpIntegrateSection from "./VeeamGcpIntegrateSection";
import VeeamGcpProtectedServicesSection from "./VeeamGcpProtectedServicesSection";

export default function VeeamForGoogleCloudPage() {
    return (
        <>
            <VeeamGcpHeroSection />
            <VeeamGcpFeaturesSection />
            <VeeamGcpCapabilitiesSection />
            <VeeamGcpProtectedServicesSection />
            <VeeamGcpIntegrateSection />
            <VeeamGcpBackupReplicationSection />
            <VeeamGcpBackupComparisonSection />
            <Footer />
        </>
    )
}