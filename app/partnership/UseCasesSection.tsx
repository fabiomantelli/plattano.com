'use client';

import {
  CloudUpload,
  Archive,
  Camera,
  FileText,
  Server,
  Users,
  Cpu,
  MonitorPlay,
  Workflow,
  Smartphone
} from 'lucide-react';

export default function UseCasesSection() {
  const useCases = [
    { icon: CloudUpload, label: 'Backup & Recovery' },
    { icon: Archive, label: 'Archiving' },
    { icon: Camera, label: 'Surveillance' },
    { icon: FileText, label: 'File Systems' },
    { icon: Server, label: 'Cloud NAS' },
    { icon: Users, label: 'Remote Collaboration' },
    { icon: Cpu, label: 'Compute' },
    { icon: MonitorPlay, label: 'Media Asset Management' },
    { icon: Workflow, label: 'Post-Production Workflows' },
    { icon: Smartphone, label: 'Content Distribution Networks' },
  ];

  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary">USE CASES</span> FOR OUR PARTNERS
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Discover the best ways to position your solution.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {useCases.map(({ icon: Icon, label }, idx) => (
          <div
            key={idx}
            className="
              border 
              border-neutral-300 dark:border-neutral-800 
              bg-transparent rounded-md 
              flex flex-col items-center justify-center 
              text-center px-4 py-6 
              hover:bg-white/10 
              transition
            "
          >
            <Icon className="h-8 w-8 text-primary mb-4" />
            <p className="text-xs sm:text-sm font-semibold uppercase">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
