import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import WhyUs from "@/components/home/WhyUs";
import Process from "@/components/home/Process";
import Performance from "@/components/home/Performance";
import CaseStudies from "@/components/home/CaseStudies";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="relative bg-background">
      <Hero />
      <Services />
      <Stats />
      <WhyUs />
      <Process />
      <Performance />
      <CaseStudies />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
