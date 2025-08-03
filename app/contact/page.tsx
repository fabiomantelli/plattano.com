import Footer from "../ui/layout/Footer";
import FormSection from "./FormSection";
import FutureSection from "./FutureSection";
import HeroSection from "./HeroSection";
import WhereWeAreSection from "./WhereWeAreSection";

export const metadata = {
    title: 'Plattano Technologies | Contact Plattano Technologies | Let\'s Talk IT Solutions',
    description:
      'Get in touch with Plattano Technologies. Whether you need support, consulting, or want to partner with us—we\'re ready to hear from you. Based in Orlando, FL.',
    keywords: [
      'contact Plattano',
      'Plattano Technologies contact',
      'IT consulting Orlando',
      'support Plattano',
      'Plattano office Orlando',
      'speak with IT company',
      'cybersecurity contact',
      'hybrid cloud contact',
      'managed services contact',
    ],
    alternates: {
      canonical: 'https://plattano.com/contact',
    },
    openGraph: {
      title: 'Get in Touch with Plattano Technologies',
      description:
        'Reach out to Plattano Technologies for IT support, service inquiries, or strategic partnerships. We\'re based in Orlando and serve clients across the U.S.',
      url: 'https://plattano.com/contact',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
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