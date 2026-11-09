import { clientResults } from "@/lib/client-results";

export default function Testimonials() {
  return (
    <section id="client-stories" aria-labelledby="stories-heading" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="stories-heading" className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Client Success Stories
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-300">
          Explore each client’s progress and see their before-and-after photos.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {clientResults.map((client) => (
            <a
              key={client.id}
              href={`#result-${client.id}`}
              className="block rounded-2xl border border-white/15 bg-black p-6 transition hover:border-accent"
            >
              <h3 className="text-xl font-semibold">{client.name}</h3>
              <p className="mt-2 text-neutral-300">{client.result}</p>
              <p className="mt-4 text-sm font-semibold text-accent">See {client.name}’s results →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
