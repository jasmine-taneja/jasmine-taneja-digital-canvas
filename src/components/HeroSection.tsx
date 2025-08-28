import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-60" />
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto section-padding">
        <div className="fade-in">
          <h1 className="text-8xl md:text-9xl font-bold mb-6 gradient-text leading-tight floating">
            Jasmine
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium slide-up stagger-1">
            Blending Technology & Design to Craft Engaging Digital Experiences
          </p>
          <div className="max-w-3xl mx-auto mb-12 slide-up stagger-2">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Creative and detail-oriented final-year Computer Science Engineering student passionate about 
              digital design, storytelling, and UI/UX. Skilled in Adobe Illustrator, Photoshop, Figma, and 
              Canva, blending technical expertise with creativity to deliver impactful visuals.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 scale-in stagger-3">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full p-4 neon-glow crazy-spin"
              asChild
            >
              <a href="https://github.com/jasmine-taneja" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full p-4 neon-glow crazy-spin"
              asChild
            >
              <a href="https://www.linkedin.com/in/jasmine-taneja-524493216/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full p-4 neon-glow crazy-spin"
              asChild
            >
              <a href="mailto:jasmine.taneja07@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in stagger-4">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;