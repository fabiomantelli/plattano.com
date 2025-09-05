import Footer from "../ui/layout/Footer";
import ChallengeSection from "./ChallengeSection";
import CostStrategySection from "./CostStrategySection";
import DeliveryModelSection from "./DeliveryModelSection";
import DiscountTableSection from "./DiscountTableSection";
import FaqSection from "./FaqSection";
import GridBenefitsSection from "./GridBenefitsSection";
import HeroSection from "./HeroSection";
import PartnershipSection from "./PartnershipSection";
import PlattanoAsAServiceSection from "./PlattanoAsAServiceSection";
import PlattanoHotStorageSection from "./PlattanoHotStorageSection";
import ScaleStorageSection from "./ScaleStorageSection";
import SimplifiedStorageSection from "./SimplifiedStorageSection";
import UseCasesSection from "./UseCasesSection";
import VeeamHotStorageSection from "./VeeamHotStorageSection";
import VeeamMVPSection from "./VeeamMVPSection";
import VeeamPoweredSection from "./VeeamPoweredSection";
import WhatWeOfferSection from "./WhatWeOfferSection";

export const metadata = {
    title: 'Plattano Technologies | Partner with Plattano | Strategic IT Partnerships & BaaS Solutions',
    description:
      'Unlock high-margin, scalable IT solutions including Veeam-powered backup, hot storage, and managed services. Built for MSPs and resellers.',
    keywords: [
      'Plattano partnership',
      'Veeam partner Orlando',
      'BaaS reseller program',
      'managed backup partner',
      'IT reseller partnership',
      'MSP Veeam solutions',
      'Plattano hot storage',
      'channel partner IT',
      'data protection partner program',
      'white-label BaaS',
    ],
    alternates: {
      canonical: 'https://plattano.com/partnership',
    },
    openGraph: {
      title: 'Plattano Partnership Program | Scale Your IT Business',
      description:
        'Join Plattano’s partner ecosystem and offer enterprise-grade backup, hot storage, and cloud services under your own brand—with full support and technical enablement.',
      url: 'https://plattano.com/partnership',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function PartnershipPage() {
    return (
        <>
            <HeroSection />
            <PartnershipSection />
            <ChallengeSection />
            <PlattanoAsAServiceSection />
            <WhatWeOfferSection />
            <VeeamPoweredSection />
            <VeeamMVPSection />
            <GridBenefitsSection />
            <VeeamHotStorageSection />
            <PlattanoHotStorageSection />
            <UseCasesSection />
            <SimplifiedStorageSection />
            <ScaleStorageSection />
            <CostStrategySection />
            <DiscountTableSection />
            <DeliveryModelSection />
            <FaqSection />
            <Footer />
        </>
    )
}