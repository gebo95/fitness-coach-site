export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Apply",
      description:
        "Tell us about your goals, lifestyle, and where you want to be.",
    },
    {
      number: "02",
      title: "Strategy Call",
      description: "We'll discuss your goals and create the best path forward.",
    },
    {
      number: "03",
      title: "Receive Your Plan",
      description:
        "Get a customized training and nutrition program built for you.",
    },
    {
      number: "04",
      title: "Transform",
      description:
        "Stay accountable, track progress, and achieve lasting results.",
    },
  ];

  return (
    <section className="bg-[#111111] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold uppercase">
            How It Works
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A simple process designed to help you get results and stay
            consistent.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                relative
                bg-[#161616]
                border border-white/10
                rounded-3xl
                p-10
                overflow-hidden
                transition duration-300
                hover:border-[#00e676]
                hover:-translate-y-2
              "
            >
              {/* Giant Number */}
              <div className="absolute -top-4 right-6 text-8xl font-bold text-white/5">
                {step.number}
              </div>

              <h3 className="text-3xl font-bold mb-4">{step.title}</h3>

              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
