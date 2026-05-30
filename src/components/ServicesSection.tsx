import Link from "next/link";

const services = [
  {
    title: "Industrial",
    description:
      "Heavy-duty concrete for industrial facilities, warehouses, manufacturing plants, and infrastructure. We handle complex pours with precision, meeting every spec.",
    href: "/services#industrial",
  },
  {
    title: "Commercial",
    description:
      "Full-service commercial concrete: tilt-up construction, post-tensioned slabs, parking structures, retail and office buildings. On time and within budget.",
    href: "/services#commercial",
  },
  {
    title: "Residential",
    description:
      "Driveways, foundations, patios, and flatwork that add lasting value to your home. Quality craftsmanship at every scale, from a single slab to a full foundation.",
    href: "/services#residential",
  },
  {
    title: "Heavy Civil",
    description:
      "Large-scale civil infrastructure concrete: bridges, culverts, retaining walls, water tanks, highway structures, and public works projects built to DOT specs and engineered for the long haul.",
    href: "/services#heavy-civil",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-xl p-8 hover:border-brand-orange hover:shadow-xl transition-all group"
            >
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
            Not sure what you need? Let&apos;s figure it out together. Estimates are free.
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
