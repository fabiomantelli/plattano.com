import FooterSection from "@/app/ui/layout/Footer";
import ExagridBenefitsSection from "./ExagridBenefitsSections";
import ExagridFaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import HybridStorageSection from "./HybridStorageSection";
import WhatWeProtectSection from "./WhatWeProtectSection";

export default function ExagridPage() {
    return (
        <>
            <HeroSection />
            <ExagridBenefitsSection />
            <HybridStorageSection />
            <WhatWeProtectSection />
            <ExagridFaqSection />
            <FooterSection />
        </>
    )
}