import type { work } from "~/data/work";

interface WorkCardProps {
  work: Omit<typeof work[number], "id">;
}

export const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <div className="mb-6 p-6 rounded-md bg-maroon-50/20 border border-maroon/10">
      <img src={work.companyLogo} alt={`${work.company} logo`} />
      <p>{work.company}</p>
      <p>
        From {work.date.from} to {work.date.to}
      </p>
      <p>{work.role}</p>
      <ul className="list-disc list-inside">
        {work.keyAchivements.map((achivement, idx) => (
          <li key={idx}>{achivement}</li>
        ))}
      </ul>
    </div>
  );
};
