import HEADER from "../components/header";
import FOOTER from "../components/footer";
import ALLAPPS from "../components/allApps";
import HEADLINE from "../components/headline";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { App, getApps } from "~/models/apps.server";

type LoaderData = {
  Apps: App[];
};

export async function loader () {
  const Apps = await getApps();
  console.log("apps", Apps)
  return json({ Apps });
};

export default function Index() {
  const data = useLoaderData<typeof loader>() as LoaderData;


  return (
    
    <main className="flex flex-col h-screen">
      <HEADER />
      <HEADLINE h1="One Place, All Fitness" p="Bundeled Knowledge bundeled with AI to get you to your goals."></HEADLINE>
      <FOOTER />
    </main>
  );
}