"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative mt-20 flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* background image */}
      <div className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center opacity-70 grayscale" />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Build a body you’re proud of
          </h1>

          <p className="mt-6 text-neutral-300 text-lg md:text-xl">
            Online coaching for men ready to lose fat, build muscle, and get
            back into a routine they can keep.
          </p>

          <div className="mt-10">
            <Button href="/coaching">Explore Coaching Programs</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
