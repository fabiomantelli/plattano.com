import Footer from "@/app/ui/layout/Footer";
import HeroSection from "./HeroSection";
import VeeamConfidenceSection from "./VeeamConfidenceSection";
import VeeamLastLineSection from "./VeeamLastLineSection";
import VeeamOrchestrationSection from "./VeeamOrchestrationSection";
import VeeamOrchestratorFaqSection from "./VeeamOrchestratorFaqSection";
import VeeamQuoteBlockSection from "./VeeamQuoteBlockSection";

export const metadata = {
    title: 'Plattano Technologies | Veeam Recovery Orchestrator in Orlando | Automated Disaster Recovery',
    description:
      'Plattano Technologies delivers Veeam Recovery Orchestrator in Orlando. Achieve automated disaster recovery planning, testing, and execution across your hybrid infrastructure.',
    keywords: [
      'Veeam Recovery Orchestrator',
      'disaster recovery automation',
      'DR testing and compliance',
      'Veeam partner Orlando',
      'business continuity',
      'automated DR plan',
      'Plattano Technologies',
      'orchestration for Veeam backups',
      'SLA assurance',
    ],
    alternates: {
      canonical: 'https://plattano.com/products/data-protection/veeam-recovery-orchestrator',
    },
    openGraph: {
      title: 'Veeam Recovery Orchestrator | Automated DR & SLA Compliance in Orlando',
      description:
        'Automate your disaster recovery plan with Veeam Recovery Orchestrator. Delivered by Plattano Technologies in Orlando, it ensures reliable, tested recoverability for hybrid workloads.',
      url: 'https://plattano.com/products/data-protection/veeam-recovery-orchestrator',
      siteName: 'Plattano Technologies',
      type: 'website',
      locale: 'en_US',
    },
  };
  
export default function VeeamRecoveryOrcherstratorPage() {
    return (
        <>
            <HeroSection />
            <VeeamQuoteBlockSection />
            <VeeamConfidenceSection />
            <VeeamLastLineSection />
            <VeeamOrchestrationSection />
            <VeeamOrchestratorFaqSection />
            <Footer />
        </>
    )
}