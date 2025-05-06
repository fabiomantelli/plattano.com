import Footer from "@/app/ui/layout/Footer";
import HeroSection from "./HeroSection";
import VeeamConfidenceSection from "./VeeamConfidenceSection";
import VeeamLastLineSection from "./VeeamLastLineSection";
import VeeamOrchestrationSection from "./VeeamOrchestrationSection";
import VeeamOrchestratorFaqSection from "./VeeamOrchestratorFaqSection";
import VeeamQuoteBlockSection from "./VeeamQuoteBlockSection";

export default function VeeamRecoveryOrcherstratorPage() {
    return (
        <>
            <HeroSection />
            <VeeamQuoteBlockSection />
            <VeeamConfidenceSection />
            <VeeamLastLineSection />
            <VeeamOrchestrationSection />
            <VeeamOrchestratorFaqSection />
            <Footer />
        </>
    )
}