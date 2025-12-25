import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <a 
            href="#" 
            className="text-xl font-bold text-gradient"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            SS
          </a>
          
          <ul className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/swatishaw1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/swati-shaw-178207279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:swatishaw104@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
