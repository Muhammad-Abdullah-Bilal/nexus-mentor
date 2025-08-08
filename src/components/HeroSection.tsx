import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { RegistrationDialog } from "./RegistrationDialog";

export const HeroSection = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<'mentor' | 'mentee' | null>(null);

  const handleUserTypeSelect = (type: 'mentor' | 'mentee') => {
    setSelectedUserType(type);
    setIsRegistrationOpen(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <Brain className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-600">AI-Powered Mentorship Platform</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Connect with the Perfect
              <br />
              <span className="text-blue-600">Mentor or Mentee</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI matches you with ideal mentorship partners based on your goals, experience, and interests. 
              Start your growth journey today.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg group"
              onClick={() => handleUserTypeSelect('mentee')}
            >
              Find Your Mentor
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
              onClick={() => handleUserTypeSelect('mentor')}
            >
              Become a Mentor
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 pt-16">
            <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center space-x-2">
                <Brain className="w-6 h-6 text-blue-600" />
                <span className="text-3xl font-bold text-foreground">AI</span>
              </div>
              <p className="text-muted-foreground">Powered Matching</p>
            </div>
          </div>
        </div>
      </div>
      
      <RegistrationDialog 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
        userType={selectedUserType}
      />
    </div>
  );
};