import { json } from "@vercel/remix";
import { useLoaderData } from "@remix-run/react";
import { WorkCard } from "~/components/WorkCard";
import { work } from "~/data/work";

export const loader = () => {
  return json({
    work,
  });
};

export default function WorkPage() {
  const { work } = useLoaderData<typeof loader>();

  return (
    <section>
      <h1 className="text-2xl mb-3">Work experience</h1>
      <div>
        {work.map((w) => (
          <WorkCard key={w.id} work={w} />
        ))}
      </div>
    </section>
  );
}
