const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python"]
    },
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      skills: ["Spring Boot", "REST APIs", "JPA", "Hibernate"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subheading text-center mx-auto mb-12">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="bg-card border border-border rounded-lg p-6 card-hover"
              >
                <h3 className="font-semibold text-foreground mb-4 text-lg">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
