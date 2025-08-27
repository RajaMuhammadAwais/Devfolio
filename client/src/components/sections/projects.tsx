import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Application Classification Using DPI",
      description: "Deep Packet Inspection system for classifying applications based on network traffic patterns. Integrated with ELK stack for real-time visualization and monitoring.",
      image: "https://pixabay.com/get/gb0076236ff0f778b92bf7d70787dc2f534ab78cc8d38a0d35857cfa4caafc9a370172b626f4a97266cf338e21189a51380e3fff06d064dbc56aef82d92d7aafa_1280.jpg",
      tags: ["ELK Stack", "Network Analysis", "Machine Learning"],
      github: "#",
      demo: "#"
    },
    {
      title: "Kubernetes Cluster Deployment",
      description: "Production-ready Kubernetes cluster with automated scaling, monitoring, and CI/CD integration. Implemented using Infrastructure as Code principles.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Kubernetes", "Terraform", "AWS", "Helm"],
      github: "#",
      demo: "#"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Comprehensive CI/CD pipeline with automated testing, security scanning, and multi-environment deployments using GitHub Actions and Jenkins.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["GitHub Actions", "Jenkins", "Docker", "Testing"],
      github: "#",
      demo: "#"
    },
    {
      title: "Monitoring & Logging Infrastructure",
      description: "Complete monitoring solution with Prometheus, Grafana, and ELK stack. Real-time alerting and comprehensive system observability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Prometheus", "Grafana", "ELK Stack", "Alerting"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="projects-description">
            Real-world DevOps implementations showcasing automation, cloud infrastructure, and modern deployment practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card bg-background border border-border rounded-lg overflow-hidden animate-scale-in"
              data-testid={`project-card-${index}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                      data-testid={`project-tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary/80"
                    data-testid={`project-github-${index}`}
                  >
                    <Github className="mr-1 h-4 w-4" /> Code
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary/80"
                    data-testid={`project-demo-${index}`}
                  >
                    <ExternalLink className="mr-1 h-4 w-4" /> Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
