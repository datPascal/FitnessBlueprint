import { Outlet } from "@remix-run/react";
import FOOTER from "../components/footer";
import HEADER from "../components/header";
import HEADLINE from "../components/headline";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return { 
        title: "Solopreneur Pro Tools | Daisy UI Form Generator",
        description: "It was never that easy to generate Forms using DaisyUI & TailwindCSS"
    };
  };

export default function App() {


    return(
        <div className="flex flex-col h-screen">
            <HEADER />
                <HEADLINE h1="Easy Form Generation" p="Using DaisyUI & TailwindCSS"></HEADLINE>
                <Outlet></Outlet>
            <FOOTER />   
        </div>
    );
}