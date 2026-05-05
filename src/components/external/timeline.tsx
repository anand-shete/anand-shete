import { History } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  name: string;
  link: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white md:px-10 dark:bg-neutral-950" ref={containerRef}>
      <div className="px-4 pt-20 md:px-8 lg:px-10">
        <div className="flex items-center justify-center space-x-2 text-center text-2xl font-bold text-slate-800 sm:text-3xl md:text-4xl">
          <History size={30} />
          <span>Experience</span>
        </div>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-10">
            <div className="sticky top-40 z-10 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <div className="hidden font-semibold md:block md:pl-20">
                <h3 className="text-2xl md:text-3xl">{item.name}</h3>
                <h3 className="text-lg text-slate-500 md:text-xl">{item.title}</h3>
              </div>
            </div>

            <div className="relative w-full pr-4 pl-20 md:pl-4 [&_ul]:text-base [&_ul]:leading-7">
              {/* Mobile */}
              <h3 className="block text-left text-xl font-semibold text-slate-500 md:mb-4 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] absolute top-0 left-8 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-99% md:left-8 dark:via-neutral-700"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-linear-to-t from-purple-500 from-0% via-blue-500 via-10% to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
