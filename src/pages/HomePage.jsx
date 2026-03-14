import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServicesSection from "../components/home/ServicesSection";
import IndustriesSection from "../components/home/IndustriesSection";
import Testimonials from "../components/home/Testimonials";
import HomeCTA from "../components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <IndustriesSection />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
