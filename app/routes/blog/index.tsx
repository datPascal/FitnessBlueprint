import type { MetaFunction, ActionFunction} from "@remix-run/node";
import { Link, Form } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { getBlogposts } from "~/models/blog.server";
import HEADLINE from "../../components/headline"
import { createMailListEntry } from "~/models/mailList.server";
import { useState, useEffect } from 'react';



export const meta: MetaFunction = () => {
    return { 
        title: "Fitness Blueprint | Blog", 
        description: "See useful articles about what matters"
    };
  };

export async function loader() {
    const data = await getBlogposts()
    return data
};

export let action: ActionFunction = async ({ request }) => {
    let formData = await request.formData();
    let mail = formData.get("email");

    let data = await createMailListEntry({mail})
    console.log("MAILRESPONSE", data)
    return ""
}

export default function App() {
    const loaderData = useLoaderData<typeof loader>();
    const [showButton, setShowButton] = useState(true); 
    const [seconds, setSeconds] = useState(0);
  
    // add the following useEffect
    useEffect(() => {
        setShowButton(false);

        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setShowButton(true);
        }
    }, [seconds]);

    return(
        <div>
            <HEADLINE h1="Up to Date Knowledge about Fitness and Health" p="Find out whats good for you."/>
            <div className="mb-4"></div>
            {loaderData.map((Blog) => (
                <div className="card lg:card-side bg-base-100 shadow-xl mb-8">
                    <figure><img className="object-cover w-full aspect-square rounded-2xl h-96 md:h-auto md:w-48" src={Blog.img} alt={Blog.img_url}/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{Blog.title}</h2>
                        <p>{Blog.description}</p>
                        <div className="card-actions justify-end">
                        <Link to={`/Blog/${Blog.url}`} className="btn btn-primary">Open</Link>
                        </div>
                    </div>
                </div>
            ))}

            <div className="bg-white ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Sign up and get notified when we Launch!</h2>
                        <p className="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl">Our first Feature will be highly personalized Fitnessplans</p>
                        <Form method="post">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label className="hidden mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                        </svg>
                                    </div>
                                    <input className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" type="email" name="email" id="email"/>
                                </div>
                                <div>
                                {showButton ? <button type="submit" className="btn btn-secondary" onClick={() => setSeconds(3)} >Notify me</button> : <div className="btn btn-secondary">See ya! 💪🏽</div> }
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer ">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 hover:underline">Read our Privacy Policy</a>.</div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
          
    );
}