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

export const metadata = {
    title: 'Plattano Technologies | Plattano Hot Cloud Storage in Orlando | Secure, Tier-Free Cloud Storage',
    description:
      'Scalable, secure, and flat-rate object storage. Say goodbye to tiers, egress fees, and hidden costs — designed for backup, media, and enterprise data.',
    keywords: [
      'hot cloud storage',
      'cloud object storage Orlando',
      'Plattano Hot Cloud Storage',
      'S3-compatible storage',
      'flat-rate cloud storage',
      'no-tier cloud storage',
      'Wasabi alternative Florida',
      'secure backup storage',
      'Plattano Technologies',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/storage/plattano-hot-cloud-storage',
    },
    openGraph: {
      title: 'Plattano Hot Cloud Storage in Orlando | Flat-Rate, Secure & S3-Compatible',
      description:
        'Experience flat-rate, high-performance object storage with zero tiering or egress fees. Plattano HCS is the no-compromise cloud storage solution for businesses in Orlando and beyond.',
      url: 'https://plattano.com/products/storage/plattano-hot-cloud-storage',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
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