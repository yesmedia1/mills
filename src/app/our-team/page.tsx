import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team | Mills Concrete",
  description: "Meet the Mills Concrete team. Southeast Idaho's concrete construction experts.",
};

export default function OurTeamPage() {
  return (
    <div>
      <div className="bg-brand-black text-white pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
            The People Behind the Pours
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Our Team</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            121 employees strong and growing. Meet the crew that keeps Southeast Idaho&apos;s concrete moving.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-200">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-5">
                <p className="font-bold text-gray-900">Team Member</p>
                <p className="text-sm text-gray-500 mt-1">Title / Role</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-500 mb-8">Team bios and photos coming soon.</p>
        <Link
          href="/estimate"
          className="inline-block bg-brand-orange text-white font-bold px-10 py-4 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Work with Our Team. Get an Estimate.
        </Link>
      </div>
    </div>
  );
}
