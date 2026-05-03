import { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import { Download, House, Send, Menu, X, BriefcaseBusiness } from "lucide-react";
import resume from "/Anand_Shete.pdf";
import { useLenis } from "lenis/react";

export default function NavbarMobile() {
  const navigate = useNavigate();
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-10 flex min-w-full items-center justify-around md:hidden">
      <div
        className={`fixed top-20 flex flex-col space-y-3 bg-slate-800 transition-transform duration-400 [&_button]:w-screen ${isOpen ? "translate-y-0" : "-translate-y-100"} `}
      >
        <Button
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
        >
          <House className="" />
          Home
        </Button>
        <Button
          onClick={() => {
            lenis?.scrollTo("#projects");
            setIsOpen(false);
          }}
        >
          <BriefcaseBusiness className="" />
          Projects
        </Button>
        <Button
          onClick={() => {
            navigate("/contact");
            setIsOpen(false);
          }}
        >
          <Send className="-mr-1" />
          Contact Me
        </Button>
        <Button
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
        >
          <a href={resume} download="Anand_Shete_Resume.pdf" className="flex px-80 py-2">
            <Download className="relative top-0.5 mr-1" />
            Resume
          </a>
        </Button>
      </div>

      <h1>Anand Shete.</h1>
      <Button
        variant="default"
        size="icon"
        className="h-10 w-10 p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu strokeWidth={2} />}
      </Button>
    </div>
  );
}
