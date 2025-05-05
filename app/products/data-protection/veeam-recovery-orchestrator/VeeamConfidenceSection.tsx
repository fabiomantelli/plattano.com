// app/(veeam)/veeam-recovery-orchestrator/ui/ConfidenceSection.tsx
'use client';

export default function VeeamConfidenceSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        {/* ---------- headline ---------- */}
        <h2 className="text-3xl font-extrabold tracking-wide sm:text-4xl">
          <span className="text-[#ED6E00]">BE CONFIDENT</span> IN&nbsp;YOUR&nbsp;RECOVERY&nbsp;PLAN
        </h2>

        {/* ---------- intro ---------- */}
        <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-700 dark:text-gray-300">
          Say goodbye to business disruptions, brand damage and lost customer trust with a proven,
          fully&nbsp;tested solution that guarantees recovery every time&nbsp;— and even writes its
          own reports!
        </p>

        {/* ---------- cards ---------- */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'AUTOMATE LOW-IMPACT TESTS TO VERIFY RECOVERABILITY',
              body:
                'Bounce back stronger with automated tests that surface potential issues.',
            },
            {
              title: 'ORCHESTRATED RECOVERY TAILORED TO YOUR NEEDS',
              body:
                'Manage multiple recovery plans covering hundreds of machines at once.',
            },
            {
              title: 'PROVE COMPLIANCE WITH DYNAMIC TEST REPORTS',
              body:
                'Automatically generate post‑test reports that show exactly how you met your recovery objectives.',
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="rounded border border-[#ED6E00] bg-white/90 p-8 text-left dark:bg-black/80"
            >
              <h3 className="mb-4 text-lg font-bold leading-snug text-[#ED6E00]">{title}</h3>
              <p className="text-sm text-neutral-800 dark:text-gray-300">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
