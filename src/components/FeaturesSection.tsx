import { Card } from "@/components/ui/card";
import { Brain, Users, MessageSquare, Calendar, Shield, Zap } from "lucide-react";
import aiIcon from "@/assets/ai-icon.png";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our advanced algorithm analyzes your goals, experience, and preferences to find perfect mentorship matches.",
      gradient: "from-primary/20 to-primary-glow/20"
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with mentors and mentees from around the world across different industries and expertise levels.",
      gradient: "from-secondary/20 to-secondary-glow/20"
    },
    {
      icon: MessageSquare,
      title: "Secure Messaging",
      description: "Built-in secure messaging system to communicate safely and effectively with your mentorship partners.",
      gradient: "from-primary-glow/20 to-secondary/20"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intelligent scheduling that considers time zones and availability to find the perfect meeting times.",
      gradient: "from-secondary-glow/20 to-primary/20"
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All mentors are verified for authenticity and expertise to ensure quality mentorship experiences.",
      gradient: "from-primary/20 to-secondary-glow/20"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Real-time notifications for new matches, messages, and meeting requests to stay connected.",
      gradient: "from-secondary/20 to-primary-glow/20"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm border border-card-border rounded-full px-4 py-2 shadow-card">
            <img src={aiIcon} alt="AI" className="w-4 h-4" />
            <span className="text-sm font-medium text-muted-foreground">Powered by Advanced AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose <span className="text-gradient">MentorMatch.AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of mentorship with our cutting-edge features designed to create meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="card-profile group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};