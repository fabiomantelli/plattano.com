// app/(veeam)/veeam-recovery-orchestrator/ui/QuoteBlock.tsx
'use client';

export default function VeeamQuoteBlockSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* ---------- band 1 : quote ---------- */}
      <div className="relative flex items-center justify-center px-4 py-10 sm:py-12">
        {/* translucent strip */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60 dark:from-black/70 dark:to-black/50 backdrop-blur" />
        <p className="relative z-10 text-center text-2xl font-semibold leading-snug sm:text-3xl">
          “<span className="text-[#ED6E00] font-bold">WHEN EVERY SECOND COUNTS</span>, COUNT ON&nbsp;
          <span className="text-[#ED6E00] font-bold">PLATTANO</span>”
        </p>
      </div>

      {/* ---------- band 2 : headline + sub ---------- */}
      <div className="relative bg-neutral-200 text-black dark:bg-primary px-4 py-20 sm:py-24">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-extrabold tracking-wide sm:text-4xl">
          ORCHESTRATE THE DATA SYMPHONY
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-900">
          Bring your business back with a single click&nbsp;— and reach the speed you need to keep it
          running.
        </p>

        {/* thin orange divider */}
        <div className="mx-auto mt-10 h-0.5 w-52 bg-black" />
      </div>
    </section>
  );
}
