import { useState } from "react";
import { Button } from "../ui/button";
import { NavLink, useNavigate } from "react-router";
import { Download, House, Send } from "lucide-react";

export default function NavbarMobile() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="default"
        size="icon"
        className={`${isOpen ? "opacity-0" : "opacity-100"} h-10 w-10 p-1`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/logos/burger.svg" alt="hamburger-logo" />
      </Button>
      <div
        className={`duration-400 fixed left-0 top-0 flex w-screen flex-col justify-center bg-slate-800 text-center transition-transform *:m-3 *:rounded-md *:py-2 ${
          isOpen ? "translate-y-0" : "-translate-y-50"
        } `}
      >
        <Button
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
        >
          <House className="relative top-[-1px] -mr-1" />
          Home
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
          <a
            href="/resume.pdf"
            download="Anand_Shete_Resume.pdf"
            className="flex px-80 py-2"
          >
            <Download className="relative top-[2px] mr-1" />
            Resume
          </a>
        </Button>
      </div>
    </div>
  );
}
