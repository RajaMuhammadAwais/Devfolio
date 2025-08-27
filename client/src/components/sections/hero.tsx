import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" data-testid="hero-title">
            <span className="gradient-text">DevOps Engineer</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6" data-testid="hero-subtitle">
            Cloud, Automation & CI/CD Specialist
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
          Results-driven DevOps Engineer with expertise in AWS, Kubernetes, Terraform, and CI/CD pipelines. 
          Passionate about building scalable, resilient systems that drive operational excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
            data-testid="button-hire-me"
          >
            Hire Me
          </Button>
          <Button 
            variant="outline"
            className="bg-card border border-border hover:border-primary text-foreground px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
            data-testid="button-download-resume"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/RajaMuhammadAwais" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl"
            data-testid="link-github"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="https://shorturl.at/ASflG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl"
            data-testid="link-linkedin"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a 
            href="mailto:muhammadawaisturk1@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl"
            data-testid="link-email"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
