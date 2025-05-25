'use client';

import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'INSTAGRAM',
    href: 'https://www.instagram.com/plattanotechnologies.us/',
    icon: <FaInstagram size={28} />,
  },
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/company/plattano-technologies/',
    icon: <FaLinkedin size={28} />,
  },
  {
    label: 'YOUTUBE',
    href: 'https://www.youtube.com/@plattanotechnologies8157',
    icon: <FaYoutube size={28} />,
  },
];

export default function FutureSection() {
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white px-6 sm:px-12 lg:px-24 py-20 space-y-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div>
          <h2 className="text-xl font-bold uppercase text-primary">UNCONFORMED SINCE ALWAYS!</h2>
          <h3 className="font-semibold mt-2">Comfort zone?</h3>
          <p>
            Nope... we position ourselves as <span className="text-primary font-medium">agents of change and innovation</span>,
            and we’re fascinated by the unexplored.
          </p>
          <p className="mt-4 font-semibold">“But they’ll never conform?”</p>
          <p>
            Maybe when humans grow wings and fly ±∞. Until then, we’ll continue to
            <span className="text-primary font-medium"> spread knowledge</span> and help through every communication channel possible.
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            BACK TO THE <span className="text-primary">FUTURE</span>
          </h2>
          <p>You've probably seen the movie. But remember the core message…</p>
          <div className="bg-white dark:bg-neutral-900 text-black dark:text-white font-semibold rounded-lg shadow p-4 max-w-2xl mx-auto">
            “A decision made in the past can drastically alter the future”
          </div>
          <p>
            Don’t let the past haunt your business—take the leap, follow us, and steer your company to a better future!
          </p>
        </div>
      </div>

      {/* Social Icons with modern UX */}
      <div className="flex flex-wrap justify-center gap-6 pt-4">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center px-6 py-5 rounded-xl w-[130px] h-[130px]
                       bg-neutral-100 dark:bg-white/5 border border-neutral-300 dark:border-white/10
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <span className="text-xs font-semibold group-hover:text-primary transition-colors duration-300">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
