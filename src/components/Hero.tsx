import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden min-h-[600px] flex items-center">
      <Image
        src="/backdrop.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-28 lg:pt-48 lg:pb-40 w-full">
        <div className="max-w-3xl">
          <p className="text-brand-orange font-bold text-sm tracking-[0.2em] uppercase mb-5">
            Industrial · Commercial · Residential · Heavy Civil
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Southeast Idaho&apos;s Premier Concrete Construction Company
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Since 2009, Mills Concrete has delivered top-quality concrete construction on hundreds of projects across Idaho and Wyoming. Turn-key solutions, on time, on budget, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/estimate"
              className="inline-block bg-brand-orange text-white font-bold text-lg px-9 py-4 rounded hover:bg-orange-600 transition-colors text-center shadow-lg"
            >
              Get a Free Estimate →
            </Link>
            <Link
              href="/our-work"
              className="inline-block border-2 border-white text-white font-bold text-lg px-9 py-4 rounded hover:bg-white hover:text-gray-900 transition-colors text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
