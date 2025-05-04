import { Download, Github, House, Send } from "lucide-react";
import { NavLink } from "react-router";

export default function NavbarLinks() {
  return (
    <ul className="*:hover:scale-120 *:hover:shadow-custom hidden justify-evenly space-x-10 duration-200 *:flex *:rounded-md *:px-3 *:py-2 *:transition-all *:hover:bg-emerald-400 *:hover:text-slate-800 md:flex">
      <NavLink to="/">
        <House className="relative top-[1px] mr-[1px] h-5" />
        Home
      </NavLink>
      <a href="/resume.pdf" download="Anand_Shete_Resume.pdf">
        <Download className="relative top-[1px] mr-[1px] h-5" />
        Resume
      </a>

      <NavLink to="/contact">
        <Send className="relative top-[1px] h-5" />
        Contact me
      </NavLink>
      <NavLink
        to="http://github.com/anand-shete"
        target="_blank"
        className="flex"
      >
        <Github className="relative top-[1px] h-5" />
        GitHub
      </NavLink>
    </ul>
  );
}
