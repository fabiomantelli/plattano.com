import FooterSection from '@/app/ui/layout/Footer';
import AppCloudSecuritySection from './AppCloudSecuritySection';
import BrandIntelligenceSection from './BrandIntelligenceSection';
import CloudSecurityOverviewSection from './CloudSecurityOverviewSection';
import CyberFocusSection from './CyberFocusSection';
import FaqSection from './FaqSection';
import FraudProtectionOverviewSection from './FraudProtectionOverviewSection';
import HeroSection from './HeroSection';
import IntegratedSecuritySection from './IntegratedSecuritySection';
import LeakDetectionOverviewSection from './LeakDetectionOverviewSection';
import SupportedLanguagesSection from './SupportedLanguagesSection';
import TechStackOverviewSection from './TechStackOverviewSection';
import VisibilitySection from './VisibilitySection';
import VulnerabilitySection from './VulnerabilitySection';
import WhyChooseUsSection from './WhyChooseUsSection';

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
      <CloudSecurityOverviewSection />
      <FraudProtectionOverviewSection />
      <LeakDetectionOverviewSection />
      <WhyChooseUsSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
