import type { LinksFunction } from "@remix-run/node";
import { PersonalInfoCard } from "~/components/PersonalInfo";

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

export default function Index() {
  return (
    <div className="max-w-2xl mx-auto">
      <nav>Navbar</nav>
      <main>
        <PersonalInfoCard image={FACE_URL} />
        <div>Blogs</div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
