import Link from "next/link";

const highlights = [
  "Responsiveness, flexibility, and open communication on every project",
  "Exceptional management, organization, and crew resources",
  "Safety-first culture, OSHA certified team",
  "Always on budget and on schedule",
  "ACI, TCA, PTI certified specialists",
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">
              About Mills Concrete
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              More Than Concrete. <br className="hidden sm:block" />We Deliver Excellence.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Mills Concrete is Southeast Idaho&apos;s premiere, turn-key commercial concrete construction company. Since 2009, our company has satisfied customers with top-quality concrete construction services on hundreds of projects in Idaho and Wyoming.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our mission is to be the pre-eminent concrete construction company through continuous improvement and commitment to safety, people, quality service, the customer, and value.
            </p>
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/estimate"
                className="inline-block bg-brand-orange text-white font-bold px-8 py-3.5 rounded hover:bg-orange-600 transition-colors text-center"
              >
                Estimate My Project
              </Link>
              <Link
                href="/our-team"
                className="inline-block border-2 border-gray-900 text-gray-900 font-bold px-8 py-3.5 rounded hover:bg-gray-900 hover:text-white transition-colors text-center"
              >
                Meet the Team
              </Link>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-400 px-8">
                <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold">Project Photo</p>
                <p className="text-sm mt-1">Replace with your photo</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-brand-orange rounded-xl -z-10 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
