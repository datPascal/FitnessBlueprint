import { Form, Link } from "@remix-run/react";
import { useOptionalUser } from '~/utils';

export default function HEADER() {
  const user = useOptionalUser();

  return (
    <div>
      <div className="container navbar space-x-4 pl-4 pr-4 sm:justify-between sm:space-x-0">
        <div className="navbar-start">
          <div className="px-2 mx-2 navbar-start">
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
      <div className="divider mt-0 mb-0 "></div>

    </div>
  );
};

