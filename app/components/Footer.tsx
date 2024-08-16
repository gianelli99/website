export const Footer = () => {
  return (
    <footer className="max-w-2xl mx-auto mt-10">
      <hr className="border-1 border-maroon/10" />
      <ul className="flex flex-wrap gap-10 justify-center mt-8 font-semibold">
        <li>
          <a
            href="https://www.linkedin.com/in/gianfranco-elli/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/gianelli99"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCNmC-Neef4J7D7_8KiISQ0w"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            YouTube
          </a>
        </li>
        <li>
          <a href="mailto:gianelli99@hotmail.com" className="hover:underline">
            Email
          </a>
        </li>
      </ul>
      <p className="my-8 text-center">
        Made with love ❤. I took inspiration from{" "}
        <a
          href="https://leerob.io/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-800 hover:underline"
        >
          Lee Robinson
        </a>{" "}
        and{" "}
        <a
          href="https://www.lydiahallie.io/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-800 hover:underline"
        >
          Lydia Hallie
        </a>
        &apos;s personal sites.
      </p>
    </footer>
  );
};
