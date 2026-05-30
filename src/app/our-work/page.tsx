import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work | Mills Concrete",
  description:
    "Browse completed industrial, commercial, and residential concrete projects by Mills Concrete across Southeast Idaho and Wyoming.",
};

const placeholderProjects = [
  { title: "Commercial Warehouse Slab", category: "Industrial", location: "Rexburg, ID" },
  { title: "Retail Center Flatwork", category: "Commercial", location: "Idaho Falls, ID" },
  { title: "Tilt-Up Office Building", category: "Commercial", location: "Rexburg, ID" },
  { title: "Residential Foundation & Driveway", category: "Residential", location: "Driggs, ID" },
  { title: "Post-Tensioned Parking Deck", category: "Commercial", location: "Idaho Falls, ID" },
  { title: "Industrial Processing Facility", category: "Industrial", location: "Jackson Hole, WY" },
];

export default function OurWorkPage() {
  return (
    <div>
      <div className="bg-brand-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Our Work</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hundreds of completed projects across Southeast Idaho and Wyoming. Here&apos;s a look at what we&apos;ve been building.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProjects.map((project, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Project Photo</p>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {project.category}
                </span>
                <h3 className="font-bold text-gray-900 mt-1 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 mb-5">
            Have a project in mind? We&apos;d love to add it to this list.
          </p>
          <Link
            href="/estimate"
            className="inline-block bg-brand-orange text-white font-bold px-10 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg"
          >
            Get a Free Estimate →
          </Link>
        </div>
      </div>
    </div>
  );
}
