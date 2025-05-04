import { motion } from "motion/react";
import { Navbar, Footer } from "@/components/common";

export default function Games() {
  return (
    <>
      <Navbar />
      <div className="h-screen max-w-screen flex flex-row justify-center items-center">
        <motion.h1
          className="text-6xl text-center"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 1 },
            show: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          Coming Soon
          {"...".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    repeat: Infinity,
                    duration: 0.5,
                    repeatType: "mirror",
                  },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <Footer />
    </>
  );
}
