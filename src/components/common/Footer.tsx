import resume from "/Anand_Shete.pdf";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { Download, Github } from "lucide-react";
import { gmail, linkedin } from "@/assets/index";

export default function Footer() {
  return (
    <div className="flex min-h-55 max-w-screen flex-row items-center justify-evenly overflow-hidden border-t-2 bg-slate-900 text-white">
      <div className="hidden flex-col space-y-2 sm:flex">
        <NavLink
          to="https://www.linkedin.com/in/anand-shete/"
          target="_blank"
          rel="noopener no-refferrer"
          referrerPolicy="no-referrer"
          className="mb-10 text-2xl font-bold transition-transform duration-200"
        >
          Anand Shete
        </NavLink>
        <NavLink
          to="/contact"
          className="text-base underline-offset-4 transition-transform duration-200 hover:underline"
        >
          Contact Me
        </NavLink>
        <NavLink
          to="https://github.com/anand-shete"
          target="_blank"
          referrerPolicy="no-referrer"
          className="text-base underline-offset-4 transition-transform duration-200 hover:underline"
        >
          View More Projects
        </NavLink>
      </div>
      <div>
        <Button className="animate-bounce cursor-pointer lg:mr-24" size="lg">
          <a href={resume} download="Anand_Shete_Resume.pdf" className="flex">
            <Download className="mr-3" />
            Download Resume
          </a>
        </Button>
      </div>
      <div className="text-md">
        <NavLink
          to="https://github.com/anand-shete"
          target="_blank"
          referrerPolicy="no-referrer"
          className="hover:shadow-custom flex flex-row items-center space-x-2 rounded-md transition-transform duration-200 hover:scale-110"
        >
          <Github className="m-1 rounded-[5px] bg-black p-0.5 text-white" size={24} />
          <p>Github</p>
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/anand-shete"
          target="_blank"
          referrerPolicy="no-referrer"
          className="hover:shadow-custom mt-5 flex flex-row items-center space-x-2 rounded-md transition-transform duration-200 hover:scale-110"
        >
          <img src={linkedin} alt="linkedin" className="h-8 rounded-[5px]" />
          <p>LinkedIn</p>
        </NavLink>
        <NavLink
          to="mailto:anandshete1234@gmail.com"
          target="_blank"
          referrerPolicy="no-referrer"
          className="hover:shadow-custom mt-5 flex flex-row items-center space-x-2 rounded-md transition-transform duration-200 hover:scale-110"
        >
          <img src={gmail} alt="gmail" className="ml-1 h-6 rounded-[5px] bg-white" />
          <p>Mail</p>
        </NavLink>
      </div>
    </div>
  );
}
