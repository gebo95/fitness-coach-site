import type { Metadata } from "next";
import Programs from "@/components/home/Programs";

export const metadata: Metadata = {
  title: "Explore Coaching | Coach Alkin",
  description: "Compare Functional Physique coaching plans and book an introductory call.",
};

const samplePlans = [
  {
    name: "Training Essentials",
    description: "An example of a training-only plan with a lifting routine, exercise guidance, and a way to track progress.",
  },
  {
    name: "Lifestyle Maintenance",
    description: "An example of lighter support for maintaining a training routine and nutrition habits through busy weeks.",
  },
];

export default function CoachingPage() {
  return (
    <main className="pt-20">
      <Programs standalone />
      <section aria-labelledby="sample-plans" className="border-t border-white/10 bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 id="sample-plans" className="text-3xl font-semibold">Sample coaching plans</h2>
          <p className="mt-3 text-neutral-300">These are examples for review. They’re unavailable for booking.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {samplePlans.map((plan) => (
              <article key={plan.name} className="rounded-2xl border border-white/15 bg-black p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">Sample plan</p>
                <h3 className="mt-3 text-xl font-semibold">{plan.name}</h3>
                <p className="mt-3 leading-relaxed text-neutral-300">{plan.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
