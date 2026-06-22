"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Programs() {
  const programs = [
    {
      title: "Foundation Coaching",
      description:
        "Structure and guidance for people who just need a plan and a system to follow",
      features: [
        "Custom Workouts updated monthly",
        "Nutrition Guidance",
        "Weekly Check-Ins (form)",
        "App access + 1-way coach messaging for accountabitily and support.",
      ],
    },
    {
      title: "Accountabilty Coaching",
      description:
        "This is where results happen-real coaching, real accountability, real adjustments",
      features: [
        "Foundaton benefits + Bi-weekly plan adjustments",
        "Advanced nutrition trackng and habits",
        "Weekly check-in (form + video review)",
        "Direct 2-way coach messaging for added motivation and guidance",
      ],
    },
    {
      title: "Elite Coaching",
      description:
        "High-level coaching for people who want to ve pushed, guided and held to a higher standard",
      features: [
        "Accountability benefits + personalized calls and deeper strategy",
        "Advanced nutrition coaching + frequent program adjustments",
        "Priority 2-way coach messaging +  elite Accountability with faster responses and consistend habit reviews",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="programs" className="py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold uppercase">
            Coaching Programs
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Personalized coaching designed to help you build muscle, lose fat,
            and create lasting habits.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={fadeUp}
              className="
    bg-[#161616]
    border border-white/10
    rounded-3xl
    p-10
    transition-all duration-300
    hover:border-[#00e676]
    hover:-translate-y-2
  "
            >
              <h3 className="text-3xl font-bold mb-4">{program.title}</h3>

              <p className="text-gray-400 mb-8">{program.description}</p>

              <div className="space-y-4 mb-10">
                {program.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="text-[#00e676]">✓</span>

                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button href="#programs" variant="secondary">
                Learn More
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
