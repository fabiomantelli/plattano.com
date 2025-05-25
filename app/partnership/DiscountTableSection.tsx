'use client';

import { Award, Medal, Trophy } from 'lucide-react';

export default function DiscountTableSection() {
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          BE THE ONE TO <span className="text-primary">REACH THE TOP</span>. BE THE PRO.
        </h2>

        {/* Subtitle */}
        <p className="text-base text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
          We value transparency—know exactly where you are, what comes next, and how to level up.
        </p>

        {/* Table */}
        <div className="w-full overflow-x-auto mt-12 border border-primary rounded-md">
            <table className="min-w-[600px] w-full text-sm md:text-base text-center">
                <thead className="bg-primary text-white uppercase font-bold">
                <tr>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Provisioned Volume (TB)</th>
                    <th className="px-4 py-3">Discount</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-primary/30 text-neutral-800 dark:text-neutral-200">
                <tr>
                    <td className="px-4 py-4 font-medium">
                    <div className="flex justify-center items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Rookie
                    </div>
                    </td>
                    <td className="px-4 py-4">≤ 100</td>
                    <td className="px-4 py-4">15%</td>
                </tr>
                <tr>
                    <td className="px-4 py-4 font-medium">
                    <div className="flex justify-center items-center gap-2">
                        <Medal className="h-5 w-5 text-primary" />
                        Mid
                    </div>
                    </td>
                    <td className="px-4 py-4">≤ 1024</td>
                    <td className="px-4 py-4">20%</td>
                </tr>
                <tr>
                    <td className="px-4 py-4 font-medium">
                    <div className="flex justify-center items-center gap-2">
                        <Trophy className="h-5 w-5 text-primary" />
                        Pro
                    </div>
                    </td>
                    <td className="px-4 py-4">+ 1024</td>
                    <td className="px-4 py-4">27%</td>
                </tr>
                </tbody>
            </table>
            </div>

      </div>
    </section>
  );
}
