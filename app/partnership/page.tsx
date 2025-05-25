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