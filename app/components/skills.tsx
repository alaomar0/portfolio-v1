import { useEffect, useState } from "react";
import { Link } from "react-router";
import htmlLogo from "~/assets/images/skills/html-logo.webp";
import supabaseLogo from "~/assets/images/skills/supabase-logo.png";
import tsLogo from "~/assets/images/skills/ts-logo.png";
import motionLogo from "~/assets/images/skills/motion-logo.png";
import nextjsLogo from "~/assets/images/skills/nextjs-logo.png";
import prismaLogo from "~/assets/images/skills/prisma-logo.png";
import cssLogo from "~/assets/images/skills/css-logo.png";
import figmaLogo from "~/assets/images/skills/figma-logo.png";
import reactLogo from "~/assets/images/skills/react-logo.png";
import dockerLogo from "~/assets/images/skills/docker-logo.png";
import jsLogo from "~/assets/images/skills/js-logo.png";
import postgresqlLogo from "~/assets/images/skills/postgesql-logo.png";
import tailwindcssLogo from "~/assets/images/skills/tailwindcss-logo.png";
import shadcnLightLogo from "~/assets/images/skills/shadcn/light.webp";
import shadcnDarkLogo from "~/assets/images/skills/shadcn/dark.webp";
import reactrouterLightLogo from "~/assets/images/skills/reactrouter/light.png";
import reactrouterDarkLogo from "~/assets/images/skills/reactrouter/dark.png";
import firebaseLogo from "~/assets/images/skills/firebase-logo.png";
import zustandLogo from "~/assets/images/skills/zustand-logo.svg";
import viteLogo from "~/assets/images/skills/vite-logo.png";
import { cn } from "~/lib/utils";
import { easeOut, motion } from "motion/react";

type Skill = {
  name: string;
  imgSrc: { dark?: string; light: string };
  link: string;
};

const SKILLS: Skill[] = [
  {
    name: "Supabase",
    imgSrc: { light: supabaseLogo },
    link: "https://supabase.com/",
  },
  {
    name: "HTML",
    imgSrc: { light: htmlLogo },
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "Typescript",
    imgSrc: { light: tsLogo },
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "motion",
    imgSrc: { light: motionLogo },
    link: "https://motion.dev/",
  },
  {
    name: "NextJS",
    imgSrc: { light: nextjsLogo },
    link: "https://nextjs.org/",
  },
  {
    name: "Prisma",
    imgSrc: { light: prismaLogo },
    link: "https://www.prisma.io/",
  },
  {
    name: "CSS",
    imgSrc: { light: cssLogo },
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Figma",
    imgSrc: { light: figmaLogo },
    link: "https://www.figma.com/",
  },
  { name: "ReactJS", imgSrc: { light: reactLogo }, link: "https://react.dev/" },
  {
    name: "Docker",
    imgSrc: { light: dockerLogo },
    link: "https://www.docker.com/",
  },
  {
    name: "Javascript",
    imgSrc: { light: jsLogo },
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Postgresql",
    imgSrc: { light: postgresqlLogo },
    link: "https://www.postgresql.org/",
  },

  {
    name: "TailwindCSS",
    imgSrc: { light: tailwindcssLogo },
    link: "https://tailwindcss.com/",
  },
  {
    name: "Shadcn",
    imgSrc: { light: shadcnLightLogo, dark: shadcnDarkLogo },
    link: "https://ui.shadcn.com/",
  },
  {
    name: "ReactRouter",
    imgSrc: { light: reactrouterLightLogo, dark: reactrouterDarkLogo },
    link: "https://reactrouter.com/",
  },
  {
    name: "Firebase",
    imgSrc: { light: firebaseLogo },
    link: "https://firebase.google.com/",
  },
  {
    name: "Zustand",
    imgSrc: { light: zustandLogo },
    link: "https://zustand-demo.pmnd.rs/",
  },
  {
    name: "Vite",
    imgSrc: { light: viteLogo },
    link: "https://vite.dev/",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="cont-padding py-10">
      <h1 className="section-header cont-max-width mb-8">Skills</h1>

      <SkillsList />
    </section>
  );
}

function SkillsList() {
  const [skillsPerRow, setSkillsPerRow] = useState<3 | 4 | 5>(3);
  const [skillRows, setSkillRows] = useState<Skill[][]>([]);

  //update skillsPerRow
  useEffect(() => {
    function updateCount() {
      const width = window.innerWidth;
      if (width >= 1024) setSkillsPerRow(5);
      else if (width >= 550) setSkillsPerRow(4);
      else setSkillsPerRow(3);
    }
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  //update skill rows
  useEffect(() => {
    let newSkillRows: Skill[][] = [];
    let start = 0;
    for (let i = 0; i < Math.ceil(SKILLS.length / skillsPerRow); i++) {
      newSkillRows.push(SKILLS.slice(start, start + skillsPerRow));
      start += skillsPerRow;
    }
    setSkillRows(newSkillRows);
  }, [skillsPerRow]);

  return (
    // Container (List of Rows)
    <div className="cont-max-width flex flex-col gap-6 overflow-hidden py-1">
      {skillRows.map((row, i) => (
        // Row
        // margin =  min(28px, (100vw - total-children-width - padding) / (number-of-children - 1));[min(1.75rem,(100vw-2rem-18rem)/2)]
        <motion.div
          transition={{
            delay: i * 0.1,
            duration: 3,
            ease: easeOut,
          }}
          key={i}
          className="relative flex w-fit even:flex-row-reverse even:self-end odd:[&>*:not(:last-child)]:mr-[min(1.75rem,(100vw-2rem-18rem)/2)] even:[&>*:not(:last-child)]:ml-[min(1.75rem,(100vw-2rem-18rem)/2)]"
          initial={{ translateX: i % 2 === 0 ? "-50%" : "50%" }}
          whileInView={{ translateX: 0 }}
          viewport={{ once: true }}
        >
          {row.map(({ name, imgSrc, link }, j) => {
            // Skill
            return (
              <Link to={link} key={name} className="skill-card">
                <img
                  src={imgSrc.light}
                  alt={name}
                  className={cn(
                    "size-15 object-contain",
                    imgSrc.dark && "dark:hidden",
                  )}
                />
                {imgSrc.dark && (
                  <img
                    src={imgSrc.dark}
                    alt={name}
                    className="hidden size-15 object-contain dark:block"
                  />
                )}
                <p>{name}</p>
              </Link>
            );
          })}
          {Array.from({ length: skillsPerRow }).map((_, i) => (
            <BlankSkill key={i} />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

function BlankSkill() {
  return (
    <div className="skill-card relative -z-10 border-none bg-gray-100 blur-xs dark:bg-gray-950">
      <div className="size-15 rounded-full bg-gray-200 dark:bg-gray-900"></div>
      <div className="h-2 w-3/5 rounded-xl bg-gray-200 dark:bg-gray-900"></div>
    </div>
  );
}
