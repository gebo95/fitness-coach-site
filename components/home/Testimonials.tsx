"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      result: "Lost 30 lbs",
      quote:
        "Working with Coach Mike completely changed my relationship with fitness.",
      link: "https://instagram.com",
      platform: "Instagram",
    },
    {
      name: "David R.",
      result: "Built muscle and lost 20 lbs",
      quote:
        "The accountability and personalized coaching made all the difference.",
      link: "https://google.com",
      platform: "Google",
    },
    {
      name: "Emily T.",
      result: "Improved strength and confidence",
      quote: "I never thought I'd enjoy training this much.",
      link: "https://trustpilot.com",
      platform: "Trustpilot",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#111111] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold uppercase">
            Client Success Stories
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Real people. Real transformations. Real results.
          </p>
        </div>

        {/* GRID WRAPPER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <a
              key={index}
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <motion.div
                variants={item}
                className="
                  h-full
                  bg-[#161616]
                  border border-white/10
                  rounded-3xl
                  p-10
                  flex flex-col justify-between
                  transition-all duration-300
                  hover:border-[#00e676]
                  hover:-translate-y-2
                  hover:shadow-[0_0_30px_rgba(0,230,118,0.08)]
                  cursor-pointer
                "
              >
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>

                <div className="mt-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>

                  <p className="text-sm text-gray-400">{testimonial.result}</p>

                  <p className="text-sm text-[#00e676] mt-2">
                    View on {testimonial.platform} →
                  </p>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
