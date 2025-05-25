import Footer from "../ui/layout/Footer";
import AboutPlattanoSection from "./AboutPlattanoSection";
import HeroSection from "./HeroSection";
import IdentitySection from "./IdentitySection";
import SpecialtiesSection from "./SpecialtiesSection";
import StatsSection from "./StatsSection";
import ValuesCultureSection from "./ValuesCultureSection";

export default function ThePlattanoPage() {
    return (
        <>
            <HeroSection />
            <AboutPlattanoSection />
            <StatsSection />
            <SpecialtiesSection />
            <IdentitySection />
            <ValuesCultureSection />
            <Footer />
        </>
    )
}