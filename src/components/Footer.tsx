import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Globe, Award } from "lucide-react";

const Footer = () => {
  const certifications = [
    "ICF-PCC", "CACP", "CIPD Level 5", "MBTI Certified"
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-navy-deep text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div>
            <div className="font-bold text-2xl mb-4">
              Satya
              <span className="text-gold-rich ml-1">Leadership</span>
            </div>
            <p className="text-gray-light mb-6">
              ICF-PCC Certified Executive Coach empowering leaders to achieve 
              breakthrough results in complex multinational organizations.
            </p>
            <div className="space-y-2 text-sm text-gray-light">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gold-rich mr-2" />
                Bengaluru, India
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 text-gold-rich mr-2" />
                Global Coaching Services
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gold-rich mr-2" />
                satya@xponentiallead.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-light hover:text-gold-rich transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Award className="w-5 h-5 text-gold-rich mr-2" />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-navy-light text-white border border-gold-rich/30"
                >
                  {cert}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-gray-light">
              23+ years of leadership experience across US, UK, APAC, and India
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-light mb-4 md:mb-0">
            © 2024 Satya Leadership Coaching. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-light">
            <a href="#" className="hover:text-gold-rich transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-rich transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;