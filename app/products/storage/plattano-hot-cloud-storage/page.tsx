import Footer from "@/app/ui/layout/Footer";
import PlattanoHCSBusinessesPoweredSection from "./PlattanoHCSBusinessesPoweredSection";
import PlattanoHCSEraSection from "./PlattanoHCSEraSection";
import PlattanoHCSFaqSection from "./PlattanoHCSFaqSection";
import PlattanoHCSHeroSection from "./PlattanoHCSHeroSection";
import PlattanoHCSNoMoreTiersSection from "./PlattanoHCSNoMoreTiersSection";
import PlattanoHCSOfferingsSection from "./PlattanoHCSOfferingsSection";
import PlattanoHCSRansomwarePreventionSection from "./PlattanoHCSRansomwarePreventionSection.";
import PlattanoHCSRansomwareStatsSection from "./PlattanoHCSRansomwareStatsSection";
import PlattanoHCSSecurityFeaturesSection from "./PlattanoHCSSecurityFeaturesSection";
import PlattanoHCSSecuritySection from "./PlattanoHCSSecuritySection";
import PlattanoHCSUniqueRateBanner from "./PlattanoHCSUniqueRateBanner";
import PlattanoHCSUseCasesSection from "./PlattanoHCSUseCasesSection";
import PlattanoHCSWhatIsHotCloudStorageSection from "./PlattanoHCSWhatIsHotClodStorageSection";
import PlattanoHCSWhoSupportsUsSection from "./PlattanoHCSWhoSupportUsSection";

export default function PlattanoHCSPage() {
    return (
        <>
            <PlattanoHCSHeroSection />
            <PlattanoHCSEraSection />
            <PlattanoHCSRansomwarePreventionSection />
            <PlattanoHCSRansomwareStatsSection />
            <PlattanoHCSWhatIsHotCloudStorageSection />
            <PlattanoHCSBusinessesPoweredSection />
            <PlattanoHCSUniqueRateBanner />
            <PlattanoHCSUseCasesSection />
            <PlattanoHCSOfferingsSection />
            <PlattanoHCSNoMoreTiersSection />
            <PlattanoHCSWhoSupportsUsSection />
            <PlattanoHCSSecuritySection />
            <PlattanoHCSSecurityFeaturesSection />
            <PlattanoHCSFaqSection />
            <Footer />
        </>
    )
}