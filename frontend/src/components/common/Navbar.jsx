import { Link, NavLink } from "react-router";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="h-fit max-w-screen flex flex-row justify-evenly items-center bg-gray-800 text-white">
      <NavLink to="/home">
        <motion.img
          src="/logos/logo.jpeg"
          alt="logo"
          className="h-20 min-w-20 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.6 }}
        />
      </NavLink>
      <ul className="min-w-4/10 flex flex-row justify-evenly [&>*]:px-3 [&>*]:py-2 [&>*]:hover:bg-gray-400 [&>*]:hover:text-gray-800 [&>*]:hover:scale-120 [&>*]:hover:shadow-myShadow [&>*]:rounded-md [&>*]:transition-all duration-200 ">
        <Link to="/home" className="hidden sm:inline">
          Home
        </Link>
        <Link to="/">Resume</Link>
        <Link to="/contact">Contact me</Link>
        <Link to="http://github.com/anand-shete" className="hidden sm:inline">
          Projects
        </Link>
      </ul>
      <NavLink to="/games">
        <button className=" relative hidden md:inline-block px-3 py-2 bg-black rounded-md cursor-pointer ">
          Play Games
        </button>
      </NavLink>
    </nav>
  );
}
