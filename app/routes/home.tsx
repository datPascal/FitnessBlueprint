import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useUser } from "~/utils";
import { Form, Link, Outlet } from "@remix-run/react";
import { requireUserId } from "~/session.server";
import { useState, useEffect } from "react";

export async function loader ({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  return json({ userId });
};

export const meta: MetaFunction = () => {
  return { title: "SQLthroughAI Homescreen SQL Generator" };
};

export default function Home() { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useUser();

    useEffect(() => {
        // close the menu if the user clicks outside of it
        const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as HTMLElement;
          if (target.closest("#logo-sidebar") === null) {
            setIsMenuOpen(false);
          }
        };
        
        if (isMenuOpen) {
          document.addEventListener("click", handleClickOutside);
        }
        
        // add a click listener to each button in the menu to close the menu
        const menuButtons = document.querySelectorAll("#logo-sidebar button, #logo-sidebar a");
        menuButtons.forEach((button) => {
          button.addEventListener("click", () => setIsMenuOpen(false));
        });
        
        // clean up the event listeners when the component unmounts
        return () => {
          document.removeEventListener("click", handleClickOutside);
          menuButtons.forEach((button) => {
            button.removeEventListener("click", () => setIsMenuOpen(false));
          });
        };
      }, [isMenuOpen]);

      const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return (

<div>
    <button onClick={handleMenuClick} aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
    </button>

    <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isMenuOpen ? '' : '-translate-x-full sm:translate-x-0'}`} aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <Link to="/Home" className="flex items-center pl-2.5 mb-5">
            <img  src={require("./../assets/fav_fitness_blueprint.png")} className="h-8 mr-3 sm:h-8" alt="Fitness Blueprint Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Fitness Blueprint</span>
        </Link>
        <ul className="space-y-2 font-medium">
            
            <Link to="/Home/Queries" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ">
              <img src={require("../assets/databaseIcon.svg")} alt="new Queries Icon SQLthroughAI SQL Generator" aria-hidden="true" className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
                <span className="ml-3">New Query</span>
            </Link>
            

            <li>
                <a href="https://billing.stripe.com/p/login/bIYbLU6vXaGf4PS9AA" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <svg aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Billing</span>
                </a>
            </li>
            <li>
                <Form
                    action="/logout"
                    method="post"
                    className="flex items-center p-2 text-gray-900 rounded-lg   hover:bg-gray-100"
                    >
                    <button type="submit" className="flex items-center text-gray-900   hover:bg-gray-100 ">
                    <svg aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                    </button>
                </Form>
            </li>
        </ul>
    </div>
    </aside>

    <div className="pl-4 pr-4 sm:ml-64">
    <Outlet/>
    </div>

</div>

            
    );
}