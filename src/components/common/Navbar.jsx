import { NavLink, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import NavbarMobile from "./NavbarMobile";
import NavbarLinks from "./NavbarLinks";
import logo from "@/assets/logos/logo.jpeg";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex min-h-22 max-w-screen flex-row items-center justify-around bg-slate-800 text-white">
      <NavLink to="/">
        <motion.img
          src={logo}
          alt="logo"
          className="h-20 min-w-20 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />
      </NavLink>
      <NavbarMobile />
      <NavbarLinks />
      <Button
        className="hidden cursor-pointer rounded-md px-3 py-2 md:inline-block"
        onClick={() => navigate("/games")}
      >
        Play Games
      </Button>
    </nav>
  );
}
