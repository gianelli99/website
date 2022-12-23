import type { projects } from "~/data/projects";

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
      {/* {project.technologies.map((tech) => (
        <TechDescription key={tech.id} tech={tech} />
      ))} */}
    </div>
  );
};

interface TechDescriptionProps {
  tech: Omit<typeof projects[number]["technologies"][number], "id">;
}

const TechDescription = ({ tech }: TechDescriptionProps) => {
  return <div>{tech.name}</div>;
};

const ExternalLink = ({ to }: { to: string }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer" className="h-4 w-4">
      <img src="/images/external-link.svg" alt="External link icon" />
    </a>
  );
};
