'use client';

import {
  Cloud,
  ShieldCheck,
  ServerCog,
  ClipboardCheck,
  KeySquare,
  FlaskConical,
  MonitorCheck,
  ActivitySquare,
  LifeBuoy,
  ChevronsUpDown,
  Database,
  FileText,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Cloud,
    title: 'Cloud Restore',
    desc: 'Orchestrated Direct Restore to Microsoft Azure gives your business cloud DR resilience.',
  },
  {
    icon: ShieldCheck,
    title: 'Clean Recovery',
    desc: 'Iterate ransomware scans to locate the most recent clean restore point.',
  },
  {
    icon: ServerCog,
    title: 'Agent-Based Recovery',
    desc: 'Rapidly restore Agent backups as VMs in Azure or vSphere.',
  },
  {
    icon: ClipboardCheck,
    title: 'Wizard-Driven Planning',
    desc: 'Create granular DR plans that auto-update & verify apps and sites.',
  },
  {
    icon: KeySquare,
    title: 'Enterprise Integration',
    desc: 'Hook into your environment via APIs and run custom scripts during tests & execution.',
  },
  {
    icon: ActivitySquare,
    title: 'Role-Based Secure Access',
    desc: 'Delegate secure, scoped access to app owners and ops teams.',
  },
  {
    icon: ChevronsUpDown,
    title: 'Automated Testing',
    desc: 'Run DR tests on demand or schedule-free to make sure your RTO/RPOs are met.',
  },
  {
    icon: FlaskConical,
    title: 'Instant-On Lab',
    desc: 'Spin up DR sandboxes for patch testing and more—no production impact.',
  },
  {
    icon: MonitorCheck,
    title: 'Application Verification',
    desc: 'Be sure your common business apps work as expected after recovery.',
  },
  {
    icon: LifeBuoy,
    title: 'Business Resilience Visible',
    desc: 'Easily track current & past resilience tests to pinpoint DR gaps.',
  },
  {
    icon: Database,
    title: 'One-Click Recovery',
    desc: 'Restore a single app or an entire site from anywhere via a web interface.',
  },
  {
    icon: FileText,
    title: 'Dynamic Documentation',
    desc: 'Automatically generate DR runbooks to prove readiness & compliance.',
  },
];

export default function VeeamOrchestrationSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* faint patterned bg (optional) */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* headline */}
        <h2 className="mb-16 text-center font-extrabold leading-tight text-black dark:text-white text-[38px]">
          SIMPLIFIED
          <span className="text-primary"> RECOVERY ORCHESTRATION</span>
        </h2>

        {/* feature grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded border border-primary/80 bg-white/90 p-8 text-center
                         shadow-sm backdrop-blur dark:bg-black/80"
            >
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-sm text-neutral-900 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}