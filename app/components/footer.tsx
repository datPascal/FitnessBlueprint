import { Link } from "@remix-run/react";
import { useOptionalUser } from '~/utils';


const FOOTER = () => {
  const user = useOptionalUser();


    return (
      <div className="footer-wrapper transform p-4 w-full">
      <div className="divider mt-0 mb-0"></div>
      <footer className="footer footer-center p-4 text-base-content rounded">

        <nav className="grid grid-flow-col gap-4">
          <Link to="./privacy"><a>Privacy</a></Link>
          <Link to="./blog"><a>Blog</a></Link>
        </nav>

        <nav className="grid grid-flow-col gap-4">
          <a href='https://twitter.com/SolopreneurTool'><p className="text-3xl">𝕏</p></a> 
        </nav>

        <aside>
            {user ? (
               <Link to="/Home" className="flex">
               <img  src={require("./../assets/fav_fitness_blueprint.png")} className="h-8 mr-3 sm:h-8" alt="Fitness Blueprint Logo" />
               <span className="text-2xl font-bold">Fitness Blueprint</span>
             </Link>  
            ) : (
              <Link to="/" className="flex">
                <img  src={require("./../assets/fav_fitness_blueprint.png")} className="h-8 mr-3 sm:h-8" alt="Fitness Blueprint Logo" />
                <span className="text-2xl font-bold">Fitness Blueprint</span>
            </Link>  
            )} 
        </aside>
          
      </footer>
    </div>      
    );
  };
  
  export default FOOTER;
  










