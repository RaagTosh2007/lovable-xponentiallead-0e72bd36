import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transform Your
            <span className="block text-gold-rich">Leadership Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-light max-w-3xl mx-auto leading-relaxed">
            Transforming leaders and organizations through evidence-based coaching, 
            strategic talent development, and proven leadership methodologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="premium" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Connect with us
            </Button>
            <a href="#approach">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-navy-deep"
              >
                Explore our approach
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;