import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, MessageSquare } from "lucide-react";

export const BrowseMentorsSection = () => {
  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Google",
      experience: "8+ years",
      location: "San Francisco, CA",
      rating: 4.9,
      sessions: 150,
      topics: ["React", "System Design", "Career Growth"],
      bio: "Passionate about helping developers grow their careers in tech.",
      available: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Microsoft",
      experience: "6+ years",
      location: "Seattle, WA",
      rating: 4.8,
      sessions: 120,
      topics: ["Product Strategy", "Leadership", "Data Analysis"],
      bio: "Helping aspiring PMs navigate their product management journey.",
      available: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Design Lead",
      company: "Airbnb",
      experience: "7+ years",
      location: "New York, NY",
      rating: 5.0,
      sessions: 200,
      topics: ["UX Design", "Design Systems", "User Research"],
      bio: "Mentoring designers to create impactful user experiences.",
      available: false
    }
  ];

  return (
    <section id="browse" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Browse <span className="text-blue-600">Mentors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover experienced professionals ready to guide your growth journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="p-6 hover:shadow-lg transition-all border border-gray-200">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{mentor.name}</h3>
                    <p className="text-muted-foreground">{mentor.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{mentor.company}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{mentor.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{mentor.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{mentor.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MessageSquare className="w-4 h-4" />
                    <span>{mentor.sessions} sessions completed</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {mentor.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground">{mentor.bio}</p>

                {/* CTA */}
                <Button 
                  className="w-full" 
                  disabled={!mentor.available}
                  variant={mentor.available ? "default" : "outline"}
                >
                  {mentor.available ? "Connect" : "Unavailable"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            View All Mentors
          </Button>
        </div>
      </div>
    </section>
  );
};