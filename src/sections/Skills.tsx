import { motion } from "motion/react";
import { shadcn, fastify, zod, motionLogo, react_router, terminal, mongoose } from "@/assets/index";
import DecryptedText from "@/components/external/DecryptedText";

export default function SkillsSection() {
  const languages = [
    { icon: "cpp", tooltip: "C++" },
    { icon: "python", tooltip: "Python" },
    { icon: "js", tooltip: "JavaScript" },
    { icon: "bash", tooltip: "Bash" },
  ];
  const frontendIcons = [
    { icon: "html", tooltip: "HTML5" },
    { icon: "tailwind", tooltip: "Tailwind CSS" },
    { icon: "js", tooltip: "JavaScript" },
    { icon: "react", tooltip: "React" },
    { icon: "redux", tooltip: "Redux" },
  ];
  const backendIcons = [
    { icon: "nodejs", tooltip: "Node.js" },
    { icon: "express", tooltip: "Express.js" },
    { icon: "fastapi", tooltip: "FastAPI" },
  ];
  const dbIcons = [
    { icon: "mongodb", tooltip: "MongoDB" },
    { icon: "postgres", tooltip: "PostgreSQL" },
    { icon: "mysql", tooltip: "MySQL" },
    { icon: "prisma", tooltip: "Prisma" },
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
    { icon: "gcp", tooltip: "Google Cloud" },
    { icon: "vercel", tooltip: "Vercel" },
    { icon: "nginx", tooltip: "Nginx" },
  ];
  const osTools = [
    { icon: "linux", tooltip: "Linux" },
    { icon: "ubuntu", tooltip: "Ubuntu" },
    { icon: "vim", tooltip: "Vim" },
  ];

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center overflow-hidden py-20">
      <div className="mb-10 text-center text-3xl font-bold md:text-4xl">
        <DecryptedText
          text="Skills"
          speed={80}
          revealDirection="start"
          animateOn="inViewHover"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
      </div>
      {/* Languages */}
      <h1 className="mb-3 text-3xl leading-8">Languages</h1>
      <motion.div className="mb-10 flex flex-row items-center justify-center space-x-3">
        {languages.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="group relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="mx-1 h-16 transition hover:scale-120"
            />
            <motion.span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
              {tooltip}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
      {/* Front-End */}
      <h1 className="mb-3 text-3xl leading-8">Front-End</h1>
      <div className="mb-10 flex flex-row items-center justify-center space-x-3">
        {frontendIcons.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="group relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="mx-1 h-16 transition hover:scale-120"
            />
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
              {tooltip}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="group relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={shadcn}
            alt="shadcn_logo"
            className="mx-1 max-h-16 rounded-xl transition hover:scale-110"
          />
          <span className="absolute bottom-[106%] left-1/2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
            ShadCN
          </span>
        </motion.div>
      </div>
      {/* Back-End */}
      <h1 className="mb-3 text-3xl">Back-End</h1>
      <div className="mb-10 flex flex-row items-center justify-center space-x-3">
        {backendIcons.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="group relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="mx-1 h-16 transition hover:scale-120"
            />
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
              {tooltip}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="group relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img src={fastify} alt="fastify_logo" className="mx-1 h-16 transition hover:scale-120" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
            Fastify
          </span>
        </motion.div>
        <motion.div
          className="group relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img src={zod} alt="zod_logo" className="mx-1 h-16 transition hover:scale-120" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
            Zod
          </span>
        </motion.div>
      </div>
      {/* DataBases */}
      <h1 className="mb-3 text-3xl">Database</h1>
      <div className="mb-10 flex flex-row items-center justify-center space-x-3">
        {dbIcons.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="group relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="mx-1 h-16 transition hover:scale-120"
            />
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
              {tooltip}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="group relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img src={mongoose} alt={"mongoose"} className="mx-1 h-16 transition hover:scale-120" />
          <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
            {"Mongoose"}
          </span>
        </motion.div>
      </div>
      {/* Libraries and Tools */}
      <h1 className="mb-3 text-3xl">Tools and Libraries</h1>
      <div className="mb-10 flex flex-row items-center justify-center space-x-3">
        {tools.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="group relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="mx-1 h-16 transition hover:scale-120"
            />
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
              {tooltip}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="group relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={motionLogo}
            alt="motion_logo"
            className="mx-1 max-h-16 rounded-full transition hover:scale-110"
          />
          <span className="absolute bottom-[107%] left-1/2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
            Motion
          </span>
        </motion.div>
        <motion.div
          className="group relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={react_router}
            alt="react-router_logo"
            className="mx-1 max-h-16 rounded-xl border-2 border-black transition hover:scale-110"
          />
          <span className="absolute bottom-[110%] left-1/2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
            React Router
          </span>
        </motion.div>
      </div>
      {/* Deployment */}
      <h1 className="mb-3 text-3xl">Deployment</h1>
      <div className="mb-10 flex flex-row items-center justify-center space-x-3">
        {deployment.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="group relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="mx-1 h-16 transition hover:scale-120"
            />
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
              {tooltip}
            </span>
          </motion.div>
        ))}
      </div>
      {/* Operating System Tools */}
      <h1 className="mb-3 text-3xl">Operating System Tools</h1>
      <div className="mb-10 flex flex-row items-center justify-center space-x-3">
        {osTools.map(({ icon, tooltip }) => (
          <motion.div
            key={icon}
            className="group relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
              className="mx-1 h-16 transition hover:scale-120"
            />
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
              {tooltip}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="group relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={terminal}
            alt="render_logo"
            className="mx-1 max-h-16 rounded-xl border-2 border-black transition hover:scale-110"
          />
          <span className="absolute bottom-[110%] left-1/2 -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
            Shell Scripts
          </span>
        </motion.div>
      </div>
    </div>
  );
}
