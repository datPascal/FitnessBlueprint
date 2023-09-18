import FOOTER from "../../components/footer";
import HEADER from "../../components/header";
import HEADLINE from "../../components/headline";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return { 
        title: "Fitness Blueprint | Blog", 
        description: "See useful articles about what matters"
    };
  };

export default function App() {


    return(
        
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="object-cover w-full aspect-square rounded-2xl h-96 md:h-auto md:w-48" src="https://images.pexels.com/photos/4793258/pexels-photo-4793258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
          
    );
}