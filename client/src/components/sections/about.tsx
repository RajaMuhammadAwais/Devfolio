export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="DevOps engineer workspace with multiple monitors" 
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="about-image"
            />
          </div>
          
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6" data-testid="about-title">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6" data-testid="about-description-1">
              I am a results-driven DevOps Engineer with a strong passion for solving complex problems through a unique blend of 
              technical expertise and creative thinking. With a solid foundation in cloud infrastructure, automation, and CI/CD, I 
              thrive in dynamic, fast-paced environments where continuous improvement is key.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6" data-testid="about-description-2">
              My approach combines precision, agility, and innovation leveraging tools like AWS, Kubernetes, Terraform, and Python 
              to build scalable, resilient, and efficient systems. I focus on optimizing processes, enhancing team collaboration, 
              and delivering high-quality, production-ready solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2" data-testid="about-location-label">Location</h4>
                <p className="text-muted-foreground" data-testid="about-location-value">Abbottabad, Pakistan</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2" data-testid="about-education-label">Education</h4>
                <p className="text-muted-foreground" data-testid="about-education-value">BS Computer Science</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2" data-testid="about-experience-label">Experience</h4>
                <p className="text-muted-foreground" data-testid="about-experience-value">2+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2" data-testid="about-languages-label">Languages</h4>
                <p className="text-muted-foreground" data-testid="about-languages-value">English, Urdu, Hindko</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
