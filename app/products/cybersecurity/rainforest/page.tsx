import Footer from '@/app/ui/layout/Footer';
import AppCloudSecuritySection from './AppCloudSecuritySection';
import BrandIntelligenceSection from './BrandIntelligenceSection';
import CloudSecurityOverviewSection from './CloudSecurityOverviewSection';
import CyberFocusSection from './CyberFocusSection';
import RainforestFaqSection from './RainforestFaqSection';
import FraudProtectionOverviewSection from './FraudProtectionOverviewSection';
import HeroSection from './HeroSection';
import IntegratedSecuritySection from './IntegratedSecuritySection';
import LeakDetectionOverviewSection from './LeakDetectionOverviewSection';
import SupportedLanguagesSection from './SupportedLanguagesSection';
import TechStackOverviewSection from './TechStackOverviewSection';
import VisibilitySection from './VisibilitySection';
import VulnerabilitySection from './VulnerabilitySection';
import WhyChooseUsSection from './WhyChooseUsSection';

export const metadata = {
  title: 'Plattano Technologies | Rainforest.tech in Orlando',
  description:
    'Plattano Technologies is an authorized Rainforest.tech partner in Orlando, providing smart, energy-efficient, and sustainable solutions for enterprise data centers.',
  keywords: [
    'Rainforest.tech Orlando',
    'sustainable data center',
    'energy-efficient IT',
    'Rainforest.tech partner',
    'intelligent cooling',
    'carbon-neutral data center',
    'Plattano Technologies',
    'green IT Orlando',
  ],
  alternates: {
    canonical: 'https://plattano.com/products/cybersecurity/rainforest',
  },
  openGraph: {
    title: 'Rainforest.tech in Orlando | Energy-Efficient Data Center Solutions',
    description:
      'Plattano delivers Rainforest.tech solutions focused on sustainability, energy performance, and intelligent infrastructure for data centers in Orlando and across Florida.',
    url: 'https://plattano.com/products/cybersecurity/rainforest',
    siteName: 'Plattano Technologies US',
    type: 'website',
    locale: 'en_US',
  },
};

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
      <RainforestFaqSection />
      <Footer />
    </main>
  );
}
