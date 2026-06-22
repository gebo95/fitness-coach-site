import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Programs from "@/components/home/Programs";
import Process from "@/components/home/Process";
import Transformations from "@/components/home/Transformations";
import Testimonials from "@/components/home/Testimonials";
import AboutCoach from "@/components/home/AboutCoach";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <Process />
      <Transformations />
      <Testimonials />
      <AboutCoach />
      {/* <ContactForm /> */}
      <FAQ />
      <CTA />
    </>
  );
}
