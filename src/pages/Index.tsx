import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesAccordion } from '@/components/ServicesAccordion';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { TeamSection } from '@/components/TeamSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesAccordion />
      <FacilitiesSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
