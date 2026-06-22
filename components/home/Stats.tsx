export default function Stats() {
  const stats = [
    {
      number: "500+",
      label: "Clients Coached",
    },
    {
      number: "50k+",
      label: "Pounds Lost",
    },
    {
      number: "8+",
      label: "Years Experience",
    },
    {
      number: "95%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="bg-[#111111] border-y border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center transition duration-300 hover:-translate-y-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#00e676]">
                {stat.number}
              </h2>

              <p className="mt-2 text-gray-400 uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
