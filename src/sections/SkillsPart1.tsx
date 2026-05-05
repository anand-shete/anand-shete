import { shadcn, fastify, mongoose, react_router } from "@/assets/index";

const SkillsPart1 = () => {
  const languages = [
    { icon: "cpp", tooltip: "C++" },
    { icon: "python", tooltip: "Python" },
    { icon: "ts", tooltip: "Typescript" },
    { icon: "bash", tooltip: "Bash" },
  ];
  const frontendIcons = [
    { icon: "html", tooltip: "HTML5" },
    { icon: "tailwind", tooltip: "Tailwind CSS" },
    { icon: "js", tooltip: "JavaScript" },
    { icon: "react", tooltip: "React" },
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

  return (
    <div className="[&_img]:mx-1 [&_img]:h-16 [&_img]:transition [&_img]:hover:scale-120 [&_span]:absolute [&_span]:bottom-full [&_span]:left-1/2 [&_span]:mb-2 [&_span]:-translate-x-1/2 [&_span]:transform [&_span]:rounded [&_span]:bg-slate-800 [&_span]:px-2 [&_span]:py-1 [&_span]:text-xs [&_span]:font-bold [&_span]:text-white [&_span]:opacity-0 [&_span]:transition [&_span]:group-hover:opacity-100 [&>div]:mb-10 [&>div]:flex [&>div]:flex-row [&>div]:items-center [&>div]:space-x-3 [&>h1]:mb-3 [&>h1]:text-2xl [&>h1]:leading-6 [&>h1]:font-semibold">
      <h1>Languages</h1>

      <div>
        {languages.map(({ icon, tooltip }) => (
          <div key={icon} className="group relative">
            <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
            <span>{tooltip}</span>
          </div>
        ))}
      </div>
      {/* Front-End */}
      <h1>Front-End</h1>
      <div>
        {frontendIcons.map(({ icon, tooltip }) => (
          <div key={icon} className="group relative">
            <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
            <span>{tooltip}</span>
          </div>
        ))}
        <div className="group relative">
          <img
            src={react_router}
            alt="react-router_logo"
            className="rounded-2xl border border-slate-400 p-1"
          />
          <span>React Router</span>
        </div>
        <div className="group relative">
          <img
            src={shadcn}
            alt="shadcn_logo"
            className="mx-1 max-h-16 max-w-16 rounded-xl transition hover:scale-110"
          />
          <span>ShadCN</span>
        </div>
      </div>
      {/* Back-End */}
      <h1>Back-End</h1>
      <div>
        {backendIcons.map(({ icon, tooltip }) => (
          <div key={icon} className="group relative">
            <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
            <span>{tooltip}</span>
          </div>
        ))}
        <div className="group relative">
          <img
            src={fastify}
            alt="fastify_logo"
            className="mx-1 h-16 rounded-xl bg-black p-1 transition hover:scale-120"
          />
          <span>Fastify</span>
        </div>
      </div>
      {/* DataBases */}
      <h1>Database</h1>
      <div>
        {dbIcons.map(({ icon, tooltip }) => (
          <div key={icon} className="group relative">
            <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
            <span>{tooltip}</span>
          </div>
        ))}
        <div className="group relative">
          <img src={mongoose} alt="mongoose" className="rounded-2xl border border-slate-400" />
          <span>{"Mongoose"}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsPart1;
