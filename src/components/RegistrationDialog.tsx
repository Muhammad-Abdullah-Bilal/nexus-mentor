import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, User, Briefcase } from "lucide-react";

interface RegistrationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  userType?: 'mentor' | 'mentee' | null;
}

export const RegistrationDialog = ({ isOpen, onClose, userType: initialUserType }: RegistrationDialogProps) => {
  const [userType, setUserType] = useState<'mentor' | 'mentee' | null>(initialUserType);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    country: "",
    jobRole: "",
    industry: "",
    experienceYears: "",
    mentorshipTopics: [] as string[],
    bio: "",
    availability: [] as string[],
    languages: [] as string[],
    linkedIn: "",
    website: "",
    currentRole: "",
    industryInterest: "",
    mentorshipGoals: [] as string[]
  });

  const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", "Italy", "Spain", "Netherlands",
    "Australia", "Japan", "South Korea", "Singapore", "India", "China", "Brazil", "Mexico",
    "Argentina", "South Africa", "Nigeria", "Egypt", "UAE", "Saudi Arabia", "Russia", "Poland"
  ];

  const languages = [
    "English", "Spanish", "French", "German", "Italian", "Portuguese", "Chinese", "Japanese",
    "Korean", "Arabic", "Hindi", "Russian", "Dutch", "Polish", "Turkish", "Swedish"
  ];

  const industries = [
    "Technology", "Healthcare", "Finance", "Education", "Marketing", "Sales", "Design", "Engineering",
    "Consulting", "Legal", "Media", "Real Estate", "Non-profit", "Government", "Retail", "Manufacturing"
  ];

  const availabilityOptions = ["Weekdays", "Weekends", "Evenings"];

  const topics = [
    "Career Development", "Leadership", "Technical Skills", "Entrepreneurship", "Public Speaking",
    "Networking", "Work-Life Balance", "Industry Insights", "Skill Development", "Job Search",
    "Interview Preparation", "Project Management", "Team Management", "Strategy", "Innovation"
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }));
  };

  const handleSubmit = () => {
    console.log("Registration data:", { userType, ...formData });
    onClose();
  };

  if (!userType) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center mb-8">Choose Your Journey</DialogTitle>
          </DialogHeader>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-primary" onClick={() => setUserType('mentee')}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">I Want to Learn</h3>
                <p className="text-muted-foreground">Connect with experienced mentors who can guide your growth</p>
                <Button className="w-full">Find Mentors <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </div>
            </Card>

            <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-primary" onClick={() => setUserType('mentor')}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">I Want to Mentor</h3>
                <p className="text-muted-foreground">Share your expertise and help others achieve their goals</p>
                <Button className="w-full">Start Mentoring <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </div>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {userType === 'mentor' ? 'Become a Mentor' : 'Find Your Mentor'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Information</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Create a password"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    placeholder="Your age"
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                      <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="country">Country *</Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={() => setStep(2)} className="w-full">
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Professional Information</h3>
              
              <div>
                <Label htmlFor="jobRole">{userType === 'mentor' ? 'Job Role *' : 'Current Role *'}</Label>
                <Input
                  id="jobRole"
                  value={userType === 'mentor' ? formData.jobRole : formData.currentRole}
                  onChange={(e) => handleInputChange(userType === 'mentor' ? 'jobRole' : 'currentRole', e.target.value)}
                  placeholder={userType === 'mentor' ? "e.g., Software Engineer" : "e.g., Student, Junior Developer"}
                />
              </div>

              <div>
                <Label htmlFor="industry">{userType === 'mentor' ? 'Industry *' : 'Industry Interest *'}</Label>
                <Select 
                  value={userType === 'mentor' ? formData.industry : formData.industryInterest} 
                  onValueChange={(value) => handleInputChange(userType === 'mentor' ? 'industry' : 'industryInterest', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience">Experience (Years) *</Label>
                <Input
                  id="experience"
                  type="number"
                  value={formData.experienceYears}
                  onChange={(e) => handleInputChange('experienceYears', e.target.value)}
                  placeholder="Years of experience"
                />
              </div>

              <div>
                <Label>{userType === 'mentor' ? 'Mentorship Topics *' : 'Mentorship Goals *'}</Label>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto border rounded-md p-3">
                  {topics.map((topic) => (
                    <div key={topic} className="flex items-center space-x-2">
                      <Checkbox
                        id={topic}
                        checked={(userType === 'mentor' ? formData.mentorshipTopics : formData.mentorshipGoals).includes(topic)}
                        onCheckedChange={() => handleArrayToggle(userType === 'mentor' ? 'mentorshipTopics' : 'mentorshipGoals', topic)}
                      />
                      <Label htmlFor={topic} className="text-sm">{topic}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={() => setStep(3)} className="w-full">
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              
              <div>
                <Label htmlFor="bio">Bio *</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  placeholder="Tell us about yourself (max 500 characters)"
                  maxLength={500}
                />
              </div>

              <div>
                <Label>Availability *</Label>
                <div className="flex flex-wrap gap-3">
                  {availabilityOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={formData.availability.includes(option)}
                        onCheckedChange={() => handleArrayToggle('availability', option)}
                      />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>Languages</Label>
                <Select onValueChange={(value) => handleArrayToggle('languages', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select languages you speak" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>{language}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formData.languages.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.languages.map((lang) => (
                      <span key={lang} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                  <Input
                    id="linkedIn"
                    value={formData.linkedIn}
                    onChange={(e) => handleInputChange('linkedIn', e.target.value)}
                    placeholder="LinkedIn URL"
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website/Portfolio</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="Your website URL"
                  />
                </div>
              </div>

              <Button onClick={handleSubmit} className="w-full">
                Complete Registration
              </Button>
            </div>
          )}

          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)} className="w-full">
              Back
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};