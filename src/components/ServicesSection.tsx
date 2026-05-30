import Link from "next/link";

const services = [
  {
    title: "Industrial",
    description:
      "Heavy-duty concrete for industrial facilities, warehouses, manufacturing plants, and infrastructure. We handle complex pours with precision, meeting every spec.",
    href: "/services#industrial",
    icon: (
      <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Commercial",
    description:
      "Full-service commercial concrete — tilt-up construction, post-tensioned slabs, parking structures, retail and office buildings. On time and within budget.",
    href: "/services#commercial",
    icon: (
      <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Residential",
    description:
      "Driveways, foundations, patios, and flatwork that add lasting value to your home. Quality craftsmanship at every scale — from a single slab to a full foundation.",
    href: "/services#residential",
    icon: (
      <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Concrete Solutions Across Every Sector
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From large-scale industrial pours to commercial slabs and residential flatwork, Mills Concrete brings the expertise, equipment, and crew to get it done right.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-xl p-8 hover:border-brand-orange hover:shadow-xl transition-all group"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <Link
                href={service.href}
                className="text-brand-orange font-semibold text-sm hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-gray-500 mb-5">
            Not sure what you need? Let&apos;s figure it out together — estimates are free.
          </p>
          <Link
            href="/estimate"
            className="inline-block bg-brand-orange text-white font-bold px-10 py-4 rounded hover:bg-orange-600 transition-colors text-lg"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
