import AppCloudSecuritySection from './AppCloudSecuritySection';
import BrandIntelligenceSection from './BrandIntelligenceSection';
import CyberFocusSection from './CyberFocusSection';
import HeroSection from './HeroSection';
import IntegratedSecuritySection from './IntegratedSecuritySection';
import SupportedLanguagesSection from './SupportedLanguagesSection';
import TechStackOverviewSection from './TechStackOverviewSection';
import VisibilitySection from './VisibilitySection';
import VulnerabilitySection from './VulnerabilitySection';

export default function RainforestPage() {
  return (
    <main>
      <HeroSection />
      <IntegratedSecuritySection />
      <CyberFocusSection />
      <VisibilitySection />
      <VulnerabilitySection />
      <BrandIntelligenceSection />
      <AppCloudSecuritySection />
      <SupportedLanguagesSection />
      <TechStackOverviewSection />
    </main>
  );
}
