import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div className="min-h-6/10 max-w-screen pl-4 bg-gray-300 flex flex-col justify-center items-center">
      <motion.h1
        className="text-5xl mb-10"
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
      <p className="text-lg text-black text-center max-w-2xl">
        Passionate MERN Stack Developer, Experienced in backend optimization,
        real-time WebSockets, and integrating AI into modern applications.
      </p>
    </div>
  );
}
