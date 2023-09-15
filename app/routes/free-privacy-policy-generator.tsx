import { Outlet } from "@remix-run/react";
import FOOTER from "../components/footer";
import HEADER from "../components/header";
import HEADLINE from "../components/headline";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return { 
        title: "Solopreneur Pro Tools | Free Privacy Police Generator", 
        description: "It was never that easy to generate a free formatted Privacy Police."
    };
  };

export default function App() {


    return(
        <div className="flex flex-col h-screen">
            <HEADER />
            <div className="container flex-grow overflow-auto">
                <HEADLINE h1="Privacy Policy Generator" p="It was never that easy to generate a formatted Privacy Police."></HEADLINE>
                <Outlet></Outlet>
            </div>
            <FOOTER />   
        </div>
    );
}