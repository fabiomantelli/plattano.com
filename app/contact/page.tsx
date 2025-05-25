import Footer from "../ui/layout/Footer";
import FormSection from "./FormSection";
import FutureSection from "./FutureSection";
import HeroSection from "./HeroSection";
import WhereWeAreSection from "./WhereWeAreSection";

export default function ContactPage() {
    return (
        <>
            <HeroSection />
            <FormSection />
            <WhereWeAreSection />
            <FutureSection />
            <Footer />
        </>
    )
}