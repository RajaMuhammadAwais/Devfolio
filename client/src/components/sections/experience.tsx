export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "PULXENET",
      website: "https://pulxenet.com/",
      period: "Aug 2025 - Present",
      current: true,
      responsibilities: [
        "Designed and optimized CI/CD workflows leveraging GitHub Actions and Jenkins",
        "Implemented cloud infrastructure with Terraform and Ansible",
        "Deployed and managed containerized applications using Docker and Kubernetes",
        "Developed automation scripts in Python and Bash",
        "Applied best practices for infrastructure security and compliance"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "ROBOTICS WORLD",
      website: "https://roboticsworld.com.pk/",
      period: "Feb 2025 - Aug 2025",
      current: false,
      responsibilities: [
        "Designed and maintained CI/CD pipelines for automated deployment",
        "Provisioned and managed cloud infrastructure using Terraform and Ansible",
        "Deployed containers using Docker and Kubernetes orchestration",
        "Monitored system performance using Prometheus, Grafana, and ELK Stack",
        "Ensured infrastructure security, compliance, and disaster recovery"
      ]
    },
    {
      title: "BS Computer Science",
      company: "Abbottabad University Of Science And Technology",
      website: "https://aust.edu.pk",
      period: "2020 - 2024",
      current: false,
      isEducation: true,
      responsibilities: [
        "Comprehensive computer science education with focus on software engineering, system administration, and emerging technologies."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="experience-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="experience-description">
            Journey through my DevOps career and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={`${experience.company}-${experience.period}`}
                className="timeline-item relative pl-20 animate-slide-up"
                data-testid={`experience-item-${index}`}
              >
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background ${
                  experience.current ? 'bg-primary' : 
                  experience.isEducation ? 'bg-accent' : 'bg-secondary'
                }`}></div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground" data-testid={`experience-title-${index}`}>
                        {experience.title}
                      </h3>
                      <h4 className="text-primary font-medium" data-testid={`experience-company-${index}`}>
                        {experience.company}
                      </h4>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {experience.current && (
                        <span className="bg-secondary/20 text-secondary px-2 py-1 rounded mr-2" data-testid={`experience-current-${index}`}>
                          Current
                        </span>
                      )}
                      <span data-testid={`experience-period-${index}`}>{experience.period}</span>
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} data-testid={`experience-responsibility-${index}-${respIndex}`}>
                        • {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
