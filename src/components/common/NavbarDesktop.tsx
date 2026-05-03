import { BriefcaseBusiness, Download, Github, House, Send } from "lucide-react";
import { NavLink } from "react-router";
import resume from "/Anand_Shete.pdf";
import { useLenis } from "lenis/react";

const NavbarDesktop = () => {
  const lenis = useLenis();

  return (
    <ul className="*:hover:shadow-custom hidden justify-evenly space-x-10 duration-200 *:flex *:rounded-md *:px-3 *:py-2 *:transition-all *:hover:scale-120 *:hover:bg-emerald-400 *:hover:text-slate-800 md:flex [&_div]:cursor-pointer">
      <NavLink to="/">
        <House className="relative top-px mr-px h-5" />
        Home
      </NavLink>
      <div
        onClick={() =>
          lenis?.scrollTo("#projects", {
            offset: -88,
          })
        }
      >
        <BriefcaseBusiness className="relative top-px mr-px h-5" />
        Projects
      </div>
      <a href={resume} download="Anand_Shete_Resume.pdf">
        <Download className="relative top-px mr-px h-5" />
        Resume
      </a>

      <NavLink to="/contact">
        <Send className="relative top-px h-5" />
        Contact me
      </NavLink>
      <NavLink to="http://github.com/anand-shete" target="_blank" className="flex">
        <Github className="relative top-px h-5" />
        GitHub
      </NavLink>
    </ul>
  );
};

export default NavbarDesktop;
