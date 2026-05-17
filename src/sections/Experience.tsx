import { Timeline } from "@/components/external/timeline";
import { change_networks, spinx } from "@/assets";
import { Link } from "react-router";
import { ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  const data = [
    {
      title: "Dec 2024 - May 2025",
      name: "Change Networks",
      link: "https://www.change-networks.com",
      content: (
        <div className="grid gap-4">
          <h1 className="text-xl tracking-tight md:text-2xl">Backend Engineer</h1>
          <ul className="list-disc">
            <li>
              Built a production ready <b>Email Matrix system</b> which captures email and other
              metadata from a file and stores it to a database.
            </li>
            <li>
              Accomplished a 3x increase in throughput during peak loads by implementing a
              high-performance, queue-based bulk email pipeline using <b>RabbitMQ</b> , which led to
              the efficient management of high-traffic spikes without any performance lag.
            </li>
            <li>
              Achieved 99% processing reliability for <b>over 100,000 campaign emails</b> by
              implementing an optimized file ingestion system using @fastify/multipart, which led to
              a dependable and scalable bulk operations system that users can trust.
            </li>
          </ul>
          <img
            src={change_networks}
            alt="change networks offer letter"
            className="mx-auto mb-10 w-3/4 rounded-lg object-cover shadow-2xl"
          />
        </div>
      ),
    },
    {
      title: "May 2025 - July 2025",
      name: "Sixnine Galaxies Ltd.",
      link: "https://www.linkedin.com/company/spinxclub/",
      content: (
        <div className="mb-10">
          <h1 className="text-xl tracking-tight md:text-2xl">
            Backend Developer
            <span className="text-base tracking-normal text-slate-800"> (Confidential)</span>
          </h1>
          <ul className="list-disc pt-4">
            <li>
              Built a high-concurrency, real-time <b>gaming platform</b> focused on financial
              integrity and low-latency performance.
            </li>
            <li>
              Accomplished 99.9% system uptime for high-stakes gameplay by implementing MongoDB
              <b> ACID transactions</b>, which led to flawless data integrity for over 1,000 daily
              financial and gaming operations.
            </li>
            <li>
              Observed <b>50% reduction</b> in query latency during peak traffic periods by
              implementing Redis caching, which led to instantaneous data retrieval for player
              profiles and game states.
            </li>
            <li>
              Implemented seamless real-time player updates for VIP levels and rewards by
              implementing a <b>RabbitMQ message broker</b>, which led to an automated, asynchronous
              notification system that never missed a beat.
            </li>
            <li>
              Achieved a 30% boost in user engagement by implementing periodic, live activity feeds
              via <b>Server-Sent Events (SSE)</b>, which led to a highly interactive and transparent
              environment for active players.
            </li>
            <li>
              Ensured high data integrity and security for gameplay transactions by implementing
              Decimal.js for high-precision financial calculations, and{" "}
              <b>IP-based session tracking</b>, which led to <b>100% mathematical accuracy</b> in{" "}
              <b>payout system</b> and a more secure, personalized user experience.
            </li>
          </ul>
          <img
            src={spinx}
            alt="spinx club offer letter"
            className="mx-auto mt-4 mb-10 w-3/4 rounded-lg object-cover shadow-2xl"
          />
        </div>
      ),
    },
    {
      title: "July 2025 - Present",
      name: "Freelance Developer",
      link: "https://www.vikasindustrialhub.com",
      content: (
        <div>
          <Link
            to="https://vikasindustrialhub.com"
            target="_blank"
            rel="noopener"
            referrerPolicy="no-referrer"
            className="mb-4 flex hover:underline"
          >
            <h1 className="inline text-xl font-semibold md:text-2xl">Vikas Industrial Hub</h1>
            <ExternalLink className="mt-1 ml-2" size={18} />
          </Link>
          <ul className="list-disc">
            <li>
              Achieved a 100% production-ready launch within 2 months by implementing a streamlined
              React and Tailwind CSS architecture deployed on Vercel, which led to a significant
              increase in digital visibility for the client’s industrial portfolio.
            </li>
            <li>
              Accomplished high client satisfaction and alignment by conducting weekly stakeholder
              syncs to translate business requirements into technical features, which led to a
              <b> seamless feedback loop</b> and a project that perfectly matched the client's brand
              vision.
            </li>
            <li>
              Implemented a zero-overhead lead generation system using
              <b> Formspree integration </b>
              for secure inquiry handling, which led to 100% form reliability and streamlined
              communication between potential customers and the business.
            </li>
            <li>
              Accomplished a professional, high-performance user experience by implementing
              mobile-first <b>responsive design</b> and optimized asset loading, which led to faster
              page load times and a consistent brand presence across all device types.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
