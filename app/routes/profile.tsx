import { Outlet } from "@remix-run/react";
import FOOTER from "../components/footer";
import HEADER from "../components/header";
import HEADLINE from "../components/headline";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return { 
        title: "Solopreneur Pro Tools | Profile Menu", 
        description: "Edit your Profile"
    };
  };

export default function App() {


    return(
        <div className="flex flex-col h-screen">
            <HEADER />
            <div className="container flex-grow overflow-auto">
                <HEADLINE h1="Profile Page" p="Currently in development"></HEADLINE>
                <Outlet></Outlet>
            </div>
            <FOOTER />   
        </div>
    );
}