import type { LinksFunction, MetaFunction } from "@vercel/remix";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { copy } from "./data/copy";
import { socialMedia } from "./data/socialMedia";

import "./tailwind.css";

// All routes will be rendered using Edge runtime
export const config = { runtime: "edge" };

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
    },
  ];
};

export const meta: MetaFunction = () => {
  return [
    {
      title: `${copy.fullName} - ${copy.degree}.`,
    },
    {
      charSet: "utf-8",
    },
    {
      name: "keywords",
      content: copy.keywords.join(", "),
    },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
    {
      name: "description",
      content: copy.catchPhrase,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: socialMedia.website.url,
    },
    {
      property: "og:title",
      content: `${copy.fullName} - ${copy.degree}.`,
    },
    {
      property: "og:site_name",
      content: `${copy.fullName} - ${copy.degree}.`,
    },
    {
      property: "og:description",
      content: copy.catchPhrase,
    },
    {
      property: "og:image",
      content: socialMedia.website.ogImage,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: socialMedia.twitter.id,
    },
    {
      name: "twitter:site",
      content: socialMedia.twitter.id,
    },
    {
      name: "twitter:title",
      content: `${copy.fullName} - ${copy.degree}.`,
    },
    {
      name: "twitter:description",
      content: copy.catchPhrase,
    },
    {
      name: "twitter:image",
      content: socialMedia.website.ogImage,
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-full text-gray-900">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-full antialiased bg-gradient-to-br from-platinatepurple/30 via-maroon/30 to-mellowapricot/30">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-2xl px-2">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
