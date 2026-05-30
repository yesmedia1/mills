import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import EstimateCTA from "@/components/EstimateCTA";
import CertBadges from "@/components/CertBadges";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <AboutSection />
      <EstimateCTA />
      <CertBadges />
    </>
  );
}
