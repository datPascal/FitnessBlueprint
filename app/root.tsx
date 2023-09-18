import type {
  LinksFunction,
  LoaderArgs,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import ReactGA from 'react-ga4';
import { useEffect } from 'react';


import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";

export const meta: MetaFunction = () => {
  return { title: "Solopreneur Pro Tools | Tool Overview" };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
};
ReactGA.initialize('G-W1892Y1B4T');
ReactGA.send('/LandingPage');

export default function App() {

  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="google-site-verification" content="BJz9rJ2jKLobjJkUw46f1bjt1eROoxkO38DohsanMgY" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full" data-theme="light">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
