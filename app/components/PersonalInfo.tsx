import type { LinksFunction } from "@remix-run/node";
import { copy } from "~/data/copy";

const FACE_URL = "/images/my-face.jpeg";

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: FACE_URL,
      as: "image",
    },
  ];
};

export const PersonalInfoCard = () => {
  return (
    <div className="flex justify-between items-center p-4 border border-maroon/10 shadow-lg rounded-lg transition ease-out bg-gradient-to-br from-platinatepurple/30 via-maroon/30 to-mellowapricot/30 hover:scale-[1.02]">
      <div className="mr-8">
        <h1 className="font-bold tracking-tight text-5xl mb-2 ease-in transition">
          {copy.fullName}
        </h1>
        <p className="text-gray-800 mb-4">{copy.degree}.</p>
        <p className="text-gray-800 mb-4">{copy.catchPhrase}</p>
      </div>
      <img
        width="128"
        height="128"
        src={FACE_URL}
        alt={copy.fullName}
        className="rounded-full h-32 w-32"
      />
    </div>
  );
};
