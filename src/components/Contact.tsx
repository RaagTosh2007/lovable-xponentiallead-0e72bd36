import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Calendar, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    coachingArea: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a backend service
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      coachingArea: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "satya@xponentiallead.com",
      description: "Preferred for initial consultations"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+919606110860 +447443731001",
      description: "Available during IST business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Bengaluru, India",
      description: "Global coaching via video conferences"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Leadership Transformation
          </h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            Ready to unlock your leadership potential? Let's discuss how executive coaching 
            can accelerate your career and organizational impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-executive border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-navy-deep flex items-center">
                <Send className="w-6 h-6 text-gold-rich mr-3" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-navy-deep font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-1"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-navy-deep font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-navy-deep font-semibold">
                      Company/Organization
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-1"
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-navy-deep font-semibold">
                      Current Role
                    </Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      className="mt-1"
                      placeholder="e.g., VP, Director, Manager"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="coachingArea" className="text-navy-deep font-semibold">
                    Area of Interest
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("coachingArea", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select coaching area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="executive">Executive Leadership</SelectItem>
                      <SelectItem value="career">Career Transition</SelectItem>
                      <SelectItem value="women-leadership">Women Leaders</SelectItem>
                      <SelectItem value="breakthrough">Breakthrough Coaching</SelectItem>
                      <SelectItem value="team">Team Development</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-navy-deep font-semibold">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell me about your leadership challenges and goals..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="executive" 
                  size="lg" 
                  className="w-full text-lg py-3 h-auto"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-light text-lg">
                Whether you're looking to advance your career, transform your leadership style, 
                or develop your team, I'm here to support your journey to excellence.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card border-0 bg-white/10 backdrop-blur-sm border border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <info.icon className="w-6 h-6 text-gold-rich mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-gold-light font-medium mb-1">{info.detail}</p>
                      <p className="text-gray-light text-sm">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="shadow-card border-0 bg-gold-rich/20 backdrop-blur-sm border border-gold-rich/30">
              <CardContent className="p-6">
                <h4 className="font-semibold text-white mb-2">Free Consultation Available</h4>
                <p className="text-gray-light text-sm">
                  Schedule a complimentary 30-minute discovery call to explore how executive 
                  coaching can accelerate your leadership journey and organizational impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;