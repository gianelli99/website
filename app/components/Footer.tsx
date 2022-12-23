export const Footer = () => {
  return (
    <footer className="max-w-2xl mx-auto mt-10">
      <hr className="border-1 border-maroon/10" />
      <p className="my-12 text-center">
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
        's personal sites.
      </p>
    </footer>
  );
};
