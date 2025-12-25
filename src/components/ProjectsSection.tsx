import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DropBG",
      subtitle: "Background Removal Web App",
      description: "A full-stack application for image background removal. Users can upload images, which are processed through a clean API pipeline and returned with backgrounds removed.",
      techStack: ["React.js", "Spring Boot", "REST APIs"],
      features: [
        "Secure image upload and handling",
        "Clean API design with proper request flow",
        "Frontend → Backend → External API → Response pipeline",
        "Error handling and loading states"
      ],
      github: "https://github.com/swatishaw1/DropBG",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "EmailWriterAI",
      subtitle: "Gmail Chrome Extension",
      description: "A Chrome Extension that integrates directly into Gmail, using AI to generate email drafts with customizable tone. Built with secure backend API handling and smooth DOM integration.",
      techStack: ["JavaScript", "React.js", "Spring Boot", "Gemini API"],
      features: [
        "Direct Gmail DOM integration using MutationObserver",
        "AI-powered email generation with Gemini API",
        "Tone customization options",
        "One-click email draft generation",
        "Secure backend API handling"
      ],
      github: "https://github.com/swatishaw1/Email-Writer-Ai",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading text-center mx-auto mb-12">
            Practical applications built to solve real problems
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <article 
                key={project.title}
                className="bg-card border border-border rounded-xl overflow-hidden card-hover group"
              >
                {/* Gradient header */}
                <div 
                  className={`h-2 bg-gradient-to-r ${project.color}`}
                />
                
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="w-4 h-4" />
                        View Code
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </a>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md font-mono border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
