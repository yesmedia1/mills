const certs = [
  "ACI Certified",
  "TCA Member",
  "OSHA Compliant",
  "PTI Certified",
  "Public Works Licensed",
  "EMR Rated",
];

export default function CertBadges() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          Certifications &amp; Affiliations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {certs.map((cert) => (
            <div
              key={cert}
              className="px-5 py-2.5 border-2 border-gray-200 rounded-lg text-sm font-bold text-gray-500 hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
