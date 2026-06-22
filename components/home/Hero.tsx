"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] mt-16 bg-cover bg-center flex items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center opacity-70" />

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
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-tight">
            Build A Body You’re Proud Of
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            Personalized coaching to help you lose fat, build muscle, and stay
            consistent for life.
          </p>

          <div className="mt-10">
            <Button href="#programs">Start Your Transformation</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
