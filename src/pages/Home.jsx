import {
  HeroSection,
  EducationSection,
  SkillsSection,
  ProjectsSection,
} from "../sections";
import { Navbar, Footer } from "../components/common";
import { useRef } from "react";
import { useScroll } from "motion/react";

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  return (
    <div className="max-w-screen h-screen overflow-y-scroll" ref={scrollRef}>
      <Navbar />
      <HeroSection />
      <EducationSection scrollYProgress={scrollYProgress} />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
