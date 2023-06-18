import { CaretDownIcon } from "@radix-ui/react-icons";
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

  return (
    <NavigationMenu.Root className="py-6 px-2 max-w-2xl mx-auto items-center">
      <NavigationMenu.List className="flex flex-wrap flex-col sm:flex-row">
        {links.map(({ content, to }) => (
          <NavigationMenu.Item key={to}>
            <NavigationMenu.Link asChild>
              <NavLink
                to={to}
                className={`aria-[current]:underline px-3 py-1 pb-[6px] text-gray-800 hover:bg-maroon-50/20 rounded block`}
              >
                {content}
              </NavLink>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}

        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="inline-flex w-full justify-center items-center rounded-md border-maroon/10 border-2 px-2 pb-1 pt-[2px] hover:bg-maroon-50/20">
            Resume <CaretDownIcon aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="absolute right-0 left-0 rounded p-2 mt-1 bg-white">
              <li>
                <NavigationMenu.Link
                  href="images/cv/Gianfranco Elli - Resume.pdf"
                  className="block p-2 hover:bg-maroon-50 rounded"
                  download
                >
                  English
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link
                  href="images/cv/Gianfranco Elli - Curriculum Vitae.pdf"
                  className="block p-2 hover:bg-maroon-50 rounded"
                  download
                >
                  Spanish
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
