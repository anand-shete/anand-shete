import { motion, useTransform } from "motion/react";

export default function EducationSection({ scrollYProgress }) {
  const sectionScroll = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const sboaBoxOpacity = useTransform(sectionScroll, [0.1, 0.2], [0, 1]);
  const xaviersBoxOpacity = useTransform(sectionScroll, [0.4, 0.5], [0, 1]);
  const siesBoxOpacity = useTransform(sectionScroll, [0.7, 0.75], [0, 1]);

  return (
    <div className="">
      <h1 className="m-auto mt-10 w-fit text-center text-5xl">Education</h1>
      <div className="max-w-screen relative mt-20 flex min-h-[100vh] flex-col items-center space-y-20">
        <motion.div
          className="absolute -top-10 left-1/2 h-[700px] w-2 origin-top transform overflow-auto bg-slate-800 shadow-2xl sm:h-[750px] md:h-[800px] lg:h-[750px] xl:h-[700px]"
          initial={{ scaleY: 0 }}
          style={{ scaleY: sectionScroll }}
        />
        <motion.div
          className="sm:mr-90 md:mr-120 xl:mr-220 lg:mr-170 shadow-custom ml-2 mr-60 flex flex-col items-center rounded-md text-center sm:px-10 sm:py-5 lg:flex-row lg:space-x-5"
          initial={{ opacity: 0 }}
          style={{ opacity: sboaBoxOpacity }}
        >
          <motion.img
            src="/logos/school.png"
            alt="school_logo"
            className="h-20"
          />
          <motion.p className="">
            <span className="hidden md:inline">SBOA Public School, Nerul </span>
            <br /> SSC: <span className="font-bold">83.80%</span>
          </motion.p>
        </motion.div>
        <motion.div
          className="ml-68 sm:ml-90 md:ml-120 xl:ml-220 lg:ml-170 shadow-custom mr-5 flex flex-col items-center rounded-md text-center sm:px-10 sm:py-5 lg:flex-row lg:space-x-5"
          initial={{ opacity: 0 }}
          style={{ opacity: xaviersBoxOpacity }}
        >
          <motion.img
            src="/logos/college.webp"
            alt="college_logo"
            className="h-20"
          />
          <motion.p>
            <span className="hidden md:inline">
              St. Xavier's Juinor College
            </span>
            <br /> HSC: <span className="font-bold">81.00%</span> <br />
            <span className="hidden md:inline">
              JEE Mains: <b>88.14%ile</b>
            </span>
          </motion.p>
        </motion.div>
        <motion.div
          className="sm:mr-100 md:mr-120 xl:mr-220 lg:mr-170 shadow-custom ml-5 mr-60 flex flex-col items-center rounded-md text-center sm:px-10 sm:py-5 lg:flex-row"
          initial={{ opacity: 0 }}
          style={{ opacity: siesBoxOpacity }}
        >
          <motion.img
            src="/logos/sies_gst.png"
            alt="sies_gst_logo"
            className="h-20"
          />
          <motion.p>
            <span className="hidden md:inline">
              SIES Graduate School of Technology
            </span>
            <br /> <b> Mumbai University </b>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
