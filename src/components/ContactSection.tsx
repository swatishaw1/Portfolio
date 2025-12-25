import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "swatishaw104@gmail.com",
      href: "mailto:swatishaw104@gmail.com",
      icon: Mail,
      description: "Send me a message"
    },
    {
      name: "GitHub",
      value: "swatishaw1",
      href: "https://github.com/swatishaw1",
      icon: Github,
      description: "Check out my code"
    },
    {
      name: "LinkedIn",
      value: "Swati Shaw",
      href: "https://www.linkedin.com/in/swati-shaw-178207279/",
      icon: Linkedin,
      description: "Let's connect"
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subheading mx-auto mb-12">
            I'm always open to discussing new opportunities, interesting projects, 
            or just connecting with fellow developers.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="bg-card border border-border rounded-lg p-6 card-hover group block"
              >
                <link.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{link.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{link.description}</p>
                <span className="text-primary text-sm font-mono flex items-center justify-center gap-1">
                  {link.value}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            ))}
          </div>

          <Button 
            variant="hero" 
            size="lg" 
            className="mx-auto"
            onClick={() => window.location.href = "mailto:swatishaw104@gmail.com"}
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
