"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    goal: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TEMP: just simulate submission (we'll connect backend later)
    console.log("Form submitted:", form);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-32 bg-[#111111] text-center">
        <h2 className="text-4xl font-bold uppercase text-[#00e676]">
          Application Received
        </h2>

        <p className="mt-4 text-gray-400">
          We’ll review your application and get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-[#111111]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold uppercase">
            Apply Now
          </h2>

          <p className="mt-4 text-gray-400">
            Take the first step toward your transformation.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#161616] border border-white/10 rounded-3xl p-10"
        >
          <div>
            <label className="text-gray-400 text-sm">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-[#fff]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-[#fff]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Your Fitness Goals</label>
            <textarea
              name="goal"
              value={form.goal}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-[#fff]"
              placeholder="Lose fat, build muscle, improve habits..."
            />
          </div>

          <Button className="w-full text-lg py-4">Submit Application</Button>
        </form>
      </div>
    </section>
  );
}
