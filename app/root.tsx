import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "Gianfranco Elli - Software Developer.",
  description:
    "I love spending time looking 'underneath the hood' to understand the magic behind the scenes.",
  keywords: "Personal website, Portfolio",
  "og:type": "website",
  "og:url": "https://gianelli.vercel.app/",
  "og:title": "Gianfranco Elli - Software Developer.",
  "og:site_name": "Gianfranco Elli - Software Developer.",
  "og:description":
    "I love spending time looking 'underneath the hood' to understand the magic behind the scenes.",
  "og:image": "https://gianelli.vercel.app/images/og-image.png",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@GianElli99",
  "twitter:site": "@GianElli99",
  "twitter:title": "Gianfranco Elli - Software Developer.",
  "twitter:description":
    "I love spending time looking 'underneath the hood' to understand the magic behind the scenes.",
  "twitter:image": "https://gianelli.vercel.app/images/og-image.png",
});

export default function App() {
  return (
    <html lang="en" className="min-h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-full bg-gradient-to-br from-platinatepurple/30 via-maroon/30 to-mellowapricot/30">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
