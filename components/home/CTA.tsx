import Button from "@/components/ui/Button";
import { coachingInquiryUrl } from "@/lib/coaching";

export default function CTA() {
  return (
    <section className="relative py-32 bg-surface border-t border-white/10">
      <div className="absolute inset-0 bg-[url('/images/coach/coach3.jpeg')] bg-cover bg-center opacity-75 grayscale" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* small label */}
        <p className="text-accent uppercase tracking-[4px] mb-6">
          Ready to Transform
        </p>

        {/* headline */}
        <h2 className="text-5xl md:text-6xl font-bold uppercase leading-tight">
          Start Your Journey Today
        </h2>

        {/* subtext */}
        <p className="mt-6 text-neutral-400 text-lg max-w-2xl mx-auto">
          Take the first step toward building a stronger, healthier, and more
          confident version of yourself.
        </p>

        {/* button */}
        <div className="mt-10">
          <Button href={coachingInquiryUrl}>Book a 30-Minute Coaching Call</Button>
        </div>

      </div>
    </section>
  );
}
