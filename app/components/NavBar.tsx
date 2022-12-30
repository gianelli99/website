import { NavLink } from "@remix-run/react";
import { useState } from "react";

export const NavBar = () => {
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const links = [
    {
      to: "/",
      content: "Home",
    },
    {
      to: "/projects",
      content: "Projects",
    },
    {
      to: "/work",
      content: "Work",
    },
  ];

  return (
    <nav className="py-6 max-w-2xl mx-auto flex items-center">
      <ul className="flex flex-wrap">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              prefetch="intent"
              className={({ isActive }) =>
                `${
                  isActive ? "font-semibold" : "font-normal"
                } px-3 py-1 text-gray-800 hover:bg-maroon-50/20 rounded block`
              }
            >
              {link.content}
            </NavLink>
          </li>
        ))}
        <li className="relative">
          <button
            className="inline-flex w-full justify-center items-center rounded-md border-maroon/10 border-2 px-2 pb-1 pt-[2px] hover:bg-maroon-50/20"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setShowResumeOptions(!showResumeOptions)}
          >
            Resume
            <svg
              className="-mr-1 ml-2 mt-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          {showResumeOptions && (
            <div
              className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <a
                href="images/cv/Gianfranco Elli - Resume.pdf"
                download
                className="block p-2 hover:bg-maroon-50/20"
              >
                English
              </a>
              <a
                href="images/cv/Gianfranco Elli - Curriculum Vitae.pdf"
                download
                className="block p-2 hover:bg-maroon-50/20"
              >
                Spanish
              </a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
