import type { LinksFunction } from "@remix-run/node";
import type { projects } from "~/data/projects";

const EXTERNAL_LINK_IMG_URL = "/images/external-link.svg";

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: EXTERNAL_LINK_IMG_URL,
      as: "image",
    },
  ];
};

interface ProjectCardProps {
  project: Omit<typeof projects[number], "id">;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-full p-6 rounded-md bg-maroon-50/20 border border-maroon/10">
      <div className="flex justify-between">
        <span className="text-gray-700 font-bold text-sm">
          #{project.category}
        </span>
        <ExternalLink to={project.link} />
      </div>
      <h3 className="font-bold tracking-tight text-2xl mb-4">
        {project.title}
      </h3>
      <p>{project.description.short}</p>
    </div>
  );
};

const ExternalLink = ({ to }: { to: string }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer" className="h-4 w-4">
      <img src={EXTERNAL_LINK_IMG_URL} alt="External link icon" />
    </a>
  );
};
