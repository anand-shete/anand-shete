import { NavLink, useNavigate } from "react-router";
import { Button } from "../ui/button";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import logo from "@/assets/favicon.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex min-h-22 max-w-screen flex-row items-center justify-around border-b border-white bg-slate-800 text-white">
      <NavLink
        to="https://www.linkedin.com/in/anand-shete/"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <img
          src={logo}
          alt="logo"
          className="h-20 min-w-20 rounded-full transition-transform duration-200 hover:scale-120"
        />
      </NavLink>
      <NavbarMobile />
      <NavbarDesktop />
      <Button
        className="hidden cursor-pointer rounded-md px-3 py-2 md:inline-block"
        onClick={() => navigate("/games")}
      >
        Play Games
      </Button>
    </nav>
  );
}
