import { Cloud, Container, Code, Infinity, BarChart3, Terminal } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: <Cloud className="h-8 w-8 text-orange-500" />,
      title: "Cloud Platforms",
      skills: [
        "Amazon Web Services (AWS)",
        "EC2, S3, IAM, VPC, RDS",
        "CloudWatch, Lambda",
        "Route 53, ELB/ALB"
      ]
    },
    {
      icon: <Container className="h-8 w-8 text-blue-500" />,
      title: "Containerization",
      skills: [
        "Docker & Docker Compose",
        "Kubernetes Orchestration",
        "Helm Charts",
        "Container Security"
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: "Infrastructure as Code",
      skills: [
        "Terraform",
        "AWS CloudFormation",
        "Ansible Automation",
        "Configuration Management"
      ]
    },
    {
      icon: <Infinity className="h-8 w-8 text-green-500" />,
      title: "CI/CD & Automation",
      skills: [
        "Jenkins Pipelines",
        "GitHub Actions",
        "GitLab CI",
        "Automated Testing"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
      title: "Monitoring & Logging",
      skills: [
        "Prometheus & Grafana",
        "ELK Stack",
        "System Performance",
        "Log Analysis"
      ]
    },
    {
      icon: <Terminal className="h-8 w-8 text-blue-400" />,
      title: "Scripting & Programming",
      skills: [
        "Python Automation",
        "Bash Scripting",
        "API Integration",
        "System Administration"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="skills-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="skills-description">
            Comprehensive expertise across cloud platforms, automation tools, and modern DevOps practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="skill-card bg-card border border-border rounded-lg p-6 animate-scale-in"
              data-testid={`skill-card-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3" data-testid={`skill-title-${index}`}>
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skill} data-testid={`skill-item-${index}-${skillIndex}`}>
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
