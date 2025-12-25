import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Swati Shaw
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Computer Science Student & Aspiring{" "}
            <span className="text-gradient">Full-Stack Developer</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Building practical web applications with React.js and Spring Boot. 
            Focused on clean code, problem-solving, and continuous learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              <FileText className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
