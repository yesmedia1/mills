import Link from "next/link";

export default function EstimateCTA() {
  return (
    <section className="bg-brand-orange text-white py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange-200 font-bold uppercase tracking-widest text-sm mb-4">
          Free · Fast · No Obligation
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Start Pouring?
        </h2>
        <p className="text-xl text-orange-100 mb-4 max-w-2xl mx-auto leading-relaxed">
          Getting an estimate from Mills Concrete is fast and simple. Tell us about your project and we&apos;ll get back to you with a detailed, straightforward bid.
        </p>
        <p className="text-orange-200 mb-12">
          No pressure. No runaround. Just straight answers from a team that knows concrete.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/estimate"
            className="inline-block bg-white text-brand-orange font-extrabold text-lg px-10 py-5 rounded hover:bg-orange-50 transition-colors shadow-xl"
          >
            Request a Free Estimate →
          </Link>
          <a
            href="tel:2084970131"
            className="inline-block border-2 border-white text-white font-bold text-lg px-10 py-5 rounded hover:bg-white/10 transition-colors"
          >
            Call (208) 497-0131
          </a>
        </div>
        <p className="mt-10 text-orange-200 text-sm">
          Serving Rexburg · Idaho Falls · Driggs · Jackson Hole and the greater Southeast Idaho region
        </p>
      </div>
    </section>
  );
}
