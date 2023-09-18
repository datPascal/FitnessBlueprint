import FOOTER from "./../components/footer";
import HEADER from "./../components/header";
import HEADLINE from "./../components/headline";
import { Outlet } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return { 
        title: "Fitness Blueprint | Blog", 
        description: "See useful articles about what matters"
    };
  };

export default function App() {


    return(
        <div className="flex flex-col">
            <HEADER />
            <div className="container flex-grow">
                <HEADLINE h1="Blog Page" p="Currently in development"></HEADLINE>
                <Outlet/>
            </div>
            <FOOTER />   
        </div>
    );
}