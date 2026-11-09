import Image from "next/image";
import Button from "@/components/ui/Button";
import { clientResults } from "@/lib/client-results";

export default function Transformations() {
  return (
    <section id="transformations" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold uppercase">
            Real Results
          </h2>

          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            See how progress can look over time, from changes in body composition
            to the muscle built along the way.
          </p>
          <a href="#client-stories" className="mt-5 inline-block text-accent underline underline-offset-4">
            Browse client stories
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {clientResults.map((client) => (
            <article
              id={`result-${client.id}`}
              key={client.id}
              className="
                bg-surface
                border border-white/10
                rounded-3xl
                overflow-hidden
                hover:border-accent
                transition-all duration-300
              "
            >
              {/* Images */}
              <div className="grid grid-cols-2">
                <div className="relative h-56 sm:h-[350px]">
                  <Image
                    src={client.before}
                    alt={`${client.name} before`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 rounded bg-black/80 px-2 py-1 text-xs font-semibold text-white">Before</span>
                </div>

                <div className="relative h-56 sm:h-[350px]">
                  <Image
                    src={client.after}
                    alt={`${client.name} after`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 rounded bg-black/80 px-2 py-1 text-xs font-semibold text-white">After</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold">{client.name}</h3>

                <p className="mt-4 text-neutral-400">{client.result}</p>

                <div className="mt-8">
                  <Button
                    href="/coaching"
                    variant="secondary"
                  >
                    Explore Coaching
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-neutral-300">
          Photos capture one part of progress. Strength, movement, and how consistently
          you train also help you see what’s changing over time.
        </p>
      </div>
    </section>
  );
}
