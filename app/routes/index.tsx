import type { LinksFunction } from "@remix-run/node";
import { NavBar } from "~/components/NavBar";
import {
  PersonalInfoCard,
  links as personalInfoCardLinks,
} from "~/components/PersonalInfo";

export const links: LinksFunction = () => {
  return [...personalInfoCardLinks()];
};

export default function Index() {
  return (
    <div className="max-w-2xl mx-auto">
      <NavBar />
      <main>
        <PersonalInfoCard />
        <div>Blogs</div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
