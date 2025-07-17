import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import greenhaven from "~/assets/images/projects/greenhaven.png";
import spacetourism from "~/assets/images/projects/space-trouism.png";
import riderschoice from "~/assets/images/projects/riders-choice.png";

type ProjectCard = {
  name: string;
  description: string;
  repoLink: string | string[];
  img: string;
  techStack: string[];
};

const PROJECTSLIST: ProjectCard[] = [
  {
    name: "Greenhaven Market",
    description:
      "Greenhaven Market is a modern e-commerce web application selling sustainable products. Built with a full developer-centric stack designed for performance, maintainability, and rapid iteration.",
    repoLink: [
      "https://github.com/alaomar0/greenhaven-reactrouter",
      "https://github.com/alaomar0/greenhaven-nextjs",
    ],
    img: greenhaven,
    techStack: [
      "NextJS/ReactRouter",
      "TailwindCSS",
      "Supabase",
      "Postgresql",
      "motion",
    ],
  },
  {
    name: "Space Tourism",
    description:
      "A fully static, responsive, multi-page space tourism website. Every page is prerendered for fast loading, with animated image transitions, a loading indicator, and a modern, accessible UI designed for an immersive user experience",
    repoLink: "https://github.com/alaomar0/space-tourism-react",
    img: spacetourism,
    techStack: ["ReactRouter", "TailwindCSS", "motion", "Shadcn"],
  },
  {
    name: "Riders Choice",
    description:
      "Riders Choice is a modern and visually appealing landing page,  focused purely on design, responsivness and layout",
    repoLink: "https://github.com/alaomar0/riders-choice-ui",
    img: riderschoice,
    techStack: ["ReactJS", "Vite", "TailwindCSS"],
  },
];

export default function Projects() {
  return (
    <section className="cont-padding py-10" id="projects">
      <div className="cont-max-width">
        <h1 className="section-header mb-8">Projects</h1>
        <div className="flex flex-col gap-20">
          {PROJECTSLIST.map((project, i) => (
            <Project project={project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Project({
  project: { name, description, techStack, repoLink, img },
}: {
  project: ProjectCard;
}) {
  return (
    <motion.div
      className="w-[calc(100%-20px)] max-w-250 ring-1 ring-black dark:ring-white"
      initial={{ opacity: 0.1, translateX: 0 }}
      whileInView={{ opacity: 1, translateX: 10 }}
      viewport={{ amount: 0.6 }}
    >
      {/* Image */}
      <div className="">
        <img
          src={img}
          alt={`${name} project image`}
          className="aspect-[2] w-full"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-6 p-4">
        <div className="flex gap-4">
          {typeof repoLink === "string" ? (
            <a
              aria-label="Github repository"
              href={repoLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={25} />
            </a>
          ) : (
            repoLink.map((link, i) => (
              <a
                aria-label="Github repository"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                key={i}
              >
                <FaGithub size={25} />
              </a>
            ))
          )}
        </div>
        <p className="md:text-xl lg:text-2xl">{description}</p>
        <hr />
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="rounded-full border-2 border-black px-2 py-0.5 text-sm dark:border-white"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
