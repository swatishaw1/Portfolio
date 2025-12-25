const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Swati Shaw. Built with React & Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & developed with 💙
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
