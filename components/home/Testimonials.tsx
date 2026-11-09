"use client";

import { motion, useReducedMotion } from "framer-motion";
import { clientResults } from "@/lib/client-results";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="client-stories" aria-labelledby="stories-heading" className="bg-surface py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <h2 id="stories-heading" className="text-5xl font-bold uppercase md:text-6xl">
            Client Success Stories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            See the progress clients made and explore their before-and-after photos.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2"
        >
          {clientResults.map((client) => (
            <motion.a
              key={client.id}
              href={`#result-${client.id}`}
              aria-label={`View ${client.name}’s before-and-after results`}
              variants={reduceMotion ? undefined : fadeUp}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface p-8 transition duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] sm:p-10 motion-safe:hover:-translate-y-2"
            >
              <p className="text-xl font-medium italic text-neutral-300">{client.result}</p>
              <div className="mt-6">
                <h3 className="font-semibold text-white">{client.name}</h3>
                <p className="mt-2 text-sm text-accent">View before &amp; after →</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
