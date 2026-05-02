import { FlipWords } from "@/components/external/flip-words";

export default function HeroSection() {
  const words = ["Backend Engineer.", "Full Stack Developer.", "Gen AI Engineer."];

  return (
    <div className="relative -z-1 flex min-h-[70vh] max-w-screen flex-col items-center justify-center border-b-2 border-slate-700 bg-[url(/src/assets/hero/bg.svg)] bg-cover text-white shadow-xl shadow-slate-400">
      <div className="absolute top-0 left-0 -z-2 h-[70vh] w-full bg-black/50"></div>
      <h1 className="text-left text-4xl font-bold md:text-5xl">Anand Shete</h1>
      <div className="mt-4 mb-8 text-center text-2xl md:text-3xl">
        I'm a
        <FlipWords words={words} duration={3000} className="text-white" /> <br />
      </div>
      <p className="max-w-2xl text-center text-sm text-white md:text-lg">
        Backend Developer specializing in scalable systems, distributed architecture, and
        high-performance APIs.
      </p>
    </div>
  );
}
