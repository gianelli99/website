import { NavLink } from "@remix-run/react";

export const NavBar = () => {
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
    {
      to: "/blogs",
      content: "Blogs",
    },
    {
      to: "/summary",
      content: "Summary",
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
                } px-3 py-1 text-gray-800 hover:bg-maroon-50/20 rounded`
              }
            >
              {link.content}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
