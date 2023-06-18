import type { work } from "~/data/work";

interface WorkCardProps {
  work: Omit<typeof work[number], "id">;
}

export const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <div className="mb-6 p-6 rounded-md bg-maroon-50/20 border border-maroon/10">
      <a href={work.link} target="_blank" className="flex max-h-16" rel="noreferrer">
        <img
          className="object-contain object-left"
          height={work.logo.height}
          width={work.logo.width}
          src={work.logo.url}
          alt={`${work.company} logo`}
        />
      </a>
      <p className="text-gray-600 text-xs mt-4">
        FROM {work.date.from.toUpperCase()} TO {work.date.to.toUpperCase()}
      </p>
      <p className="font-bold text-lg">{work.role}</p>
      <p className="mt-4">{work.description}</p>
      <ul className="list-disc list-inside mt-2">
        {work.keyAchivements.map((achivement, idx) => (
          <li key={idx}>{achivement}</li>
        ))}
      </ul>
    </div>
  );
};
