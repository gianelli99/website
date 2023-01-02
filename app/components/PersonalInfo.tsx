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
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center p-4 border border-maroon/10 shadow-lg rounded-lg transition ease-out bg-gradient-to-br from-platinatepurple/50 via-maroon/50 to-mellowapricot/50 hover:scale-[1.02]">
      <div className="sm:mr-8">
        <h1 className="font-bold tracking-tight text-3xl sm:text-5xl">
          {copy.fullName}
        </h1>
        <p className="mb-4">{copy.degree}</p>
        <p className="mb-4">{copy.catchPhrase}</p>
      </div>
      <div className="hidden sm:block w-48">
        <img
          width="128"
          height="128"
          src={FACE_URL}
          alt={copy.fullName}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
