import { HeroSection, ExperienceSection, SkillsSection, ProjectsSection } from "../sections";
import { Navbar, Footer, SmoothScroll } from "../components/common";
import { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="animate-fade-in">
      <SmoothScroll />
      <Navbar />
      <HeroSection width={width} />
      <ExperienceSection />
      <ProjectsSection width={width} />
      <SkillsSection />
      <Footer />
    </div>
  );
}
