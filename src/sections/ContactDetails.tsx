import { Github } from "lucide-react";
import { gmail, linkedin } from "@/assets/index";

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anand-shete/",
    username: "linkedin.com/in/anand-shete",
    icon: linkedin,
    alt: "LinkedIn",
    description: "Professional updates and experience",
  },
  {
    label: "E-mail",
    href: "mailto:anandshete1234@gmail.com",
    username: "anandshete1234@gmail.com",
    icon: gmail,
    alt: "Gmail",
    description: "Quick messages and opportunities",
  },
  {
    label: "GitHub",
    href: "https://github.com/anand-shete",
    username: "anand-shete",
    icon: null,
    alt: "GitHub",
    description: "Code, projects, and open-source work",
  },
];

const ContactDetails = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 md:px-10">
      <div className="mb-10 flex items-center gap-3 text-slate-800">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Connect via</h1>
      </div>

      <div className="grid w-full gap-5 md:grid-cols-3">
        {contacts.map(contact => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            referrerPolicy={contact.href.startsWith("mailto:") ? undefined : "no-referrer"}
            className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {contact.icon ? (
                  <img src={contact.icon} alt={contact.alt} className="h-11 w-11 rounded-xl" />
                ) : (
                  <div className="flex h-11 w-16 items-center justify-center rounded-xl bg-black text-white">
                    <Github className="" size={26} />
                  </div>
                )}
                <div>
                  <p className="text-lg font-semibold text-slate-900">{contact.label}</p>
                  <p className="text-sm text-slate-500">{contact.description}</p>
                </div>
              </div>
              <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 transition-colors group-hover:border-slate-900 group-hover:text-slate-900 hover:bg-emerald-300">
                Open
              </span>
            </div>

            <p className="mt-auto text-sm font-medium text-slate-700 underline-offset-4 group-hover:underline">
              {contact.username}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactDetails;
