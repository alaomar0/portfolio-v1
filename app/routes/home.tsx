import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Omar Alamin | Web Developer Portfolio" },
    {
      name: "description",
      content:
        "Website Developer Omar Alamin's personal portfolio, showcasing his completed projects and top-tier skills in frontend development. Hire me to build your next site.",
    },
  ];
}

export default function Home() {
  return <></>;
}
