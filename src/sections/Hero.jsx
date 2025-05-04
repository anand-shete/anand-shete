import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div className="max-w-screen -z-1 relative flex min-h-[70vh] flex-col items-center justify-center bg-[url(/bg.svg)] bg-cover text-white">
      <div className="-z-2 absolute left-0 top-0 h-[70vh] w-full bg-black/50"></div>
      <div className="">
        <motion.h1
          className="mb-10 text-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {"I'm a Full Stack Developer.".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <p className="max-w-2xl text-lg text-white md:text-center">
          Passionate MERN Stack Developer, Experienced in backend optimization,
          real-time WebSockets, and integrating AI into modern applications.
        </p>
      </div>
    </div>
  );
}
