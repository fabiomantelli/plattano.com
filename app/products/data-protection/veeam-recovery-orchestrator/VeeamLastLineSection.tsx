'use client';

import { useEffect, useRef, useState } from 'react';

/* ---------- count‑up hook ---------- */
function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start: number | null = null;
          const step = (t: number) => {
            if (start === null) start = t;
            const pct = Math.min((t - start) / duration, 1);
            setValue(Math.floor(pct * target));
            if (pct < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}

/* ---------- section component ---------- */
export default function VeeamLastLineSection() {
  const { ref: ref85, value: v85 } = useCountUp(85);
  const { ref: ref50, value: v50 } = useCountUp(50);

  return (
    <section className="relative isolate overflow-hidden dark:bg-black text-white dark:text-black">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 lg:grid-cols-3">
        {/* -------- copy -------- */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl">
            <span className="text-primary">RECOVERY</span>
            <br />
            IS&nbsp;YOUR&nbsp;LAST
            <br />
            LINE&nbsp;OF&nbsp;<span className="text-primary">DEFENSE</span>
          </h2>

          <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg text-neutral-900 dark:text-neutral-500">
            Ransomware is brutal. In our&nbsp;2023 survey, cyber‑threats outranked every other
            obstacle to digital and IT transformation.
          </p>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-700">
            Source:&nbsp;<em>2023 Data Protection Trends</em>.
          </p>
        </div>

        {/* -------- metrics -------- */}
        <div className="md:col-span-1 lg:col-span-2 flex flex-col items-center justify-center gap-12 md:flex-row">
          {/* 85 % card */}
          <div className="text-center">
            <span ref={ref85} className="text-5xl font-extrabold text-neutral-900 dark:text-neutral-200">
              {v85}%
            </span>
            <p className="mt-3 max-w-xs text-primary">
              of organizations were hit by ransomware in 2023
            </p>
          </div>

          {/* divider apenas mobile */}
          <div className="h-px w-32 bg-primary md:hidden" />

          {/* <50 % card */}
          <div className="text-center">
            <span ref={ref50} className="text-5xl font-extrabold text-neutral-900 dark:text-neutral-200">
              &lt;{v50}%
            </span>
            <p className="mt-3 max-w-xs text-primary">
              of encrypted or destroyed data was recoverable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}