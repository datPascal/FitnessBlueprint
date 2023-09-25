import { Form, Link } from "@remix-run/react";
import { useOptionalUser } from '~/utils';

export default function HEADER() {
  const user = useOptionalUser();

  return (
    <div>
      <div className="container navbar space-x-4 pl-4 pr-4 sm:justify-between sm:space-x-0">
        <div className="">
          <div className="px-2 mx-2 flex">
            <div className="flex items-center">
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
                         
              <div className="hidden lg:block">
                <div className="flex items-center">
                  <div className="divider divider-horizontal"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="navbar-end">

          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {user ? (
                <>
                <Link to="/profile"><li><a>Profile</a></li></Link>
                <Form action="/logout" method="post"><button type="submit"><li><a>Logout</a></li></button></Form>
                </>
              ) : (
                <>
                <Link to="/join"><li><a>Try it out for free</a></li></Link>
                <Link to="/login"><li><a>Log In</a></li></Link>
                </>
              )}
            </ul>
          </div>

          <div className="hidden md:block">
          {user ? (
            <>
              <Link to="/profile" className="btn btn-ghost btn-sm rounded-btn">
                Profile
              </Link>

              <Form action="/logout" method="post">
                <button type="submit" className="btn btn-ghost btn-sm rounded-btn">
                  Logout
                </button>
              </Form>
            </>
          ) : (
            <>
            <Link to="/join" className="btn btn-primary btn-sm rounded-btn mr-4">
              Try it out for free
            </Link>
            <Link to="/login" className="btn btn-ghost btn-sm rounded-btn">
              Log In
            </Link>
            </>
          )}
          </div>
        </div>
      </div>
      <div className="divider mt-0 mb-0 "></div>

    </div>
  );
};

