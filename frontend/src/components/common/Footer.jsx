import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

export default function Footer() {
  const MotionButton = motion.create(Button); // Create an animated version of the Button compoennts

  return (
    <div className="h-1/3 max-w-screen flex flex-row justify-evenly items-center bg-gray-300 border-t-2 border-black box-border overflow-hidden">
      <div className="sm:flex flex-col justify-center space-y-5 items-center hidden">
        <NavLink className="text-2xl hover:underline hover:scale-120 hover:shadow-2xl transition-transform duration-200">
          Contact Me
        </NavLink>
        <NavLink className="text-2xl hover:underline hover:scale-110 hover:shadow-2xl transition-transform duration-200">
          View More Projects
        </NavLink>
      </div>
      <div>
        <NavLink>
          <MotionButton
            className="cursor-pointer lg:mr-24"
            size="lg"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              bounce: 0.7,
              duration: 2,
              repeat: 2,
              repeatDelay: 0.5,
            }}
            whileHover={{ scale: 1.2 }}
          >
            Download Resume
          </MotionButton>
        </NavLink>
      </div>
      <div className="text-2xl flex flex-col justify-center items-center">
        <NavLink className="flex flex-row items-center space-x-2 border-2 border-black rounded-md transition-transform duration-200 hover:shadow-myShadow hover:scale-110">
          <img
            src="/logos/github.png"
            alt="github"
            className="h-6 rounded-md"
          />
          <p>Github</p>
        </NavLink>
        <NavLink className="flex flex-row items-center space-x-2 border-2 border-black rounded-md transition-transform duration-200 mt-5 hover:shadow-myShadow hover:scale-110">
          <img
            src="/logos/linkedin.webp"
            alt="linkedin"
            className="h-6 rounded-md"
          />
          <p className=" w-fit">LinkedIn</p>
        </NavLink>
        <NavLink className="flex flex-row items-center space-x-2 border-2 border-black rounded-md transition-transform duration-200 mt-5 hover:shadow-myShadow hover:scale-110">
          <img src="/logos/gmail.webp" alt="gmail" className="h-6 rounded-md" />
          <p>Mail</p>
        </NavLink>
      </div>
    </div>
  );
}
