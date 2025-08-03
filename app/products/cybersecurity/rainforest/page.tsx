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
  title: 'Rainforest.tech em Orlando | Soluções Sustentáveis para Data Centers – Plattano',
  description:
    'Revenda autorizada da Rainforest.tech em Orlando, a Plattano Technologies oferece soluções em eficiência energética, sustentabilidade e inteligência para data centers.',
  keywords: [
    'Rainforest.tech Orlando',
    'sustentabilidade data center',
    'eficiência energética TI',
    'parceiro Rainforest.tech',
    'resfriamento inteligente',
    'carbono zero data center',
    'Plattano Technologies',
    'tecnologia verde Orlando',
  ],
  alternates: {
    canonical: 'https://seudominio.com/rainforest', // 🔁 Substituir com seu domínio real
  },
  openGraph: {
    title: 'Rainforest.tech Orlando | Eficiência Energética para Data Centers',
    description:
      'Soluções inteligentes da Rainforest.tech com foco em sustentabilidade, performance energética e gestão inteligente de data centers. Atuação local em Orlando com suporte especializado.',
    url: 'https://seudominio.com/rainforest',
    siteName: 'Plattano Technologies',
    type: 'website',
    locale: 'pt_BR',
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
