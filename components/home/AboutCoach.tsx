import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutCoach() {
  return (
    <section id="about" className="py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/images/coach/coach.jpeg"
              alt="Coach"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-[#00e676] uppercase tracking-[4px] mb-4">
              Meet Your Coach
            </p>

            <h2 className="text-5xl md:text-6xl font-bold uppercase leading-tight mb-8">
              Hi, I'm Alkin.
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I help busy professionals lose fat, build muscle, and create
                sustainable habits without restrictive diets or endless cardio.
              </p>

              <p>
                My coaching philosophy focuses on long-term success through
                accountability, education, and realistic lifestyle changes.
              </p>

              <p>
                Whether you're just starting your fitness journey or looking to
                take your results to the next level, I'm here to help you become
                the strongest version of yourself.
              </p>
            </div>

            <div className="mt-10">
              <Button href="https://calendly.com/your-link">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
