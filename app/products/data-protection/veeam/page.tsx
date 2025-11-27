import { Metadata } from 'next';
import VeeamHeroSection from './VeeamHeroSection';
import VeeamTrustSignalsSection from './VeeamTrustSignalsSection';
import VeeamSolutionsByNeedSection from './VeeamSolutionsByNeedSection';
import VeeamProofPointsSection from './VeeamProofPointsSection';
import VeeamWhyPlattanoSection from './VeeamWhyPlattanoSection';
import VeeamFaqSection from './VeeamFaqSection';
import VeeamCtaSection from './VeeamCtaSection';

export const metadata: Metadata = {
  title: 'Plattano Technologies | Veeam Solutions in Orlando | Complete Data Protection & Backup',
  description: 'Protect your business with Veeam solutions delivered by certified experts in Orlando. From ransomware protection to cloud backup, we ensure your data is always secure and recoverable.',
  keywords: [
    'Veeam Orlando',
    'data protection Orlando',
    'backup solutions Florida',
    'ransomware protection',
    'cloud backup services',
    'Veeam partner',
    'business continuity',
    'disaster recovery Orlando'
  ],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://plattano.com/products/data-protection/veeam'
  },
  openGraph: {
    title: 'Veeam Data Protection Solutions | Complete Backup & Recovery in Orlando',
    description: 'Secure your business data with enterprise-grade Veeam solutions. Plattano Technologies delivers certified Veeam services in Orlando with 24/7 support and proven results.',
    url: 'https://plattano.com/products/data-protection/veeam',
    type: 'website',
  },
};

export default function VeeamPage() {
  return (
    <>
      <VeeamHeroSection />
      <VeeamTrustSignalsSection />
      <VeeamSolutionsByNeedSection />
      <VeeamProofPointsSection />
      <VeeamWhyPlattanoSection />
      <VeeamFaqSection />
      <VeeamCtaSection />
    </>
  );
}