import { json } from "@vercel/remix";
import { useLoaderData } from "@remix-run/react";
import { WorkCard } from "~/components/WorkCard";
import { work } from "~/data/work";
import { mergeCacheHeaders } from "~/utils/mergeCacheHeaders";

export const loader = () => {
  return json(
    {
      work,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=1, stale-while-revalidate=2592000",
      },
    }
  );
};

export const headers = mergeCacheHeaders;

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
