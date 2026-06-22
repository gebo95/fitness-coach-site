import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative py-32 bg-[#111111] border-t border-white/10">
      <div className="absolute inset-0 bg-[url('/images/coach/coach3.jpeg')] bg-cover bg-center opacity-75" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* small label */}
        <p className="text-[#00e676] uppercase tracking-[4px] mb-6">
          Ready to Transform
        </p>

        {/* headline */}
        <h2 className="text-5xl md:text-6xl font-bold uppercase leading-tight">
          Start Your Journey Today
        </h2>

        {/* subtext */}
        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Take the first step toward building a stronger, healthier, and more
          confident version of yourself.
        </p>

        {/* button */}
        <div className="mt-10">
          <Button href="#about">Learn More</Button>
        </div>

        {/* optional trust line */}
        <p className="mt-8 text-gray-500 text-sm">
          No pressure. Just a free consultation to see if coaching is right for
          you.
        </p>
      </div>
    </section>
  );
}
