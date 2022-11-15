import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "Gianfranco Elli - Software developer.",
  description:
    "I love spending time looking 'underneath the hood' to understand the magic behind the scenes.",
  "og:type": "website",
  "og:url": "https://gianelli.vercel.app/",
  "og:title": "Gianfranco Elli - Software developer.",
  "og:description":
    "I love spending time looking 'underneath the hood' to understand the magic behind the scenes.",
  "og:image": "https://gianelli.vercel.app/images/og-image.png",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@GianElli99",
  "twitter:url": "https://gianelli.vercel.app",
  "twitter:title": "Gianfranco Elli - Software developer.",
  "twitter:description":
    "I love spending time looking 'underneath the hood' to understand the magic behind the scenes.",
  "twitter:image": "https://gianelli.vercel.app/images/og-image.png",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
