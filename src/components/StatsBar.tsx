const stats = [
  { value: "121", label: "Employees" },
  { value: "23,450 CY", label: "Concrete Poured Last Year" },
  { value: "67+", label: "Projects Completed" },
  { value: "Since 2009", label: "Serving Idaho & Wyoming" },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-black text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl lg:text-4xl font-extrabold text-brand-orange">
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
