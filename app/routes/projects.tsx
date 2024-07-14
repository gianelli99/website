import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProjectCard } from "~/components/ProjectCard";
import { projects } from "~/data/projects";

export const loader = () => {
  return json({
    projects,
  });
};

export default function ProjectsPage() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <section>
      <h1 className="text-2xl mb-3">All my projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
