import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Mills Concrete",
  description:
    "Contact Mills Concrete — Southeast Idaho's premiere concrete construction company. Call, email, or request an estimate.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="bg-brand-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            We&apos;re based in Rexburg, Idaho and serve all of Southeast Idaho and Wyoming.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Office Information</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Address</p>
                  <p className="text-gray-600">
                    4821 Thunderbird Loop #2
                    <br />
                    Rexburg, ID 83440
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Phone</p>
                  <a
                    href="tel:2084970131"
                    className="text-brand-orange font-semibold hover:underline text-lg"
                  >
                    (208) 497-0131
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Service Areas</p>
                  <p className="text-gray-600">
                    Rexburg · Idaho Falls · Driggs
                    <br />
                    Jackson Hole, WY · Southeast Idaho
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-orange-50 border border-orange-100 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">
                Looking for an Estimate?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                The fastest way to get pricing is through our estimate request form. It takes 2 minutes and we&apos;ll get back to you promptly.
              </p>
              <Link
                href="/estimate"
                className="inline-block bg-brand-orange text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors text-sm"
              >
                Request a Free Estimate →
              </Link>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <div className="aspect-square rounded-xl bg-gray-200 flex items-center justify-center mb-4">
              <div className="text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="font-medium">Map Placeholder</p>
                <p className="text-sm mt-1">Embed Google Maps here</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500">
              4821 Thunderbird Loop #2, Rexburg, ID 83440
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
