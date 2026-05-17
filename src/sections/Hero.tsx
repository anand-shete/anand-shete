import { FlipWords } from "@/components/external/flip-words";
import TiltedCard from "@/components/external/TiltedCard";
import { profile } from "@/assets";

interface Props {
  width: number;
}

export default function HeroSection({ width }: Props) {
  const words = ["Backend Engineer.", "Full Stack Developer.", "Gen AI Engineer."];

  return (
    <div className="relative z-1 mt-22 flex w-full flex-col items-center justify-center border-b-2 border-slate-700 bg-[url(/src/assets/hero/bg.svg)] bg-cover px-6 shadow-xl shadow-slate-400 md:flex-row md:space-x-30 md:p-12">
      <div className="absolute inset-0 -z-2 w-full bg-black/50"></div>
      <TiltedCard
        imageSrc={profile}
        altText="Anand Shete"
        captionText="Anand Shete"
        containerHeight="60vh"
        containerWidth={width >= 768 ? "20vw" : width >= 640 ? "50vw" : "70vw"}
        imageHeight="50vh"
        imageWidth={width >= 768 ? "20vw" : width >= 640 ? "50vw" : "70vw"}
        rotateAmplitude={15}
        scaleOnHover={1.03}
        showMobileWarning={false}
        showTooltip
        link="https://www.linkedin.com/in/anand-shete/"
      />
      <div>
        <h1 className="text-left text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
          Anand Shete
        </h1>
        <div className="mt-2 mb-4 flex items-center gap-3 text-left md:mt-4 md:mb-6">
          <span className="text-base font-medium text-white sm:text-lg md:text-xl">I'm a</span>
          <div className="text-xl font-semibold tracking-normal sm:text-2xl md:text-3xl overflow-x-auto max-w-sm">
            <FlipWords words={words} duration={3000} />
          </div>
        </div>
        <p className="mb-10 max-w-xl text-left text-sm leading-relaxed text-slate-300 md:mb-0 md:text-base">
          Backend developer focusing on scalable systems, distributed architecture, and
          high-performance APIs.
        </p>
      </div>
    </div>
  );
}
