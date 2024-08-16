import type { projects } from "~/data/projects";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import React from "react";

interface ProjectCardProps {
  project: Omit<(typeof projects)[number], "id">;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-full p-5 rounded-md bg-maroon-50/20 border border-maroon/10">
      <div className="flex justify-between">
        <span className="text-gray-700 font-bold text-sm">
          #{project.category}
        </span>
        <ExternalLink
          to={project.link}
          ariaLabel={`Read more about "${project.title}"`}
        />
      </div>
      <p className="font-bold tracking-tight text-2xl mb-4">{project.title}</p>
      <p>{project.description.short}</p>
    </div>
  );
};

const ExternalLink = ({
  to,
  ariaLabel,
}: {
  to: string;
  ariaLabel: React.AriaAttributes["aria-label"];
}) => {
  return (
    <a href={to} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
      <ExternalLinkIcon />
    </a>
  );
};
