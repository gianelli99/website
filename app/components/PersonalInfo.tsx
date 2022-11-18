import type { LinksFunction } from "@remix-run/node";

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
    <div className="flex justify-between items-center border border-maroon/10 shadow-lg rounded-lg p-4 ease-out duration-300 transition hover:scale-110 hover:text-white hover:bg-gradient-to-br from-platinatepurple via-maroon to-mellowapricot group">
      <div className="mr-8">
        <h1 className="font-bold tracking-tight text-5xl mb-2 group-hover:text-white">
          Gianfranco Elli
        </h1>
        <p className="text-gray-800 mb-4 group-hover:text-white">
          Software Developer.
        </p>
        <p className="text-gray-800 mb-4 group-hover:text-white">
          I love spending time looking 'underneath the hood' to understand the
          magic behind the scenes.
        </p>
      </div>
      <img
        width="128"
        height="128"
        src={FACE_URL}
        alt="Gianfranco Elli"
        className="rounded-full h-32 w-32"
      />
    </div>
  );
};
