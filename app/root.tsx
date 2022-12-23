import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { copy } from "./data/copy";
import { socialMedia } from "./data/socialMedia";

import styles from "./styles/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: `${copy.fullName} - ${copy.degree}.`,
  description: copy.catchPhrase,
  keywords: copy.keywords.join(", "),
  "og:type": "website",
  "og:url": socialMedia.website.url,
  "og:title": `${copy.fullName} - ${copy.degree}.`,
  "og:site_name": `${copy.fullName} - ${copy.degree}.`,
  "og:description": copy.catchPhrase,
  "og:image": socialMedia.website.ogImage,
  "twitter:card": "summary_large_image",
  "twitter:creator": socialMedia.twitter.id,
  "twitter:site": socialMedia.twitter.id,
  "twitter:title": `${copy.fullName} - ${copy.degree}.`,
  "twitter:description": copy.catchPhrase,
  "twitter:image": socialMedia.website.ogImage,
});

export default function App() {
  return (
    <html lang="en" className="min-h-full text-gray-900">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-full antialiased bg-gradient-to-br from-platinatepurple/30 via-maroon/30 to-mellowapricot/30">
        <NavBar />
        <main className="mx-auto max-w-2xl px-2">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
