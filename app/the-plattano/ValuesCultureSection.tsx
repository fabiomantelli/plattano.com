'use client';

export default function ValuesCultureSection() {
  const values = [
    {
      title: 'PASSION',
      text: 'Bring your heart and purpose to your work. It needs to make sense.',
    },
    {
      title: 'RESILIENCE',
      text: 'Adapt to everything and everyone. When you fall, move forward. That’s how you’ll get it right.',
    },
    {
      title: 'COLLABORATION',
      text: 'Enjoy the journey and remember: no one does it alone.',
    },
    {
      title: 'HARMONY',
      text: 'Balance is key. Connect with yourself so you can overflow into others.',
    },
    {
      title: 'BELONGING',
      text: 'Every voice matters. Every idea is heard. Every individual is respected.',
    },
    {
      title: 'WEALTH',
      text: 'You are the most valuable currency there is. Work for yourself and the mission.',
    },
    {
      title: 'MOTION',
      text: 'Nothing is fixed or permanent. Be the one who drives change.',
    },
    {
      title: 'OVERCOMING',
      text: 'Limiting beliefs are challenges. When you beat them, you’ll find the power of the limitless.',
    },
    {
      title: 'COMMUNICATION',
      text: 'If you’re not heard, you’re not speaking. Express yourself genuinely.',
    },
  ];

  return (
    <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          WHAT WE <span className="text-primary">TRULY FEEL</span>, WE SHARE.<br />
          WE ARE <span className="text-primary">GUIDED BY A CULTURE</span> ORIENTED TOWARD <span className="text-primary">RESULTS</span>.
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-neutral-300 dark:border-white/10 bg-white text-black dark:bg-white/5 dark:text-white p-6 shadow-sm text-center space-y-3"
            >
              <h3 className="font-bold text-lg text-primary">{item.title}</h3>
              <p className="text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
