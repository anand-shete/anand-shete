import { Link } from "react-router";
import TiltedCard from "@/components/external/TiltedCard";
import blogify from "@/assets/projects/blogify.png";
import metaverse from "@/assets/projects/metaverse.png";
import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import TextType from "@/components/external/TextType";

interface Props {
  width: number;
}

export default function ProjectsSection({ width }: Props) {
  return (
    <div
      className="mt-20 flex flex-col items-center justify-center overflow-hidden border-t-2 border-b-2 border-slate-400 bg-slate-100 pb-20 [&_b]:font-semibold [&_li]:text-justify [&_li]:text-sm [&_li]:leading-7 [&_ul]:max-w-xl [&>li]:my-2 [&>li]:text-neutral-800"
      id="projects"
    >
      <div className="mt-20 mb-10 flex flex-row items-center space-x-3 text-slate-800">
        <BriefcaseBusiness />
        <TextType
          text={["Projects", "Engineering Work", "Systems Built"]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
          className="text-center text-2xl font-bold sm:text-3xl md:text-4xl"
        />
      </div>

      {/* Blogify */}
      <div className="grid gap-y-30">
        <div className="mx-8 grid grid-cols-1 gap-x-40 md:grid-cols-2">
          <TiltedCard
            imageSrc={blogify}
            altText="Blogify"
            captionText="Blogify"
            containerHeight={width >= 768 ? "60vh" : "60vh"}
            containerWidth={width >= 768 ? "50vw" : "80vw"}
            imageHeight={width >= 768 ? "60vh" : "60vh"}
            imageWidth={width >= 768 ? "50vw" : "80vw"}
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            link="https://blogify.anandshete.dev"
          />
          <div className="mt-6 md:mt-0">
            <Link
              to="https://blogify.anandshete.dev"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex hover:underline"
            >
              <h1 className="mb-4 text-xl font-semibold">Blogify </h1>
              <ExternalLink className="mt-1 ml-2" size={18} />
            </Link>
            <p className="text-md mb-4">A blogging platform for creating and publishing content</p>
            <ul className="mx-8 list-disc">
              <li>
                Accomplished 99% uptime and optimized global delivery by implementing a multi-region
                AWS architecture featuring <b className="font-semibold">CloudFront </b>, <b> S3</b>{" "}
                with pre-signed URLs, and
                <b> Nginx reverse proxy</b> on EC2, which led to significantly reduced latency.
              </li>
              <li>
                Increased 40% improvement in content drafting efficiency by implementing an
                AI-powered suggestion engine using the <b>Gemini API</b> integrated with a
                <b> TinyMCE editor</b>, which led to a more intuitive and streamlined blogging
                experience that assists users in generating creative content faster.
              </li>
              <li>
                Achieved 70% faster deployment cycles and improved application responsiveness by
                implementing <b>Continuous Deployment using GitHub Actions</b> and{" "}
                <b>Redis caching</b> on an EC2 instance to reduce heavy MongoDB Atlas queries,
                resulting in a scalable infrastructure and automated deployment pipeline.
              </li>
            </ul>
          </div>
        </div>

        {/* Metaverse */}
        <div className="mx-8 grid grid-cols-1 gap-x-10 md:grid-cols-2">
          <div className="mb-10 md:mb-0">
            <Link
              to="https://metaverse.anandshete.dev"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex hover:underline"
            >
              <h1 className="mb-4 text-xl font-semibold">2D Metaverse </h1>
              <ExternalLink className="mt-1 ml-2" size={18} />
            </Link>
            <p className="text-md mb-4">
              A virtual space for students to connect, interact and study in real time
            </p>
            <ul className="mx-8 list-disc">
              <li>
                Engineered a scalable real-time multiplayer architecture using
                <b> Socket.IO</b>, <b>WebRTC</b>, and <b>PeerJS</b> to handle synchronized player
                movement, room interactions, and live media communication for{" "}
                <b>100+ concurrent users</b>, which led to low-latency and seamless user experiences
                across virtual spaces.
              </li>

              <li>
                Developed <b>Metabot</b>, an AI-powered academic assistant using an{" "}
                <b>Agentic RAG pipeline</b> integrated with the <b>Groq API</b>, enabling contextual
                notes retrieval and intelligent query handling with{" "}
                <b>sub-2 second response times</b>, which led to faster access to study resources
                and improved learning assistance for students.
              </li>

              <li>
                Improved real-time connection stability and reduced ghost peer issues by
                implementing robust socket lifecycle management, automated disconnect cleanup, and
                optimized signaling workflows, which led to a{" "}
                <b>60% reduction in peer disconnection failures</b> and more reliable multiplayer
                sessions with efficient peer-to-peer communication.
              </li>
            </ul>
          </div>
          <TiltedCard
            imageSrc={metaverse}
            altText="metaverse"
            captionText="2D Metaverse"
            containerHeight={width >= 768 ? "60vh" : "40vh"}
            containerWidth={width >= 768 ? "40vw" : "80vw"}
            imageHeight={width >= 768 ? "60vh" : "40vh"}
            imageWidth={width >= 768 ? "50vw" : "80vw"}
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            link="https://metaverse.anandshete.dev"
          />
        </div>

        {/* FIXME add Markwise */}
        {/* <div className="grid grid-cols-1 gap-x-60 md:grid-cols-2">
          <TiltedCard
            imageSrc={blogify}
            altText="Blogify"
            captionText="Blogify"
            containerHeight="60vh"
            containerWidth="60vw"
            imageHeight="60vh"
            imageWidth="50vw"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            link="https://markwise.anandshete.dev"
          />
          <ul className="mx-8 list-disc">
            <Link
              to="https://blogify.anandshete.dev"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex"
            >
              <h1 className="text-xl font-semibold">Blogify </h1>
              <ExternalLink className="mt-1 ml-2" size={18} />
            </Link>
            <p className="text-md mb-4">A blogging platform for creating and publishing content</p>
            <li>
              Accomplished 99% uptime and optimized global delivery by implementing a multi-region
              AWS architecture featuring <b>CloudFront </b>, <b> S3</b> with pre-signed URLs, and
              <b> Nginx reverse proxy</b> on EC2, which led to significantly reduced latency.
            </li>
            <li>
              Increased 40% improvement in content drafting efficiency by implementing an AI-powered
              suggestion engine using the <b>Gemini API</b> integrated with a <b>TinyMCE editor</b>,
              which led to a more intuitive and streamlined blogging experience that assists users
              in generating creative content faster.
            </li>
            <li>
              Achieved 70% faster deployment cycles and enhanced application responsiveness by
              implementing <b>CI/CD via GitHub Actions</b> and <b>Redis caching</b> on an EC2
              instance to offload heavy MongoDB Atlas queries, which led to a highly scalable
              infrastructure and a robust, automated development pipeline.
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
