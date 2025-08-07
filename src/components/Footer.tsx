import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MentorMatch.AI</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Connecting ambitious learners with experienced mentors through the power of AI. 
              Start your growth journey today.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">Find Mentors</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">Become a Mentor</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">How It Works</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">Success Stories</a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">Help Center</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">Community Guidelines</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">Blog</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">API Documentation</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">About Us</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">Terms of Service</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-background/70 text-sm">
            © 2024 MentorMatch.AI. All rights reserved. Made with ❤️ for the mentorship community.
          </p>
        </div>
      </div>
    </footer>
  );
};