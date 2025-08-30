import { motion } from "motion/react";
import { FlipWords } from "@/components/ui/flip-words";

export default function HeroSection() {
  const words = ["Full Stack Developer.", "Backend Engineer.", "Problem Solver."];

  return (
    <div className="relative -z-1 flex min-h-[70vh] max-w-screen flex-col items-center justify-center bg-[url(/src/assets/bg.svg)] bg-cover text-white">
      <div className="absolute top-0 left-0 -z-2 h-[70vh] w-full bg-black/50"></div>
      <h1 className="text-left text-3xl font-bold md:text-5xl">Anand Shete.</h1>
      <div className="mt-4 mb-8 text-center text-xl md:text-3xl">
        I'm a
        <FlipWords words={words} className="text-white" /> <br />
      </div>
      <p className="max-w-2xl text-center text-sm text-white md:text-lg">
        Backend Developer specializing in scalable systems, distributed architecture, and
        high-performance APIs.
      </p>
    </div>
  );
}
