import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Mills Concrete",
  description:
    "Industrial, commercial, residential, and heavy civil concrete construction services across East Idaho, Wyoming, and Montana.",
};

const services = [
  {
    id: "industrial",
    title: "Industrial",
    tagline: "Built to take on the toughest environments.",
    description:
      "From manufacturing facilities to distribution warehouses and infrastructure projects, Mills Concrete delivers heavy-duty concrete solutions engineered for demanding industrial applications. Our crews handle large-volume pours with precision, meeting every spec and deadline.",
    capabilities: [
      "Manufacturing & warehouse slab construction",
      "Infrastructure and utility flatwork",
      "Tilt-up concrete wall panels",
      "Post-tensioned and reinforced slabs",
      "Site concrete and paving",
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    tagline: "Full-service commercial concrete, start to finish.",
    description:
      "Mills Concrete is the trusted partner for commercial general contractors and developers across Southeast Idaho and Wyoming. We provide turn-key concrete services from layout and forming through finishing and curing, keeping your project on schedule and within budget.",
    capabilities: [
      "Retail, office, and mixed-use slab work",
      "Tilt-up concrete construction",
      "Post-tensioned concrete slabs",
      "Parking structures and flatwork",
      "Foundation systems",
    ],
  },
  {
    id: "residential",
    title: "Residential",
    tagline: "Quality craftsmanship for your home.",
    description:
      "Whether you need a new driveway, a foundation, a patio, or custom decorative concrete, Mills Concrete brings the same commitment to quality to every residential project. No job is too small.",
    capabilities: [
      "Foundations and footings",
      "Driveways and sidewalks",
      "Patios and outdoor living areas",
      "Garage floors and basement slabs",
      "Decorative and stamped concrete",
    ],
  },
  {
    id: "heavy-civil",
    title: "Heavy Civil",
    tagline: "Built for infrastructure. Built to last.",
    description:
      "Mills Concrete has the crew, equipment, and expertise to take on large-scale civil infrastructure projects. From water tanks to highway structures and public works, we build to DOT specs and engineer every pour for the long haul. Our recent water tank work is a testament to the precision and scale we bring to civil projects.",
    capabilities: [
      "Water tanks and water treatment structures",
      "Bridges and bridge decks",
      "Culverts and drainage structures",
      "Retaining walls",
      "Highway and DOT structures",
      "Public works and municipal projects",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-brand-black text-white pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Industrial, commercial, residential, and heavy civil concrete construction delivered by an experienced crew with a proven track record across East Idaho, Wyoming, and Montana.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {services.map((service, i) => (
          <div
            key={service.id}
            id={service.id}
            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div>
              <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2">
                {service.title}
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
                {service.tagline}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2.5 mb-8">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-brand-orange flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {cap}
                  </li>
                ))}
              </ul>
              <Link
                href="/estimate"
                className="inline-block bg-brand-orange text-white font-bold px-8 py-3.5 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Get an Estimate
              </Link>
            </div>

            {/* Image placeholder */}
            <div className={`aspect-[4/3] rounded-xl bg-gray-200 flex items-center justify-center ${i % 2 === 1 ? "lg:order-first" : ""}`}>
              <div className="text-center text-gray-400 px-8">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium">{service.title} Photo</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-brand-orange py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-orange-100 mb-8">
            Contact us today for a free, no-obligation estimate on your project.
          </p>
          <Link
            href="/estimate"
            className="inline-block bg-white text-brand-orange font-extrabold px-10 py-4 rounded-lg hover:bg-orange-50 transition-colors"
          >
            Request a Free Estimate →
          </Link>
        </div>
      </div>
    </div>
  );
}
