import { HeroSection, ExperienceSection, SkillsSection, ProjectsSection } from "../sections";
import { Navbar, Footer, SmoothScroll } from "../components/common";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </>
  );
}
