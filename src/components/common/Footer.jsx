import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Footer() {
  const MotionButton = motion.create(Button); // Create an animated version of the Button compoennts

  return (
    <div className="box-border flex min-h-55 max-w-screen flex-row items-center justify-evenly overflow-hidden border-t-2 border-black bg-gray-300">
      <div className="hidden flex-col items-center justify-center space-y-5 sm:flex">
        <NavLink
          to="/contact"
          className="text-2xl transition-transform duration-200 hover:scale-120 hover:underline hover:shadow-2xl"
        >
          Contact Me
        </NavLink>
        <NavLink className="text-2xl transition-transform duration-200 hover:scale-110 hover:underline hover:shadow-2xl">
          View More Projects
        </NavLink>
      </div>
      <div>
        <MotionButton
          className="cursor-pointer lg:mr-24"
          size="lg"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 5,
            repeat: 2,
            repeatDelay: 0.5,
          }}
          whileHover={{ scale: 1.1 }}
        >
          <a href="/src/assets/resume.pdf" download="Anand_Shete_Resume.pdf">
            Download Resume
          </a>
        </MotionButton>
      </div>
      <div className="flex flex-col items-center justify-center text-2xl">
        <NavLink
          to="https://github.com/anand-shete"
          target="_blank"
          className="flex flex-row items-center space-x-2 rounded-md border-2 border-black transition-transform duration-200 hover:scale-110 hover:shadow-custom"
        >
          <Github className="m-1 rounded-sm bg-black p-[2px] text-white" />
          <p>Github</p>
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/anand-shete"
          target="_blank"
          className="mt-5 flex flex-row items-center space-x-2 rounded-md border-2 border-black transition-transform duration-200 hover:scale-110 hover:shadow-custom"
        >
          <img src="./src/assets/logos/linkedin.webp" alt="linkedin" className="h-8 rounded-md" />
          <p className="w-fit">LinkedIn</p>
        </NavLink>
        <NavLink
          to="mailto:anandshete1234@gmail.com"
          target="_blank"
          className="mt-5 flex flex-row items-center space-x-2 rounded-md border-2 border-black transition-transform duration-200 hover:scale-110 hover:shadow-custom"
        >
          <img src="./src/assets/logos/gmail.svg" alt="gmail" className="h-6 rounded-sm bg-white" />
          <p>Mail</p>
        </NavLink>
      </div>
    </div>
  );
}
