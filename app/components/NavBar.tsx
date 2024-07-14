import { DownloadIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
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
  ];

  const linkClassNames =
    "aria-[current]:underline px-3 py-1 pb-[6px] text-gray-800 hover:bg-maroon-50/20 rounded block";

  return (
    <NavigationMenu.Root className="py-6 px-2 max-w-2xl mx-auto items-center">
      <NavigationMenu.List className="flex flex-wrap flex-col sm:flex-row">
        {links.map(({ content, to }) => (
          <NavigationMenu.Item key={to}>
            <NavigationMenu.Link asChild>
              <NavLink to={to} className={linkClassNames}>
                {content}
              </NavLink>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="images/cv/Gianfranco Elli - Resume.pdf"
            className={linkClassNames + " flex items-center gap-1"}
            download
          >
            Resume
            <DownloadIcon />
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
