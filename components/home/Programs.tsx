import Button from "@/components/ui/Button";
import { coachingInquiryUrl } from "@/lib/coaching";

const kickstartOutcomes = [
  "Lose fat and build noticeable muscle",
  "Learn proper lifting technique and improve mobility",
  "Build sustainable nutrition habits",
  "Feel more confident walking into the gym",
];

const kickstartIncludes = [
  "Initial strategy session",
  "Personalized workout program",
  "Nutrition roadmap",
  "Weekly accountability check-ins",
  "Exercise video library",
  "Monthly progress assessments",
  "Unlimited messaging within agreed coaching boundaries",
];

const blueprintPhases = [
  {
    months: "Months 1–2",
    title: "Build the Foundation",
    description:
      "Assess how you move, improve mobility and lifting technique, and establish nutrition and training habits.",
  },
  {
    months: "Months 3–4",
    title: "Build the Physique",
    description:
      "Use progressive overload to build muscle, work toward fat loss, improve conditioning, and build confidence.",
  },
  {
    months: "Months 5–6",
    title: "Build the Lifestyle",
    description:
      "Plan for travel and social events, develop a sustainable approach to nutrition, and learn to manage your training independently.",
  },
];

export default function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Online coaching with Alkin
          </p>
          <h2 id="programs-heading" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Functional Physique Coaching
          </h2>
          <p className="mt-5 leading-relaxed text-neutral-300">
            Personalized coaching for men who want to build strength, get back
            into a routine, and keep their results.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/15 bg-surface p-6 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              3 months · 12 weeks
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">
              The Functional Physique Kickstart™
            </h3>
            <p className="mt-4 text-lg text-white">
              Build the foundation for the strongest version of yourself in 90 days.
            </p>
            <p className="mt-3 leading-relaxed text-neutral-300">
              For men who’ve gained weight, lost confidence, or haven’t trained
              consistently in years.
            </p>
            <p className="mt-6 text-sm text-neutral-300">
              Starting at <strong className="text-2xl text-white">$1,800 CAD</strong>
            </p>

            <div className="mt-7 border-t border-white/15 pt-6">
              <h4 className="font-semibold">What you’ll work toward</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-300 marker:text-accent">
                {kickstartOutcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold">What’s included</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-300 marker:text-accent">
                {kickstartIncludes.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
            <Button href={coachingInquiryUrl} className="mt-7">
              Inquire About Kickstart
            </Button>
          </article>

          <article className="rounded-2xl border border-accent bg-surface p-6 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              6 months · Flagship program
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">
              The Functional Physique Blueprint™
            </h3>
            <p className="mt-4 text-lg text-white">
              Rebuild your body so you never have to start over again.
            </p>
            <p className="mt-3 leading-relaxed text-neutral-300">
              Build a noticeably stronger physique, move with more confidence,
              and learn how to maintain your results on your own.
            </p>
            <p className="mt-6 text-sm text-neutral-300">
              Starting at <strong className="text-2xl text-white">$3,600 CAD</strong>
            </p>

            <div className="mt-7 border-t border-white/15 pt-6">
              <h4 className="font-semibold">Your six-month roadmap</h4>
              <ol className="mt-4 space-y-5">
                {blueprintPhases.map((phase) => (
                  <li key={phase.months} className="border-l border-accent/50 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {phase.months}
                    </p>
                    <h5 className="mt-1 font-semibold">{phase.title}</h5>
                    <p className="mt-1 leading-relaxed text-neutral-300">{phase.description}</p>
                  </li>
                ))}
              </ol>
            </div>
            <Button href={coachingInquiryUrl} className="mt-7">
              Inquire About Blueprint
            </Button>
          </article>
        </div>

        <div className="mt-8 text-center">
          <Button href="#faq" variant="secondary">Coaching FAQ</Button>
        </div>
      </div>
    </section>
  );
}
