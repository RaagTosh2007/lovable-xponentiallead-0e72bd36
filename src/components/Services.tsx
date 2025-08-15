import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users2, BrainCircuit, Briefcase, Building, UserCheck } from "lucide-react";

const Services = () => {
  const coachingAreas = [
    {
      icon: BrainCircuit,
      title: "Leadership Transformation",
      description: "Breakthrough coaching to help leaders see beyond systemic limitations and move from survival to thriving.",
      highlights: ["Breakthrough coaching", "Leadership readiness", "Performance optimization"]
    },
    {
      icon: Users2,
      title: "Women Leadership Coaching",
      description: "Specialized coaching for women leaders to overcome unique challenges and achieve executive excellence.",
      highlights: ["Gender-specific challenges", "Executive presence", "Leadership confidence"]
    },
    {
      icon: TrendingUp,
      title: "Career Coaching",
      description: "Strategic career transitions and guidance for executives navigating complex organizational landscapes.",
      highlights: ["Executive leadership development", "Career transition management", "Strategic guidance"]
    }
  ];

  const levels = [
    { icon: Building, title: "Executive Leadership", desc: "C-Suite and Board-level executives" },
    { icon: Briefcase, title: "Business Leaders", desc: "Functional and business unit heads" },
    { icon: UserCheck, title: "Senior Management", desc: "VP and Director-level professionals" },
    { icon: Users2, title: "High Potential Talent", desc: "Emerging leaders and individual contributors" }
  ];

  const industries = [
    "IT & Technology", "Telecommunications", "BFSI", "Automotive", 
    "Energy", "Consulting", "Pharmaceutical", "Human Resources"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
            Areas of Coaching Excellence
          </h2>
          <p className="text-xl text-gray-sophisticated max-w-3xl mx-auto">
            Comprehensive leadership development across all organizational levels, 
            with specialized expertise in executive coaching and organizational transformation.
          </p>
        </div>

        {/* Main Coaching Areas */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {coachingAreas.map((area, index) => (
            <Card key={index} className="shadow-card border-0 hover:shadow-executive transition-all duration-300 h-full">
              <CardHeader>
                <area.icon className="w-12 h-12 text-gold-rich mb-4" />
                <CardTitle className="text-xl text-navy-deep">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-sophisticated mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-navy-light flex items-center">
                      <div className="w-2 h-2 bg-gold-rich rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Levels */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-deep text-center mb-12">
            Leadership Levels Coached
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <Card key={index} className="shadow-subtle border border-gold-light hover:border-gold-rich transition-colors">
                <CardContent className="p-6 text-center">
                  <level.icon className="w-10 h-10 text-navy-deep mx-auto mb-3" />
                  <h4 className="font-semibold text-navy-deep mb-2">{level.title}</h4>
                  <p className="text-sm text-gray-sophisticated">{level.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Experience */}
        <div className="bg-gradient-card p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-navy-deep text-center mb-8">
            Industry Experience
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white rounded-full text-navy-deep font-medium shadow-subtle hover:shadow-card transition-shadow"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="executive" size="lg" className="px-12 py-4 h-auto text-lg">
            Discover Your Leadership Potential
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;