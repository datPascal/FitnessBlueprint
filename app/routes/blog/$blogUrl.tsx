import JsxRenderer from "../../components/jsxRenderer";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getBlogpost } from "~/models/blog.server";
import { Link } from "@remix-run/react";
import HEADLINE from "../../components/headline"


type LoaderData = {
    params: object
  };

export const meta: MetaFunction = () => {
    return { 
        title: "Fitness Blueprint | Blog", 
        description: "See useful articles about what matters"
    };
  };

export async function loader({ params } : LoaderData) {  
    invariant(params.blogUrl, "url not found");

    let url = params.blogUrl
    const data = await getBlogpost({url})
    return data
}

export default function blogUrl() {
    const loaderData = useLoaderData<typeof loader>();
    console.log(loaderData)
  
    return (
        <>
        <div className="w-full"><Link to="/Blog" className="btn">Get Back</Link></div>
        <HEADLINE h1={loaderData.title} p={loaderData.description}/>

        <article className="prose max-w-[1400px] mr-auto ml-auto pb-4">
            <JsxRenderer jsxString={loaderData.blogpost}></JsxRenderer>
        </article>
        </>
    );
  };
  



