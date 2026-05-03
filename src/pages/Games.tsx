import { motion } from "motion/react";
import { Navbar, Footer, SmoothScroll } from "@/components/common";

export default function Games() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <div className="flex h-screen max-w-screen flex-row items-center justify-center">
        <motion.h1
          className="text-center text-6xl"
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
