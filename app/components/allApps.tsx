import { Link } from "@remix-run/react";

export default function AllApps({Apps}) {
    return(
        
            <div className="container flex-grow grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-h-full gap-8 pb-8">
                {Apps.map((App) => (
                    <div key={App.id} className="card w-96 h-32 ">
                        <div className="card-body">
                            <div className="flex flex-row items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d={App.svg}/></svg>                                
                                <Link to={App.url}>
                                    <h2 className="card-title relative group">
                                        <span>{App.title}</span>
                                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all rounded group-hover:w-full"></span>
                                    </h2>
                                </Link>
                            </div>
                            <p className="pl-8">{App.description}</p>
                        </div>
                    </div>
                ))}
            </div>
    );
}

