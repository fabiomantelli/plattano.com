'use client';

export default function IdentitySection() {
  return (
    <section className="w-full py-20 bg-neutral-200 text-white dark:text-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        {/* Title */}
        <h2 className="text-2xl text-black dark:text-neutral-200 sm:text-3xl md:text-4xl font-bold">
          OUR <span className="text-primary">IDENTITY</span> PRECEDES US
        </h2>

        {/* Paragraph */}
        <div className="space-y-4 text-sm sm:text-base max-w-4xl mx-auto text-neutral-900 dark:text-neutral-300">
          <p className="font-semibold">We embrace our culture!</p>
          <p>
            We were born from a seed of an idea — a vision not shaped by our past professional experiences.
            From this seed grew a tree with deep roots. Over time, it has branched out and absorbed knowledge,
            allowing us to mature and share the legacy of Plattano with our team and clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="rounded-lg p-8 text-black dark:text-neutral-900 shadow-md bg-primary dark:bg-white">
            <h3 className="text-lg font-bold mb-2 uppercase">OUR VISION</h3>
            <p className="text-sm sm:text-base">
              <strong>Create a world</strong> where all companies are protected and resilient.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg p-8 text-black dark:text-neutral-900 shadow-md bg-primary dark:bg-white">
            <h3 className="text-lg font-bold mb-2 uppercase">OUR COMMITMENT</h3>
            <p className="text-sm sm:text-base">
              <strong>State-of-the-art</strong> in delivering solutions, technology, and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
