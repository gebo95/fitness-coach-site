"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How does online coaching work?",
      answer:
        "You’ll receive a fully customized training and nutrition plan, plus weekly check-ins and ongoing support to keep you accountable.",
    },
    {
      question: "Do I need access to a gym?",
      answer:
        "Not necessarily. Programs are tailored based on your equipment and environment, whether that's a full gym or home setup.",
    },
    {
      question: "How fast will I see results?",
      answer:
        "Progress depends on your starting point and consistency. We track changes in strength, movement, and habits alongside any body composition goals.",
    },
    {
      question: "What makes your coaching different?",
      answer:
        "We help you build a training routine and nutrition habits you can keep through travel, social events, and busy weeks.",
    },
    {
      question: "Which coaching program is right for me?",
      answer:
        "Kickstart is a 12-week option for building a routine and getting comfortable in the gym. Blueprint gives you six months to build your physique and practice maintaining your results independently.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold uppercase">FAQ</h2>

          <p className="mt-4 text-neutral-400">
            Everything you need to know before starting your transformation.
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl bg-surface"
            >
              <button
                aria-expanded={openIndex === index}
                onClick={() => toggle(index)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <span className="font-semibold text-white">{faq.question}</span>

                <span className="text-accent text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
