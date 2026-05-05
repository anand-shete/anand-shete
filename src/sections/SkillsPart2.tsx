const SkillsPart2 = () => {
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
    { icon: "bash", tooltip: "Shell script" },
  ];
  return (
    <div className="[&_img]:mx-1 [&_img]:h-16 [&_img]:transition [&_img]:hover:scale-120 [&_span]:absolute [&_span]:bottom-full [&_span]:left-1/2 [&_span]:mb-2 [&_span]:-translate-x-1/2 [&_span]:transform [&_span]:rounded [&_span]:bg-slate-800 [&_span]:px-2 [&_span]:py-1 [&_span]:text-xs [&_span]:font-bold [&_span]:text-white [&_span]:opacity-0 [&_span]:transition [&_span]:group-hover:opacity-100 [&>div]:mb-10 [&>div]:flex [&>div]:flex-row [&>div]:items-center [&>div]:space-x-3 [&>h1]:mb-3 [&>h1]:text-2xl [&>h1]:leading-6 [&>h1]:font-semibold">
      {/* Tools */}
      <h1>Tools</h1>
      <div>
        {tools.map(({ icon, tooltip }) => (
          <div key={icon} className="group relative">
            <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
            <span>{tooltip}</span>
          </div>
        ))}
      </div>
      {/* Deployment */}
      <h1>Deployment</h1>
      <div>
        {deployment.map(({ icon, tooltip }) => (
          <div key={icon} className="group relative">
            <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
            <span>{tooltip}</span>
          </div>
        ))}
      </div>
      {/* Operating System Tools */}
      <h1>Operating System Tools</h1>
      <div>
        {osTools.map(({ icon, tooltip }) => (
          <div key={icon} className="group relative">
            <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
            <span>{tooltip}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPart2;
