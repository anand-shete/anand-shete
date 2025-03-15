import { motion } from "motion/react";
import { useState } from "react";

export default function SkillsSection() {
  const languages = [
    { icon: "c", tooltip: "C" },
    { icon: "cpp", tooltip: "C++" },
    { icon: "python", tooltip: "Python" },
    { icon: "js", tooltip: "JavaScript" },
  ];
  const frontendIcons = [
    { icon: "html", tooltip: "HTML5" },
    { icon: "tailwind", tooltip: "Tailwind CSS" },
    { icon: "js", tooltip: "JavaScript" },
    { icon: "react", tooltip: "React" },
    { icon: "redux", tooltip: "Redux" },
  ];
  const backendIcons = [
    { icon: "ts", tooltip: "Typescript" },
    { icon: "nodejs", tooltip: "Node.js" },
    { icon: "express", tooltip: "Express.js" },
    { icon: "fastapi", tooltip: "FastAPI" },
  ];
  const dbIcons = [
    { icon: "mongodb", tooltip: "MongoDB" },
    { icon: "mysql", tooltip: "MySQL" },
  ];
  const tools = [
    { icon: "git", tooltip: "Git" },
    { icon: "github", tooltip: "GitHub" },
    { icon: "docker", tooltip: "Docker" },
    { icon: "rabbitmq", tooltip: "Rabbit MQ" },
    { icon: "postman", tooltip: "Postman" },
  ];
  const deployment = [
    { icon: "aws", tooltip: "AWS" },
    { icon: "vercel", tooltip: "Vercel" },
    { icon: "netlify", tooltip: "Netlify" },
    { icon: "nginx", tooltip: "Nginx" },
  ];
  const osTools = [
    { icon: "linux", tooltip: "Linux" },
    { icon: "ubuntu", tooltip: "Ubuntu" },
    { icon: "bash", tooltip: "Bash Shell" },
    { icon: "vim", tooltip: "Vim" },
  ];

  const sectionVariant = {
    hidden: { scale: 0.4, x: -100 },
    show: { scale: 1, x: 0 },
  };
  const childVariant = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1 },
  };

  return (
    <div className="min-h-[50vh] bg-gray-300 flex flex-col justify-center items-center py-20 mt-40 border-t-2 overflow-hidden">
      <motion.h1
        className="text-5xl mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        Skills
      </motion.h1>

      {/* Languages */}
      <motion.h1 className="text-3xl mb-3">Languages</motion.h1>
      <motion.div className="flex flex-row justify-center items-center mb-10 space-x-3">
        {languages.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="h-16 mx-1 hover:scale-120 cursor-pointer transition"
            />
            <motion.span
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                     bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded opacity-0 
                     group-hover:opacity-100 transition"
            >
              {tooltip}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* Front-End */}
      <h1 className="text-3xl mb-3">Front-End</h1>
      <div className="flex flex-row justify-center items-center mb-10 space-x-3">
        {frontendIcons.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="h-16 mx-1 hover:scale-120 cursor-pointer transition"
            />
            <span
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                     bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded opacity-0 
                     group-hover:opacity-100 transition"
            >
              {tooltip}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="relative group"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="/logos/zod.svg"
            alt="zod_logo"
            className="h-16 mx-1 hover:scale-120 cursor-pointer transition"
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-bold rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Zod
          </span>
        </motion.div>
        <motion.div
          className="relative group"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="/logos/shadcn.png"
            alt="shadcn_logo"
            className="max-h-16 mx-1 hover:scale-110 cursor-pointer rounded-xl transition"
          />
          <span className="absolute bottom-[106%] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white font-bold text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            ShadCN
          </span>
        </motion.div>
      </div>

      {/* Back-End */}
      <h1 className="text-3xl mb-3">Back-End</h1>
      <div className="flex flex-row justify-center items-center mb-10 space-x-3">
        {backendIcons.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="h-16 mx-1 hover:scale-120 cursor-pointer transition"
            />
            <span
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                     bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded opacity-0 
                     group-hover:opacity-100 transition"
            >
              {tooltip}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="relative group"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="/logos/fastify.svg"
            alt="fastify_logo"
            className="h-16 mx-1 hover:scale-120 cursor-pointer transition"
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Fastify
          </span>
        </motion.div>
      </div>

      {/* DataBases */}
      <h1 className="text-3xl mb-3">DataBases</h1>
      <div className="flex flex-row justify-center items-center mb-10 space-x-3">
        {dbIcons.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="h-16 mx-1 hover:scale-120 cursor-pointer transition"
            />
            <span
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                   bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded opacity-0 
                   group-hover:opacity-100 transition"
            >
              {tooltip}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Libraries and Tools */}
      <h1 className="text-3xl mb-3">Libraries and Tools</h1>
      <div className="flex flex-row justify-center items-center mb-10 space-x-3">
        <motion.div
          className="relative group"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="/logos/motion.png"
            alt="motion_logo"
            className="max-h-16 mx-1 hover:scale-110 rounded-full cursor-pointer transition"
          />
          <span className="absolute bottom-[107%] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded font-bold px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Motion
          </span>
        </motion.div>
        <motion.div
          className="relative group"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="/logos/react-router.svg"
            alt="react-router_logo"
            className="max-h-16 mx-1 hover:scale-110 cursor-pointer transition border-2 border-black rounded-xl"
          />
          <span className="absolute bottom-[110%] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-bold rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition ">
            React Router
          </span>
        </motion.div>
        {tools.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="h-16 mx-1 hover:scale-120 cursor-pointer transition"
            />
            <span
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                   bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded opacity-0 
                   group-hover:opacity-100 transition"
            >
              {tooltip}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Deployment */}
      <h1 className="text-3xl mb-3">Deployment</h1>
      <div className="flex flex-row justify-center items-center mb-10 space-x-3">
        {deployment.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="h-16 mx-1 hover:scale-120 cursor-pointer transition"
            />
            <span
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                   bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded opacity-0 
                   group-hover:opacity-100 transition"
            >
              {tooltip}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="relative group"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="/logos/render.jpg"
            alt="render_logo"
            className="max-h-16 mx-1 hover:scale-110 cursor-pointer transition border-2 border-black rounded-xl"
          />
          <span className="absolute bottom-[110%] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-bold rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition ">
            Render
          </span>
        </motion.div>
      </div>

      {/* Operating System Tools */}
      <h1 className="text-3xl mb-3">Operating System Tools</h1>
      <div className="flex flex-row justify-center items-center mb-10 space-x-3">
        <motion.div
          className="relative group"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="/logos/terminal.png"
            alt="render_logo"
            className="max-h-16 mx-1 hover:scale-110 cursor-pointer transition border-2 border-black rounded-xl"
          />
          <span className="absolute bottom-[110%] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-bold rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition ">
            Windows CLI
          </span>
        </motion.div>
        {osTools.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="h-16 mx-1 hover:scale-120 cursor-pointer transition"
            />
            <span
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                   bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded opacity-0 
                   group-hover:opacity-100 transition"
            >
              {tooltip}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
