import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Swati Shaw | Full-Stack Developer Portfolio</title>
        <meta 
          name="description" 
          content="Swati Shaw - Computer Science student and aspiring full-stack developer specializing in React.js, Spring Boot, and building practical web applications." 
        />
        <meta name="keywords" content="Swati Shaw, Full-Stack Developer, React.js, Spring Boot, Computer Science, Portfolio, Web Developer" />
        <meta property="og:title" content="Swati Shaw | Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Computer Science student and aspiring full-stack developer specializing in React.js and Spring Boot." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://swatishaw.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
