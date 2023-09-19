import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { getBlogposts } from "~/models/blog.server";
import HEADLINE from "../../components/headline"


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

export default function App() {
    const loaderData = useLoaderData<typeof loader>();
    console.log(loaderData)

    return(
        <div>
            <HEADLINE h1="Up to Date Knowledge about Fitness and Health" p="find out whats good for you."/>
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
        </div>
          
    );
}