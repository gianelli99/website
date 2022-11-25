import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  PersonalInfoCard,
  links as personalInfoCardLinks,
} from "~/components/PersonalInfo";
import { ProjectCard } from "~/components/ProjectCard";
import { projects } from "~/data/projects";

export const links: LinksFunction = () => {
  return [...personalInfoCardLinks()];
};

export const loader = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  return json({
    projects: featuredProjects,
  });
};

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <>
      <PersonalInfoCard />
      <section className="pt-12">
        <h2 className="text-2xl mb-3">Favorite Projects</h2>
        <div className="flex gap-3 flex-wrap">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
