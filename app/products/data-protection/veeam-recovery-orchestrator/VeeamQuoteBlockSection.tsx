// app/(veeam)/veeam-recovery-orchestrator/ui/QuoteBlock.tsx
'use client';

export default function VeeamQuoteBlockSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative flex items-center justify-center px-4 py-10 sm:py-12">
        <div className="absolute inset-0 bg-primary" />
        <p className="relative z-10 text-center text-black text-2xl font-semibold leading-snug sm:text-3xl">
          “WHEN EVERY SECOND COUNTS, COUNT ON PLATTANO"
        </p>
      </div>

      <div className="relative dark:bg-black bg-white dark:text-neutral-200 text-black px-4 py-20 sm:py-24">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-extrabold tracking-wide sm:text-4xl">
          ORCHESTRATE THE DATA SYMPHONY
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg dark:text-neutral-200 text-neutral-900">
          Bring your business back with a single click — and reach the speed you need to keep it
          running.
        </p>

        <div className="mx-auto mt-10 h-0.5 w-52 dark:bg-neutral-500 bg-neutral-900" />
      </div>
    </section>
  );
}
