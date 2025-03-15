import { NavLink, useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="min-h-22 max-w-screen flex flex-row justify-around items-center bg-gray-800 text-white">
      {/* Main image */}
      <NavLink to="/">
        <motion.img
          src="/logos/logo.jpeg"
          alt="logo"
          className="h-20 min-w-20 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />
      </NavLink>

      {/* For Mobile View */}
      {pathname.startsWith("/") && (
        <NavLink className="md:hidden">Home</NavLink>
      )}
      {pathname.startsWith("/contact") && (
        <NavLink className="md:hidden">Home</NavLink>
      )}

      {/* Ham Burger Icon */}
      <Button
        variant="default"
        size="icon"
        className={`${
          isOpen ? "opacity-0" : "opacity-100"
        } h-12 w-12  md:hidden `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/logos/HamBurger.png" alt="hamburger-logo" />
      </Button>
      <div
        className={`fixed left-0 top-0 min-h-fit min-w-screen flex flex-col justify-center text-center bg-slate-800 transition-transform duration-400 ${
          isOpen ? "translate-y-0" : "-translate-y-50"
        } `}
      >
        <Button
          className="rounded-md py-2 m-3 "
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
        >
          Home
        </Button>
        <Button
          className="rounded-md py-2 m-3"
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
        >
          Contact Me
        </Button>
        <Button
          className="rounded-md py-2 m-3 "
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
        >
          Resume
        </Button>
      </div>

      {/* For width >=768px */}
      <ul className="hidden min-w-4/10 md:flex flex-row justify-evenly [&>*]:px-3 [&>*]:py-2 [&>*]:hover:bg-emerald-400 [&>*]:hover:text-gray-800 [&>*]:hover:scale-120 [&>*]:hover:shadow-custom [&>*]:rounded-md [&>*]:transition-all duration-200 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Resume</NavLink>
        <NavLink to="/contact">Contact me</NavLink>
        <NavLink
          to="http://github.com/anand-shete"
          target="_blank"
          className="flex"
        >
          <img src="/logos/github.png" alt="" className="h-6 mr-1" />
          GitHub
        </NavLink>
      </ul>
      <Button
        className="hidden md:inline-block px-3 py-2 rounded-md cursor-pointer"
        onClick={() => navigate("/games")}
      >
        Play Games
      </Button>
    </nav>
  );
}
