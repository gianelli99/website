import type { projects } from "~/data/projects";

interface ProjectCardProps {
  project: Omit<typeof projects[number], "id">;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-full h-44 rounded-md bg-maroon-50/20 border border-maroon/10">
      <span>{project.category}</span>
      <h3>{project.title}</h3>
      {project.technologies.map((tech) => (
        <TechDescription key={tech.id} tech={tech} />
      ))}
    </div>
  );
};

interface TechDescriptionProps {
  tech: Omit<typeof projects[number]["technologies"][number], "id">;
}

const TechDescription = ({ tech }: TechDescriptionProps) => {
  return <div>{tech.name}</div>;
};
