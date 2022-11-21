import type { LinksFunction } from "@remix-run/node";
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
      <main>
        <PersonalInfoCard />
        <div>Favorite Projects</div>
      </main>
    </div>
  );
}
