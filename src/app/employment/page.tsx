import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Employment | Mills Concrete",
  description:
    "Join the Mills Concrete team. Concrete construction careers in Southeast Idaho and Wyoming.",
};

const perks = [
  "Competitive wages",
  "Opportunities for advancement",
  "Work on large, high-profile projects",
  "Safety-first culture and OSHA training",
  "Strong team environment",
  "Year-round work",
];

export default function EmploymentPage() {
  return (
    <div>
      <div className="bg-brand-black text-white pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
            Join the Crew
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Employment Opportunities
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We&apos;re always looking for hardworking, dedicated people to join the Mills Concrete family.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              Why Work at Mills Concrete?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Mills Concrete, we believe great work starts with great people. We&apos;re a team that pushes limits, takes pride in our craft, and supports each other on every job.
            </p>
            <ul className="space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">
              Apply Today
            </h2>
            <p className="text-gray-600 mb-6">
              Interested in joining our team? Give us a call or send your information to get started.
            </p>
            <a
              href="tel:2084970131"
              className="block text-center bg-brand-orange text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors mb-4"
            >
              Call (208) 497-0131
            </a>
            <p className="text-sm text-gray-500 text-center">
              Or stop by our office at 4821 Thunderbird Loop #2, Rexburg, ID 83440
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
