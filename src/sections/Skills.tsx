import { Wrench } from "lucide-react";
import { SkillsPart1, SkillsPart2 } from ".";

export default function SkillsSection() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center overflow-hidden py-20">
      <div className="mb-10 flex items-center justify-center space-x-2 text-slate-800">
        <Wrench />
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Skills and Stack</h1>
      </div>

      <div className="mx-10 flex flex-col justify-center md:flex-row md:space-x-30">
        <SkillsPart1 />
        <SkillsPart2 />
      </div>
    </div>
  );
}
