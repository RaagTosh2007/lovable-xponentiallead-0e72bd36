import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Globe2, Languages } from "lucide-react";
const Experience = () => {
  const corporateRoles = [{
    title: "VP - Global Talent Management",
    company: "Tata Agratas",
    description: "Led global talent strategy and organizational development initiatives"
  }, {
    title: "VP - Talent Management, Swiss Re",
    company: "Swiss Re UK",
    description: "Directed talent management and leadership development for European operations"
  }, {
    title: "Global Lead - Performance Management",
    company: "Oracle",
    description: "Program Manager for Leadership Development and Talent Development Partner"
  }, {
    title: "AVP HR",
    company: "Fullerton India",
    description: "Led HR strategy and organizational development initiatives"
  }];
  const globalPresence = [{
    region: "Americas",
    experience: "leadership roles through virtual teams"
  }, {
    region: "APAC",
    experience: "regional & global roles"
  }, {
    region: "EMEA",
    experience: "UK-based with global leadership roles"
  }];
  const languages = ["English", "Hindi", "Telugu", "Tamil"];
  return <section className="py-20 bg-gray-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">Corporate Experience</h2>
          <p className="text-xl text-gray-sophisticated max-w-3xl mx-auto">Two decades of leadership experience in Indian and Fortune 500 global companies, driving organizational transformation and talent development across continents.</p>
        </div>

        {/* International Leadership Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy-deep mb-8 flex items-center">
            <Building2 className="w-8 h-8 text-gold-rich mr-3" />
            International Leadership Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {corporateRoles.map((role, index) => <Card key={index} className="shadow-card border-0 hover:shadow-executive transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-navy-deep">{role.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit bg-gold-light text-navy-deep">
                    {role.company}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-sophisticated">{role.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Global Presence, Key Competencies & Languages */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Global Presence */}
          <div>
            <h3 className="text-2xl font-bold text-navy-deep mb-6 flex items-center">
              <Globe2 className="w-7 h-7 text-gold-rich mr-3" />
              Global Leadership Regions
            </h3>
            <div className="space-y-4">
              {globalPresence.map((presence, index) => <Card key={index} className="shadow-subtle border border-gold-light">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-navy-deep">{presence.region}</span>
                      <span className="text-sm text-gray-sophisticated">{presence.experience}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-card">
              <h4 className="font-semibold text-navy-deep mb-2 flex items-center">
                <MapPin className="w-5 h-5 text-gold-rich mr-2" />
                Based in Bengaluru, India
              </h4>
              <p className="text-gray-sophisticated text-sm">
                Operating from India's Silicon Valley with global reach and multicultural expertise
              </p>
            </div>
          </div>

          {/* Languages & Cultural Competency */}
          <div>
            <h3 className="text-2xl font-bold text-navy-deep mb-6 flex items-center">
              <Languages className="w-7 h-7 text-gold-rich mr-3" />
              Multilingual Expertise
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-card mb-6">
              <p className="text-gray-sophisticated mb-4">
                Fluent in multiple languages, enabling deep cultural understanding 
                and effective communication across diverse global teams.
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => <Badge key={index} variant="secondary" className="bg-gold-light text-navy-deep px-3 py-1">
                    {language}
                  </Badge>)}
              </div>
            </div>

            {/* Key Competencies */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-navy-deep">Key Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-sophisticated">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-rich rounded-full mr-3"></div>
                    Customer-centricity
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-rich rounded-full mr-3"></div>
                    Relationship Building & Influence
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-rich rounded-full mr-3"></div>
                    Leadership Development & Coaching
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-rich rounded-full mr-3"></div>
                    Strategic Talent & Performance Management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-rich rounded-full mr-3"></div>
                    Learning & Development Architecture
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-rich rounded-full mr-3"></div>
                    Change Agility & Resilience
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;