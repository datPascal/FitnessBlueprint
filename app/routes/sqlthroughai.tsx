import { Outlet } from "@remix-run/react";
import FOOTER from "../components/footer";
import HEADER from "../components/header";
import HEADLINE from "../components/headline";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return { 
        title: "Solopreneur Pro Tools | API Sream", 
        description: "Teststuff"
    };
  };

export default function App() {


    return(
        <div className="flex flex-col h-screen">
            <HEADER />
            
            <HEADLINE h1="SQLthroughAI" p="The easiest way to build SQL Queries"></HEADLINE>
            <Outlet></Outlet>
            
            <FOOTER />   
        </div>
    );
}