import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import ProductionCTA from "../components/home/ProductionCTA";
import WhatsNew from "../components/home/WhatsNew";
import HowItWorks from "../components/home/HowItWorks";
import DesignSupport from "../components/home/DesignSupport";
import Lifecycle from "../components/home/Lifecycle";
import IndustriesSection from "../components/home/IndustriesSection";
import ResourcesSection from "../components/home/ResourcesSection";
import ManufacturePro from "../components/home/ManufacturePro";
import ContactFAB from "../components/home/ContactFAB";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProductionCTA />
      <WhatsNew />
      <ManufacturePro />
      <HowItWorks />
      <DesignSupport />
      <Lifecycle />
      <IndustriesSection />
      <ResourcesSection />
      <ContactFAB />
    </>
  );
}
