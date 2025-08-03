import Footer from "../ui/layout/Footer";
import AboutPlattanoSection from "./AboutPlattanoSection";
import HeroSection from "./HeroSection";
import IdentitySection from "./IdentitySection";
import SpecialtiesSection from "./SpecialtiesSection";
import StatsSection from "./StatsSection";
import ValuesCultureSection from "./ValuesCultureSection";

export const metadata = {
    title: 'Plattano Technologies | IT Expertise Rooted in Innovation',
    description:
      'Get to know Plattano Technologies—our mission, values, and specialties in cybersecurity, backup, hybrid cloud, and managed IT services in Orlando and beyond.',
    keywords: [
      'Plattano Technologies',
      'about Plattano',
      'IT company in Orlando',
      'cybersecurity Orlando',
      'managed IT services',
      'hybrid cloud consulting',
      'backup and data protection',
      'Plattano mission and values',
      'tech company culture',
      'Orlando tech partner',
    ],
    alternates: {
      canonical: 'https://plattano.com/the-plattano',
    },
    openGraph: {
      title: 'The Plattano | Our Identity, Mission & Expertise',
      description:
        'We are more than just IT. Learn who we are, what we value, and how we deliver strategic IT services with passion, precision, and purpose.',
      url: 'https://plattano.com/the-plattano',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
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