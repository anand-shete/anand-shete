import resume from "/Anand_Shete.pdf";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { Download, Github } from "lucide-react";
import { gmail, linkedin } from "@/assets/index";

export default function Footer() {
  return (
    <div className="flex min-h-60 max-w-screen flex-row items-center justify-evenly overflow-hidden border-t-2 bg-slate-900 text-white">
      <div className="hidden flex-col space-y-2 sm:flex">
        <h1 className="mb-10 text-2xl font-bold transition-transform duration-200">Anand Shete</h1>
        <NavLink
          to="/contact"
          className="text-base underline-offset-4 transition-colors duration-200 hover:text-slate-500"
        >
          Contact Me
        </NavLink>
        <NavLink
          to="https://github.com/anand-shete"
          target="_blank"
          rel="noopener"
          referrerPolicy="no-referrer"
          className="text-base underline-offset-4 transition-colors duration-200 hover:text-slate-500"
        >
          View More Projects
        </NavLink>
      </div>
      <div>
        <Button className="animate-bounce cursor-pointer" size="lg">
          <a href={resume} download="Anand_Shete_Resume.pdf" className="flex">
            <Download className="mr-3" />
            Download Resume
          </a>
        </Button>
      </div>
      <div className="text-md flex flex-col space-y-4 [&_a]:flex [&_a]:items-center [&_span]:ml-1">
        <NavLink to="https://github.com/anand-shete" target="_blank" referrerPolicy="no-referrer">
          <Github className="rounded-sm" size={20} />
          <span className="pl-1">Github</span>
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/anand-shete"
          target="_blank"
          rel="noopener"
          referrerPolicy="no-referrer"
        >
          <img src={linkedin} alt="linkedin" className="h-6" />
          <span>LinkedIn</span>
        </NavLink>
        <NavLink to="mailto:anandshete1234@gmail.com" target="_blank" referrerPolicy="no-referrer">
          <img src={gmail} alt="gmail" className="h-6 rounded-sm" />
          <span className="pl-1">Mail</span>
        </NavLink>
      </div>
    </div>
  );
}
