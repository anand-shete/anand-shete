import { HeroSection, EducationSection, SkillsSection, ProjectsSection } from "../sections";
import { Navbar, Footer } from "../components/common";
import { useRef } from "react";
import { useScroll } from "motion/react";

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // fixme add https://ui.aceternity.com/components/timeline for experience and remove education
  return (
    <div className="h-screen max-w-screen overflow-y-scroll" ref={scrollRef}>
      <Navbar />
      <HeroSection />
      <EducationSection scrollYProgress={scrollYProgress} />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
