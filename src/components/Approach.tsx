import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ear, Heart, Lightbulb, Target, Users, TrendingUp } from "lucide-react";

const Approach = () => {
  const methodology = [
    {
      icon: Ear,
      title: "Listen",
      description: "Deep listening to understand your unique leadership context, challenges, and aspirations.",
      details: "We start by creating a safe space where you can openly share your leadership journey, current challenges, and vision for growth."
    },
    {
      icon: Heart,
      title: "Understand",
      description: "Comprehensive assessment of your leadership style, organizational dynamics, and growth opportunities.",
      details: "Through evidence-based assessments and reflective conversations, we gain clarity on your strengths and development areas."
    },
    {
      icon: Lightbulb,
      title: "Design",
      description: "Collaborate to create a personalized coaching plan that aligns with your goals and organizational context.",
      details: "Together, we design a structured yet flexible development plan that integrates seamlessly with your leadership responsibilities."
    }
  ];

  const caseStudies = [
    {
      icon: Target,
      title: "C-Suite Transformation",
      challenge: "A multinational CEO struggled with leading through digital transformation while maintaining team morale.",
      result: "Developed authentic leadership presence, improved team engagement by 40%, and successfully navigated organizational change.",
      impact: "Increased employee satisfaction scores and achieved digital transformation goals 6 months ahead of schedule."
    },
    {
      icon: Users,
      title: "Women Leadership Excellence", 
      challenge: "A VP-level woman leader faced confidence challenges and imposter syndrome in a male-dominated industry.",
      result: "Built executive presence, enhanced strategic thinking, and developed influential communication skills.",
      impact: "Promoted to SVP role within 18 months and became a keynote speaker at industry conferences."
    },
    {
      icon: TrendingUp,
      title: "Career Transition Success",
      challenge: "A senior director needed to transition from technical expert to strategic business leader.",
      result: "Developed strategic mindset, enhanced business acumen, and built cross-functional leadership skills.",
      impact: "Successfully transitioned to VP role in global operations, leading teams across 3 continents."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-gradient-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
            Our Proven Approach
          </h2>
          <p className="text-xl text-gray-sophisticated max-w-3xl mx-auto">
            A systematic, evidence-based methodology that transforms leadership potential 
            into measurable results through Listen, Understand, Design.
          </p>
        </div>

        {/* Methodology */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {methodology.map((step, index) => (
            <Card key={index} className="shadow-card border-0 hover:shadow-executive transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gold-rich rounded-full flex items-center justify-center mr-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-navy-deep rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-xl text-navy-deep">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-sophisticated mb-4">{step.description}</p>
                <p className="text-navy-light text-sm">{step.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-3xl font-bold text-navy-deep text-center mb-12">
            Real Leadership Transformations
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-executive transition-all duration-300 h-full">
                <CardHeader>
                  <study.icon className="w-12 h-12 text-gold-rich mb-4" />
                  <CardTitle className="text-xl text-navy-deep">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-navy-deep mb-2">Challenge</h5>
                    <p className="text-gray-sophisticated text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-navy-deep mb-2">Coaching Result</h5>
                    <p className="text-gray-sophisticated text-sm">{study.result}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gold-rich mb-2">Business Impact</h5>
                    <p className="text-navy-light text-sm font-medium">{study.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;