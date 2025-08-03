import Footer from "@/app/ui/layout/Footer";
import VeeamM365AdvancedEDiscoverySection from "./VeeamM365AdvancedEDiscoverySection";
import VeeamM365AnywhereSection from "./VeeamM365AnywhereSection";
import VeeamM365CoverageSection from "./VeeamM365CoverageSection";
import VeeamM365FaqSection from "./VeeamM365FaqSection";
import VeeamM365FeatureCardsSection from "./VeeamM365FeatureCardsSection";
import VeeamM365FeaturesSection from "./VeeamM365FeaturesSection";
import VeeamM365HeroSection from "./VeeamM365HeroSection";
import VeeamM365HowItWorksSection from "./VeeamM365HowItWorksSection";
import VeeamM365OverviewSection from "./VeeamM365OverviewSection";
import VeeamM365PlattanoReasonsSection from "./VeeamM365PlattanoReasonsSection";
import VeeamM365RapidRecoverySection from "./VeeamM365RapidRecoverySection";
import VeeamM365ReliableBackupsSection from "./VeeamM365ReliableBackupsSection";
import VeeamM365ResponsibilityModelSection from "./VeeamM365ResponsibilityModelSection";
import VeeamM365ResponsibilitySection from "./VeeamM365ResponsibilitySection";
import VeeamM365SharedResponsabilitySection from "./VeeamM365SharedResponsabilitySection";
import VeeamM365ThreatStatsSection from "./VeeamM365ThreatStatsSection";
import VeeamM365WhyBackupSection from "./VeeamM365WhyBackupSection";
import VeeamM365YourResponsibilitySection from "./VeeamM365YourResponsibilitySection";

export const metadata = {
    title: 'Plattano Technologies | Veeam Backup for Microsoft 365 in Orlando | SaaS Email & OneDrive Protection',
    description:
      'Plattano Technologies offers Veeam Backup for Microsoft 365 in Orlando. Protect Exchange Online, SharePoint, OneDrive, and Teams with secure, compliant SaaS backup and rapid recovery.',
    keywords: [
      'Veeam Microsoft 365 backup',
      'Office 365 backup',
      'Veeam Orlando',
      'SharePoint backup',
      'Exchange Online protection',
      'ransomware recovery Microsoft 365',
      'SaaS data protection Orlando',
      'Plattano Technologies',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/data-protection/veeam-for-microsoft-365',
    },
    openGraph: {
      title: 'Veeam Backup for Microsoft 365 | SaaS Data Protection in Orlando',
      description:
        'Get comprehensive Microsoft 365 backup with Veeam. Plattano helps secure your business email, Teams, and files against ransomware, accidental deletion, and compliance gaps.',
      url: 'https://plattano.com/products/data-protection/veeam-for-microsoft-365',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function VeeamForMicrosoft365() {
    return (
        <>
            <VeeamM365HeroSection />
            <VeeamM365OverviewSection />
            <VeeamM365AnywhereSection />
            <VeeamM365FeatureCardsSection />
            <VeeamM365ThreatStatsSection />
            <VeeamM365WhyBackupSection />
            <VeeamM365SharedResponsabilitySection />
            <VeeamM365ResponsibilitySection />
            <VeeamM365YourResponsibilitySection />
            <VeeamM365ResponsibilityModelSection />
            <VeeamM365FeaturesSection />
            <VeeamM365CoverageSection />
            <VeeamM365HowItWorksSection />
            <VeeamM365ReliableBackupsSection />
            <VeeamM365AdvancedEDiscoverySection />
            <VeeamM365RapidRecoverySection />
            <VeeamM365PlattanoReasonsSection />
            <VeeamM365FaqSection />
            <Footer />
        </>
    )
}