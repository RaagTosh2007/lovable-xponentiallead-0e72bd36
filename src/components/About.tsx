import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, Users, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "ICF-PCC Certified",
      description: "Professional Certified Coach from International Coaching Federation"
    },
    {
      icon: Globe,
      title: "Global Experience",
      description: "23+ years leading teams across US, UK, APAC, and India"
    },
    {
      icon: Users,
      title: "C-Suite Expertise",
      description: "Direct experience coaching CXOs, CXO-1 and CXO-2 leaders"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Specialized in leadership transformation and breakthrough coaching"
    }
  ];

  const credentials = [
    "ICF-PCC Professional Certified Coach",
    "Certified Advanced Coaching Professional (CACP)",
    "Level 5 CIPD, UK",
    "MBA - HR & Marketing, IPE",
    "MBTI, FIRO-B, Profilor-360 Certified"
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
            Executive Leadership Excellence
          </h2>
          <p className="text-xl text-gray-sophisticated max-w-3xl mx-auto">
            Transforming leaders and organizations through evidence-based coaching, 
            strategic talent development, and proven leadership methodologies.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="shadow-card border-0 hover:shadow-executive transition-all duration-300">
              <CardContent className="p-6 text-center">
                <achievement.icon className="w-12 h-12 text-gold-rich mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-navy-deep mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-sophisticated text-sm">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-navy-deep mb-6">
              Driving Performance & Inclusive Cultures
            </h3>
            <div className="space-y-4 text-gray-sophisticated">
              <p>
                As a results-oriented ICF-PCC certified Coach with 23 years of leadership experience 
                in multinational organizations, I've been at the forefront of driving change and 
                serving as a talent partner to business leaders.
              </p>
              <p>
                My extensive experience spans Telecom, BFSI, and Technology firms across India, 
                USA, and UK, where I've led global teams and driven performance through inclusive 
                cultures, talent review boards, and succession planning exercises.
              </p>
              <p>
                I specialize in coaching leaders at various stages of their journeys, helping them 
                understand organizational context, manage career transitions, and achieve their 
                development goals with empathy and strategic insight.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-card">
            <h4 className="text-2xl font-bold text-navy-deep mb-6">
              Certifications & Credentials
            </h4>
            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="block text-left p-3 bg-gray-light text-navy-deep hover:bg-gold-light transition-colors"
                >
                  {credential}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;