import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { UserTypeSelector } from "@/components/UserTypeSelector";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <UserTypeSelector />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Index;
