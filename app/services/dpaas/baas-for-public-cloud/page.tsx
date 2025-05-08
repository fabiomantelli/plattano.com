import BaaSPublicCloudHeroSection from "@/app/services/dpaas/baas-for-public-cloud/BaasForPublicCloudHeroSection";
import BaasForPublicCloudMspMarketSection from "./BaasForPublicCloudMspMarketSection";
import BaasForPublicCloudResponsibilitySection from "./BaasForPublicCloudResponsibilitySection";
import BaasForPublicCloudFocusBackupSection from "./BaasForPublicCloudFocusBackupSection";
import BaasForPublicCloudDataResilienceSection from "./BaasForPublicCloudDataResilienceSection";
import BaaSForPublicCloudResourcesSection from "./BaasForPublicCloudResourcesSection";
import BaasForPublicCloudBackupSolutionsSection from "./BaasForPublicCloudBackupSolutionsSection";
import BaaSForPublicCloudFaqSection from "./BaasForPublicCloudFaqSection";
import Footer from "@/app/ui/layout/Footer";

export default function BaasForPublicCloudPage() {
    return (
        <>
            <BaaSPublicCloudHeroSection />
            <BaasForPublicCloudMspMarketSection />
            <BaasForPublicCloudResponsibilitySection />
            <BaasForPublicCloudFocusBackupSection />
            <BaasForPublicCloudDataResilienceSection />
            <BaaSForPublicCloudResourcesSection />
            <BaasForPublicCloudBackupSolutionsSection />
            <BaaSForPublicCloudFaqSection />
            <Footer />
        </>
    )
}