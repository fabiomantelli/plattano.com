import Footer from "@/app/ui/layout/Footer";
import AutonomousTechSection from "./AutonomousTechSection";
import CyberFocusSection from "./CyberFocusSection";
import CyberSecurityAISection from "./CyberSecurityAISection";
import ExpandProtectionSection from "./ExpandProtectionSection";
import FeaturesSection from "./FeaturesSection";
import GartnerMagicQuadrantSection from "./GartnerMagicQuadrantSection";
import HeroSection from "./HeroSection";
import MitreEngenuitySection from "./MitreEngenuitySection";
import OptimizationProtectionSection from "./OptimizationProtectionSection";
import OptimizeSecuritySection from "./OptimizeSecuritySection";
import PlatformValueSection from "./PlatformValueSection";
import PreventViolationsSection from "./PreventViolationSection";
import ProtectContinuitySection from "./ProtectContiniutySection";
import ProtectEverythingSection from "./ProtectEverythingSection";
import ProtectingTheBestSection from "./ProtectingTheBestSection";
import SecurityFoundationSection from "./SecurityFoundationSection";
import SentinelOneFaq2Section from "./SentinelOneFaq2Section";
import SentinelOneFaq3Section from "./SentinelOneFaq3Section";
import SentinelOneFaqSection from "./SentinelOneFaqSection";
import SingularityIntegrationSection from "./SingularityIntegrationSection";
import SingularityXDRSection from "./SingularityXDRSection";
import StatsSection from "./StatsSection";
import VisibilityFeaturesSection from "./VisibilityFeaturesSection";
import VisibilityProtectionResponseSection from "./VisibilityProtectionResponseSection";

export const metadata = {
    title: 'Plattano Technologies | SentinelOne in Orlando | Autonomous AI Cybersecurity',
    description:
      'Plattano Technologies offers SentinelOne solutions in Orlando, providing autonomous AI-driven endpoint protection, XDR, and real-time threat prevention for enterprises.',
    keywords: [
      'SentinelOne Orlando',
      'endpoint protection',
      'XDR solutions',
      'autonomous cybersecurity',
      'AI cybersecurity',
      'Plattano Technologies',
      'SentinelOne partner Florida',
      'cybersecurity company Orlando',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/cybersecurity/sentinelone',
    },
    openGraph: {
      title: 'SentinelOne Orlando | AI-Powered Endpoint Security by Plattano',
      description:
        'Plattano delivers SentinelOne-powered endpoint and XDR cybersecurity solutions for businesses in Orlando. Protect your operations with real-time, autonomous AI security.',
      url: 'https://plattano.com/products/cybersecurity/sentinelone',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };


export default function SentinelOne() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <VisibilityFeaturesSection />
            <VisibilityProtectionResponseSection />
            <SingularityXDRSection />
            <SecurityFoundationSection />
            <ProtectContinuitySection />
            <PlatformValueSection />
            <CyberFocusSection />
            <CyberSecurityAISection />
            <ProtectEverythingSection />
            <PreventViolationsSection />
            <SingularityIntegrationSection />
            <ExpandProtectionSection />
            <OptimizeSecuritySection />
            <ProtectingTheBestSection />
            <StatsSection />
            <GartnerMagicQuadrantSection />
            <MitreEngenuitySection />
            <AutonomousTechSection />
            <OptimizationProtectionSection />
            <SentinelOneFaqSection />
            <SentinelOneFaq2Section />
            <SentinelOneFaq3Section />
            <Footer />
        </>
    )
}