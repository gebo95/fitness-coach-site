import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Transformations() {
  const clients = [
    {
      name: "Sarah",
      result: "Lost 30 lbs in 6 months",
      before: "/images/transformations/client1-before.jpeg",
      after: "/images/transformations/client1-after.jpeg",
    },
    {
      name: "Michael",
      result: "Built muscle and lost 20 lbs",
      before: "/images/transformations/client2-before.jpeg",
      after: "/images/transformations/client2-after.jpeg",
    },
  ];

  return (
    <section id="transformations" className="py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold uppercase">
            Real Results
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Helping clients build confidence, lose fat, and transform their
            lives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {clients.map((client) => (
            <div
              key={client.name}
              className="
                bg-[#161616]
                border border-white/10
                rounded-3xl
                overflow-hidden
                hover:border-[#00e676]
                transition-all duration-300
              "
            >
              {/* Images */}
              <div className="grid grid-cols-2">
                <div className="relative h-[350px] center">
                  <Image
                    src={client.before}
                    alt={`${client.name} before`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-[350px]">
                  <Image
                    src={client.after}
                    alt={`${client.name} after`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold">{client.name}</h3>

                <p className="mt-4 text-gray-400">{client.result}</p>

                <div className="mt-8">
                  <Button
                    href="https://calendly.com/your-link"
                    variant="secondary"
                  >
                    Start Your Journey
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
