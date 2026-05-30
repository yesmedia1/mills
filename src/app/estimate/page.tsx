import type { Metadata } from "next";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Get a Free Estimate | Mills Concrete",
  description:
    "Request a free concrete construction estimate from Mills Concrete. Fast, no-obligation bids on industrial, commercial, and residential projects in Idaho and Wyoming.",
};

const benefits = [
  {
    heading: "Fast Response",
    body: "Most requests reviewed within 1–2 business days.",
  },
  {
    heading: "No Obligation",
    body: "Our estimates are free and completely pressure-free.",
  },
  {
    heading: "Detailed Bidding",
    body: "Clear breakdown of scope, materials, timeline, and labor.",
  },
  {
    heading: "Local Expertise",
    body: "We know Idaho and Wyoming — the land, the climate, the codes.",
  },
];

export default function EstimatePage() {
  return (
    <div className="bg-brand-black min-h-screen">
      {/* Page header */}
      <div className="bg-brand-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
            Free · Fast · No Obligation
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Get Your Project Estimated
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll get back to you quickly with a
            detailed, straight-forward estimate. We make bidding easy.
          </p>
        </div>
      </div>

      {/* Benefits bar */}
      <div className="bg-gray-900 border-b border-gray-800 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.heading} className="text-center">
                <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center mx-auto mb-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-1">{b.heading}</h3>
                <p className="text-sm text-gray-400">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-200">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              Project Details
            </h2>
            <p className="text-gray-500 mb-8">
              Fill in what you know — we&apos;ll follow up if we have questions.
            </p>
            <EstimateForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Call card — orange border to make it pop */}
            <div className="bg-gray-900 text-white rounded-2xl p-6 border-2 border-brand-orange">
              <h3 className="font-bold text-lg mb-3">Prefer to Call?</h3>
              <p className="text-gray-400 text-sm mb-5">
                Give us a call and we&apos;ll talk through your project right away.
              </p>
              <a
                href="tel:2084970131"
                className="block text-center bg-brand-orange text-white font-bold py-3.5 rounded-lg hover:bg-orange-600 transition-colors"
              >
                (208) 497-0131
              </a>
            </div>

            {/* Service area */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="font-bold text-white mb-4">Service Areas</h3>
              <p className="text-sm text-gray-400 mb-3">
                <span className="text-white font-semibold">Bases in</span>{" "}Rexburg, ID &amp; Jackson, WY
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Serving</p>
              <ul className="text-sm text-gray-400 space-y-2">
                {["Idaho", "Montana", "Wyoming"].map((state) => (
                  <li key={state} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                    {state}
                  </li>
                ))}
              </ul>
            </div>

            {/* What happens next */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">What Happens Next?</h3>
              <ol className="text-sm text-gray-400 space-y-4">
                {[
                  "We review your project details",
                  "We may reach out to clarify scope",
                  "You receive a detailed estimate",
                  "We get to work — on time, on budget",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange text-white text-xs flex items-center justify-center font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
