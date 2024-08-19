import { json, type LinksFunction } from "@vercel/remix";
import { useLoaderData } from "@remix-run/react";
import {
  PersonalInfoCard,
  links as personalInfoCardLinks,
} from "~/components/PersonalInfo";
import { ProjectCard } from "~/components/ProjectCard";
import { projects } from "~/data/projects";
import { mergeCacheHeaders } from "~/utils/mergeCacheHeaders";

export const links: LinksFunction = () => {
  return [...personalInfoCardLinks()];
};

export const loader = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return json(
    {
      projects: featuredProjects,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=1, stale-while-revalidate=2592000",
      },
    }
  );
};

export const headers = mergeCacheHeaders;

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <>
      <PersonalInfoCard />
      <section className="pt-12">
        <h2 className="text-2xl mb-3">Favorite projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
