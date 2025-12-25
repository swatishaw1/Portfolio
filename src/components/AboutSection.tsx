import { GraduationCap, Code2, Target, BookOpen } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "CS Undergraduate",
      description: "CGPA: 8.75"
    },
    {
      icon: Code2,
      title: "Full-Stack Focus",
      description: "React.js & Spring Boot"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "DSA & System Design"
    },
    {
      icon: BookOpen,
      title: "Always Learning",
      description: "Open to feedback"
    }
  ];

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subheading text-center mx-auto mb-12">
            A Computer Science student passionate about building real-world applications
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science undergraduate with a strong foundation in 
                <span className="text-foreground font-medium"> C, Java, and Python</span>. 
                My focus is on full-stack web development, where I enjoy creating 
                applications that solve practical problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm particularly interested in 
                <span className="text-foreground font-medium"> AI integrations</span> and 
                <span className="text-foreground font-medium"> system design</span>. 
                I believe in writing clean, maintainable code and learning through 
                building actual projects.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                My coursework includes Data Structures & Algorithms, Database Management 
                Systems, Operating Systems, and Computer Networks—all of which inform 
                how I approach software development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm consistent, learning-oriented, and always open to feedback. 
                Whether it's debugging a tricky API issue or optimizing a React 
                component, I enjoy the process of figuring things out.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div 
                key={item.title}
                className="bg-card border border-border rounded-lg p-5 text-center card-hover"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
