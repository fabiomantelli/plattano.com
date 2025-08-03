import PlattanoServicesLicensingSection from "./PlattanoServicesLicensingSection";
import PlattanoServicesHeroSection from "./PlattanoServicesHeroSection";
import PlattanoServicesSaveGainSection from "./PlattanoServicesSaveGainSection";
import PlattanoServicesDirectPurchaseSection from "./PlattanoServicesDirectPurchaseSection";
import PlattanoServicesStrategicPartnersSection from "./PlattanoServicesStrategicPartnerSection";
import PlattanoServicesWhyNotDirectPurchaseSection from "./PlattanoServicesWhyNotDirectPurchaseSection";
import PlattanoServicesImplementationProjectsSection from "./PlattanoServicesImplementationProjectsSection";
import StatsSection from "@/app/(home)/StatsSection";
import PlattanoServicesProjectsByProductSection from "./PlattanoServicesProjectsProductSection";
import PlattanoServicesToolsResourcesProcessesSection from "./PlattanoServicesToolResourcesProcessesSection";
import PlattanoServicesSupportProgramsSection from "./PlattanoServicesSupportProgramsSection";
import PlattanoServicesEternalLearningSection from "./PlattanoServicesEternalLearningSection";
import PlattanoServicesTrustedAdvisorSection from "./PlattanoServicesTrustedAdvisorSection";
import Footer from "@/app/ui/layout/Footer";

export const metadata = {
    title: 'Plattano Technologies | IT Services & Strategic Projects in Orlando',
    description:
      'Plattano Technologies delivers trusted IT services, from licensing and implementation to managed backup and cloud projects. Partnered with leading vendors like Veeam and VMware.',
    keywords: [
      'IT services Orlando',
      'strategic IT consulting',
      'Plattano Technologies',
      'managed IT projects',
      'cloud migration services',
      'data protection projects',
      'Veeam services partner',
      'VMware projects',
      'licensing and implementation',
      'orlando IT provider',
    ],
    alternates: {
      canonical: 'https://plattano.com/services/plattano-services',
    },
    openGraph: {
      title: 'Plattano Technologies | Strategic IT Services & Implementation in Orlando',
      description:
        'From licensing and project delivery to technical support and cloud transformation, Plattano helps businesses grow through technology. Trusted partner for Veeam, VMware, and more.',
      url: 'https://plattano.com/services/plattano-services',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function PlattanoServicesPage() {
    return (
        <>
            <PlattanoServicesHeroSection />
            <PlattanoServicesSaveGainSection />
            <PlattanoServicesLicensingSection />
            <PlattanoServicesDirectPurchaseSection />
            <PlattanoServicesStrategicPartnersSection />
            <PlattanoServicesWhyNotDirectPurchaseSection />
            <PlattanoServicesImplementationProjectsSection />
            <StatsSection />
            <PlattanoServicesProjectsByProductSection />
            <PlattanoServicesToolsResourcesProcessesSection />
            <PlattanoServicesSupportProgramsSection />
            <PlattanoServicesEternalLearningSection />
            <PlattanoServicesTrustedAdvisorSection />
            <Footer />
        </>
    )
}