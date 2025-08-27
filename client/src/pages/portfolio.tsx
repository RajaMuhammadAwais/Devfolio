import { useEffect, useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { MCPFeaturesSection } from "@/components/sections/mcp-features";
import { GitHubSection } from "@/components/sections/github";
import { ContactSection } from "@/components/sections/contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Set page title and meta description
    document.title = "Raja Muhammad Awais - DevOps Engineer | Cloud, Automation & CI/CD Specialist";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DevOps Engineer specializing in AWS, Kubernetes, Terraform, CI/CD pipelines, cloud infrastructure automation, and MCP-powered AI features for intelligent DevOps workflows.');
    }

    // Intersection Observer for active section tracking
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-80px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    // Intersection Observer for animations
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe animated elements
    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-scale-in');
    animatedElements.forEach(el => animationObserver.observe(el));

    return () => {
      observer.disconnect();
      animationObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <MCPFeaturesSection />
        <GitHubSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground" data-testid="footer-copyright">
              © 2025 Raja Muhammad Awais. All rights reserved.
            </p>
            <p className="text-muted-foreground mt-2" data-testid="footer-tagline">
              Built with passion for DevOps and cloud technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
