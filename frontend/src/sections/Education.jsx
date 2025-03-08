import { motion, useTransform } from "motion/react";

export default function EducationSection({ scrollYProgress }) {
  const sectionScroll = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
  const sboaBoxOpacity = useTransform(sectionScroll, [0.1, 0.2], [0, 1]);
  const xaviersBoxOpacity = useTransform(sectionScroll, [0.4, 0.5], [0, 1]);
  const siesBoxOpacity = useTransform(sectionScroll, [0.7, 0.8], [0, 1]);

  return (
    <>
      <h1 className="w-fit m-auto text-center text-5xl mt-10">Education</h1>
      <div className="max-w-screen min-h-[100vh] flex flex-col items-center space-y-20 mt-20 relative">
        <motion.div
          className="w-2 h-[730px] sm:h-[850px] lg:h-[700px] xl:h-[800px] bg-gray-800 shadow-2xl absolute left-1/2 -top-10 transform origin-top overflow-auto"
          initial={{ scaleY: 0 }}
          style={{ scaleY: sectionScroll }}
        />
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:space-x-5 text-center mr-60 ml-2 sm:mr-90 md:mr-120 xl:mr-220 lg:mr-170 sm:px-10 sm:py-5 shadow-myShadow rounded-md"
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
          className="flex flex-col lg:flex-row items-center lg:space-x-5 text-center ml-70 mr-5 sm:ml-90 md:ml-120 xl:ml-220 lg:ml-170 sm:px-10 sm:py-5 shadow-myShadow rounded-md"
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
          className="flex flex-col lg:flex-row items-center text-center mr-60 ml-5 sm:mr-100 md:mr-120 xl:mr-220 lg:mr-170 sm:px-10 sm:py-5 shadow-myShadow rounded-md"
          initial={{ opacity: 0 }}
          style={{ opacity: siesBoxOpacity }}
        >
          <motion.img
            src="/logos/sies_gst.png"
            alt="sies_gst_logo"
            className="h-20 "
          />
          <motion.p>
            <span className="hidden md:inline">
              SIES Graduate School of Technology
            </span>
            <br /> <b> Mumbai University </b>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
